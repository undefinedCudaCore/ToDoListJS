"USE STRICT";

const maxParagraphLength = 120;
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
const noteElement = document.querySelector("#content"); //Is this one good here

function loadNotes(url) {
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

        if(noteData.data.length === 0){
            noteElement.innerHTML = 
            `
                <div class="content-item">
                    <p>List is empty...</p>
                </div>
            `;
            return;
        };
        
        
        noteData.data.forEach(element => {
     
            let newContent = element.form_content.toString();
            let htmlElement = "";

            if(element.form_content.length > maxParagraphLength){
                newContent =  element.form_content.substring(0, maxParagraphLength) + "...";
                htmlElement = `
                    <div class="content-item">
                        <span>${element.creation_date}</span>
                        <h4><i class="fa-solid fa-right-to-bracket"></i>${element.note_title}</h4>
                        <p>${newContent}</p>
                        <div><span>Read more...</span></div>
                    </div>
                `;
            } else {
                htmlElement = `
                    <div class="content-item">
                        <span>${element.creation_date}</span>
                        <h4><i class="fa-solid fa-right-to-bracket"></i>${element.note_title}</h4>
                        <p>${element.form_content}</p>
                    </div>
                `;
            }

            noteHTML += htmlElement;
        });

        noteElement.innerHTML = noteHTML;
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
};

export default loadNotes;