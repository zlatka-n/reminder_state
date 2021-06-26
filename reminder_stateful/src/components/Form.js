import React from "react";

const Form = ({
  onInputChange,
  onFormSubmit,
  value,
  editValue,
  onEditClick,
  onEditChange,
}) => {
  if (editValue) {
    return (
      <form onSubmit={onEditClick}>
        <input value={editValue.value} onChange={onEditChange}></input>
        <button>Update</button>
      </form>
    );
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input onChange={onInputChange} value={value.text}></input>
      <button>Add</button>
    </form>
  );
};

export default Form;
