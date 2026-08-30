let score = 0;
let timeLeft = 30;
let gameOver = false;

function addPoint() {
    if (gameOver === false) {
        score = score + 1;
        document.getElementById("score").textContent = score;
    }
}

let timer = setInterval(function() {
    if (timeLeft > 0) {
        timeLeft = timeLeft - 1;
        document.getElementById("timer").textContent = timeLeft;
    }

    if (timeLeft === 0 && gameOver === false) {
        gameOver = true;
        clearInterval(timer);

        document.getElementById("final-score").textContent = score;
        document.getElementById("game-over").style.display = "block";
    }
}, 1000);
function restartGame() {
    score = 0;
    timeLeft = 30;
    gameOver = false;

    document.getElementById("score").textContent = score;
    document.getElementById("timer").textContent = timeLeft;
    document.getElementById("game-over").style.display = "none";

    timer = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft = timeLeft - 1;
            document.getElementById("timer").textContent = timeLeft;
        }

        if (timeLeft === 0 && gameOver === false) {
            gameOver = true;
            clearInterval(timer);

            document.getElementById("final-score").textContent = score;
            document.getElementById("game-over").style.display = "block";
        }
    }, 1000);
}
