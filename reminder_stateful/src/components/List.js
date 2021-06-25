import React from "react";

const List = (props) => {
  //console.log(props.list);

  return props.list.map((item) => {
    const renderButton = () => {
      if (item.id !== null) {
        return <button>Delete</button>;
      }
      return;
    };
    return (
      <div key={item.id}>
        {item.text}
        <div>{renderButton()}</div>
      </div>
    );
  });
};

export default List;
