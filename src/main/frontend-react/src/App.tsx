
import {useEffect, useState} from "react";

import axios from "./config/axios";
import {Link} from "react-router-dom";
import ThemeModeToggle from "./components/ThemeModeToggle.tsx";


function App() {

interface Todo {
        testNo: number;
        testContent: string;
}

    const [todos, setTodos] = useState<Todo[]>([]);
    console.log(import.meta.env.VITE_CORS_ALLOWED_ORIGINS);
    useEffect(() => {
        axios
            .get<Todo[]>('/api/todo')
            .then((response) => {
                setTodos(response.data)
            })
    }, []);
  return (
      <div>
          <div>hello</div>

          <ul>
              {todos.map(todo => (
                  <li key={todo.testNo}>{todo.testContent}</li>
              ))}
          </ul>

          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
          <Link to={'/test1'}>test</Link>

          <ThemeModeToggle/>
      </div>
  )
}

export default App
