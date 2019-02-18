import React from 'react';
import './NoteItem.scss';


const NoteItem = ({ note, editing, onToggle, onChange }) => {
  const handleToggle = () => {
    onToggle({ id: note.id, text: note.text });
  };

  const handleChange = e => {
    const { value } = e.target;
    onChange({ value}, true);
  };

  return (
    <div
      className={['note-item', editing.id === note.id && 'editing'].join(" ")}
      onClick={handleToggle}
    >
      {editing.id === note.id ? (
        <input
          type="text"
          name="note"
          value={editing.text}
          autoFocus
          onChange={handleChange}
        />
      ) : (
          <div className={'note'}>{ note.text }</div>
      )}
      <div className={'delete'}>&times;</div>
    </div>
  );
};

export default NoteItem;
