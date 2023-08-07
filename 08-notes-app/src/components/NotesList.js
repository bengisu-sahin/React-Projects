import React,{useState} from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({notes,handleAddNote}) => {
  return (
      <div className="notes-list">
        {
          notes.map((note)=><Note note={note}/>)
        }
        <AddNote handleAddNote={handleAddNote}/>
      </div>
  );
};

export default NoteList;