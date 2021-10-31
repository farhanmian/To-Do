import classes from './DeleteAllTodo.module.css';

import deleteIcon from '../../Assets/Images/remove.png';
import { TodoActions } from '../../store';
import { useDispatch } from 'react-redux';

export default function DeleteAllTodo() {
    const dispatch = useDispatch();

    const deleteAllTodoHandler = ()=> {
        setTimeout(() => {
            dispatch(TodoActions.removeAllToDo());
        }, 150);
    }

    return (
        <button className={classes.Button}>
            <p className={classes.Text}>Delete All Todos</p>
            <img onClick={deleteAllTodoHandler} src={deleteIcon} alt='' />
        </button>
    );
}
