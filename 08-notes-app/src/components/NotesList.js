import React,{useState} from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({notes,handleAddNote,handleDeleteNote}) => {
  return (
      <div className="notes-list">
        {
          notes.map((note)=><Note note={note} handleDeleteNote={handleDeleteNote}/>)
        }
        <AddNote handleAddNote={handleAddNote} />
      </div>
  );
};

export default NoteList;