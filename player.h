#ifndef PLAYER_H
#define PLAYER_H

#include <string>
#include <map>

class PlayerManager {
private:
    std::map<std::string, int> unlockedLevels;
    std::string makeKey(const std::string& player,
                        const std::string& mode) const;

public:
    PlayerManager();

    void load();
    void save();

    int getUnlockedLevel(const std::string& player,
                         const std::string& mode);

    void unlockNext(const std::string& player,
                    const std::string& mode,
                    int completedLevel);
};

#endif
