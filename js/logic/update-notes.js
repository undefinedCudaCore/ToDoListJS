"USE STRICT";

import getTodaysDate from '../logic/todays-date.js';

const myNotebookForm = document.querySelector("#notebook-form-update");
const notebookFormSubmitBtn = document.querySelector("#update-notebook-form-submit");

function sendData(url) {
    let data = new FormData(myNotebookForm);
    let obj = {};

    data.forEach((value, key) => {
        obj[key] = value;
    });
    obj['creation_date'] = getTodaysDate();

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
        },
        body: JSON.stringify(obj),
    }

    fetch(url + obj.id, options)
    .then((response) => {
        if(!response.ok){
            throw new Error("Server response wasnt't OK");
        } else {
            return response.json();
        };
    })
    .catch((error) => {
        console.error("Error: ", error);
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