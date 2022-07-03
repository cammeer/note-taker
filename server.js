//from online tutorial(wds)
const express = require('express');
const fs = require('fs');
const notes = require('./db/db.json');
const path = require('path');
// const uuid = require('uuid');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');

const app = express();
var PORT = process.env.PORT || 4023;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//setting routes for APIs
//this gets notes saved and joins it in db.json
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'))
});

//post function to add new notes to db.json
app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
});

//HTML calls
//calls home page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//call for notes.html
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//start listen
app.listen(PORT, function() {
    console.log('App listening on PORT: ${PORT}');
});