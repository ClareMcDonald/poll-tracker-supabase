import { renderPoll } from '../render-utils.js';
import { getPastPolls } from '../fetch-utils.js';

const newPollForm = document.querySelector('#new-poll');
const currentQuestionEl = document.querySelector('#current-question');
const currentOptionAEl = document.querySelector('#option-a-title');
const currentOptionAVotesEl = document.querySelector('#option-a-votes');
const voteAButton = document.querySelector('#vote-a');
const currentOptionBEl = document.querySelector('#option-b-title');
const currentOptionBVotesEl = document.querySelector('#option-b-votes');
const voteBButton = document.querySelector('#vote-b');
const finishPollButton = document.querySelector('#finsih-poll');
const pastPollsEl = document.querySelector('#past-polls');

console.log(currentOptionBVotesEl, currentOptionAVotesEl);
//console.log(newPollForm, voteAButton, voteBButton, currentPollEl, pastPollsEl);

let question = '';
let optionAName = '';
let optionBName = '';
let optionAVotes = 0;
let optionBVotes = 0;

window.addEventListener('load', async() => {
    await getPastPolls();

    displayPolls();
});

newPollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(newPollForm);
    const question = data.get('question');
    const optionA = data.get('option-A');
    const optionB = data.get('option-B');
    
    currentQuestionEl.textContent = question;
    currentOptionAEl.textContent = optionA;
    currentOptionBEl.textContent = optionB;

});

voteAButton.addEventListener('click', () => {
    optionAVotes++;

    currentOptionAVotesEl.textContent = optionAVotes;
}); 

voteBButton.addEventListener('click', () => {
    optionBVotes++;

    currentOptionBVotesEl.textContent = optionBVotes;
});



function displayCurrentPoll() {

}

async function displayPolls() {
    const polls = await getPastPolls();

    for (let poll of polls) {
        const pollItem = renderPoll(poll);

        pastPollsEl.append(pollItem);
    }
}