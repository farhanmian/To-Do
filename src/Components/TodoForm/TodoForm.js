import React, { useRef } from 'react';
import classes from './TodoForm.module.css';

import { TodoActions } from '../../store/index';
import { useDispatch } from 'react-redux';

function TodoForm(props) {
    const dispatch = useDispatch();
    const inputRef = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(inputRef.current.value.trim().length > 1) {
            dispatch(TodoActions.addToDo({todo:inputRef.current.value, id: Math.random()*100 }));
            inputRef.current.value = '';
        }
    }

    return (
        <form className={classes.ToDoForm} onSubmit={formSubmitHandler}>
            <input ref={inputRef} placeholder="Add To-Do" />
            <button>Add To-Do</button>
        </form>
    );
}

export default TodoForm;