import React from "react";
import "./NoteList.scss";
import NoteItem from "components/notes/NoteItem/NoteItem";


const NoteList = ({ notes, editing, onToggle, onChange, onUpdate, onDelete  }) => {
  const noteList = notes.map((note, i) => {
    return (
      <NoteItem
        note={note}
        key={note.id}
        editing={editing}
        onToggle={onToggle}
        onChange={onChange}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    );
  });
  return (
    <div className={"note-list"}>
      <div className={"title"}>Your Notes...</div>
      {noteList}
    </div>
  );
};

export default NoteList;
