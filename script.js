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
    }
}, 1000);
