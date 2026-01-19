const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const timer = document.querySelector("#timer");
let count = 0;
let timerId = null;

startBtn.addEventListener("click", () => {
    if (timerId === null) {
        timerId = setInterval(() => {
            count++;
            timer.textContent = count;
        }, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    timer.textContent = count;
});
