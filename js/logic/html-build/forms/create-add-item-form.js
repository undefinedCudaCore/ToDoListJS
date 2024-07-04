"USE STRICT";

function createAddNoteForm(){

    //creating add note form and it elements

    let noteForm = document.createElement("form");
    //assign style and id to add note form
    noteForm.id = "notebook-form";
    noteForm.style.display = "none";

    let formExit = document.createElement("div");
    let xmark = document.createElement("i");

    //assign style and id to formExit
    formExit.id = "form-exit";

    //assign style and id to xmark
    xmark.className = "fa-solid fa-circle-xmark";

    let formChildH2 = document.createElement("h2");

    //assign style and id to formChildH2
    formChildH2.className = "form-child";
    formChildH2.textContent = "Create new note";

    let sectionFormSelectType = document.createElement("section");
    let labelType = document.createElement("label");
    let selectType = document.createElement("select");
    let optionProjects = document.createElement("option");
    let optionBusiness = document.createElement("option");
    let optionPersonal = document.createElement("option");

    //assign style and id to sectionFormSelectType
    sectionFormSelectType.id = "form-select-type";
    sectionFormSelectType.className = "form-child";

    //assign style and id to labelType
    labelType.htmlFor = "type";
    labelType.textContent = "Type";

    //assign style and id to selectType
    selectType.name = "type";
    selectType.id = "type";

    //assign style and id to optionProjects
    optionProjects.value = "projects";
    optionProjects.textContent = "Projects";

    //assign style and id to optionBusiness
    optionBusiness.value = "business";
    optionBusiness.textContent = "Business";

    //assign style and id to optionPersonal
    optionPersonal.value = "personal";
    optionPersonal.textContent = "Personal";

    let sectionFormNoteTitle = document.createElement("section");
    let labelNoteTitle = document.createElement("label");
    let inputNoteTitle = document.createElement("input");

    //assign style and id to sectionFormAddTitle
    sectionFormNoteTitle.id = "form-add-title";
    sectionFormNoteTitle.className = "form-child form-add-title-section";

    //assign style and id to labelNoteTitle
    labelNoteTitle.className = "form-add-title-label";
    labelNoteTitle.htmlFor = "note_title";
    labelNoteTitle.textContent = "Title";

    //assign style and id to inputNoteTitle
    inputNoteTitle.className = "form-add-title-input";
    inputNoteTitle.type = "text";
    inputNoteTitle.name = "note_title";
    inputNoteTitle.id = "note_title";
    inputNoteTitle.placeholder = "Enter title..";

    let sectionFormNoteContent = document.createElement("section");
    let labelNoteContent = document.createElement("label");
    let inputNoteContent = document.createElement("textarea");

    //assign style and id to sectionFormNoteContent
    sectionFormNoteContent.id = "form-add-content";
    sectionFormNoteContent.className = "form-child form-add-content-section";

    //assign style and id to labelNoteContent
    labelNoteContent.className = "form-add-content-label";
    labelNoteContent.htmlFor = "form_content";
    labelNoteContent.textContent = "Content";

    //assign style and id to inputNoteContent
    inputNoteContent.className = "form-add-content-input";
    inputNoteContent.name = "form_content";
    inputNoteContent.id = "form_content";
    inputNoteContent.placeholder = "Enter note text..";

    let inputFormNoteSubmit = document.createElement("input");

    //assign style and id to inputFormNoteSubmit
    inputFormNoteSubmit.type = "submit";
    inputFormNoteSubmit.value = "Add note";
    inputFormNoteSubmit.id = "notebook-form-submit";
    inputFormNoteSubmit.className = "btn-hover color-7";

    //append elements
    noteForm.appendChild(formExit);
    formExit.appendChild(xmark);
    
    noteForm.appendChild(formChildH2);

    noteForm.appendChild(sectionFormSelectType);
    sectionFormSelectType.appendChild(labelType);
    sectionFormSelectType.appendChild(selectType);
    selectType.appendChild(optionProjects);
    selectType.appendChild(optionBusiness);
    selectType.appendChild(optionPersonal);
    
    noteForm.appendChild(sectionFormNoteTitle);
    sectionFormNoteTitle.appendChild(labelNoteTitle);
    sectionFormNoteTitle.appendChild(inputNoteTitle);
    
    noteForm.appendChild(sectionFormNoteContent);
    sectionFormNoteContent.appendChild(labelNoteContent);
    sectionFormNoteContent.appendChild(inputNoteContent);
        
    noteForm.appendChild(inputFormNoteSubmit);

    //prepend to main
    document.querySelector("main").prepend(noteForm);
};

export default createAddNoteForm;