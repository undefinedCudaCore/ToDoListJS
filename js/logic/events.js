"USE STRICT";

import createAddNoteForm from '../logic/html-build/forms/create-add-item-form.js';

function myNotebookEvents(){
    const myNotebookFormAdd = document.querySelector("#notebook-form");
    const myNotebookFormUpdate = document.querySelector("#notebook-form-update");
    const myNotebookFormDelete = document.querySelector("#notebook-form-delete");
    const addItem = document.querySelector("#add-note");
    const updateItem = document.querySelector("#edit-note");
    const deleteItem = document.querySelector("#delete-note");
    const exitForm = document.querySelector("#form-exit")
    const exitUpdateForm = document.querySelector("#update-form-exit")
    const exitDeleteForm = document.querySelector("#delete-form-exit")

    addItem.addEventListener('click', () => {

        document.querySelector(".form-add-title-input").value = "";
        document.querySelector(".form-add-content-input").value = "";
        
        myNotebookFormAdd.style.display = "flex";
    });
    
    updateItem.addEventListener('click', () => {
        document.querySelector(".form-update-id-input").value = "";
        document.querySelector(".form-update-title-input").value = "";
        document.querySelector(".form-update-content-input").value = "";
        myNotebookFormUpdate.style.display = "flex";
    });
    
    deleteItem.addEventListener('click', () => {  
        document.querySelector(".form-delete-id-input").value = "";

        myNotebookFormDelete.style.display = "flex";
    });

    exitForm.addEventListener('click', () => {
        myNotebookFormAdd.style.display = "none";
    });

    exitUpdateForm.addEventListener('click', () => {
        myNotebookFormUpdate.style.display = "none";
    });
    exitDeleteForm.addEventListener('click', () => {
        myNotebookFormDelete.style.display = "none";
    });
};

export default myNotebookEvents;