import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos && todos.length ? todos.map(todo => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />
            }) : "No todos!"}
        </ul>
    );
}

export default TodoList;