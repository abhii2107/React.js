import "./todo.css"
import React, { useState } from "react"
import { MdCheckCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export const Todo = () => {
    const [inputvalue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [datetime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputvalue) return;
        if (task.includes("inputvalue")) {
            setInputValue("");
            return;
        };
        setTask((prevTask) => [...prevTask, inputvalue])
        // ... spread operator strore all prevtask in the arr and inputvalue 
        setInputValue("");
    }
    const handleDeleteTodo = (value)=>{
        console.log(value);
        const updatedTask = task.filter((currelem) => currelem !== value);
        setTask(updatedTask);
    }
    const handleClearTodoData = ()=>{
        setTask([]);
    }

    //todo date and time
    const interval = setInterval(() => {
        const now = new Date();
        const FormattedDate = now.toLocaleDateString();
        const FormattedTime = now.toLocaleTimeString();
        setDateTime(`${FormattedDate} - ${FormattedTime}`)
    }, 1000);


    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time"> {datetime}</h2>
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
                        task.map((currelem, index) => {
                            return <li key={index} className="todo-item">
                                <span>{currelem}</span>
                                <button className="check-btn"><MdCheckCircle /></button>
                                <button className="delete-btn" onClick={() =>handleDeleteTodo(currelem)}><MdDelete /></button>
                            </li>
                        })
                    }
                </ul>
            </section>
             <section>
                
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
                </section>       

        </section>
    )
}