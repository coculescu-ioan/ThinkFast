// src/js/modules/fileLoader.js
import { setQuestions } from './state.js';
import { maxQuestionsSpan, numQuestionsInput, startQuizBtn } from './domElements.js';
import { setInitialUIState } from './uiHandlers.js';

export function handleFileLoad(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const loadedData = JSON.parse(event.target.result);
                // Basic validation for loaded JSON structure
                if (Array.isArray(loadedData) && loadedData.every(q =>
                    q.id !== undefined && typeof q.question === 'string' &&
                    Array.isArray(q.options) && q.options.length > 0 &&
                    typeof q.answer === 'string' && typeof q.explanation === 'string'
                )) {
                    setQuestions(loadedData);
                    console.log("Question set loaded successfully:", loadedData);
                    alert(`Successfully loaded ${loadedData.length} questions!`);

                    // Update settings and enable start button
                    maxQuestionsSpan.textContent = loadedData.length;
                    numQuestionsInput.max = loadedData.length;
                    numQuestionsInput.value = Math.min(loadedData.length, parseInt(numQuestionsInput.value)); // Adjust input value if it exceeds new max

                    startQuizBtn.disabled = false;
                } else {
                    alert("Error: Invalid JSON format. Please ensure it's an array of question objects with 'id', 'question', 'options', 'answer', and 'explanation'.");
                    setQuestions([]); // Clear questions on invalid format
                    setInitialUIState(); // Reset UI state to reflect no questions loaded
                }
            } catch (error) {
                alert("Error parsing JSON file. Please ensure it's a valid JSON format.");
                console.error("Error parsing JSON:", error);
                setQuestions([]); // Clear questions on parsing error
                setInitialUIState(); // Reset UI state to reflect no questions loaded
            }
        };
        reader.readAsText(file);
    }
}