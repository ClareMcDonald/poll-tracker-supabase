import { renderPoll } from '../render-utils.js';
import { checkLoggedIn, savePoll, getPastPolls, logout } from '../fetch-utils.js';

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
const logOutButton = document.querySelector('#logout');

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

window.addEventListener('load', async() => {
    checkLoggedIn();
    await getPastPolls();

    displayPolls();
});

logOutButton.addEventListener('click', async() => {
    await logout();
});

newPollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(newPollForm);
    question = data.get('question');
    optionA = data.get('option-A');
    optionB = data.get('option-B');
    
    displayCurrentPollEl(); 

    newPollForm.reset();
});

voteAButton.addEventListener('click', () => {
    votesA++;

    displayCurrentPollEl();
}); 

voteBButton.addEventListener('click', () => {
    votesB++;

    displayCurrentPollEl();
});

finishPollButton.addEventListener('click', async () => {
    const finishPoll = await savePoll(question, optionA, optionB, votesA, votesB);

    displayPolls();
    pastPollsEl.textContent = '';
});

function displayCurrentPollEl() {
    currentQuestionEl.textContent = question;
    currentOptionAEl.textContent = optionA;
    currentOptionBEl.textContent = optionB;
    currentOptionAVotesEl.textContent = votesA;
    currentOptionBVotesEl.textContent = votesB;
}

async function displayPolls() {
    const polls = await getPastPolls();

    pastPollsEl.textContent = '';

    for (let poll of polls) {
        const pollItem = renderPoll(poll);

        pastPollsEl.append(pollItem);
    }
}