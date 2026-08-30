let score = 0;
let timeLeft = 30;
setInterval(function() {
    if (timeLeft > 0) {
        timeLeft = timeLeft - 1;
        document.getElementById("timer").textContent = timeLeft;
    }
}, 1000);
function addPoint() {
    score = score + 1;
    document.getElementById("score").textContent = score;
}
