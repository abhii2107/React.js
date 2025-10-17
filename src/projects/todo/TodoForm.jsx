import React from "react";
import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
    const [inputvalue, setInputValue] = useState("");
    const handleInputChange = (value) => {
        setInputValue(value);
    }
   const handleFormSubmit = (event)=>{
        event.preventDefault();
        onAddTodo(inputvalue);
        setInputValue("");
   }
    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text"
                        className="todo-input" b
                        value={inputvalue}
                        onChange={(event) => handleInputChange(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    )
}