import React from "react";
import {CompleteTodoProps} from "../../types.ts";

const CompleteCheckbox: React.FC<CompleteTodoProps> = ({todoData, completeTodoFunc}) => {

    const handleCheckbox = () => {
        if(window.confirm("Todo를 완료하시겠어요?")) {
            completeTodoFunc(todoData.todoNo);
        }
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