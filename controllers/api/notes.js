const Note = require('../../models/note');

module.exports = {
    getNotes,
    createNote
}

async function createNote(req, res) {
    const { text } = req.body;
    const note = new Note({
        text,
        user: req.user._id
    });
    await note.save();
    res.json(note);
}

async function getNotes(req, res) {
    const notes = await Note.find({user: req.user._id});
    res.json(notes);
}