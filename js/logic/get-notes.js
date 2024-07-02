"USE STRICT";

const maxParagraphLength = 100;
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
const noteElement = document.querySelector("#content"); //Is this one good here

function loadNotes(url) {
    let htmlElement = "";

    fetch(url, options)
    .then((response) => {
        if(!response.ok){
            throw new Error("Server response wasnt't OK");
        } else {
            return response.json();
        };
    })
    .then((noteData) => {
        let noteHTML = "";
        console.log(noteData.data);
        let dataArray = noteData.data.sort((a, b) => a.id - b.id);

        if(noteData.data.length === 0){
            noteElement.innerHTML = 
            `
                    <p class="empty-list">List is empty...</p>
            `;
            return;
        };
                
        dataArray.forEach(element => {
            let newContent = element.form_content.toString();

            
            if(element.form_content.length > maxParagraphLength){
                newContent =  element.form_content.substring(0, maxParagraphLength) + "...";
                htmlElement = `
                <div class="content-item">
                <span>Id:${element.id}, Date: ${element.creation_date}</span>
                <h4><i class="fa-solid fa-right-to-bracket"></i>${element.note_title}</h4>
                <p>${newContent}</p>
                <div><span>Read more...</span></div>
                </div>
                `;
            } else {
                htmlElement = `
                <div class="content-item">
                <span>Id:${element.id}, Date: ${element.creation_date}</span>
                <h4><i class="fa-solid fa-right-to-bracket"></i>${element.note_title}</h4>
                <p>${element.form_content}</p>
                </div>
                `;
            };
            noteHTML += htmlElement;
        });

        let dataLenth = noteData.data.length;
        console.log(noteData.data[noteData.data.length-1].id);
        sessionStorage.setItem("last-id", noteData.data[noteData.data.length-1].id + 1);

        noteElement.innerHTML = noteHTML;
    })
    .catch((error) => {
        console.error("Error: ", error);
    });

};

export default loadNotes;