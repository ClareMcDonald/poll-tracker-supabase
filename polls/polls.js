import { renderPoll } from '../render-utils.js';
import { savePoll, getPastPolls } from '../fetch-utils.js';

const newPollForm = document.querySelector('#new-poll');
const currentQuestionEl = document.querySelector('#current-question');
const currentOptionAEl = document.querySelector('#option-a-title');
const currentOptionAVotesEl = document.querySelector('#option-a-votes');
const voteAButton = document.querySelector('#vote-a');
const currentOptionBEl = document.querySelector('#option-b-title');
const currentOptionBVotesEl = document.querySelector('#option-b-votes');
const voteBButton = document.querySelector('#vote-b');
const finishPollButton = document.querySelector('#finish-poll');
const pastPollsEl = document.querySelector('#past-polls');

console.log(currentOptionBVotesEl, currentOptionAVotesEl);
//console.log(newPollForm, voteAButton, voteBButton, currentPollEl, pastPollsEl);

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

window.addEventListener('load', async() => {
    await getPastPolls();

    displayPolls();
});

newPollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(newPollForm);
    question = data.get('question');
    optionA = data.get('option-A');
    optionB = data.get('option-B');
    
    currentQuestionEl.textContent = question;
    currentOptionAEl.textContent = optionA;
    currentOptionBEl.textContent = optionB;

    newPollForm.reset();
});

voteAButton.addEventListener('click', () => {
    votesA++;

    currentOptionAVotesEl.textContent = votesA;
}); 

voteBButton.addEventListener('click', () => {
    votesB++;

    currentOptionBVotesEl.textContent = votesB;
});

finishPollButton.addEventListener('click', async () => {
    console.log(question, optionA, optionB, votesA, votesB);
    const finishPoll = await savePoll(question, optionA, optionB, votesA, votesB);
    console.log(finishPoll);
    displayPolls();
    pastPollsEl.textContent = '';
    //current
});

async function displayPolls() {
    const polls = await getPastPolls();

    pastPollsEl.textContent = '';

    for (let poll of polls) {
        const pollItem = renderPoll(poll);

        pastPollsEl.append(pollItem);
        console.log(pastPollsEl);
    }
}