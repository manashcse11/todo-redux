import React from 'react';
import cx from 'classnames';

const Todo = ({ todo }) => {
    return (
        <li>
            <span className={cx("todo-item", todo && todo.completed && "todo-item-completed")}>
                {todo.content}
            </span>
        </li>
    );
}

export default Todo;