"USE STRICT";

import getTodaysDate from '../logic/todays-date.js';
import loadNotes from '../logic/get-notes.js';

const myNotebookForm = document.querySelector("#notebook-form");
const notebookForm = document.querySelector("#notebook-form");
const notebookFormSubmitBtn = document.querySelector("#notebook-form-submit");

function sendData(url) {
    let data = new FormData(notebookForm);
    let obj = {};

    data.forEach((value, key) => {
        obj[key] = value;
    });

    obj["type_all"] = "true";
    obj['creation_date'] = getTodaysDate();

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(obj),
    }

    fetch(url, options)
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
};

function addNotes(urlGiven){
    notebookFormSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendData(urlGiven);
        document.querySelector("#note_title").value = "";
        document.querySelector("#form_content").value = "";
        myNotebookForm.style.display = "none";
    });
};
 
export default addNotes;