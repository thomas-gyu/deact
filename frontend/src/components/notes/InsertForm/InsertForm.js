import React from 'react';
import './InsertForm.scss';


const InsertForm = ({ noteInput, onChangeInput, onAdd }) => {
  const handleChange = e => {
    const { value } = e.target;
    onChangeInput({ value });
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className={'form'}>
      <div className={'title'}>Insert Your Note Here...</div>
      <input
        type="text"
        name="note"
        value={noteInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default InsertForm;