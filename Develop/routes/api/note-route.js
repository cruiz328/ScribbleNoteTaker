const router = require('express').Router(); 
const fs = require('fs');
const { notes } = require('../../data/notes');
const { v4: uuidv4 } = require('uuid');
const { createNewNote, validatePost, deleteNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    let results = notes; 
    res.json(results);
});

router.post('/notes', (req, res) => {
    // new note, new ID
    console.log(uuidv4());
    req.body.id = uuidv4();

    if(!validatePost(req.body)) {
        res.status(404).send('Note not correctly formatted!')
    }
    else {
        const note = createNewNote(req.body, notes);
        res.json(note)
    }
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes)
});


module.exports = router; 