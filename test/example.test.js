// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPoll } from '../render-utils.js';

const test = QUnit.test;

const renderObj = {
    question: `What's your favorite color`,
    option_a: `blue`,
    option_b: `red`,
    votes_a: `9000`,
    votes_b: `2`
};

test('renderPoll function should create 5 p tags and div and append all p to div ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="poll-item"><p>What's your favorite color</p><p>blue</p><p>9000</p><p>red</p><p>2</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPoll(renderObj);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
