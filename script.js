
const $ = (id) => document.getElementById(id);

let playerName = localStorage.getItem("hangmanPlayerName") || "";
let selectedDevice = "LAPTOP";
let selectedMode = "EASY";
let soundOn = true;
let currentState = null;
let messageTimer = null;

const correctSound = new Audio("/assets/answer-correct.mp3");
const wrongSound = new Audio("/assets/answer-wrong.mp3");
const gameOverSound = new Audio("/assets/faaah.mp3");
const backgroundSound = new Audio(
    "/assets/simplesound-horror-trailer-443327.mp3"
);

backgroundSound.loop = true;
backgroundSound.volume = 0.16;

// ------------------------------------------------------------
// SOUND
// ------------------------------------------------------------

function playSound(audio) {
    if (!soundOn) return;

    try {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    } catch (e) {}
}

// ------------------------------------------------------------
// SCREEN NAVIGATION
// ------------------------------------------------------------

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = $(id);

    if (screen) {
        screen.classList.add("active");
    } else {
        console.error("Screen not found:", id);
    }
}

function setMessage(text) {
    const message = $("message");

    if (!message) return;

    message.textContent = text || "";

    clearTimeout(messageTimer);

    if (text) {
        messageTimer = setTimeout(() => {
            message.textContent = "";
        }, 1800);
    }
}

// ------------------------------------------------------------
// API
// ------------------------------------------------------------

async function api(path, options = {}) {
    const response = await fetch(path, options);

    if (!response.ok) {
        throw new Error(
            "Server returned HTTP " + response.status
        );
    }

    return await response.json();
}

// ------------------------------------------------------------
// LOAD GAME STATE
// ------------------------------------------------------------

async function loadState() {
    try {
        currentState = await api("/api/state");
        renderState();
        return true;
    } catch (error) {
        console.error("State error:", error);
        setMessage("C++ server connection failed.");
        return false;
    }
}

// ------------------------------------------------------------
// RENDER GAME
// ------------------------------------------------------------

function renderState() {
    if (!currentState) return;

    $("modeName").textContent = currentState.mode;
    $("levelText").textContent =
        currentState.level + " / 20";

    $("questionNumber").textContent =
        currentState.questionNumber + " / 5";

    $("lives").textContent = currentState.livesDisplay;
    $("score").textContent = currentState.score;
    $("category").textContent = currentState.category;
    $("question").textContent = currentState.question;

    $("answerDisplay").textContent =
        currentState.answerDisplay;

    $("hint").textContent = currentState.hint;

    if (currentState.wrongLetters.length) {
        $("wrongLetters").textContent =
            currentState.wrongLetters.join("   ");
    } else {
        $("wrongLetters").textContent = "—";
    }

    $("progress").style.width =
        ((currentState.questionIndex + 1) / 5 * 100) + "%";

    drawHangman(currentState.wrongLetters.length);
}

// ------------------------------------------------------------
// HANGMAN DRAWING
// ------------------------------------------------------------

function drawHangman(errors) {
    const canvas = $("hangmanCanvas");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ff1744";

    // Ground
    ctx.beginPath();
    ctx.moveTo(45, 290);
    ctx.lineTo(270, 290);
    ctx.stroke();

    // Pole
    ctx.beginPath();
    ctx.moveTo(90, 290);
    ctx.lineTo(90, 45);
    ctx.lineTo(220, 45);
    ctx.lineTo(220, 78);
    ctx.stroke();

    // Head
    if (errors >= 1) {
        ctx.beginPath();
        ctx.arc(220, 110, 32, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Body
    if (errors >= 2) {
        ctx.beginPath();
        ctx.moveTo(220, 142);
        ctx.lineTo(220, 215);
        ctx.stroke();
    }

    // Left arm
    if (errors >= 3) {
        ctx.beginPath();
        ctx.moveTo(220, 158);
        ctx.lineTo(175, 190);
        ctx.stroke();
    }

    // Right arm
    if (errors >= 4) {
        ctx.beginPath();
        ctx.moveTo(220, 158);
        ctx.lineTo(265, 190);
        ctx.stroke();
    }

    // Left leg
    if (errors >= 5) {
        ctx.beginPath();
        ctx.moveTo(220, 215);
        ctx.lineTo(178, 268);
        ctx.stroke();
    }

    // Right leg
    if (errors >= 6) {
        ctx.beginPath();
        ctx.moveTo(220, 215);
        ctx.lineTo(262, 268);
        ctx.stroke();
    }
}

// ------------------------------------------------------------
// PLAYER NAME - FIXED
// ------------------------------------------------------------

async function startServerGame() {
    const input = $("playerNameInput");
    const button = $("playerContinueButton");

    if (!input || !button) {
        console.error("Player input or Continue button missing.");
        return;
    }

    const name = input.value.trim();

    if (!name) {
        input.focus();
        setMessage("Please enter your name.");
        return;
    }

    playerName = name;

    button.disabled = true;
    button.textContent = "PLEASE WAIT...";

    try {
        console.log("Registering player:", playerName);

        const result = await api("/api/player", {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },

            body: new URLSearchParams({
                player: playerName,
                device: selectedDevice
            })
        });

        console.log("Player API response:", result);

        if (!result || result.ok !== true) {
            throw new Error(
                "Player registration failed."
            );
        }

        localStorage.setItem(
            "hangmanPlayerName",
            playerName
        );

        // Move to the device selection screen
        showScreen("deviceScreen");

    } catch (error) {
        console.error("Player registration error:", error);

        alert(
            "Unable to continue.\n\n" +
            "Check that the C++ server is running at " +
            "http://localhost:8080\n\n" +
            "Error: " + error.message
        );

    } finally {
        button.disabled = false;
        button.textContent = "CONTINUE";
    }
}

// ------------------------------------------------------------
// CHOOSE MODE
// ------------------------------------------------------------

async function chooseMode(mode) {
    selectedMode = mode;

    try {
        const result = await api("/api/mode", {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },

            body: new URLSearchParams({
                player: playerName,
                mode: selectedMode,
                device: selectedDevice
            })
        });

        if (result.ok) {
            await renderLevels();
            showScreen("levelScreen");
        } else {
            alert("Unable to select mode.");
        }

    } catch (error) {
        console.error("Mode error:", error);
        alert("C++ server connection failed.");
    }
}

// ------------------------------------------------------------
// LEVEL SELECTION
// ------------------------------------------------------------

async function renderLevels() {
    try {
        const state = await api("/api/state");

        const grid = $("levelGrid");

        grid.innerHTML = "";

        const unlocked = state.unlockedLevel || 1;

        for (let i = 1; i <= 20; i++) {
            const btn = document.createElement("button");

            btn.className = "level-btn";

            if (i <= unlocked) {
                btn.classList.add("unlocked");

                if (i === state.level) {
                    btn.classList.add("current");
                }

                btn.textContent = "LEVEL " + i;

                btn.onclick = () => startLevel(i);

            } else {
                btn.classList.add("locked");
                btn.disabled = true;
                btn.textContent = "🔒 " + i;
            }

            grid.appendChild(btn);
        }

        $("levelTitle").textContent =
            selectedMode.toUpperCase() +
            " MODE • SELECT LEVEL";

        $("levelSubtitle").textContent =
            "Player: " + playerName +
            " • Unlocked up to Level " + unlocked;

    } catch (error) {
        console.error("Level error:", error);
        alert("Unable to load levels.");
    }
}

// ------------------------------------------------------------
// START LEVEL
// ------------------------------------------------------------

async function startLevel(level) {
    try {
        const result = await api("/api/start", {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },

            body: new URLSearchParams({
                player: playerName,
                mode: selectedMode,
                device: selectedDevice,
                level: String(level)
            })
        });

        if (!result.ok) {
            alert(result.message || "Unable to start level.");
            return;
        }

        const loaded = await loadState();

        if (!loaded) return;

        showScreen("gameScreen");

        if (soundOn) {
            backgroundSound.play().catch(() => {});
        }

    } catch (error) {
        console.error("Start level error:", error);
        alert("Unable to start level. Check C++ server.");
    }
}

// ------------------------------------------------------------
// SUBMIT GUESS
// ------------------------------------------------------------

async function submitGuess() {
    const input = $("guessInput");
    const value = input.value.trim();

    if (!value) return;

    input.value = "";

    try {
        const result = await api("/api/guess", {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },

            body: new URLSearchParams({
                guess: value
            })
        });

        if (result.result === "CORRECT") {
            playSound(correctSound);
            setMessage("✓ CORRECT");

        } else if (result.result === "WRONG") {
            playSound(wrongSound);
            setMessage("✕ WRONG");

        } else if (result.result === "ALREADY") {
            setMessage("Already used.");

        } else if (result.result === "LEVEL_COMPLETE") {
            playSound(correctSound);

            await loadState();

            $("completeTitle").textContent =
                currentState.level === 20
                    ? "GAME COMPLETE"
                    : "LEVEL " + currentState.level + " COMPLETE";

            $("completeText").textContent =
                "Excellent work, " + playerName +
                "! Score: " + currentState.score;

            showScreen("completeScreen");
            return;

        } else if (result.result === "GAME_OVER") {
            playSound(gameOverSound);

            await loadState();

            $("completeTitle").textContent = "GAME OVER";

            $("completeText").textContent =
                "The answer was: " + currentState.answer;

            showScreen("completeScreen");
            return;

        } else if (result.result === "ERROR") {
            setMessage(result.message || "Error");
        }

        await loadState();

    } catch (error) {
        console.error("Guess error:", error);
        setMessage("C++ server connection failed.");
    }
}

// ------------------------------------------------------------
// MENU
// ------------------------------------------------------------

function backToMenu() {
    showScreen("welcomeScreen");
}

// ------------------------------------------------------------
// SOUND TOGGLE
// ------------------------------------------------------------

function toggleSound() {
    soundOn = !soundOn;

    if (soundOn) {
        $("soundButton").textContent = "🔊 SOUND";
        backgroundSound.play().catch(() => {});
    } else {
        $("soundButton").textContent = "🔇 SOUND";
        backgroundSound.pause();
    }
}

// ------------------------------------------------------------
// BUTTONS
// ------------------------------------------------------------

$("startButton").onclick = () => {
    $("playerNameInput").value = playerName;
    showScreen("playerScreen");
};

$("howToPlayButton").onclick = () => {
    showScreen("instructionScreen");
};

$("instructionBackButton").onclick = () => {
    showScreen("welcomeScreen");
};

$("playerContinueButton").onclick = startServerGame;

$("playerBackButton").onclick = () => {
    showScreen("welcomeScreen");
};

$("laptopButton").onclick = async () => {
    selectedDevice = "LAPTOP";
    await chooseMode(selectedMode);
};

$("mobileButton").onclick = async () => {
    selectedDevice = "MOBILE";
    document.body.classList.add("mobile-view");
    await chooseMode(selectedMode);
};

$("deviceBackButton").onclick = () => {
    showScreen("playerScreen");
};

$("peacefulButton").onclick = () => {
    chooseMode("PEACEFUL");
};

$("easyButton").onclick = () => {
    chooseMode("EASY");
};

$("hardButton").onclick = () => {
    chooseMode("HARD");
};

$("modeBackButton").onclick = () => {
    showScreen("deviceScreen");
};

$("guessButton").onclick = submitGuess;

$("guessInput").addEventListener("keydown", e => {
    if (e.key === "Enter") {
        submitGuess();
    }
});

$("menuButton").onclick = backToMenu;

$("completeMenuButton").onclick = backToMenu;

$("continueLevelButton").onclick = async () => {
    await renderLevels();
    showScreen("levelScreen");
};

$("levelMenuButton").onclick = backToMenu;

$("changePlayerButton").onclick = () => {
    $("playerNameInput").value = playerName;
    showScreen("playerScreen");
};

$("soundButton").onclick = toggleSound;

// ------------------------------------------------------------
// STARTUP
// ------------------------------------------------------------

window.addEventListener("load", async () => {
    const video = $("gameVideoBackground");

    if (video) {
        try {
            video.play().catch(() => {});
        } catch (e) {}
    }

    const blackout = $("blackout");

    if (blackout) {
        setTimeout(() => {
            blackout.classList.add("hidden");
        }, 1600);
    }

    await loadState();

    if ($("playerNameInput") && playerName) {
        $("playerNameInput").value = playerName;
    }

    document.addEventListener("click", () => {
        if (soundOn) {
            backgroundSound.play().catch(() => {});
        }
    }, { once: true });
});