"USE STRICT";

const usernameLength = 20;
const passwordLength = 20;


const inputAlert = document.querySelector('#inputAlert');
const inputAlertTextH3 = document.querySelector('#inputAlertText');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const userFirstName = document.getElementById('name');
const surname = document.getElementById('surename');

// Checks for symbols in input
const regex = /[#$%^&*()\[\]{};':"\\|<>\/?]/g;

username.addEventListener('input', () => {
    let usernameValue = username.value;
    const foundInUsername = usernameValue.match(regex);
    if(foundInUsername){
        inputAlert.style.display = "flex";
        inputAlertTextH3.textContent = "Cannot use this symbols in username field: #$%^&*()\[\]{};':\"\\|<>\/?";

        let millisecondsToWait = 5000;
            setTimeout(function() {
                inputAlert.style.display = "none";
            }, millisecondsToWait);
    };

    // Check for input lenth - title
    if(usernameValue.length > usernameLength){
        // obj["note_title"] = username.substring(0, userNameLength)
    }
});

password.addEventListener('input', () => {
    let passwordValue = password.value;
    const foundInPassword = passwordValue.match(regex);

    if(foundInPassword){
        inputAlert.style.display = "flex";
        inputAlertTextH3.textContent = "Cannot use this symbols in password field: #$%^&*()\[\]{};':\"\\|<>\/?";
    
        let millisecondsToWait = 5000;
            setTimeout(function() {
                inputAlert.style.display = "none";
            }, millisecondsToWait);
    };

    
    if(passwordValue.length > passwordLength){
        // obj["note_title"] = username.substring(0, userNameLength)
    }
});

email.addEventListener('input', () =>{
    let emailValue = email.value;
    const foundInEmail = emailValue.match(regex);
    if(foundInEmail){
        inputAlert.style.display = "flex";
        inputAlertTextH3.textContent = "Cannot use this symbols in email field: #$%^&*()\[\]{};':\"\\|<>\/?";
    
        let millisecondsToWait = 5000;
            setTimeout(function() {
                inputAlert.style.display = "none";
            }, millisecondsToWait);
    };
});

userFirstName.addEventListener('input', () => {
    let userFirstNameValue = userFirstName.value;
    const foundInName = userFirstNameValue.match(regex);
    if(foundInName){
        inputAlert.style.display = "flex";
        inputAlertTextH3.textContent = "Cannot use this symbols in name field: #$%^&*()\[\]{};':\"\\|<>\/?";
    
        let millisecondsToWait = 5000;
            setTimeout(function() {
                inputAlert.style.display = "none";
            }, millisecondsToWait);
    };
});

surname.addEventListener('input', () => {
    let surnameValue = surname.value;
    const foundInSurname = surnameValue.match(regex);
    if(foundInSurname){
        inputAlert.style.display = "flex";
        inputAlertTextH3.textContent = "Cannot use this symbols in surname field: #$%^&*()\[\]{};':\"\\|<>\/?";
    
        let millisecondsToWait = 5000;
            setTimeout(function() {
                inputAlert.style.display = "none";
            }, millisecondsToWait);
    };
});