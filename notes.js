const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const listNotes = () => {
  console.log(chalk.blue.bold("Your notes: "));
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = title => {
  const note = loadNotes().find(note => note.title === title);
  if (note) {
    console.log(chalk.green.bold(`${note.title}:`));
    console.log(note.body);
  } else {
    console.log(chalk.red.bold(`Note ${title} not found`));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.bold("New note added"));
  } else {
    console.log(chalk.red.bold("Note title taken"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.bold("Note removed!"));
  } else {
    console.log(chalk.red.bold("Note not found!"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    console.log("No data yet");
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};
