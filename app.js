// import functions and grab DOM elements
import { askForName, askQuestions, setResults } from './utils.js';
const quizButtonEl = document.getElementById('quiz-button');

// set event listeners 
quizButtonEl.addEventListener('click', () =>{  
    let aFN = askForName();
    let aQ = askQuestions(aFN);
    setResults(aQ);
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
