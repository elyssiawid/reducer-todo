import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';

const Todo = props => {
    const [newTodo, setNewTodo] = useState({
        item: "Learn about reducers",
        completed: false,
        id: Date.now(),
    });
    const handleChanges = e => {
        setNewTodo{[e.target.name]: e.target.value}
    };
    return (
        <Form>
            <h2>Add a new todo</h2>
            <TodoInput onChange={handleChanges} name='item' type='text' placeholder="Enter todo" />
            <button type='submit'>Submit</button>
        </Form>
    )
}
export default TodoForm;