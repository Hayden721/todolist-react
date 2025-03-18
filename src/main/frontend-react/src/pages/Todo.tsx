import {useEffect, useState} from "react";
import TodoInput from "../components/todo/TodoInput.tsx";
import useTodo from "../hooks/useTodo.tsx";
import TodoList from "../components/todo/TodoList.tsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";

// Todo 페이지
const Todo = () => {
    const {todos, onAddTodo, onDeleteTodo, onCompleteTodo} = useTodo();
    const [newTodo, setNewTodo] = useState<string>("");
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.name.username);
    console.log("user : ",user);


    useEffect(() => {
        if(user === "") {
            navigate('/');
        }
    }, [user, navigate]);



    return (
        <div className="flex flex-col items-center w-full h-full">

            <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={onAddTodo}/>

            <TodoList todos={todos} deleteTodoFunc={onDeleteTodo} completeTodoFunc={onCompleteTodo}/>
            {/*    /!*<Link to={'/test1'}>test</Link>*!/*/}
        </div>
    )
}

export default Todo;