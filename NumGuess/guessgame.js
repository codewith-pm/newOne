const randomNumber = Math.floor(Math.random() * 9) + 1;
const resultDiv = document.getElementById("result");
resultDiv.textContent = "Ready to guess..";

function guessNumber() {
    const userGuess = document.getElementById("userGuess").value;
    const guess = parseInt(userGuess);


    if (!userGuess) return resultDiv.textContent = "Input should not be empty.", resultDiv.style.color = "red";
    if (isNaN(guess)) return resultDiv.textContent = "Please enter a number only.", resultDiv.style.color = "red";
    if (guess < 1 || guess > 9) return resultDiv.textContent = "Enter a number between 1 and 9 only.", resultDiv.style.color = "red";
    if (guess === randomNumber) return resultDiv.textContent = "Congratulations! You guessed the correct number!", resultDiv.style.color = "green";

    resultDiv.textContent = guess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
    resultDiv.style.color = "red";
}

document.getElementById("userGuess").addEventListener("keydown", function (event) {
    if (event.key === "Enter") guessNumber();
});