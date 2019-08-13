import React from "react";

const Todo = props => {
  console.log("todo props", props);
  return (
    <div>
      <p>{props.list.item}</p>
    </div>
  );
};

export default Todo;
