// src/js/modules/state.js

export let questions = []; // Global variable to store questions loaded from JSON

// App State for Quiz Settings
export let quizMode = 'practice'; // 'practice' or 'exam'
export let numQuestionsToAsk = 10;
export let timeLimitMinutes = 30; // Only for exam mode
export let currentQuestionIndex = 0; // Track the currently displayed question

// App State for Current Quiz Session
export let shuffledQuestions = [];
export let userAnswers = {}; // Store answers for all questions (key: question.id, value: selectedOptionValue or null)
export let startTime;
export let timerInterval;
export let quizEnded = false; // Flag to check if quiz has been submitted/ended

// Functions to update state (important for managing state changes externally)
export function setQuestions(newQuestions) {
    questions = newQuestions;
}
export function setQuizMode(mode) {
    quizMode = mode;
}
export function setNumQuestionsToAsk(num) {
    numQuestionsToAsk = num;
}
export function setTimeLimitMinutes(minutes) {
    timeLimitMinutes = minutes;
}
export function setCurrentQuestionIndex(index) {
    currentQuestionIndex = index;
}
export function setShuffledQuestions(shuffled) {
    shuffledQuestions = shuffled;
}
export function setUserAnswers(answers) {
    userAnswers = answers;
}
export function updateUserAnswer(questionId, answer) {
    userAnswers[questionId] = answer;
}
export function setQuizEnded(ended) {
    quizEnded = ended;
}
export function setStartTime(time) {
    startTime = time;
}
export function setTimerInterval(interval) {
    timerInterval = interval;
}

export function getStartTime() {
    return startTime;
}
export function getTimerInterval() {
    return timerInterval;
}