// import functions and grab DOM elements
import { signIn, signUp } from './fetch-utils.js';

const signInForm = document.querySelector('#signin');
const signUpForm = document.querySelector('#signup');

//console.log(signInForm, signUpForm);


// let state

// set event listeners
signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(signInForm);
    const email = data.get('email-input-in');
    const password = data.get('password-input-in');

    await signIn(email, password);

    window.location.href = './polls';

});

signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);
    const email = data.get('email-sign-up');
    const password = data.get('password-sign-up');

    await signUp(email, password);

    window.location.href = './polls';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
