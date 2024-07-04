"USE STRICT";

function setLocalStorageArray(object){
    let setNoteIdToLocalStorage = JSON.parse(localStorage.getItem('note-id')) || [];
    
    setNoteIdToLocalStorage.push(object.id);

    localStorage.setItem("note-id", JSON.stringify(setNoteIdToLocalStorage));

    return setNoteIdToLocalStorage;
};

export default setLocalStorageArray;