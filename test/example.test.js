// IMPORT MODULES under test here:
import { countsAsAYes } from '../utils.js';

const test = QUnit.test; 

test('Input Yes expecting yes', (expect) => {
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
