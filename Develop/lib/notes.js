const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

function createNewNote (body, notesArray) {
    const newNote = body; 
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes:notesArray }, null, 2)
    );
    
    return newNote;
};

// validate POST request data input to prevent err 
function validatePost(note){
    if (!note.title) {
        return false;
    }
    if (!note.text) {
        return false;
    }
    return true; 
}

function deleteNote(notesArray, id) {
    let deleteId = id;

    let reproducedArray = notesArray.filter((noteItem) => noteItem.id !== deleteId);
    console.log(reproducedArray);

    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes:reproducedArray }, null, 2));
    
    return { notes: reproducedArray}; 
};

module.exports = {createNewNote, validatePost, deleteNote}; 