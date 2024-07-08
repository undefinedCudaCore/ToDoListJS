"USE STRICT";

import loadNotes from './get-notes.js';
import loadProjectNotes from './note-display/get-project-notes.js';
import loadBusinessNotes from './note-display/get-business-notes.js';
import loadPersonalNotes from './note-display/get-personal-notes.js';

function myNotebookEvents(){
    const myNotebookFormAdd = document.querySelector("#notebook-form");
    const myNotebookFormUpdate = document.querySelector("#notebook-form-update");
    const myNotebookFormDelete = document.querySelector("#notebook-form-delete");
    const addItem = document.querySelector("#add-note");
    const updateItem = document.querySelector("#edit-note");
    const deleteItem = document.querySelector("#delete-note");
    const exitForm = document.querySelector("#form-exit");
    const exitUpdateForm = document.querySelector("#update-form-exit");
    const exitDeleteForm = document.querySelector("#delete-form-exit");
    const allNotesBtn = document.querySelector("#all-notes");
    const allProjectNotesBtn = document.querySelector("#all-project-notes");
    const allBusinessNotesBtn = document.querySelector("#all-business-notes");
    const allPersonalNotesBtn = document.querySelector("#all-personal-notes");
    const logOut = document.querySelector("#logOut");

    logOut.addEventListener('click', () => {
        window.location.href = "../index.html";
    });

    addItem.addEventListener('click', () => {
        loadNotes("https://testapi.io/api/teklithuania/resource/notes");
        allNotesBtn.className = "active";
        allProjectNotesBtn.className = "";
        allBusinessNotesBtn.className = "";
        allPersonalNotesBtn.className = "";

        document.querySelector(".form-add-title-input").value = "";
        document.querySelector(".form-add-content-input").value = "";
        
        myNotebookFormAdd.style.display = "flex";
    });
    
    updateItem.addEventListener('click', () => {
        loadNotes("https://testapi.io/api/teklithuania/resource/notes");
        allNotesBtn.className = "active";
        allProjectNotesBtn.className = "";
        allBusinessNotesBtn.className = "";
        allPersonalNotesBtn.className = "";
        
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
    
    allNotesBtn.addEventListener('click', () => {
        allNotesBtn.className = "active";
        allProjectNotesBtn.className = "";
        allBusinessNotesBtn.className = "";
        allPersonalNotesBtn.className = "";

        loadNotes("https://testapi.io/api/teklithuania/resource/notes");
    });

    allProjectNotesBtn.addEventListener('click', () => {
        allNotesBtn.className = "";
        allProjectNotesBtn.className = "active";
        allBusinessNotesBtn.className = "";
        allPersonalNotesBtn.className = "";
        loadProjectNotes("https://testapi.io/api/teklithuania/resource/notes");
    });
    
    allBusinessNotesBtn.addEventListener('click', () => {
        allNotesBtn.className = "";
        allProjectNotesBtn.className = "";
        allBusinessNotesBtn.className = "active";
        allPersonalNotesBtn.className = "";
        loadBusinessNotes("https://testapi.io/api/teklithuania/resource/notes");
    });

    allPersonalNotesBtn.addEventListener('click', () => {
        allNotesBtn.className = "";
        allProjectNotesBtn.className = "";
        allBusinessNotesBtn.className = "";
        allPersonalNotesBtn.className = "active";
        loadPersonalNotes("https://testapi.io/api/teklithuania/resource/notes");
    });
};

export default myNotebookEvents;