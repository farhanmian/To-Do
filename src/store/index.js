import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: []
}
const todoSlice = createSlice({
    name: 'to-do',
    initialState,
    reducers: {
        addToDo(state, action) {
            state.todo.push({ id: action.payload.id, todo: action.payload.todo, isCompleted:false })
        },
        removeToDo(state, action) {
            const todoId = action.payload;
            state.todo = state.todo.filter(todo => todo.id !== todoId);
        },
        removeAllToDo(state) {
            state.todo = [];
        },
        completeTodo(state, action) {
            const todoId = action.payload;
            state.todo = state.todo.map(todo => {
                todo.id === todoId ? todo.isCompleted = !todo.isCompleted : todo.isCompleted = todo.isCompleted
                return todo;
            })
        },
        replaceTodo (state, action) {
            state.todo = action.payload;
        }
    }
});

const store = configureStore({
    reducer: todoSlice.reducer
});


export const TodoActions = todoSlice.actions;
export default store;