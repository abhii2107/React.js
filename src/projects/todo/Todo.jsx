import "./todo.css"
import React, { useState } from "react"
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
export const Todo = () => {

    const [task, setTask] = useState([]);



    const handleFormSubmit = (inputvalue) => {

        if (!inputvalue) return;
        if (task.includes(inputvalue)) {
            return;
        };
        setTask((prevTask) => [...prevTask, inputvalue])
        // ... spread operator strore all prevtask in the arr and inputvalue 

    }
    const handleDeleteTodo = (value) => {
        console.log(value);
        const updatedTask = task.filter((currelem) => currelem !== value);
        setTask(updatedTask);
    }
    const handleClearTodoData = () => {
        setTask([]);
    }

    //todo date and time



    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />

            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myorderlist">
                <ul>
                    {
                        task.map((currelem, index) => {
                            return (
                                <TodoList key={index} data={currelem} onHandleDeleteTodo={handleDeleteTodo} />

                            );
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