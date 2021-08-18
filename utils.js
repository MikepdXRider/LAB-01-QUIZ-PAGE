const resultDiv = document.getElementById('result-div');
const attemptCounterEl = document.getElementById('attempt-counter');
const passCounterEl = document.getElementById('pass-counter');
const failCounterEl = document.getElementById('fail-counter');

const countsAsAYes = (userInput) => {
    return userInput.charAt(0).toLowerCase() === 'y';
};

export const askForName = () => {
    const firstName = prompt('What\'s your first name?');
    const lastName = prompt('What\'s your last name?');
    return [firstName, lastName];
};

// initialize state
let attemptCounter = 0;
let passCounter = 0;
let failCounter = 0;

export const askQuestions = (askForNameArray) => {
    const firstName = askForNameArray[0];
    const lastName = askForNameArray[1];
    const userConfirmation = confirm(`Thanks ${firstName} ${lastName}! Are you ready for the quiz?`);
    if (userConfirmation) {
        let correctAnswer = 0;
        attemptCounter++;
        const q1 = prompt('Honey wine was produced in ancient times?');
        if (countsAsAYes(q1)) correctAnswer++;
        const q2 = prompt('Mead is created by fermenting honey with water?');
        if (countsAsAYes(q2)) correctAnswer++;
        const q3 = prompt('Mead is the product of fermented berries or certain other fruits?');
        if (!countsAsAYes(q3)) correctAnswer++;
        alert('Quiz complete! Results are printing to page!');
        return [firstName, lastName, correctAnswer];
    } else {
        return;
    }
};

export const setResults = (askQuestionsArray) => {
    const fName = askQuestionsArray[0];
    const lName = askQuestionsArray[1];
    const cAnswer = askQuestionsArray[2];
    resultDiv.textContent = `Okay ${fName} ${lName}, you got ${cAnswer}/3 correct.`;
    if (cAnswer === 3) {
        passCounter++ ;
        resultDiv.style.color = 'green';
        resultDiv.textContent += ' Great work! You got 100% of the questions right.';
    } else {
        failCounter++;
        let percentage = Math.floor((cAnswer / 3) * 100);
        resultDiv.style.color = 'red';
        resultDiv.textContent += ` You only got ${percentage}% of the questions right.`;
    }
    attemptCounterEl.textContent = `Attempts: ${attemptCounter}`;
    passCounterEl.textContent = `Pass: ${passCounter}`;
    failCounterEl.textContent = `Fail: ${failCounter}`;
};

export const reset = () => {
    attemptCounterEl.textContent = `Attempts: 0`;
    passCounterEl.textContent = `Pass: 0`;
    failCounterEl.textContent = `Fail: 0`;
    resultDiv.textContent = '';
};