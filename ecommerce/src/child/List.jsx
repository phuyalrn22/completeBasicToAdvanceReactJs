import React from "react";

const List = (props) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {props.children}
    </div>
  );
};

export default List;
