#ifndef QUESTION_H
#define QUESTION_H

#include <string>
#include <vector>

struct Question {
    std::string category;
    std::string question;
    std::string answer;
    std::string hint;
};

std::vector<Question> getLevelQuestions(int level);

#endif
