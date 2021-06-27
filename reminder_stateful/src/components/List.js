import React, { useState } from "react";
import Form from "./Form";
import { TiDelete, TiEdit } from "react-icons/ti";

const List = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const onEditClick = (newValue) => {
    newValue.preventDefault();
    //args passing back to Main.js
    props.onUpdateTodo(edit.id, edit.value);

    setEdit({
      id: null,
      value: "",
    });
  };
  const onEditChange = (event) => {
    setEdit({
      id: edit.id,
      value: event.target.value,
    });
  };

  if (edit.id) {
    return (
      <Form
        editValue={edit}
        onEditClick={onEditClick}
        onEditChange={onEditChange}
      />
    );
  }

  return props.list.map((item) => {
    const renderButton = () => {
      //console.log(item.id);
      if (item.id) {
        return (
          <div>
            <TiDelete onClick={() => props.onDeleteClick(item.id)} />
            <TiEdit
              onClick={() => setEdit({ id: item.id, value: item.text })}
            />
          </div>
        );
      }
      return;
    };

    return (
      <div key={item.id}>
        <div>{item.text}</div>
        <div>{renderButton()}</div>
      </div>
    );
  });
};

export default List;
