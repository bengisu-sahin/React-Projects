import React,{useState} from "react";
import Note from "./Note";

const NoteList = ({notes}) => {
  return (
    <div>
      <div className="notes-list">
        {
          notes.map((note)=><Note note={note}/>)
        }
      </div>
    </div>
  );
};

export default NoteList;
