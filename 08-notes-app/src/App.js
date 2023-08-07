import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import SearchBar from "./components/Search";
import NoteList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "30/04/2021",
    },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = { id: nanoid(), text: text, date: date.toLocaleDateString() };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return (
    <div className="container">
      {/* prop drilling */}
      <NoteList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
