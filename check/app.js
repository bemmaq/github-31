
function startTimer() {
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let displayHours = document.getElementById('displayHours');
    let displayMinutes = document.getElementById('displayMinutes');
    let displaySeconds = document.getElementById('displaySeconds');

    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    let intervalId = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(intervalId);
        } else {
            displayHours.textContent = padZero(Math.floor(totalSeconds / 3600));
            displayMinutes.textContent = padZero(Math.floor((totalSeconds % 3600) / 60));
            displaySeconds.textContent = padZero(totalSeconds % 60);

            totalSeconds--;
        }
    }, 1000);
}

function stopTimer() {
    // Clear any existing interval
    clearInterval(intervalId);
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}