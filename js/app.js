"USE STRICT";

// imports

// import header from './data/headerData.js';
import myNotebookEvents from './logic/events.js';
import loadNotes from './logic/get-notes.js';
import addNotes from './logic/add-notes.js';


// create

//

// call up function

// renderHeader(header);
myNotebookEvents();
loadNotes("https://testapi.io/api/teklithuania/resource/notes");
addNotes("https://testapi.io/api/teklithuania/resource/notes");
