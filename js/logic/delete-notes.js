"USE STRICT";




function sendData(url) {
    const myNotebookForm = document.querySelector("#notebook-form-delete");
    let data = new FormData(myNotebookForm);
    let obj = {};

    data.forEach((value, key) => {
        obj[key] = value.trim();
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
        //Executes only if entered existing id
        if(data.id){
            return fetch(url + data.id, deleteOptions);
        }
        else {
            return;
        }
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Server response wasnt't OK");
        } else {
            // console.log("Server response was OK");
        };
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

    return obj;
};

function displayNoteBeforeGetUpdateFromDB(object){
    let itemCheck = document.querySelector(`#id-${object.id}`) !== null;

    if(itemCheck){
        document.querySelector(`#id-${object.id}`).style.display = "none";
    }
};

function removeNote(urlGiven){
    const myNotebookForm = document.querySelector("#notebook-form-delete");
    const notebookFormSubmitBtn = document.querySelector("#delete-notebook-form-submit");

    notebookFormSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let obj = sendData(urlGiven);

        displayNoteBeforeGetUpdateFromDB(obj);
        myNotebookForm.style.display = "none";
    });
};

export default removeNote;