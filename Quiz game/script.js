// Elements from the DOM
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

// Variables to track the quiz
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// Fetch quiz questions from the API
async function fetchQuestions() {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
        const data = await response.json();
        questions = data.results;
        showQuestion();
    } catch (error) {
        questionElement.innerHTML = 'Error fetching questions!';
    }
}

// Show a question
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = decodeHTML(currentQuestion.question);

    // Combine correct and incorrect answers, then shuffle
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(() => Math.random() - 0.5);

    // Display each answer
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = decodeHTML(answer);
        button.addEventListener('click', () => selectAnswer(answer, currentQuestion.correct_answer));
        answersElement.appendChild(button);
    });
}

// Reset the state for the next question
function resetState() {
    nextButton.style.display = 'none';
    resultElement.innerHTML = '';
    answersElement.innerHTML = '';
}

// Select an answer
function selectAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
        resultElement.innerHTML = 'Correct!';
    } else {
        resultElement.innerHTML = `Wrong! The correct answer was: ${decodeHTML(correctAnswer)}`;
    }

    nextButton.style.display = 'block';
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showFinalScore();
        }
    });
}

// Show the final score after the quiz
function showFinalScore() {
    resetState();
    questionElement.innerHTML = `Quiz Finished! You scored ${score} out of ${questions.length}.`;
}

// Helper function to decode HTML entities from API
function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

// Start the quiz
fetchQuestions();
