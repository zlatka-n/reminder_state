import React from "react";

const List = (props) => {
  return props.list.map((item) => {
    const renderButton = () => {
      if (item.id) {
        return (
          <button onClick={() => props.onDeleteClick(item.id)}>Delete</button>
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
