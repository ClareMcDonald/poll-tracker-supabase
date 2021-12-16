const newPollForm = document.querySelector('#new-poll');
const voteAButton = document.querySelector('#vote-a');
const voteBButton = document.querySelector('#vote-b');
const currentPollEl = document.querySelector('#current-poll');
const pastPollsEl = document.querySelector('#past-polls');

//console.log(newPollForm, voteAButton, voteBButton, currentPollEl, pastPollsEl);
let optionAName = '';
let optionBName = '';
let optionAVotes = 0;
let optionBVotes = 0;

window.addEventListener('load', async() => {
    await getpastPolls();

    displayPolls();
});

voteAButton.addEventListener('click', () => {
    optionAVotes++;

    displayCurrentPoll();
}); 

voteBButton.addEventListener('click', () => {
    optionBVotes++;

    displayCurrentPoll();
});



function displayCurrentPoll() {

}

function displayPolls() {
    
}