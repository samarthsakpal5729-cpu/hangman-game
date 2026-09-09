/* =================================
   HANGMAN GAME - FINAL script.js
================================= */


/* OOP Question Bank */

const questions = [

    ["What is a blueprint used to create objects?", "CLASS", "OOP"],
    ["What is an instance of a class called?", "OBJECT", "OOP"],
    ["Which OOP concept hides internal details?", "ENCAPSULATION", "OOP"],
    ["Which OOP concept lets child class use parent class members?", "INHERITANCE", "OOP"],
    ["Which OOP concept gives one interface many forms?", "POLYMORPHISM", "OOP"],

    ["Which OOP concept shows only important information?", "ABSTRACTION", "OOP"],
    ["Which special function runs when an object is created?", "CONSTRUCTOR", "C++"],
    ["Which special function runs when an object is destroyed?", "DESTRUCTOR", "C++"],
    ["Which keyword creates memory dynamically in C++?", "NEW", "C++"],
    ["Which keyword removes dynamically created memory?", "DELETE", "C++"],

    ["Which keyword refers to the current object?", "THIS", "C++"],
    ["Which access specifier allows access from everywhere?", "PUBLIC", "C++"],
    ["Which access specifier allows access only inside a class?", "PRIVATE", "C++"],
    ["Which access specifier allows derived class access?", "PROTECTED", "C++"],
    ["Same function name with different parameters is called?", "OVERLOADING", "OOP"],

    ["Redefining a parent class function is called?", "OVERRIDING", "OOP"],
    ["Which keyword allows runtime overriding?", "VIRTUAL", "C++"],
    ["A class that cannot create objects is called?", "ABSTRACT", "OOP"],
    ["Which constructor has no parameters?", "DEFAULT", "C++"],
    ["Which constructor copies another object?", "COPY", "C++"],

    ["The parent class is also called which class?", "BASE", "Inheritance"],
    ["The child class is also called which class?", "DERIVED", "Inheritance"],
    ["Inheritance from one base class is called?", "SINGLE", "Inheritance"],
    ["Inheritance from many base classes is called?", "MULTIPLE", "Inheritance"],
    ["Which keyword makes a variable constant?", "CONST", "C++"],

    ["Which function can access private class members?", "FRIEND", "C++"],
    ["Which operator accesses object members?", "DOT", "C++"],
    ["Which operator accesses pointer object members?", "ARROW", "C++"],
    ["Which relationship means object contains another object?", "COMPOSITION", "OOP"],
    ["Which pattern creates only one object?", "SINGLETON", "OOP"]

];


/* Game Variables */

let selectedMode = "";
let selectedDevice = "";

let currentLevel = 1;
let currentQuestion = 0;

let score = 0;
let lives = 6;

let hiddenAnswer = "";
let wrongLetters = [];
let guessedLetters = [];

let soundOn = true;
let gameLocked = false;


/* Screen Change Function */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}


/* Mobile or Laptop Layout */

function changeDeviceLayout(device) {

    selectedDevice = device;

    document.body.classList.remove("mobile-view");
    document.body.classList.remove("laptop-view");

    if (device === "mobile") {
        document.body.classList.add("mobile-view");
    }

    if (device === "laptop") {
        document.body.classList.add("laptop-view");
    }
}


/* Save and Get Unlocked Level */

function getSavedLevel() {

    const savedLevel = localStorage.getItem(
        "hangman_" + selectedMode + "_level"
    );

    if (savedLevel === null) {
        return 1;
    }

    return Number(savedLevel);
}


/* Five Questions for Each Level */

function getLevelQuestions() {

    const levelQuestions = [];

    const startIndex =
        ((currentLevel - 1) * 5) % questions.length;

    for (let i = 0; i < 5; i++) {

        const questionIndex =
            (startIndex + i) % questions.length;

        levelQuestions.push(questions[questionIndex]);
    }

    return levelQuestions;
}


/* Start Game */

function startGame(mode) {

    selectedMode = mode;

    currentLevel = getSavedLevel();

    currentQuestion = 0;
    score = 0;
    gameLocked = false;

    if (selectedMode === "peaceful") {
        lives = 100;
    }

    if (selectedMode === "easy") {
        lives = 6;
    }

    if (selectedMode === "hard") {
        lives = 4;
    }

    document.getElementById("modeName").textContent =
        selectedMode.toUpperCase() + " MODE";

    document.getElementById("levelText").textContent =
        "Level " + currentLevel + " of 20";

    showScreen("gameScreen");

    loadQuestion();
}


/* Load Question */

function loadQuestion() {

    const levelQuestions = getLevelQuestions();

    const questionData =
        levelQuestions[currentQuestion];

    hiddenAnswer = "";
    wrongLetters = [];
    guessedLetters = [];

    gameLocked = false;

    for (let i = 0; i < questionData[1].length; i++) {

        if (questionData[1][i] === " ") {
            hiddenAnswer += " ";
        } else {
            hiddenAnswer += "_";
        }
    }

    document.getElementById("question").textContent =
        questionData[0];

    document.getElementById("category").textContent =
        questionData[2];

    document.getElementById("questionNumber").textContent =
        (currentQuestion + 1) + "/5";

    document.getElementById("guessInput").value = "";

    document.getElementById("message").textContent =
        "Type one letter or the complete answer.";

    if (selectedMode === "hard") {

        document.getElementById("hint").textContent =
            "Hint is disabled in Hard Mode.";

    } else {

        document.getElementById("hint").textContent =
            "Hint: Answer contains " +
            questionData[1].length +
            " characters.";
    }

    updateGameScreen();

    document.getElementById("guessInput").focus();
}


/* Update Game Screen */

function updateGameScreen() {

    let displayAnswer = "";

    for (let i = 0; i < hiddenAnswer.length; i++) {
        displayAnswer += hiddenAnswer[i] + " ";
    }

    document.getElementById("answerDisplay").textContent =
        displayAnswer;

    if (wrongLetters.length === 0) {

        document.getElementById("wrongLetters").textContent =
            "None";

    } else {

        document.getElementById("wrongLetters").textContent =
            wrongLetters.join(", ");
    }

    if (selectedMode === "peaceful") {

        document.getElementById("lives").textContent = "∞";

    } else {

        document.getElementById("lives").textContent = lives;
    }

    document.getElementById("score").textContent = score;

    const progressPercentage =
        (currentQuestion / 5) * 100;

    document.getElementById("progress").style.width =
        progressPercentage + "%";

    drawHangman();
}


/* Check Guess */

function checkGuess() {

    if (gameLocked === true) {
        return;
    }

    const input =
        document.getElementById("guessInput");

    const userGuess =
        input.value.toUpperCase().trim();

    input.value = "";

    if (userGuess === "") {

        showMessage(
            "Please type a letter or word.",
            "wrong"
        );

        return;
    }

    if (!/^[A-Z ]+$/.test(userGuess)) {

        showMessage(
            "Please use letters only.",
            "wrong"
        );

        return;
    }

    const levelQuestions = getLevelQuestions();

    const correctAnswer =
        levelQuestions[currentQuestion][1]
            .toUpperCase();


    /* Complete Word Guess */

    if (userGuess.length > 1) {

        if (userGuess === correctAnswer) {

            hiddenAnswer = correctAnswer;

            score = score + 20;

            showMessage(
                "Correct full answer! +20 points",
                "correct"
            );

            playSound("correct");

            updateGameScreen();

            answerComplete();

        } else {

            wrongGuess(userGuess);
        }

        return;
    }


    /* One Letter Guess */

    if (guessedLetters.includes(userGuess) ||
        wrongLetters.includes(userGuess)) {

        showMessage(
            "You already used this letter.",
            "wrong"
        );

        return;
    }

    if (correctAnswer.includes(userGuess)) {

        guessedLetters.push(userGuess);

        let newHiddenAnswer = "";

        for (let i = 0; i < correctAnswer.length; i++) {

            if (correctAnswer[i] === " ") {

                newHiddenAnswer += " ";

            } else if (correctAnswer[i] === userGuess) {

                newHiddenAnswer += userGuess;

            } else {

                newHiddenAnswer += hiddenAnswer[i];
            }
        }

        hiddenAnswer = newHiddenAnswer;

        score = score + 5;

        showMessage(
            "Correct letter! +5 points",
            "correct"
        );

        playSound("correct");

        updateGameScreen();

        if (hiddenAnswer === correctAnswer) {
            answerComplete();
        }

    } else {

        wrongGuess(userGuess);
    }
}


/* Wrong Answer */

function wrongGuess(userGuess) {

    wrongLetters.push(userGuess);

    if (selectedMode !== "peaceful") {
        lives = lives - 1;
    }

    showMessage("Wrong guess!", "wrong");

    playSound("wrong");

    updateGameScreen();

    if (selectedMode !== "peaceful" && lives <= 0) {

        gameLocked = true;

        const levelQuestions = getLevelQuestions();

        const correctAnswer =
            levelQuestions[currentQuestion][1];

        document.getElementById("message").textContent =
            "Game Over! Answer: " + correctAnswer;

        setTimeout(function () {

            alert(
                "You lost Level " +
                currentLevel +
                ". Try again."
            );

            startGame(selectedMode);

        }, 1500);
    }
}


/* Question Complete */

function answerComplete() {

    gameLocked = true;

    document.getElementById("message").textContent =
        "Correct! Next question is loading...";

    setTimeout(function () {

        currentQuestion++;

        if (currentQuestion < 5) {
            loadQuestion();
        } else {
            levelComplete();
        }

    }, 1000);
}


/* Level Complete */

function levelComplete() {

    playSound("win");

    if (currentLevel < 20) {

        const nextLevel = currentLevel + 1;

        localStorage.setItem(
            "hangman_" + selectedMode + "_level",
            nextLevel
        );

        document.getElementById("completeTitle").textContent =
            "Level " + currentLevel + " Complete!";

        document.getElementById("completeMessage").textContent =
            "Your score: " + score +
            ". Level " + nextLevel +
            " is unlocked.";

        document.getElementById("nextLevelButton").textContent =
            "START LEVEL " + nextLevel;

    } else {

        document.getElementById("completeTitle").textContent =
            "Congratulations!";

        document.getElementById("completeMessage").textContent =
            "You completed all 20 levels in " +
            selectedMode +
            " mode. Final score: " + score;

        document.getElementById("nextLevelButton").textContent =
            "PLAY AGAIN";
    }

    showScreen("completeScreen");
}


/* Next Level */

function nextLevel() {

    if (currentLevel < 20) {
        currentLevel++;
    } else {
        currentLevel = 1;
    }

    startGame(selectedMode);
}


/* Show Message */

function showMessage(text, type) {

    const message =
        document.getElementById("message");

    message.textContent = text;

    if (type === "correct") {
        message.style.color = "#69f4bd";
    }

    if (type === "wrong") {
        message.style.color = "#ff799e";
    }
}


/* Sound Effects */

function playSound(type) {

    if (soundOn === false) {
        return;
    }

    try {

        const AudioClass =
            window.AudioContext ||
            window.webkitAudioContext;

        const audio = new AudioClass();

        const oscillator =
            audio.createOscillator();

        const gain =
            audio.createGain();

        if (type === "correct") {
            oscillator.frequency.value = 700;
        }

        if (type === "wrong") {
            oscillator.frequency.value = 180;
        }

        if (type === "win") {
            oscillator.frequency.value = 1000;
        }

        gain.gain.value = 0.08;

        oscillator.connect(gain);
        gain.connect(audio.destination);

        oscillator.start();

        oscillator.stop(audio.currentTime + 0.15);

    } catch (error) {
        console.log("Sound cannot play.");
    }
}


/* Draw Hangman */

function drawHangman() {

    const canvas =
        document.getElementById("hangmanCanvas");

    const context =
        canvas.getContext("2d");

    context.clearRect(0, 0, 260, 260);

    context.strokeStyle = "#55d9ff";
    context.lineWidth = 5;
    context.lineCap = "round";

    /* Gallows */

    context.beginPath();

    context.moveTo(25, 235);
    context.lineTo(220, 235);

    context.moveTo(65, 235);
    context.lineTo(65, 25);

    context.lineTo(170, 25);
    context.lineTo(170, 55);

    context.stroke();

    const wrongCount = wrongLetters.length;

    /* Head */

    if (wrongCount >= 1) {

        context.beginPath();
        context.arc(170, 78, 22, 0, Math.PI * 2);
        context.stroke();
    }

    /* Body */

    if (wrongCount >= 2) {

        context.beginPath();
        context.moveTo(170, 100);
        context.lineTo(170, 155);
        context.stroke();
    }

    /* Left Arm */

    if (wrongCount >= 3) {

        context.beginPath();
        context.moveTo(170, 118);
        context.lineTo(138, 140);
        context.stroke();
    }

    /* Right Arm */

    if (wrongCount >= 4) {

        context.beginPath();
        context.moveTo(170, 118);
        context.lineTo(202, 140);
        context.stroke();
    }

    /* Left Leg */

    if (wrongCount >= 5) {

        context.beginPath();
        context.moveTo(170, 155);
        context.lineTo(142, 195);
        context.stroke();
    }

    /* Right Leg */

    if (wrongCount >= 6) {

        context.beginPath();
        context.moveTo(170, 155);
        context.lineTo(198, 195);
        context.stroke();
    }
}


/* Add Mobile Layout CSS Automatically */

const mobileStyle = document.createElement("style");

mobileStyle.textContent = `

    body.mobile-view {
        background-image:
            linear-gradient(
                rgba(0, 0, 0, 0.65),
                rgba(0, 10, 20, 0.82)
            ),
            url("assets/background2.jpg");
    }

    body.mobile-view .container {
        width: 100%;
        max-width: 430px;
        margin: auto;
        padding: 12px;
    }

    body.mobile-view .game-area {
        grid-template-columns: 1fr;
    }

    body.mobile-view .game-header {
        flex-direction: column;
        align-items: flex-start;
    }

    body.mobile-view .input-area {
        flex-direction: column;
    }

    body.mobile-view .input-area button {
        width: 100%;
    }

    body.mobile-view .answer-display {
        letter-spacing: 4px;
    }
`;

document.head.appendChild(mobileStyle);


/* Button Events */

document.getElementById("startButton").addEventListener(
    "click",
    function () {
        showScreen("deviceScreen");
    }
);

document.getElementById("howToPlayButton").addEventListener(
    "click",
    function () {
        showScreen("instructionScreen");
    }
);

document.getElementById("instructionBackButton").addEventListener(
    "click",
    function () {
        showScreen("welcomeScreen");
    }
);

document.getElementById("deviceBackButton").addEventListener(
    "click",
    function () {
        showScreen("welcomeScreen");
    }
);

document.getElementById("modeBackButton").addEventListener(
    "click",
    function () {
        showScreen("deviceScreen");
    }
);

document.getElementById("laptopButton").addEventListener(
    "click",
    function () {

        changeDeviceLayout("laptop");

        showScreen("modeScreen");
    }
);

document.getElementById("mobileButton").addEventListener(
    "click",
    function () {

        changeDeviceLayout("mobile");

        showScreen("modeScreen");
    }
);

document.getElementById("peacefulButton").addEventListener(
    "click",
    function () {
        startGame("peaceful");
    }
);

document.getElementById("easyButton").addEventListener(
    "click",
    function () {
        startGame("easy");
    }
);

document.getElementById("hardButton").addEventListener(
    "click",
    function () {
        startGame("hard");
    }
);

document.getElementById("guessButton").addEventListener(
    "click",
    function () {
        checkGuess();
    }
);

document.getElementById("guessInput").addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {
            checkGuess();
        }
    }
);

document.getElementById("menuButton").addEventListener(
    "click",
    function () {
        showScreen("welcomeScreen");
    }
);

document.getElementById("completeMenuButton").addEventListener(
    "click",
    function () {
        showScreen("welcomeScreen");
    }
);

document.getElementById("nextLevelButton").addEventListener(
    "click",
    function () {
        nextLevel();
    }
);

document.getElementById("soundButton").addEventListener(
    "click",
    function () {

        soundOn = !soundOn;

        if (soundOn === true) {
            document.getElementById("soundButton").textContent = "🔊";
        } else {
            document.getElementById("soundButton").textContent = "🔇";
        }
    }
);