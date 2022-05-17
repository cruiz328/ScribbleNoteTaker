const fs = require('fs');
const { createNewNote, validatePost, deleteNote } = require('../lib/notes')
const {notes} = require('../data/notes');
jest.mock('fs');

test('creates new note object', () => {
    const note = createNewNote(
        { title: 'Noted', text: 'scribbly notes'},
        notes
    );

    expect(note.title).toBe('Noted')
    expect(note.text).toBe('dualy noted')
});

test('validates note input', () => {
    const validNote = {
        title: 'Note',
        text: 'text example'
    };
    const invalidNote = {
        title: 'Nuh-uh'
    };

    const validResult = validatePost(validNote);
    const invalidResult = validatePost(invalidNote);

    expect(validResult).toBe(true);
    expect(invalidResult).toBe(false);
});

test('delete note by ID', () => {
    const list = [
        {
            id: "23"
        },
        {
            id: "34"
        },
        {
            id:'45'
        },
        {
            id:'56'
        }
    ];

    deleteNote(list, "23");
    expect(list.length - 1 ).toEqual(1);
})