"USE STRICT";

// imports

import myNotebookEvents from './logic/events.js';
import createAddNoteForm from './logic/html-build/forms/create-add-item-form.js';
import createUpdateNoteForm from './logic/html-build/forms/create-update-item-form.js';
import createDeleteNoteForm from './logic/html-build/forms/create-delete-item-form.js';
import loadNotes from './logic/get-notes.js';
import addNote from './logic/add-notes.js';
import updateNote from './logic/update-notes.js';
import removeNote from './logic/delete-notes.js';


// create HTML
createAddNoteForm();
createUpdateNoteForm();
createDeleteNoteForm();

// call up function

myNotebookEvents();
loadNotes("https://testapi.io/api/teklithuania/resource/notes");
addNote("https://testapi.io/api/teklithuania/resource/notes");
updateNote("https://testapi.io/api/teklithuania/resource/notes/");
removeNote("https://testapi.io/api/teklithuania/resource/notes/");