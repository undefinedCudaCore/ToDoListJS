"USE STRICT";

//Create dom elements
const welcomeContainer = document.createElement("main");
const welcomeContainerDiv = document.createElement("div");
const greeting = document.createElement("h2");
const loginBtn = document.createElement("a");
const loginSpan = document.createElement("span");

//Assign classes / id's for created elements
welcomeContainer.id = "welcome-container";
welcomeContainerDiv.id = "welcome-container-child";
greeting.id = "greeting-h2";
loginBtn.id = "login-btn";
loginSpan.id = "login-btn-span";

//Assign options of elements
greeting.textContent = "Welcome to My Notebook";
loginBtn.href = "./views/app.html";
loginSpan.textContent = "Login";

//Append elements
welcomeContainer.appendChild(welcomeContainerDiv);
welcomeContainerDiv.appendChild(greeting);
welcomeContainerDiv.appendChild(loginBtn);
loginBtn.appendChild(loginSpan);

//Prepend to body
document.body.prepend(welcomeContainer);
