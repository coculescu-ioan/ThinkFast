// src/js/modules/timer.js
import { timerDisplay } from './domElements.js';
import { quizMode, setTimerInterval, setStartTime, getTimerInterval, getStartTime } from './state.js';
// REMOVE THIS LINE: import { checkAnswers } from './quizLogic.js';

/**
 * Formats a total number of seconds into a MM:SS string.
 * @param {number} totalSeconds - The total number of seconds.
 * @returns {string} Formatted time string (MM:SS).
 */
function formatTime(totalSeconds) {
    if (totalSeconds < 0) totalSeconds = 0;
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `Time: ${minutes}:${seconds}`;
}

/**
 * Updates the timer display for practice mode (counts up).
 */
function updatePracticeTimer() {
    const now = new Date();
    const elapsed = new Date(now - getStartTime());
    const minutes = elapsed.getMinutes().toString().padStart(2, '0');
    const seconds = elapsed.getSeconds().toString().padStart(2, '0');
    timerDisplay.textContent = `Time: ${minutes}:${seconds}`;
}

/**
 * Starts or resets the quiz timer based on quiz mode.
 * @param {number} limitSeconds - The time limit in seconds for exam mode, 0 for practice mode.
 * @param {Function} checkAnswersCallback - Callback function to call when time runs out in exam mode. // <--- ADD THIS PARAMETER
 */
export function startTimer(limitSeconds = 0, checkAnswersCallback) { // <--- ADD checkAnswersCallback PARAMETER
    clearInterval(getTimerInterval()); // Clear any existing timer

    if (limitSeconds > 0) { // Exam mode: countdown
        let remainingSeconds = limitSeconds;
        timerDisplay.textContent = formatTime(remainingSeconds);

        const interval = setInterval(() => {
            remainingSeconds--;
            timerDisplay.textContent = formatTime(remainingSeconds);

            if (remainingSeconds <= 0) {
                clearInterval(getTimerInterval());
                alert("Time's up! Submitting your answers.");
                if (checkAnswersCallback) { // <--- CALL THE CALLBACK
                    checkAnswersCallback();
                }
            }
        }, 1000);
        setTimerInterval(interval);
    } else { // Practice mode: count up
        setStartTime(new Date());
        timerDisplay.textContent = 'Time: 00:00';
        const interval = setInterval(updatePracticeTimer, 1000);
        setTimerInterval(interval);
    }
}

export function stopTimer() {
    clearInterval(getTimerInterval());
    setTimerInterval(null); // Clear the interval ID
}