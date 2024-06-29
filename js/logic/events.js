"USE STRICT";

function myNotebookEvents(){
    const myNotebookForm = document.querySelector("#notebook-form");
    const addItem = document.querySelector("#add-note");
    const exitForm = document.querySelector("#form-exit")

    addItem.addEventListener('click', () => {
        myNotebookForm.style.display = "flex";
    });

    exitForm.addEventListener('click', () => {
        myNotebookForm.style.display = "none";
    });
};

export default myNotebookEvents;