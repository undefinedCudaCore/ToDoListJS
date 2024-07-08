"USE STRICT";

const loginButton = document.querySelector("#login-btn");
const loginForm = document.querySelector("#loginForm");

loginButton.addEventListener('click', () => {

    loginForm.style.display = "flex";
});

const loginFormExit = document.querySelector("#login-form-exit");

loginFormExit.addEventListener('click', () =>{
    loginForm.style.display = "none";
});

const maxParagraphLength = 100;
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
const noteElement = document.querySelector("#content"); //Is this one good here

function getUserCredentials(url) {
    const loginForm = document.querySelector("#loginForm");
    let data = new FormData(loginForm);
    let obj = {};
    
    data.forEach((value, key) => {
        obj[key] = value.trim();
    });


    fetch(url, options)
    .then((response) => {
        if(!response.ok){
            throw new Error("Server response wasnt't OK");
        } else {
            return response.json();
        };
    })
    .then((noteData) => {

        for (const element of noteData.data) {
            if(obj.login_username === element.username && obj.login_password === element.password){
                window.location.href = "./views/app.html";
                break;
            }
            else{
                alert("Wrong user credentials, please try again!!!");
                break;
            }
        }
    })
};

function loginUser(urlGiven){
    const regBtn = document.querySelector("#loginBtn");
    const loginForm = document.querySelector("#loginForm");
    
    regBtn.addEventListener('click', (e) => {
        e.preventDefault();
        getUserCredentials(urlGiven);
    
        document.querySelector("#login_username").value = "";
        document.querySelector("#login_password").value = "";
        loginForm.style.display = "none";
    });
};

loginUser("https://testapi.io/api/teklithuania/resource/users");