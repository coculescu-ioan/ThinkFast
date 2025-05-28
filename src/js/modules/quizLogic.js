// src/js/modules/quizLogic.js
import {
    testContainer, resultsDiv, timerDisplay, questionBoxesContainer, welcomeScreen, quizLayout
} from './domElements.js';
import {
    questions, shuffledQuestions, userAnswers, quizMode, numQuestionsToAsk, timeLimitMinutes, currentQuestionIndex, quizEnded,
    setCurrentQuestionIndex, setShuffledQuestions, setUserAnswers, setQuizEnded, updateUserAnswer
} from './state.js';
import { startTimer, stopTimer } from './timer.js';
import {
    generateQuestionNavPanel, updateQuestionNavHighlight, updateQuestionBoxStatus,
    updateNavigationButtons, addQuizEventListeners, setInitialUIState // Import setInitialUIState for resetQuiz
} from './uiHandlers.js';

// IMPORTANT: Declare these at the module scope so they are available to nested functions
// These will be assigned by the orchestrator (main.js)
let _displayQuestionCallback;
let _checkAnswersCallback;
let _resetQuizCallback;

// Setter functions to allow main.js to inject the callbacks
export function setCallbacks(displayQ, checkA, resetQ) {
    _displayQuestionCallback = displayQ;
    _checkAnswersCallback = checkA;
    _resetQuizCallback = resetQ;
}

/**
 * Initializes a new quiz session.
 * Resets quiz state, shuffles questions, and sets up the timer.
 */
export function initializeQuiz() {
    console.log("QUIZ_INIT: Entered initializeQuiz function.");

    setQuizEnded(false);
    setCurrentQuestionIndex(0);

    const actualNumQuestions = Math.min(numQuestionsToAsk, questions.length);
    const newShuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, actualNumQuestions);
    setShuffledQuestions(newShuffledQuestions);
    setUserAnswers({});

    console.log("QUIZ_INIT: Questions shuffled and userAnswers initialized. Shuffled count:", newShuffledQuestions.length);

    newShuffledQuestions.forEach(q => {
        updateUserAnswer(q.id, null); // Initialize answers to null for all questions
    });

    // --- UI Transition Calls ---
    console.log("QUIZ_INIT: Attempting UI transition...");
    welcomeScreen.classList.add('hidden'); // This is the key line for welcomeScreen
    console.log('QUIZ_INIT: welcomeScreen class after add hidden:', welcomeScreen.className);

    quizLayout.classList.remove('hidden'); // This is the key line for quizLayout
    console.log('QUIZ_INIT: quizLayout class after remove hidden:', quizLayout.className);

    timerDisplay.classList.remove('hidden'); // This is the key line for timerDisplay
    console.log('QUIZ_INIT: timerDisplay class after remove hidden:', timerDisplay.className);
    // --- End UI Transition Calls ---

    console.log("QUIZ_INIT: Generating question nav panel...");
    generateQuestionNavPanel(_displayQuestionCallback, updateQuestionBoxStatus, _updateNavigationButtons);
    console.log("QUIZ_INIT: Question nav panel generated.");

    console.log("QUIZ_INIT: Displaying first question...");
    _displayQuestionCallback(currentQuestionIndex); // Use the injected callback here
    console.log("QUIZ_INIT: First question displayed.");

    if (quizMode === 'exam') {
        startTimer(timeLimitMinutes * 60, _checkAnswersCallback); // <--- MODIFIED: Pass the callback here
    } else {
        startTimer(0); // Practice mode counts up from 0
    }
    console.log("QUIZ_INIT: Timer started.");

    // Pass the resetQuizCallback to addQuizEventListeners
    addQuizEventListeners(_resetQuizCallback);
    // Call updateNavigationButtons with the correct callbacks
    _updateNavigationButtons(_displayQuestionCallback, _checkAnswersCallback); // Use the injected callbacks here
    console.log("QUIZ_INIT: Quiz initialized successfully.");
}

/**
 * Displays a specific question based on its index. (This function will be passed as a callback)
 * @param {number} index - The index of the question to display.
 */
export function displayQuestion(index) {
    testContainer.innerHTML = ''; // Clear previous question content

    if (index < 0 || index >= shuffledQuestions.length) {
        console.error("Attempted to display out-of-bounds question index:", index);
        return;
    }

    const q = shuffledQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.dataset.id = q.id;

    // Build options, pre-selecting if an answer exists and disabling if quiz has ended
    const optionsHTML = q.options.map(option => `
        <label>
            <input type="radio"
                    name="question${q.id}"
                    value="${option}"
                    ${userAnswers[q.id] === option ? 'checked' : ''}
                    ${quizEnded ? 'disabled' : ''}>
            ${option}
        </label>
    `).join('');

    const questionHTML = `
        <h3>${index + 1}: ${q.question}</h3>
        ${optionsHTML}
        <div class="explanation" id="explanation${q.id}" style="display: ${quizEnded ? 'block' : 'none'};">
            <p><strong>Explanation:</strong> ${q.explanation}</p>
        </div>
    `;

    questionDiv.innerHTML = questionHTML;
    testContainer.appendChild(questionDiv);

    // Add event listeners for radio buttons to update user answers
    const radioButtons = questionDiv.querySelectorAll(`input[name="question${q.id}"]`);
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            updateUserAnswer(q.id, event.target.value);
            console.log(`Answer for Q${q.id} updated: ${event.target.value}`);
            updateQuestionBoxStatus(currentQuestionIndex); // Update side panel box status
        });
    });

    // Apply immediate feedback styling if the quiz has ended
    if (quizEnded) {
        applyFeedbackStyling(q);
    }

    updateQuestionNavHighlight(index); // Highlight the current question in the side panel
}

/**
 * Applies correct/incorrect styling and reveals explanations after the quiz ends.
 * @param {object} q - The question object to apply feedback for.
 */
export function applyFeedbackStyling(q) {
    const options = document.querySelectorAll(`#testContainer input[name="question${q.id}"]`);
    const userAnswer = userAnswers[q.id];

    options.forEach(opt => {
        opt.disabled = true; // Ensure all options are disabled for review

        // Remove previous feedback classes before applying new ones (important for navigation)
        opt.parentElement.classList.remove('correct', 'incorrect');

        if (opt.value === q.answer) {
            opt.parentElement.classList.add('correct'); // Mark correct answer
        } else if (opt.value === userAnswer && userAnswer !== q.answer) {
            opt.parentElement.classList.add('incorrect'); // Mark user's incorrect answer
        }
    });

    const explanationDiv = document.getElementById(`explanation${q.id}`);
    if (explanationDiv) {
        explanationDiv.style.display = 'block'; // Show explanation
        explanationDiv.style.color = 'var(--text-light)'; // Ensure readability
    }
}

/**
 * Calculates quiz results and displays them.
 * Sets `quizEnded` flag and disables further input.
 */
export function checkAnswers() {
    stopTimer(); // Stop the timer
    setQuizEnded(true); // Mark quiz as ended

    // Update side panel question boxes with correct/incorrect status
    shuffledQuestions.forEach((q, index) => {
        const questionBox = questionBoxesContainer.children[index];
        if (questionBox) {
            questionBox.classList.remove('answered', 'not-answered', 'current'); // Clean up temporary states
            const userAnswer = userAnswers[q.id];
            if (userAnswer === q.answer) {
                questionBox.classList.add('correct');
            } else {
                questionBox.classList.add('incorrect');
            }
        }
    });

    // Calculate score
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    shuffledQuestions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        if (userAnswer === null) {
            unanswered++;
        } else if (userAnswer === q.answer) {
            correct++;
        } else {
            incorrect++;
        }
    });

    const totalQuestionsAsked = shuffledQuestions.length;
    const percentage = totalQuestionsAsked > 0 ? Math.round((correct / totalQuestionsAsked) * 100) : 0;

    // Display results
    resultsDiv.innerHTML = `
        <h2>Test Results</h2>
        <p>Correct: <span class="correct">${correct}</span></p>
        <p>Incorrect: <span class="incorrect">${incorrect}</span></p>
        <p>Unanswered: ${unanswered}</p>
        <p>Score: ${percentage}%</p>
        <p>${timerDisplay.textContent}</p>
    `;

    // Disable all radio inputs in the current question to prevent changes after submission
    document.querySelectorAll('.question input[type="radio"]').forEach(input => {
        input.disabled = true;
    });

    _updateNavigationButtons(_displayQuestionCallback, _checkAnswersCallback); // Use the injected callbacks here
    _displayQuestionCallback(currentQuestionIndex); // Re-display current question to show feedback
}

/**
 * Resets the quiz state and returns to the welcome screen.
 */
export function resetQuiz() {
    stopTimer();
    timerDisplay.classList.add('hidden');
    resultsDiv.innerHTML = '';
    setInitialUIState(); // Return to welcome screen
}

// Renamed and exported internal updateNavigationButtons for quizLogic to use
function _updateNavigationButtons(displayQuestionCallback, checkAnswersCallback) {
    updateNavigationButtons(displayQuestionCallback, checkAnswersCallback);
}