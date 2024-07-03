"USE STRICT";

function myNotebookEvents(){
    const myNotebookFormAdd = document.querySelector("#notebook-form");
    const myNotebookFormUpdate = document.querySelector("#notebook-form-update");
    const myNotebookFormDelete = document.querySelector("#notebook-form-delete");
    const addItem = document.querySelector("#add-note");
    const updateItem = document.querySelector("#edit-note");
    const deleteItem = document.querySelector("#delete-note");
    const exitForm = document.querySelector("#form-exit")
    const exitUpdateForm = document.querySelector("#update-form-exit")
    const exitDeleteForm = document.querySelector("#delete-form-exit")

    addItem.addEventListener('click', () => {
        document.querySelector("#note_title").value = "";
        document.querySelector("#form_content").value = "";
        
        myNotebookFormAdd.style.display = "flex";
    });
    
    updateItem.addEventListener('click', () => {
        document.querySelector("#id").value = "";
        document.querySelector("#note_title").value = "";
        document.querySelector("#form_content").value = "";
        myNotebookFormUpdate.style.display = "flex";
    });
    
    deleteItem.addEventListener('click', () => {  
        document.querySelector("#id").value = "";
        document.querySelector("#note_title").value = "";
        document.querySelector("#form_content").value = "";

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
};

export default myNotebookEvents;