import React from "react";
import "../css/Form.css";

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
      <div className="updateForm">
        <form onSubmit={onEditClick}>
          <input
            className="input"
            value={editValue.value}
            onChange={onEditChange}
          ></input>
          <button className="addBtn">Update</button>
        </form>
      </div>
    );
  }

  return (
    <div className="addForm">
      <form onSubmit={onFormSubmit} className="form">
        <input
          className="input"
          onChange={onInputChange}
          value={value.text}
        ></input>
        <button className="addBtn">Add</button>
      </form>
    </div>
  );
};

export default Form;
