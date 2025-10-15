import "./todo.css"
import React, { useState } from "react"
import { MdCheckCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export const Todo = ()=>{
    const[inputvalue,setInputValue] = useState("");
    const[task,setTask] = useState([]);

    const handleInputChange = (value)=>{
        setInputValue(value);
    }
    const handleFormSubmit  = (event)=>{
        event.preventDefault();
        if(!inputvalue) return;
        if(task.includes("inputvalue")){
            setInputValue("");
            return;
        };
        setTask((prevTask) => [... prevTask,inputvalue])
        // ... spread operator strore all prevtask in the arr and inputvalue 
        setInputValue("");
    }
    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="da te-time"> Date-time</h2>
            </header>
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
            <section className="myorderlist">
                <ul>
                    {
                        task.map((currelem,index) => {
                            return <li key={index} className="todo-item">
                                <span>{currelem}</span>
                                <button className="check-btn"><MdCheckCircle/></button>
                                <button className="delete-btn"><MdDelete/></button>
                            </li>
                        })
                    }
                </ul>
            </section>
        </section>
    )
}