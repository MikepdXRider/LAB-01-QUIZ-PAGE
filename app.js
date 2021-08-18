// import functions and grab DOM elements
import { askForName, askQuestions, setResults, reset } from './utils.js';

const quizButtonEl = document.getElementById('quiz-button');
const resetButtonEl = document.getElementById('reset-button');

// set event listeners 
quizButtonEl.addEventListener('click', () =>{  
    let nameArray = askForName();
    let questionsArray = askQuestions(nameArray);
    setResults(questionsArray);
});

resetButtonEl.addEventListener('click', () => {
    reset();
});
