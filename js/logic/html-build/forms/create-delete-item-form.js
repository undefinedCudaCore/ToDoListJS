"USE STRICT";

function createDeleteNoteForm(){

    //creating add note form and it elements

    let noteForm = document.createElement("form");
    //assign style and id to add note form
    noteForm.id = "notebook-form-delete";
    noteForm.style.display = "none";

    let formExit = document.createElement("div");
    let xmark = document.createElement("i");

    //assign style and id to formExit
    formExit.id = "delete-form-exit";

    //assign style and id to xmark
    xmark.className = "fa-solid fa-circle-xmark";

    let formChildH2 = document.createElement("h2");

    //assign style and id to formChildH2
    formChildH2.className = "form-child";
    formChildH2.textContent = "Delete note";

    let sectionFormNoteId = document.createElement("section");
    let labelFormNoteId = document.createElement("label");
    let inputFormNoteId = document.createElement("input");

     //assign style and id to sectionFormNoteId
     sectionFormNoteId.id = "delete-form-item-id";
     sectionFormNoteId.className = "form-child form-delete-content-section-id";

    //assign style and id to labelFormNoteId
    labelFormNoteId.className = "form-delete-id-label";
    labelFormNoteId.htmlFor = "id";
    labelFormNoteId.textContent = "Note id";

    //assign style and id to inputFormNoteId
    inputFormNoteId.className = "form-delete-id-input";
    inputFormNoteId.type = "id";
    inputFormNoteId.id = "id";
    inputFormNoteId.name = "id";
    inputFormNoteId.placeholder = "Enter note id..";

    let inputFormNoteSubmit = document.createElement("input");

    //assign style and id to inputFormNoteSubmit
    inputFormNoteSubmit.type = "submit";
    inputFormNoteSubmit.value = "Delete note";
    inputFormNoteSubmit.id = "delete-notebook-form-submit";
    inputFormNoteSubmit.className = "btn-hover color-7";

    //append elements
    noteForm.appendChild(formExit);
    formExit.appendChild(xmark);
    
    noteForm.appendChild(formChildH2);

    noteForm.appendChild(sectionFormNoteId);
    sectionFormNoteId.appendChild(labelFormNoteId);
    sectionFormNoteId.appendChild(inputFormNoteId);

    noteForm.appendChild(inputFormNoteSubmit);

    //prepend to main
    document.querySelector("main").prepend(noteForm);
};

export default createDeleteNoteForm;