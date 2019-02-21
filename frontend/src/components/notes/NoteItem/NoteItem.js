import React from 'react';
import './NoteItem.scss';


const NoteItem = ({ note, editing, onToggle, onChange, onUpdate, onDelete }) => {
  const handleToggle = () => {
    onToggle({ id: note.id, text: note.text });
  };

  const handleChange = e => {
    const { value } = e.target;
    onChange({ value}, true);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onUpdate();
    }
  };
  const handleDelete = e => {
    // handleToggle이 되는것을 방지
    e.stopPropagation();
    onDelete({ id: note.id });
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
          onKeyPress={handleKeyPress}
        />
      ) : (
          <div className={'note'}>{ note.text }</div>
      )}
      <div className={"delete"} onClick={handleDelete}>
        &times;
      </div>
    </div>
  );
};

export default NoteItem;
