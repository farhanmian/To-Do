

export const sendTodoData = (todo)=> {
    return async ()=> {
        const sendData = async() => {
            fetch('https://redux-todo-dfd0f-default-rtdb.firebaseio.com/todo.json', {
                method: 'PUT',
                body: JSON.stringify(todo)
            });
        }
        await sendData();
    }
}