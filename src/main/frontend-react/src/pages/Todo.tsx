// import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../config/axios.ts";


import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";

const Todo = () => {

    const user = useSelector((state: RootState) => state.username);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");

    console.log("data1 : ", user);
    console.log(import.meta.env.VITE_CORS_ALLOWED_ORIGINS);


    interface Todo {
        todoNo: number;
        todoContent: string;
    }

    useEffect(() => {
        axios
            .get<Todo[]>(`/api/todo?user=${encodeURIComponent(user.username)}`)
            .then((response) => {
                setTodos(response.data)
            })
            .catch((error) => {
                console.error("Error fetching todos:", error);
            })
    }, [user]);

    const addTodo = () => {
        if(!newTodo.trim()) return;

        axios
            .post<Todo>('/api/todo/add', {
                todoContent: newTodo,
                username: user.username
            })
            .then((response) => {
                setTodos([response.data, ...todos]);
                setNewTodo("");
            })
            .catch((error) => {
                console.error("todo get error", error);
            })
    }

    const delTodo = (todoNo: number) => {
        axios
            .delete(`/api/todo/delete/${todoNo}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.todoNo !== todoNo))
            })
            .catch((error) => {
                console.log("todo 삭제 오류", error);
            })
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addTodo();
        }
    }


    return (
        <div className="flex flex-col items-center w-full h-full">

            <div className={"join mt-9 mb-5 w-11/12 h-14 max-w-screen-lg"}>
                <div className={"w-full"}>
                    <label className="input validator join-item flex items-center w-full h-14">
                        <input id={"todo-input"}
                               className="w-full h-14"
                               type="text"
                               placeholder="TODO!"
                               value={newTodo}
                               onChange={(e) => setNewTodo(e.target.value)}
                               onKeyUp={handleKeyPress} />

                    </label>
                    {/*<div className="validator-hint hidden">Enter valid email address</div>*/}
                </div>
                <button className="btn btn-info join-item h-14 w-20"
                    onClick={addTodo}>Add</button>
            </div>

            {todos.map(todo => (
            <div className="card bg-base-100 shadow-sm w-11/12 max-w-screen-lg mb-5" key={todo.todoNo}>
                <div className="card-body flex flex-row items-center">
                    <div className=" card-actions justify-start">
                        <input type="checkbox" className="checkbox"/>
                    </div>

                    <p className={"w-full text-2xl"}>{todo.todoContent}</p>

                    <div className=" card-actions justify-end">
                        <button
                            className="btn btn-square btn-sm del-btn"
                            onClick={() => delTodo(todo.todoNo)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            ))}
            {/*    /!*<Link to={'/test1'}>test</Link>*!/*/}
        </div>
    )

}

export default Todo;