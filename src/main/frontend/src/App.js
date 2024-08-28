import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

import axios from "./utils/axios";

function App() {

  const [todos, setTodos] = useState([]);

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
        <div>hello</div>
    </div>
  );
}

export default App;
