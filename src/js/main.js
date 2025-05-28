// src/js/main.js
'use strict';

import {
    addQuestionsBtn, startQuizBtn, quizModeSelect, numQuestionsInput, timeLimitInput,
    prevQuestionBtn, nextQuestionBtn
} from './modules/domElements.js';
import {
    setQuizMode, setNumQuestionsToAsk, setTimeLimitMinutes, setCurrentQuestionIndex,
    currentQuestionIndex, questions, shuffledQuestions, quizEnded,
    updateUserAnswer
} from './modules/state.js';
// Import all quizLogic functions directly
import * as quizLogic from './modules/quizLogic.js'; // Import all as a namespace
import * as uiHandlers from './modules/uiHandlers.js'; // Import all as a namespace
import { handleFileLoad } from './modules/fileLoader.js';


// Set up the circular dependencies by passing references
// This must be done BEFORE initializeQuiz or other functions that use these callbacks are called.
// It's crucial that quizLogic gets references to *its own* functions (displayQuestion, checkAnswers, resetQuiz)
// AND uiHandlers functions (updateNavigationButtons, updateQuestionBoxStatus, generateQuestionNavPanel)
// and vice-versa, but via injection through main.js.

// Here, we define the concrete functions
const displayQuestionConcrete = (index) => quizLogic.displayQuestion(index);
const checkAnswersConcrete = () => quizLogic.checkAnswers();
const resetQuizConcrete = () => quizLogic.resetQuiz();

// Now, inject these concrete functions into quizLogic and uiHandlers
quizLogic.setCallbacks(displayQuestionConcrete, checkAnswersConcrete, resetQuizConcrete);


// --- Event Listeners for UI Controls ---

addQuestionsBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = handleFileLoad;
    input.click();
});

quizModeSelect.addEventListener('change', (event) => {
    setQuizMode(event.target.value);
    uiHandlers.setInitialUIState(); // Call through namespace
});

numQuestionsInput.addEventListener('change', (event) => {
    let value = parseInt(event.target.value);
    const max = parseInt(numQuestionsInput.max);

    if (isNaN(value) || value < 1) {
        value = 1;
    } else if (value > max) {
        value = max;
    }
    numQuestionsInput.value = value;
    setNumQuestionsToAsk(value);
});

timeLimitInput.addEventListener('change', (event) => {
    let value = parseInt(event.target.value);
    if (isNaN(value) || value < 1) {
        value = 1;
    }
    timeLimitInput.value = value;
    setTimeLimitMinutes(value);
});

startQuizBtn.addEventListener('click', () => {
    if (questions.length === 0) {
        alert("Please load a question set first using the 'Add Question Set' button.");
        return;
    }
    if (numQuestionsInput.value > questions.length || numQuestionsInput.value <= 0) {
        alert(`Please enter a valid number of questions between 1 and ${questions.length}.`);
        return;
    }

    console.log("Attempting to initialize quiz...");
    quizLogic.initializeQuiz(); // Call initializeQuiz from the namespace
    console.log("initializeQuiz called.");
});

prevQuestionBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        displayQuestionConcrete(currentQuestionIndex); // Use the concrete function
        uiHandlers.updateNavigationButtons(displayQuestionConcrete, checkAnswersConcrete); // Pass callbacks
    }
});

nextQuestionBtn.addEventListener('click', () => {
    if (!quizEnded) {
        uiHandlers.updateQuestionBoxStatus(currentQuestionIndex); // Call from uiHandlers namespace
    }

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        displayQuestionConcrete(currentQuestionIndex); // Use the concrete function
        uiHandlers.updateNavigationButtons(displayQuestionConcrete, checkAnswersConcrete); // Pass callbacks
    } else if (currentQuestionIndex === shuffledQuestions.length - 1 && !quizEnded) {
        checkAnswersConcrete(); // Use the concrete function
    }
});


// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    uiHandlers.setInitialUIState(); // Call through namespace
    uiHandlers.addQuizEventListeners(resetQuizConcrete); // Pass the concrete resetQuiz function
});