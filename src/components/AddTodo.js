import React, { useState } from 'react';

const AddTodo = () => {
    const [task, setTask] = useState('');
    
    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleAddTodo = (event) => {
        console.log(task);
    }

    return (
        <div>
            <input value={task} onChange={handleChange} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

export default AddTodo;