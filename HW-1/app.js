document.addEventListener('DOMContentLoaded', function () {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    const inputField = document.getElementById('inputField');
    const submitBtn = document.getElementById('submitBtn');
    const resultElement = document.getElementById('result');

    submitBtn.addEventListener('click', function () {
        const userGuess = parseInt(inputField.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultElement.innerText = 'Введите число от 1 до 100!';
        } else {
            if (userGuess === secretNumber) {
                resultElement.innerText = 'Поздравляю! Вы угадали!';
            } else {
                resultElement.innerText = `Неверно. Правильное число: ${secretNumber}`;
            }
        }
    });
});
