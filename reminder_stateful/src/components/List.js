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
            <div className="delete">
              <TiDelete onClick={() => props.onDeleteClick(item.id)} />
            </div>
            <div className="edit">
              <TiEdit
                onClick={() => setEdit({ id: item.id, value: item.text })}
              />
            </div>
          </div>
        );
      }
      return;
    };

    return (
      <div key={item.id} className="list">
        <div className="item">{item.text}</div>
        <div className="icon">{renderButton()}</div>
      </div>
    );
  });
};

export default List;
