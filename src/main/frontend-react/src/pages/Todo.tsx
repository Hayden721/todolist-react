
import {useState} from "react";

import TodoInput from "../components/todo/TodoInput.tsx";
import useTodo from "../hooks/useTodo.tsx";
import TodoList from "../components/todo/TodoList.tsx";

const Todo = () => {
    const {todos, onAddTodo, onDeleteTodo, onCompleteTodo} = useTodo();
    const [newTodo, setNewTodo] = useState<string>("");

    return (
        <div className="flex flex-col items-center w-full h-full">
            <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={onAddTodo}/>
            <TodoList todos={todos} deleteTodoFunc={onDeleteTodo} completeTodoFunc={onCompleteTodo}/>
            {/*    /!*<Link to={'/test1'}>test</Link>*!/*/}

        </div>
    )

}

export default Todo;