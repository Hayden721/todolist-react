import React from "react";
import {TodoListProps} from "../../types.ts";

import DeleteTodoButton from "./DeleteTodoButton.tsx";
import CompleteCheckbox from "./CompleteCheckbox.tsx";

// Todo
const TodoList: React.FC<TodoListProps> = ({todos, deleteTodoFunc, completeTodoFunc}) => {



    return (
        <>
        {/*    */}
        {todos.map(todo => (
                <div className="card bg-base-100 shadow-sm w-11/12 max-w-screen-lg mb-5" key={todo.todoNo}>
                    <div className="card-body flex flex-row items-center">
                        {/* todo 완료 체크박스 */}
                        <CompleteCheckbox todoData={todo} completeTodoFunc={completeTodoFunc}/>
                        <p className={"w-full text-2xl"}>{todo.todoContent}</p>

                        {/*  todo 삭제 버튼 */}
                        <DeleteTodoButton deleteTodoFunc={deleteTodoFunc} todoData={todo}/>
                    </div>
                </div>
        ))}
        </>

    )

}

export default TodoList;