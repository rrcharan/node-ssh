console.log("starting");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
}
const bodyOptions={
    describe: 'body of Note',
    demand: true,
    alias: 'b'
}

const argv= yargs
.command('add', 'Add a new Note', {
    title: titleOptions,
    body: bodyOptions

})
.command('list', 'list all notes')
.command('read', 'read a note', {
    title: titleOptions

})
.command('remove', 'remove a note', {
    title: titleOptions
})
.help()
.argv;
var command = process.argv[2];
console.log(command);
console.log("yargs", argv);

if(command === "add") {
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('note created');
        notes.logNotes(note);

    } else {
        console.log('Title not taken');
    }

} else if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        notes.logNotes(note);
    });
   
        
  
} else if (command === "read") {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note found");
       notes.logNotes(note);
    } else {
        console.log("Note not found")
    }
} else if (command === "remove") {
    var notesRemoved = notes.removeNote(argv.title, argv.body);
    var message = notesRemoved? "Notes was removed" : "Notes was not removed";
    console.log(message);
} else {
    console.log("command not recognised")
}

