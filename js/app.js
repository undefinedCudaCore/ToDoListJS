"USE STRICT";

// imports

import myNotebookEvents from './logic/events.js';
import loadNotes from './logic/get-notes.js';
import addNote from './logic/add-notes.js';
import updateNote from './logic/update-notes.js';
import removeNote from './logic/delete-notes.js';


// create

//

// call up function

myNotebookEvents();
loadNotes("https://testapi.io/api/teklithuania/resource/notes");
addNote("https://testapi.io/api/teklithuania/resource/notes");
updateNote("https://testapi.io/api/teklithuania/resource/notes/");
removeNote("https://testapi.io/api/teklithuania/resource/notes/");