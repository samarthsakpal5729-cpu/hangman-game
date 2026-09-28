#include "player.h"

#include <algorithm>
#include <cctype>
#include <fstream>
#include <sstream>

using namespace std;

static string upperTextPlayer(string value) {
    for (size_t i = 0; i < value.size(); ++i)
        value[i] = (char)toupper((unsigned char)value[i]);
    return value;
}

string PlayerManager::makeKey(const string& player,
                               const string& mode) const {
    return upperTextPlayer(player) + "|" + upperTextPlayer(mode);
}

PlayerManager::PlayerManager() {
    load();
}

void PlayerManager::load() {
    unlockedLevels.clear();

    ifstream file("hangman_progress.dat");

    if (!file)
        return;

    string line;

    while (getline(file, line)) {
        size_t separator = line.rfind('|');

        if (separator == string::npos)
            continue;

        string key = line.substr(0, separator);
        int level = atoi(line.substr(separator + 1).c_str());

        if (level < 1) level = 1;
        if (level > 20) level = 20;

        unlockedLevels[key] = level;
    }
}

void PlayerManager::save() {
    ofstream file("hangman_progress.dat",
                  ios::out | ios::trunc);

    if (!file)
        return;

    for (map<string,int>::iterator it = unlockedLevels.begin();
         it != unlockedLevels.end(); ++it) {
        file << it->first << "|" << it->second << "\n";
    }
}

int PlayerManager::getUnlockedLevel(const string& player,
                                    const string& mode) {
    string key = makeKey(player, mode);

    if (unlockedLevels.find(key) == unlockedLevels.end())
        unlockedLevels[key] = 1;

    save();

    return unlockedLevels[key];
}

void PlayerManager::unlockNext(const string& player,
                               const string& mode,
                               int completedLevel) {
    string key = makeKey(player, mode);

    if (unlockedLevels.find(key) == unlockedLevels.end())
        unlockedLevels[key] = 1;

    if (completedLevel < 20 &&
        unlockedLevels[key] < completedLevel + 1) {
        unlockedLevels[key] = completedLevel + 1;
    }

    if (unlockedLevels[key] > 20)
        unlockedLevels[key] = 20;

    save();
}
