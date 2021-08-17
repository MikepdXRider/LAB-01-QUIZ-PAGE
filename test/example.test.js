// IMPORT MODULES under test here:
import { countsAsAYes } from '../utils.js';

const test = QUnit.test; 

test('Input Yes expecting True', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('Yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Input No expecting False', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('No');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
