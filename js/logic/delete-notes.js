"USE STRICT";

const myNotebookForm = document.querySelector("#notebook-form-delete");
const notebookFormSubmitBtn = document.querySelector("#delete-notebook-form-submit");

function sendData(url) {
    let data = new FormData(myNotebookForm);
    let obj = {};

    data.forEach((value, key) => {
        obj[key] = value;
    });

    let getOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    let deleteOptions = {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    fetch(url + obj.id, getOptions)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return fetch(url + data.id, deleteOptions);
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Server response wasnt't OK");
        } else {
            console.log("Server response was OK");
        };
    })
    .catch((error) => {
        console.error("Error: ", error);
    });

    return obj;
};

function displayNoteBeforeGetUpdateFromDB(object){
    console.log(object);
    if(document.querySelector(`#id-${object.id}`)){

        document.querySelector(`#id-${object.id}`).style.display = "none";
    } 
    if(!document.querySelector(`#id-${object.id}`)){
        document.querySelector(`.empty-list`).style.display = "inline-block";
    }
};

function removeNote(urlGiven){
    notebookFormSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let obj = sendData(urlGiven);

        displayNoteBeforeGetUpdateFromDB(obj);
        myNotebookForm.style.display = "none";
    });
};

export default removeNote;