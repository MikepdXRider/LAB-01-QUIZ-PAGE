export const countsAsAYes = (userInput) => {
    return userInput.charAt(0).toLowerCase() === 'y';
};

const askForName = () => {
    const firstName = prompt('What\'s your first name?');
    const lastName = prompt('What\'s your last name?');
    return [firstName, lastName];
};

const askQuestions = (askforName()) => {
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

const setResults = (askQuestions()) => {
resultDiv.textContent = `Okay ${firstName} ${lastName}, you got ${correctAnswer}/3 correct.`;
if (correctAnswer === 3) {
    passCounter++ ;
    resultDiv.style.color = 'green';
    resultDiv.textContent += 'Great work! You got 100% of the questions right.';
} else {
    failCounter++;
    let percentage = Math.floor((correctAnswer / 3) * 100);
    resultDiv.style.color = 'red';
    resultDiv.textContent += `You only got ${percentage}% of the questions right.`;
}
attemptCounterEl.textContent = `Attempts: ${attemptCounter}`;
passCounterEl.textContent = `Pass: ${passCounter}`;
failCounterEl.textContent = `Fail: ${failCounter}`;
}