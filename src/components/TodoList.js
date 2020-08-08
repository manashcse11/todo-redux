import React from 'react';
import Todo from './Todo';

import { connect } from "react-redux";
import { getTodos } from '../redux/selectors';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos && todos.length ? todos.map(todo => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />
            }) : "No todos!"}
        </ul>
    );
}

export default connect(state => ({todos: getTodos(state)}))(TodoList);