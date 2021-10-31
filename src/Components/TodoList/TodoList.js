import React from 'react';
import classes from './TodoList.module.css';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';


function TodoList(props) {
    const todo = useSelector(state=> state.todo); 
    console.log(todo);

    return (
        <div className={classes.TodoList}>
            <ul>
                {
                    todo && todo.map((todo, i) => {
                        console.log(todo);
                        return <Todo id={todo.id} key={i} isCompleted={todo.isCompleted} todo={todo.todo} />
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;