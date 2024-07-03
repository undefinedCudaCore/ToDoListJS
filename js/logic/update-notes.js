"USE STRICT";

import getTodaysDate from '../logic/todays-date.js';

const myNotebookForm = document.querySelector("#notebook-form-update");
const notebookFormSubmitBtn = document.querySelector("#update-notebook-form-submit");
const noteTitleLength = 45;

function sendData(url) {
    let data = new FormData(myNotebookForm);
    let obj = {};

    data.forEach((value, key) => {
        obj[key] = value.trim();
    });
    obj['creation_date'] = getTodaysDate();

    // Checks for symbols in input
    const regex = /[#$%^&*()\[\]{};'\\|<>\/]/g;
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
    //Check id is number
    if(isNaN(obj.id)){
        location.reload();
    }

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(obj),
    }

    fetch(url + obj.id, options)
    .then((response) => {
        // if(response.data.id != obj.id){
        //     console.log("NO");
        // }
        if(!response.ok){
            throw new Error("Server response wasnt't OK");
        } else {
            return response.json();
        };
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

    return obj;
};

function displayNoteBeforeGetUpdateFromDB(object){
    const maxParagraphLength = 100;
    const noteElement = document.querySelector(`#id-${object.id}`);
    let newContent = object.form_content.toString();
    let htmlElement = "";

    if(object.form_content.length > maxParagraphLength){

        newContent =  object.form_content.substring(0, maxParagraphLength) + "...";
        htmlElement = `
            <span id="id-span-${object.id}">Id:${object.id}, Date: ${object.creation_date}</span>
            <h4 id="id-h4-${object.id}"><i class="fa-solid fa-right-to-bracket"></i>${object.note_title}</h4>
            <p id="id-p-${object.id}">${newContent}</p>
            <div id="id-read-more-${object.id}"><span>Read more...</span></div>
        `;
    } else {
        htmlElement = `
            <span id="id-span-${object.id}">Id:${object.id}, Date: ${object.creation_date}</span>
            <h4 id="id-h4-${object.id}"><i class="fa-solid fa-right-to-bracket"></i>${object.note_title}</h4>
            <p id="id-p-${object.id}">${object.form_content}</p>
        `;
    };

    noteElement.innerHTML = htmlElement;
};

function updateNote(urlGiven){
    notebookFormSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let obj = sendData(urlGiven);

        displayNoteBeforeGetUpdateFromDB(obj);
        myNotebookForm.style.display = "none";
    });
};
export default updateNote;