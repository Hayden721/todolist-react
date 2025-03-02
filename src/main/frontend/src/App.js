import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "./utils/axios";

function App() {

  const [todos, setTodos] = useState([]);
  const corsTest = process.env.REACT_APP_CORS_ALLOWED_ORIGINS;
  console.log("test", corsTest);

  const textColor = {
      color: 'red',
      fontSize: '20px'
  }
  useEffect(() => {
    axios.get('/api/todo')
        .then(response => setTodos(response.data))
  }, []);

  return (
    <div>
      <h1>todo</h1>
      <ul>
          {todos.map(todo => (
              <li key={todo.testNo}>{todo.testContent}</li>
          ))}
      </ul>

        <div></div>
    </div>
  );
}

export default App;
