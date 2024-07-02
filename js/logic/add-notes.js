"USE STRICT";

import getTodaysDate from '../logic/todays-date.js';

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

    return obj;
};

function displayNoteBeforeGetUpdateFromDB(object){
    console.log(object);
    const maxParagraphLength = 120;
    const noteElement = document.querySelector("#content");
    let newContent = object.form_content.toString();
    let htmlElement = "";
    console.log(htmlElement);
  
    console.log("IM HERE");
    if(object.form_content.length > maxParagraphLength){
        newContent =  object.form_content.substring(0, maxParagraphLength) + "...";
        htmlElement = `
            <div class="content-item">
                <span>Id:${object.id}, Date: ${object.creation_date}</span>
                <h4><i class="fa-solid fa-right-to-bracket"></i>${object.note_title}</h4>
                <p>${object.id}</p>
                <div><span>Read more...</span></div>
            </div>
        `;
    } else {
        htmlElement += `
            <div class="content-item">
                <span>Id:${object.id}, Date: ${object.creation_date}</span>
                <h4><i class="fa-solid fa-right-to-bracket"></i>${object.note_title}</h4>
                <p>${object.form_content}</p>
            </div>
        `;
    };

    noteElement.innerHTML += htmlElement;
}

function addNotes(urlGiven){
    notebookFormSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let obj = sendData(urlGiven);
        let isThereEmptyList = document.querySelector('.empty-lis') !== null;

        document.querySelector("#note_title").value = "";
        document.querySelector("#form_content").value = "";

        if(!isThereEmptyList){

            document.querySelector(".empty-list").style.display = "none";
        }

        displayNoteBeforeGetUpdateFromDB(obj);
        myNotebookForm.style.display = "none";
    });
};
 
export default addNotes;