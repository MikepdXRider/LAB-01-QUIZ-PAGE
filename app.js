// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const quizButtonEl = document.getElementById('quiz-button');
const resultDiv = document.getElementById('result-div');
// const attemptCounterEl = document.getElementById('attempt-counter');
// const passCounterEl = document.getElementById('pass-counter');
// const failCounterEl = document.getElementById('fail-counter');

// initialize state
// let attemptCounter = 0;
// let passCounter = 0;
// let failCounter = 0;

// set event listeners 
quizButtonEl.addEventListener('click', () =>{
    // get user input
    const firstName = prompt('What\'s your first name?');
    const lastName = prompt('What\'s your last name?');
    const userConfirmation = confirm('Are you ready for the quiz?');
    if (userConfirmation) {
        let correctAnswer = 0;
        const q1 = prompt('Honey wine was produced in ancient times?');
        if (countsAsAYes(q1)) correctAnswer++;
        const q2 = prompt('Mead is created by fermenting honey with water?');
        if (countsAsAYes(q2)) correctAnswer++;
        const q3 = prompt('Mead is the product of fermented berries or certain other fruits?');
        if (!countsAsAYes(q3)) correctAnswer++;
        alert('Quiz complete! Results are printing to page!');
        // PROBLEM: ${} is not working as expected.
        resultDiv.textContent = `Okay ${firstName} ${lastName}, you got ${correctAnswer}/3 correct.`;
    } else {
        return;
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
