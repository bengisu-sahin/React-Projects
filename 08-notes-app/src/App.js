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
  const [searchText,setSearchText]=useState("");
  const handleSearchNote=(searchedTxt)=>{
    setSearchText(searchedTxt);;
  }
  return (
    <div className="container">
      <SearchBar handleSearchNote={handleSearchNote}/>
      {/* prop drilling */}
      <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
