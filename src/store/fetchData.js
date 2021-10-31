import { TodoActions } from "./index";

export const fetchTodoData = ()=> {
    return async (dispatch)=> {
        const fetchData = async()=> {
            const res = await fetch('https://redux-todo-dfd0f-default-rtdb.firebaseio.com/todo.json');
            const data = await res.json();
            return data;
        }
        const todo = await fetchData();
        if(todo) {
            dispatch(TodoActions.replaceTodo(todo));
        }
    }
}