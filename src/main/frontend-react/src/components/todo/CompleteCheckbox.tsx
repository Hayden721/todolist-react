import React from "react";
import {CompleteTodoProps} from "../../types.ts";

// todo 성공 체크박스
const CompleteCheckbox: React.FC<CompleteTodoProps> = ({todoData, completeTodoFunc}) => {

    const handleCheckbox = () => {
        completeTodoFunc(todoData.todoNo);
    }

    return (
        <div className=" card-actions justify-start">
            <input type="checkbox"
                   className="checkbox"
                   onClick={handleCheckbox}/>
        </div>
    )
}

export default CompleteCheckbox;