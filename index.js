
console.log('valid!');
 
const registrationForm = document.getElementById('registration');
const username = registrationForm['username'];
const email = registrationForm['email'];

console.log(username);

const errorDisplayDiv = document.getElementById('errorDisplay');

registrationForm.addEventListener('submit', validate);


/**
 * Main Validate function
 */
function validate(e) {
    const usernameValue = checkUserName();
    if (usernameValue === false) {
        e.returnValue = false;
        return false;
    }

    const emailValue = checkemail();
    if (emailValue === false) {
        e.returnValue = false;
        return false;
    }
}

// function validate(e) {
//     const emailValue = checkemail();
//     if (emailValue === false) {
//         e.returnValue = false;
//         return false;
//     }
// }
/**
 * Validate Username
 */
// function checkUserName() {
//     const twoUniqueChars = /^(?=.*(.).*\1).*$/;

//     if (!twoUniqueChars.test(username.value)) {
//         console.log('Provide two special characters');
//         username.focus();
//         return false;
//     }
//     return username.value;
// }

function checkUserName() {
    // Regex: checks for two at least unique characters 
    // and no special characters or whitespace
    const regex = /^(?=.*(.).*\1)[A-Za-z0-9]{2,}$/;

    // test regex
    console.log(regex.test(username.value));


    if (!regex.test(username.value)) {
        console.log('gere');
        errorDisplayDiv.innerHTML = '<small>Provide two special characters</small>';
        errorDisplayDiv.style.display = 'block';

        username.focus();
        return false;
    }
    else{
        return true;
    }
    return username.value;
}

function checkemail() {
    const Uniqueemail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

    if (!Uniqueemail.test(email.value)) {
        errorDisplayDiv.innerHTML = '<small>Provide Valid email address</small>';
        errorDisplayDiv.style.display = 'block';

        email.focus();
        return false;
    }
    return email.value;
}








