import React from 'react';
import classes from './Todo.module.css';
import { TodoActions } from '../../store';
import { useDispatch } from 'react-redux';

import completeIcon from '../../Assets/Images/complete.png';
import dustbinIcon from '../../Assets/Images/remove.png';
import cancleIcon from '../../Assets/Images/cancle.png';

function Todo(props) {

    const dispatch = useDispatch();

    const removeTodoHandler = () => {
        dispatch(TodoActions.removeToDo(props.id));
    }
    const completeTodoHandler = () => {
        dispatch(TodoActions.completeTodo(props.id));
    }
    

    // style={{ textDecoration: props.isCompleted ? 'line-through' : '', color: props.isCompleted ? '#db3b4e' : '' }}

    return (
        <div id={props.id} className={classes.Todo}>
            <li className={props.isCompleted ? classes.TodoComplete : classes.TodoNotComplete} >{props.todo}</li>
            <span>
                <button onClick={completeTodoHandler}>
                    <img src={!props.isCompleted ? completeIcon : cancleIcon} alt='' />
                </button>
                <button onClick={removeTodoHandler}>
                    <img src={dustbinIcon} alt='' />
                </button>
            </span>
        </div>
    );
}

export default Todo;