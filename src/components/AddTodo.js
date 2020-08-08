import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = (props) => {
    const [task, setTask] = useState('');
    
    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleAddTodo = (event) => {
        console.log(task);
        props.addTodo(task);
        setTask('');
    }

    return (
        <div>
            <input value={task} onChange={handleChange} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

// export default AddTodo;
export default connect(null, { addTodo })(AddTodo);