#include "game.h"
#include "player.h"

#include <algorithm>
#include <cctype>
#include <string>

using namespace std;

static string upperText(string value) {
    for (size_t i = 0; i < value.size(); ++i)
        value[i] = (char)toupper((unsigned char)value[i]);
    return value;
}

static string trimText(string value) {
    while (!value.empty() && isspace((unsigned char)value.front()))
        value.erase(value.begin());

    while (!value.empty() && isspace((unsigned char)value.back()))
        value.pop_back();

    return value;
}

static string normalizeAnswer(const string& value) {
    string result;

    for (size_t i = 0; i < value.size(); ++i) {
        char c = (char)toupper((unsigned char)value[i]);

        if (isalpha((unsigned char)c) || c == ' ')
            result += c;
    }

    return result;
}

static bool hasLetter(const vector<char>& list, char letter) {
    return find(list.begin(), list.end(), letter) != list.end();
}

Game::Game()
    : playerName("Player"),
      mode("EASY"),
      device("LAPTOP"),
      level(1),
      questionIndex(0),
      score(0),
      lives(6),
      active(false),
      levelCompleteFlag(false),
      gameOverFlag(false) {
}

void Game::start(const string& player,
                 const string& selectedMode,
                 const string& selectedDevice,
                 int selectedLevel) {

    PlayerManager manager;

    playerName = trimText(player);
    if (playerName.empty())
        playerName = "Player";

    mode = upperText(selectedMode);
    device = upperText(selectedDevice);

    if (mode != "PEACEFUL" && mode != "EASY" && mode != "HARD")
        mode = "EASY";

    int unlocked = manager.getUnlockedLevel(playerName, mode);

    if (selectedLevel < 1)
        selectedLevel = 1;

    if (selectedLevel > 20)
        selectedLevel = 20;

    if (selectedLevel > unlocked)
        selectedLevel = unlocked;

    level = selectedLevel;
    questionIndex = 0;
    score = 0;

    if (mode == "PEACEFUL")
        lives = 999;
    else if (mode == "HARD")
        lives = 4;
    else
        lives = 6;

    guessedLetters.clear();
    wrongLetters.clear();

    active = true;
    levelCompleteFlag = false;
    gameOverFlag = false;
}

Question Game::currentQuestion() const {
    vector<Question> questions = getLevelQuestions(level);

    Question q = questions[questionIndex];

    if (mode == "PEACEFUL") {
        q.hint = "Easy hint: " + q.hint;
    }
    else if (mode == "EASY") {
        q.question = "OOP Challenge: " + q.question;
        q.hint = "Hint: " + q.hint;
    }
    else {
        q.question = "Hard Mode: " + q.question;
        q.hint = "Advanced hint: " + q.hint;
    }

    return q;
}

bool Game::answerSolved() const {
    Question q = currentQuestion();

    string answer = normalizeAnswer(q.answer);

    for (size_t i = 0; i < answer.size(); ++i) {
        char c = answer[i];

        if (c == ' ')
            continue;

        if (!hasLetter(guessedLetters, c))
            return false;
    }

    return true;
}

string Game::answerDisplay() const {
    Question q = currentQuestion();

    string result;

    for (size_t i = 0; i < q.answer.size(); ++i) {
        char c = q.answer[i];

        if (c == ' ') {
            result += "   ";
        }
        else if (hasLetter(guessedLetters,
                            (char)toupper((unsigned char)c))) {
            result += (char)toupper((unsigned char)c);
            result += ' ';
        }
        else {
            result += "_ ";
        }
    }

    return result;
}

string Game::processGuess(const string& rawGuess) {
    if (!active)
        return "ERROR";

    if (gameOverFlag || levelCompleteFlag)
        return "ERROR";

    string guess = normalizeAnswer(trimText(rawGuess));

    if (guess.empty())
        return "ERROR";

    Question q = currentQuestion();
    string answer = normalizeAnswer(q.answer);

    // Full answer
    if (guess.size() > 1) {

        if (guess == answer) {
            score += 20;

            if (questionIndex == 4) {
                levelCompleteFlag = true;
                active = false;

                PlayerManager manager;
                manager.unlockNext(playerName, mode, level);

                return "LEVEL_COMPLETE";
            }

            questionIndex++;
            guessedLetters.clear();
            wrongLetters.clear();

            return "CORRECT";
        }

        if (mode != "PEACEFUL") {
            lives--;

            if (lives <= 0) {
                gameOverFlag = true;
                active = false;
                return "GAME_OVER";
            }
        }

        return "WRONG";
    }

    char letter = guess[0];

    if (!isalpha((unsigned char)letter))
        return "ERROR";

    if (hasLetter(guessedLetters, letter) ||
        hasLetter(wrongLetters, letter))
        return "ALREADY";

    bool exists = answer.find(letter) != string::npos;

    if (exists) {
        guessedLetters.push_back(letter);
        score += 5;

        if (answerSolved()) {

            if (questionIndex == 4) {
                levelCompleteFlag = true;
                active = false;

                PlayerManager manager;
                manager.unlockNext(playerName, mode, level);

                return "LEVEL_COMPLETE";
            }

            questionIndex++;
            guessedLetters.clear();
            wrongLetters.clear();

            return "CORRECT";
        }

        return "CORRECT";
    }

    wrongLetters.push_back(letter);

    if (mode != "PEACEFUL") {
        lives--;

        if (lives <= 0) {
            gameOverFlag = true;
            active = false;
            return "GAME_OVER";
        }
    }

    return "WRONG";
}

const string& Game::getPlayer() const { return playerName; }
const string& Game::getMode() const { return mode; }
const string& Game::getDevice() const { return device; }

int Game::getLevel() const { return level; }
int Game::getQuestionIndex() const { return questionIndex; }
int Game::getScore() const { return score; }
int Game::getLives() const { return lives; }

bool Game::isActive() const { return active; }
bool Game::isLevelComplete() const { return levelCompleteFlag; }
bool Game::isGameOver() const { return gameOverFlag; }

const vector<char>& Game::getGuessedLetters() const {
    return guessedLetters;
}

const vector<char>& Game::getWrongLetters() const {
    return wrongLetters;
}
