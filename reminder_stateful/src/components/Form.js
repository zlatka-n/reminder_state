import React from "react";

const Form = ({ onInputChange, onFormSubmit, value }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input onChange={onInputChange} value={value.text}></input>
      <button>Add</button>
    </form>
  );
};

export default Form;
