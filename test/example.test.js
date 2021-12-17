// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPoll } from '../render-utils.js';

const test = QUnit.test;

test('renderPoll function should create 5 p tags and div and append all p to div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
