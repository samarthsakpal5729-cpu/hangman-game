#define WIN32_LEAN_AND_MEAN
#include <winsock2.h>
#include <windows.h>
#include <direct.h>

#include <algorithm>
#include <cctype>
#include <fstream>
#include <iostream>
#include <map>
#include <sstream>
#include <string>
#include <vector>

#include "game.h"
#include "player.h"

#pragma comment(lib, "ws2_32.lib")

using namespace std;

extern const char* PROJECT_INDEX_PLACEHOLDER;

static Game game;

static string urlDecode(const string& input) {
    string output;

    for (size_t i = 0; i < input.size(); ++i) {
        if (input[i] == '+') {
            output += ' ';
        }
        else if (input[i] == '%' && i + 2 < input.size()) {
            string hex = input.substr(i + 1, 2);
            output += (char)strtol(hex.c_str(), NULL, 16);
            i += 2;
        }
        else {
            output += input[i];
        }
    }

    return output;
}

static map<string,string> parseForm(const string& body) {
    map<string,string> data;
    string part;
    stringstream stream(body);

    while (getline(stream, part, '&')) {
        size_t pos = part.find('=');

        if (pos == string::npos)
            data[urlDecode(part)] = "";
        else
            data[urlDecode(part.substr(0,pos))] =
                urlDecode(part.substr(pos+1));
    }

    return data;
}

static string jsonEscape(const string& input) {
    string output;

    for (size_t i = 0; i < input.size(); ++i) {
        char c = input[i];

        if (c == '\\') output += "\\\\";
        else if (c == '"') output += "\\\"";
        else if (c == '\n') output += "\\n";
        else if (c == '\r') output += "\\r";
        else if (c == '\t') output += "\\t";
        else output += c;
    }

    return output;
}

static string lettersJson(const vector<char>& letters) {
    string result = "[";

    for (size_t i = 0; i < letters.size(); ++i) {
        if (i) result += ",";

        result += "\"";
        result += letters[i];
        result += "\"";
    }

    result += "]";

    return result;
}

static string mimeType(const string& path) {
    size_t dot = path.rfind('.');

    if (dot == string::npos)
        return "application/octet-stream";

    string ext = path.substr(dot);

    for (size_t i = 0; i < ext.size(); ++i)
        ext[i] = (char)tolower((unsigned char)ext[i]);

    if (ext == ".html") return "text/html; charset=utf-8";
    if (ext == ".css") return "text/css; charset=utf-8";
    if (ext == ".js") return "application/javascript; charset=utf-8";
    if (ext == ".png") return "image/png";
    if (ext == ".jpg" || ext == ".jpeg") return "image/jpeg";
    if (ext == ".gif") return "image/gif";
    if (ext == ".mp3") return "audio/mpeg";
    if (ext == ".wav") return "audio/wav";
    if (ext == ".mp4") return "video/mp4";

    return "application/octet-stream";
}

static bool sendAll(SOCKET socket,
                    const char* data,
                    int length) {
    int sent = 0;

    while (sent < length) {
        int count = send(socket,
                         data + sent,
                         length - sent,
                         0);

        if (count <= 0)
            return false;

        sent += count;
    }

    return true;
}

static void sendText(SOCKET client,
                      const string& body,
                      const string& type = "application/json; charset=utf-8",
                      int status = 200) {

    string statusText = status == 200
        ? "200 OK"
        : status == 404
            ? "404 Not Found"
            : "500 Internal Server Error";

    string header =
        "HTTP/1.1 " + statusText + "\r\n"
        "Content-Type: " + type + "\r\n"
        "Content-Length: " + to_string(body.size()) + "\r\n"
        "Cache-Control: no-cache\r\n"
        "Connection: close\r\n\r\n";

    sendAll(client, header.c_str(), (int)header.size());
    sendAll(client, body.c_str(), (int)body.size());
}

static bool sendFile(SOCKET client,
                     const string& fileName) {

    ifstream file(fileName.c_str(), ios::binary);

    if (!file) {
        sendText(client,
                 "File not found",
                 "text/plain; charset=utf-8",
                 404);
        return false;
    }

    file.seekg(0, ios::end);
    long long size = (long long)file.tellg();
    file.seekg(0, ios::beg);

    string header =
        "HTTP/1.1 200 OK\r\n"
        "Content-Type: " + mimeType(fileName) + "\r\n"
        "Content-Length: " + to_string(size) + "\r\n"
        "Cache-Control: public, max-age=3600\r\n"
        "Connection: close\r\n\r\n";

    if (!sendAll(client,
                 header.c_str(),
                 (int)header.size()))
        return false;

    char buffer[65536];

    while (file) {
        file.read(buffer, sizeof(buffer));
        streamsize count = file.gcount();

        if (count > 0) {
            if (!sendAll(client,
                         buffer,
                         (int)count))
                return false;
        }
    }

    return true;
}

static string stateJson() {
    Question question = game.currentQuestion();

    PlayerManager manager;
    int unlocked =
        manager.getUnlockedLevel(game.getPlayer(),
                                 game.getMode());

    string livesDisplay =
        game.getMode() == "PEACEFUL"
        ? "∞"
        : to_string(game.getLives());

    string json = "{";

    json += "\"player\":\"" +
            jsonEscape(game.getPlayer()) + "\",";

    json += "\"mode\":\"" +
            jsonEscape(game.getMode()) + "\",";

    json += "\"device\":\"" +
            jsonEscape(game.getDevice()) + "\",";

    json += "\"level\":" +
            to_string(game.getLevel()) + ",";

    json += "\"questionIndex\":" +
            to_string(game.getQuestionIndex()) + ",";

    json += "\"questionNumber\":" +
            to_string(game.getQuestionIndex() + 1) + ",";

    json += "\"score\":" +
            to_string(game.getScore()) + ",";

    json += "\"lives\":" +
            to_string(game.getLives()) + ",";

    json += "\"livesDisplay\":\"" +
            jsonEscape(livesDisplay) + "\",";

    json += "\"category\":\"" +
            jsonEscape(question.category) + "\",";

    json += "\"question\":\"" +
            jsonEscape(question.question) + "\",";

    json += "\"answer\":\"" +
            jsonEscape(question.answer) + "\",";

    json += "\"answerDisplay\":\"" +
            jsonEscape(game.answerDisplay()) + "\",";

    json += "\"hint\":\"" +
            jsonEscape(question.hint) + "\",";

    json += "\"wrongLetters\":" +
            lettersJson(game.getWrongLetters()) + ",";

    json += "\"unlockedLevel\":" +
            to_string(unlocked) + ",";

    json += "\"active\":" +
            string(game.isActive() ? "true" : "false") + ",";

    json += "\"levelComplete\":" +
            string(game.isLevelComplete() ? "true" : "false") + ",";

    json += "\"gameOver\":" +
            string(game.isGameOver() ? "true" : "false");

    json += "}";

    return json;
}

static void handleClient(SOCKET client) {

    string request;
    char buffer[8192];

    int received = recv(client,
                        buffer,
                        sizeof(buffer)-1,
                        0);

    if (received <= 0) {
        closesocket(client);
        return;
    }

    buffer[received] = '\0';
    request.assign(buffer, received);

    size_t headerEnd = request.find("\r\n\r\n");

    while (headerEnd == string::npos &&
           request.size() < 1024 * 1024) {

        received = recv(client,
                        buffer,
                        sizeof(buffer)-1,
                        0);

        if (received <= 0)
            break;

        buffer[received] = '\0';
        request.append(buffer, received);

        headerEnd = request.find("\r\n\r\n");
    }

    if (headerEnd == string::npos) {
        closesocket(client);
        return;
    }

    string headers = request.substr(0, headerEnd);
    string body = request.substr(headerEnd + 4);

    size_t firstSpace = headers.find(' ');
    size_t secondSpace =
        headers.find(' ', firstSpace + 1);

    if (firstSpace == string::npos ||
        secondSpace == string::npos) {
        closesocket(client);
        return;
    }

    string method =
        headers.substr(0, firstSpace);

    string target =
        headers.substr(firstSpace + 1,
                       secondSpace - firstSpace - 1);

    size_t contentLengthPos =
        headers.find("Content-Length:");

    int contentLength = 0;

    if (contentLengthPos != string::npos) {
        size_t start = contentLengthPos + 15;
        size_t end = headers.find("\r\n", start);

        string value =
            headers.substr(start,
                           end == string::npos
                           ? string::npos
                           : end - start);

        contentLength = atoi(value.c_str());
    }

    while ((int)body.size() < contentLength) {
        received = recv(client,
                        buffer,
                        sizeof(buffer),
                        0);

        if (received <= 0)
            break;

        body.append(buffer, received);
    }

    size_t query = target.find('?');

    if (query != string::npos)
        target = target.substr(0, query);

    // ---------------- API: STATE ----------------
    if (target == "/api/state" && method == "GET") {
        sendText(client, stateJson());
        closesocket(client);
        return;
    }

    // ---------------- API: PLAYER ----------------
    if (target == "/api/player" && method == "POST") {

        map<string,string> data = parseForm(body);

        string player =
            data.count("player")
            ? data["player"]
            : "Player";

        string device =
            data.count("device")
            ? data["device"]
            : "LAPTOP";

        PlayerManager manager;
        manager.getUnlockedLevel(player, "EASY");

        // Store basic profile in the current game.
        game.start(player, "EASY", device, 1);

        sendText(client, "{\"ok\":true}");
        closesocket(client);
        return;
    }

    // ---------------- API: MODE ----------------
    if (target == "/api/mode" && method == "POST") {

        map<string,string> data = parseForm(body);

        string player =
            data.count("player")
            ? data["player"]
            : game.getPlayer();

        string mode =
            data.count("mode")
            ? data["mode"]
            : "EASY";

        string device =
            data.count("device")
            ? data["device"]
            : game.getDevice();

        PlayerManager manager;

        int unlocked =
            manager.getUnlockedLevel(player, mode);

        string response =
            "{\"ok\":true,\"unlockedLevel\":" +
            to_string(unlocked) + "}";

        sendText(client, response);

        closesocket(client);
        return;
    }

    // ---------------- API: START ----------------
    if (target == "/api/start" && method == "POST") {

        map<string,string> data = parseForm(body);

        string player =
            data.count("player")
            ? data["player"]
            : "Player";

        string mode =
            data.count("mode")
            ? data["mode"]
            : "EASY";

        string device =
            data.count("device")
            ? data["device"]
            : "LAPTOP";

        int level =
            data.count("level")
            ? atoi(data["level"].c_str())
            : 1;

        PlayerManager manager;

        int unlocked =
            manager.getUnlockedLevel(player, mode);

        if (level > unlocked) {
            sendText(
                client,
                "{\"ok\":false,\"message\":\"Level is locked.\"}"
            );

            closesocket(client);
            return;
        }

        game.start(player,
                   mode,
                   device,
                   level);

        sendText(client, "{\"ok\":true}");

        closesocket(client);
        return;
    }

    // ---------------- API: GUESS ----------------
    if (target == "/api/guess" && method == "POST") {

        map<string,string> data = parseForm(body);

        if (!data.count("guess")) {
            sendText(
                client,
                "{\"result\":\"ERROR\",\"message\":\"Missing guess.\"}"
            );

            closesocket(client);
            return;
        }

        string result =
            game.processGuess(data["guess"]);

        string message;

        if (result == "CORRECT")
            message = "Correct!";
        else if (result == "WRONG")
            message = "Wrong guess.";
        else if (result == "ALREADY")
            message = "Already used.";
        else if (result == "LEVEL_COMPLETE")
            message = "Level complete!";
        else if (result == "GAME_OVER")
            message = "Game over.";
        else
            message = "Invalid action.";

        string response =
            "{\"result\":\"" +
            jsonEscape(result) +
            "\",\"message\":\"" +
            jsonEscape(message) +
            "\"}";

        sendText(client, response);

        closesocket(client);
        return;
    }

    // ---------------- STATIC FILES ----------------
    if (target == "/" ||
        target == "/index.html") {

        sendFile(client, "index.html");
        closesocket(client);
        return;
    }

    if (target == "/style.css") {
        sendFile(client, "style.css");
        closesocket(client);
        return;
    }

    if (target == "/script.js") {
        sendFile(client, "script.js");
        closesocket(client);
        return;
    }

    if (target.find("/assets/") == 0) {

        string fileName = target.substr(1);

        if (fileName.find("..") != string::npos ||
            fileName.find("\\") != string::npos) {

            sendText(client,
                     "Forbidden",
                     "text/plain; charset=utf-8",
                     404);

            closesocket(client);
            return;
        }

        sendFile(client, fileName);
        closesocket(client);
        return;
    }

    sendText(client,
             "Not Found",
             "text/plain; charset=utf-8",
             404);

    closesocket(client);
}

int runServer() {

    WSADATA wsa;

    if (WSAStartup(MAKEWORD(2,2), &wsa) != 0) {
        cerr << "WSAStartup failed.\n";
        return 1;
    }

    SOCKET serverSocket =
        socket(AF_INET,
               SOCK_STREAM,
               IPPROTO_TCP);

    if (serverSocket == INVALID_SOCKET) {
        cerr << "Could not create socket.\n";
        WSACleanup();
        return 1;
    }

    int option = 1;

    setsockopt(serverSocket,
               SOL_SOCKET,
               SO_REUSEADDR,
               (const char*)&option,
               sizeof(option));

    sockaddr_in address;
    ZeroMemory(&address, sizeof(address));

    address.sin_family = AF_INET;
    address.sin_addr.s_addr =
        inet_addr("127.0.0.1");
    address.sin_port = htons(8080);

    if (bind(serverSocket,
             (sockaddr*)&address,
             sizeof(address)) == SOCKET_ERROR) {

        cerr << "Port 8080 is already in use.\n";

        closesocket(serverSocket);
        WSACleanup();

        return 1;
    }

    if (listen(serverSocket, 10) == SOCKET_ERROR) {

        cerr << "Listen failed.\n";

        closesocket(serverSocket);
        WSACleanup();

        return 1;
    }

    cout << "\n";
    cout << "============================================\n";
    cout << "        HANGMAN GAME | SAMARTH\n";
    cout << "        C++ OOP PROJECT SERVER\n";
    cout << "============================================\n";
    cout << "Browser: http://localhost:8080\n";
    cout << "============================================\n\n";

    while (true) {

        sockaddr_in clientAddress;
        int clientSize = sizeof(clientAddress);

        SOCKET client =
            accept(serverSocket,
                   (sockaddr*)&clientAddress,
                   &clientSize);

        if (client == INVALID_SOCKET)
            continue;

        handleClient(client);
    }

    closesocket(serverSocket);
    WSACleanup();

    return 0;
}
