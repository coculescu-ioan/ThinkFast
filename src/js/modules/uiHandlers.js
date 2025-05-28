// src/js/modules/uiHandlers.js
import {
    prevQuestionBtn, nextQuestionBtn, resetQuizBtn,
    questionBoxesContainer, testContainer, resultsDiv, timerDisplay,
    welcomeScreen, quizLayout,
    startQuizBtn, quizModeSelect, numQuestionsInput, maxQuestionsSpan, timeLimitGroup, timeLimitInput,
    mainElement
} from './domElements.js';
import {
    questions, shuffledQuestions, userAnswers,
    quizMode, numQuestionsToAsk, timeLimitMinutes, currentQuestionIndex, quizEnded,
    setQuizMode, setNumQuestionsToAsk, setTimeLimitMinutes, setCurrentQuestionIndex, setQuizEnded
} from './state.js';

/**
 * Updates the visibility and text of navigation buttons based on current quiz state.
 * @param {Function} displayQuestionCallback - Callback to display a question.
 * @param {Function} checkAnswersCallback - Callback to check answers.
 */
export function updateNavigationButtons(displayQuestionCallback, checkAnswersCallback) {
    // Show/hide previous button based on current question index
    if (currentQuestionIndex === 0) {
        prevQuestionBtn.classList.add('hidden');
    } else {
        prevQuestionBtn.classList.remove('hidden');
    }

    // Determine text and visibility of next/submit button
    if (quizEnded) {
        // If quiz has ended, all questions are for review
        prevQuestionBtn.disabled = false;
        nextQuestionBtn.disabled = false;
        nextQuestionBtn.textContent = 'Review Next \u2192';
        prevQuestionBtn.textContent = '\u2190 Review Previous';
        nextQuestionBtn.classList.remove('hidden'); // Ensure it's visible for review
        prevQuestionBtn.classList.remove('hidden'); // Ensure it's visible for review


        // Hide navigation buttons if only one question or at the ends of review
        if (shuffledQuestions.length === 1) {
            prevQuestionBtn.classList.add('hidden');
            nextQuestionBtn.classList.add('hidden');
        } else if (currentQuestionIndex === shuffledQuestions.length - 1) {
            nextQuestionBtn.classList.add('hidden'); // Hide 'next' if at last question in review
        } else if (currentQuestionIndex === 0) {
            prevQuestionBtn.classList.add('hidden'); // Hide 'previous' if at first question in review
        }

        resetQuizBtn.classList.remove('hidden'); // Always show reset button after quiz ends
    } else {
        // If quiz is ongoing
        nextQuestionBtn.classList.remove('hidden'); // Ensure it's visible for an active quiz
        prevQuestionBtn.classList.remove('hidden'); // Ensure it's visible for an active quiz

        if (currentQuestionIndex === shuffledQuestions.length - 1) {
            nextQuestionBtn.textContent = 'Submit Answers';
        } else {
            nextQuestionBtn.textContent = 'Next \u2192';
        }
        prevQuestionBtn.textContent = '\u2190 Previous';

        resetQuizBtn.classList.add('hidden'); // Hide reset button during quiz
    }
}

/**
 * Generates the clickable question boxes in the side navigation panel.
 * @param {Function} displayQuestionCallback - Callback to display a question.
 * @param {Function} updateQuestionBoxStatusCallback - Callback to update question box status.
 * @param {Function} updateNavigationButtonsCallback - Callback to update navigation buttons.
 */
export function generateQuestionNavPanel(displayQuestionCallback, updateQuestionBoxStatusCallback, updateNavigationButtonsCallback) {
    questionBoxesContainer.innerHTML = ''; // Clear previous boxes
    shuffledQuestions.forEach((q, index) => {
        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');
        questionBox.textContent = index + 1; // Display 1-based index
        questionBox.dataset.index = index; // Store 0-based index for easy access

        // Set initial answered/not-answered status
        if (userAnswers[q.id] === null) {
            questionBox.classList.add('not-answered');
        } else {
            questionBox.classList.add('answered');
        }

        // Add click listener for direct question navigation
        questionBox.addEventListener('click', (event) => {
            const clickedIndex = parseInt(event.target.dataset.index);
            if (clickedIndex !== currentQuestionIndex) {
                // If quiz is ongoing, update status of the *previous* current question
                if (!quizEnded) {
                    updateQuestionBoxStatusCallback(currentQuestionIndex);
                }
                setCurrentQuestionIndex(clickedIndex);
                displayQuestionCallback(currentQuestionIndex);
                updateNavigationButtonsCallback();
            }
        });
        questionBoxesContainer.appendChild(questionBox);
    });
    updateQuestionNavHighlight(currentQuestionIndex); // Highlight the first question initially
}

/**
 * Updates the 'current' highlight on the question navigation panel.
 * @param {number} newIndex - The index of the question to highlight.
 */
export function updateQuestionNavHighlight(newIndex) {
    // Remove 'current' class from all boxes
    Array.from(questionBoxesContainer.children).forEach((box) => {
        box.classList.remove('current');
    });
    // Add 'current' class to the new current question box
    const currentBox = questionBoxesContainer.children[newIndex];
    if (currentBox) {
        currentBox.classList.add('current');
        // Scroll the current box into view if it's outside the scrollable area
        currentBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

/**
 * Updates the 'answered' or 'not-answered' status of a question box in the side panel.
 * @param {number} indexToUpdate - The index of the question box to update.
 */
export function updateQuestionBoxStatus(indexToUpdate) {
    const questionBox = questionBoxesContainer.children[indexToUpdate];
    if (questionBox && !quizEnded) { // Only update answered/not-answered if quiz isn't ended
        const qId = shuffledQuestions[indexToUpdate].id;
        if (userAnswers[qId] !== null) {
            questionBox.classList.add('answered');
            questionBox.classList.remove('not-answered');
        } else {
            questionBox.classList.remove('answered');
            questionBox.classList.add('not-answered');
        }
    }
}

/**
 * Sets the initial UI state, displaying the welcome screen.
 */
export function setInitialUIState() {
    console.log('UI_STATE: Entering setInitialUIState');

    welcomeScreen.classList.remove('hidden');
    console.log('UI_STATE: welcomeScreen after remove hidden:', welcomeScreen.className);

    quizLayout.classList.add('hidden');
    console.log('UI_STATE: quizLayout after add hidden:', quizLayout.className);

    timerDisplay.classList.add('hidden');
    console.log('UI_STATE: timerDisplay after add hidden:', timerDisplay.className);

    if (mainElement) {
        mainElement.classList.remove('hidden');
        console.log('UI_STATE: mainElement after remove hidden:', mainElement.className);
    }

    startQuizBtn.disabled = true; // Disabled until questions are loaded
    startQuizBtn.textContent = 'Start Quiz';
    resultsDiv.innerHTML = ''; // Clear results display
    timerDisplay.textContent = 'Time: 00:00'; // Reset timer display
    questionBoxesContainer.innerHTML = ''; // Clear side panel question boxes

    // Reset settings inputs to current app state values
    quizModeSelect.value = quizMode;
    numQuestionsInput.value = numQuestionsToAsk;
    timeLimitInput.value = timeLimitMinutes;

    // Toggle time limit input visibility based on quiz mode
    if (quizMode === 'practice') {
        timeLimitGroup.classList.add('hidden');
        console.log('UI_STATE: timeLimitGroup after add hidden (practice):', timeLimitGroup.className);
    } else {
        timeLimitGroup.classList.remove('hidden');
        console.log('UI_STATE: timeLimitGroup after remove hidden (exam):', timeLimitGroup.className);
    }

    // Update max questions span and input max attribute
    maxQuestionsSpan.textContent = questions.length;
    numQuestionsInput.max = questions.length;

    // Enable start quiz button if questions are loaded
    if (questions.length > 0) {
        startQuizBtn.disabled = false;
    } else {
        startQuizBtn.disabled = true;
    }
    console.log('UI_STATE: Exiting setInitialUIState');
}

/**
 * Adds or re-adds primary quiz-wide event listeners.
 * Used at quiz initialization to ensure they are active.
 * @param {Function} resetQuizCallback - Callback to reset the quiz.
 */
export function addQuizEventListeners(resetQuizCallback) {
    resetQuizBtn.removeEventListener('click', resetQuizCallback); // Remove to prevent multiple listeners
    resetQuizBtn.addEventListener('click', resetQuizCallback);
}