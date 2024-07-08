"USE STRICT";

const registrationFormExit = document.querySelector("#register-form-exit");
const registrationForm = document.querySelector("#registrationForm");

registrationFormExit.addEventListener('click', () =>{
    registrationForm.style.display = "none";
});

function sendUserData(url) {
    const registrationForm = document.querySelector("#registrationForm");
    let data = new FormData(registrationForm);
    let obj = {};
    
    data.forEach((value, key) => {
        obj[key] = value.trim();
    });

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(obj),
    };

     fetch(url, options)
    .then((response) => {
        if(!response.ok){
            throw new Error("Server response wasnt't OK");
        } else {
            window.location.href = "./views/app.html";
            return response.json();
        };
    })
};

function addUser(urlGiven){
    const regBtn = document.querySelector("#registrationBtn");
    const registrationForm = document.querySelector("#registrationForm");
    
    regBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendUserData(urlGiven);

        registrationForm.style.display = "none";
    });
};

addUser("https://testapi.io/api/teklithuania/resource/users");

const registerBtnMain = document.querySelector("#register-btn");

registerBtnMain.addEventListener('click', () => {
    const registrationForm = document.querySelector("#registrationForm");
    registrationForm.style.display = "flex";
});