import React from "react";
import {TodoInputProps} from "../../types.ts";

// todo input component
const TodoInput: React.FC<TodoInputProps> = ({newTodo, setNewTodo, addTodo}) => {

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            addTodo(newTodo);
            setNewTodo("");
        }
    }
    // add 버튼 클릭
    const handleAddClick = () => {
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <div className={"join mt-9 mb-5 w-11/12 h-14 max-w-screen-lg"}>
            <div className={"w-full"}>
                <label className="input validator join-item flex items-center w-full h-14">
                    <input id={"todo-input"}
                       className="w-full h-14"
                       type="text"
                       placeholder="TODO!"
                       value={newTodo}
                       onChange={(e) => setNewTodo(e.target.value)}
                       onKeyUp={handleKeyPress}/>
                </label>
                {/*<div className="validator-hint hidden">Enter valid email address</div>*/}
            </div>
            <button className="btn btn-info join-item h-14 w-20"
                    onClick={handleAddClick}>Add
            </button>
        </div>
    );
};

export default TodoInput;