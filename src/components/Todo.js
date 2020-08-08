import React from 'react';
import cx from 'classnames';

import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';

const Todo = (props) => {
    const todo = props.todo;
    return (
        <li className="todo-item" onClick={() => {props.toggleTodo(todo.id)}}>
            <span className={cx("todo-item", todo && todo.completed && "todo-item-completed")}>
                {todo.content}
            </span>
        </li>
    );
}

export default connect(null, { toggleTodo })(Todo);