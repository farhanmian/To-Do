import { useEffect } from 'react';
import './App.css';
import DeleteAllTodo from './Components/DeleteAllTodo/DeleteAllTodo';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';
import Main from './Components/UI/Main'
import { sendTodoData } from './store/sendData';
import { fetchTodoData } from './store/fetchData';
import { useSelector, useDispatch } from 'react-redux';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);
  
  useEffect(()=> {
    dispatch(fetchTodoData())
  },[])

  useEffect(()=> {
    if(isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendTodoData(todo))
  }, [todo, dispatch]);
  

  return (
    <div className="App">
      <Main>
        <TodoForm />
        <TodoList />
        {todo.length > 0 && <DeleteAllTodo />}
      </Main>
    </div>
  );
}

export default App;
