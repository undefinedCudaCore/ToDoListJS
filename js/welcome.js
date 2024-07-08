"USE STRICT";

//Create dom elements
const welcomeContainer = document.createElement("main");
const welcomeContainerDiv = document.createElement("div");
const greeting = document.createElement("h2");
const loginBtn = document.createElement("a");
const loginSpan = document.createElement("span");
const registerBtn = document.createElement("a");
const registerSpan = document.createElement("span");

//Assign classes / id's for created elements
welcomeContainer.id = "welcome-container";
welcomeContainerDiv.id = "welcome-container-child";
greeting.id = "greeting-h2";
loginBtn.id = "login-btn";
loginSpan.id = "login-btn-span";
registerBtn.id = "register-btn";
registerSpan.id = "register-btn-span";

//Assign options of elements
greeting.textContent = "Welcome to My Notebook";
loginSpan.textContent = "Login";
registerSpan.textContent = "Register";

//Append elements
welcomeContainer.appendChild(welcomeContainerDiv);
welcomeContainerDiv.appendChild(greeting);
welcomeContainerDiv.appendChild(loginBtn);
welcomeContainerDiv.appendChild(registerBtn);
loginBtn.appendChild(loginSpan);
registerBtn.appendChild(registerSpan);

//Prepend to body
document.body.prepend(welcomeContainer);