import React, { useState, useReducer } from "react";

import { initialState, todoReducer } from "../reducers/todoReducer";

import Todo from "./Todo";

const TodoList = () => {
  //new todo object should be empty for input to handle it
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState({
    item: "",
    completed: false,
    id: Date.now()
  });

  const handleChanges = e => {
    // handling input needs to get the object from newTodo State and modify only the "item section"
    setNewTodo({ ...newTodo, item: e.target.value });
  };
  console.log("newTodo", newTodo);
  console.log("state", state);

  const handleAdd = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };
  return (
    //form needs to be lowercased
    <>
      <form onSubmit={handleAdd}>
        <h2>Add Todo</h2>
        <input
          onChange={handleChanges}
          name="item"
          type="text"
          placeholder="Enter todo"
        />
        {state.map(item => (
          <Todo
            key={item.id}
            list={item}
            onClick={() => this.props.delete(item.id)}
          />
        ))}
        {/* {state.map(item => (
        <Todo
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos)}
        />
        <button>Submit</button> */}
      </form>
      <button>Clear Completed</button>
    </>
  );
};
export default TodoList;
