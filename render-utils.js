export function renderPoll(poll) {
    const pollEl = document.createElement('div');
    const questionEl = document.createElement('p');
    const optionAEl = document.createElement('p');
    const optionBEl = document.createElement('p');
    const votesAEl = document.createElement('p');
    const votesBEl = document.createElement('p');

    pollEl.classList.add('poll-item');

    questionEl.textContent = poll.question;
    optionAEl.textContent = poll.option_a;
    optionBEl.textContent = poll.option_b;
    votesAEl.textContent = poll.votes_a;
    votesBEl.textContent = poll.votes_b;

    pollEl.append(questionEl, optionAEl, votesAEl, optionBEl, votesBEl);

    return pollEl;
}