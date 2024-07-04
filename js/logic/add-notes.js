"USE STRICT";

import getTodaysDate from '../logic/todays-date.js';
import setLocalStorageArray from '../logic/helpers/saveLastDeletedNoteId.js';

const myNotebookForm = document.querySelector("#notebook-form");
const notebookForm = document.querySelector("#notebook-form");
const notebookFormSubmitBtn = document.querySelector("#notebook-form-submit");
const noteTitleLength = 45;

function sendData(url) {
    let data = new FormData(notebookForm);
    let obj = {};

    data.forEach((value, key) => {
        obj[key] = value.trim();
    });
    obj["type_all"] = "true";
    obj['creation_date'] = getTodaysDate();

    // Checks for symbols in input
    const regex = /[#$%^&*()\[\]{};':"\\|<>\/?]/g;
    const noteTitle = obj.note_title;
    const noteContent = obj.form_content;
    const foundInTitle = noteTitle.match(regex);
    const foundInContent = noteContent.match(regex);

    if(foundInTitle){
        obj["note_title"] = "Added not usable simbols, edit your note.";
    };
    if(foundInContent){
        obj["form_content"] = "Added not usable simbols, edit your note.";
    };

    // Check for input lenth - title
    if(noteTitle.length > noteTitleLength){
        obj["note_title"] = noteTitle.substring(0, noteTitleLength)
    }

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
            return response.json();
        };
    })
    .then((data) => {
        setLocalStorageArray(data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });


    return obj;
};

function displayNoteBeforeGetUpdateFromDB(object){
    const maxParagraphLength = 100;
    const noteElement = document.querySelector("#content");
    let newContent = object.form_content.toString();
    let htmlElement = "";
    //gets local storage array
    let localStorageArray = JSON.parse(localStorage.getItem('note-id')) || [];
    //gets last id from local storage and + 1
    let sessionItem =  localStorageArray[localStorageArray.length-1] + 1;
  
    if(object.form_content.length > maxParagraphLength){

        newContent =  object.form_content.substring(0, maxParagraphLength) + "...";
        htmlElement = `
            <div class="content-item" id="id-${sessionItem}">
                <span id="id-span-${sessionItem}">Id:${sessionItem}, Date: ${object.creation_date}</span>
                <h4 id="id-h4-${sessionItem}"><i class="fa-solid fa-right-to-bracket"></i>${object.note_title}</h4>
                <p id="id-p-${sessionItem}">${newContent}</p>
                <div id="id-read-more-${sessionItem}"><span>Read more...</span></div>
            </div>
        `;
        sessionStorage.setItem("last-id", parseInt(sessionItem) + 1);
    } else {
        htmlElement = `
            <div class="content-item" id="id-${sessionItem}">
                <span id="id-span-${sessionItem}">Id:${sessionItem}, Date: ${object.creation_date}</span>
                <h4 id="id-h4-${sessionItem}"><i class="fa-solid fa-right-to-bracket"></i>${object.note_title}</h4>
                <p id="id-p-${sessionItem}">${object.form_content}</p>
            </div>
        `;
        sessionStorage.setItem("last-id", parseInt(sessionItem) + 1);
    };

    noteElement.innerHTML += htmlElement;
};

function addNote(urlGiven){
    notebookFormSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let obj = sendData(urlGiven);
        let emptyList = document.querySelector(`.empty-list`) !== null;

        if(emptyList){
            document.querySelector(`.empty-list`).style.display = "none";
        }

        displayNoteBeforeGetUpdateFromDB(obj);
        myNotebookForm.style.display = "none";
        // sessionStorage.removeItem("last-id");
    });
};
 
export default addNote;