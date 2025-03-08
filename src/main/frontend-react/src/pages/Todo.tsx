import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../config/axios.ts";
import {IoAdd} from "react-icons/io5";

import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";

const Todo = () => {

    const user = useSelector((state: RootState) => state.username);
    const [todos, setTodos] = useState<Todo[]>([]);

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


    return (
        <div className="bg-base-200 min-h-screen min-w-full">
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box"
                              src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                    <div>
                        <div>Dio Lupa</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none"
                               stroke="currentColor">
                                <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                        </svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none"
                               stroke="currentColor">
                                <path
                                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </g>
                        </svg>
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box"
                              src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
                    <div>
                        <div>Ellie Beilish</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none"
                               stroke="currentColor">
                                <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                        </svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none"
                               stroke="currentColor">
                                <path
                                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </g>
                        </svg>
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box"
                              src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
                    <div>
                        <div>Sabrino Gardener</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none"
                               stroke="currentColor">
                                <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                        </svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none"
                               stroke="currentColor">
                                <path
                                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </g>
                        </svg>
                    </button>
                </li>

            </ul>

            {/*<div className={'flex flex-col items-center bg-base-100'}>*/}
            {/*    <div className={"flex min-w-full min-h-full justify-center "}>*/}
            {/*        <input type="text" placeholder="Todo Content input!" className="input input-bordered w-max max-w-xs"/>*/}
            {/*        <button className={"rounded-btn bg-primary "}><IoAdd size={45}/></button>*/}
            {/*    </div>*/}

            {/*    */}
            {/*    */}
            {/*    */}
            {/*    <div>*/}
            {/*        <ul>*/}
            {/*            {todos.map(todo => (*/}
            {/*                <li key={todo.todoNo}>{todo.todoContent}</li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*        <button>X</button>*/}
            {/*    </div>*/}


            {/*    /!*<Link to={'/test1'}>test</Link>*!/*/}

            {/*</div>*/}


        </div>
    )

}

export default Todo;