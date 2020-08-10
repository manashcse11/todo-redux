import React from 'react';
import Todo from './Todo';

import { connect } from "react-redux";
import { getTodos, getTodosByVisibilityFilter } from '../redux/selectors';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos && todos.length ? todos.map(todo => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />
            }) : "No todos!"}
        </ul>
    );
}

const mapToStateProps = (state) => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};

// export default connect(state => ({todos: getTodos(state)}))(TodoList);
export default connect(mapToStateProps)(TodoList);