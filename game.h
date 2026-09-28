#ifndef GAME_H
#define GAME_H

#include "question.h"
#include <string>
#include <vector>

class Game {
private:
    std::string playerName;
    std::string mode;
    std::string device;
    int level;
    int questionIndex;
    int score;
    int lives;
    bool active;
    bool levelCompleteFlag;
    bool gameOverFlag;
    std::vector<char> guessedLetters;
    std::vector<char> wrongLetters;

    bool answerSolved() const;

public:
    Game();

    void start(const std::string& player,
               const std::string& selectedMode,
               const std::string& selectedDevice,
               int selectedLevel);

    std::string processGuess(const std::string& guess);

    const std::string& getPlayer() const;
    const std::string& getMode() const;
    const std::string& getDevice() const;

    int getLevel() const;
    int getQuestionIndex() const;
    int getScore() const;
    int getLives() const;

    bool isActive() const;
    bool isLevelComplete() const;
    bool isGameOver() const;

    const std::vector<char>& getGuessedLetters() const;
    const std::vector<char>& getWrongLetters() const;

    Question currentQuestion() const;
    std::string answerDisplay() const;
};

#endif
