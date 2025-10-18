import "./todo.css"
import React, { useState, useEffect } from "react"
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
 // now we want that it should intialze the use state with the data that was previosly stored in the local; storage
    const todokey = "reactTodo";
export const Todo = () => {
    const [task, setTask] = useState(()=>{
        try{
            const rawTodo = localStorage.getItem(todokey);
            if (rawTodo === null) return [];
            // defend against string "undefined" or invalid json
            const parsed = JSON.parse(rawTodo);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    });



    const handleFormSubmit = (inputvalue) => {
        const { id, content, checked } = inputvalue;
        if (!content) return;
        // to check that data is alreadu present or not
        // if (task.includes(inputvalue)) {
        //     return;
        // };
        const ifTodoContentMatched = task.find((currtask) =>
            currtask.content == content
        );
        if (ifTodoContentMatched) return;
        // ... spread operator strore all prevtask in the arr and inputvalue 
        setTask((prevTask) => [...prevTask, {id,content,checked}])
        

    }
    // persist tasks to localStorage whenever they change
    useEffect(() => {
        try{
            localStorage.setItem(todokey, JSON.stringify(task));
        } catch {
            // ignore write errors (quota, etc.)
        }
    }, [task]);

    // delete todo
    const handleDeleteTodo = (value) => {
       
        const updatedTask = task.filter((currelem) => currelem.content !== value);
        setTask(updatedTask);
    }
    // handle clear todo data
    const handleClearTodoData = () => {
        setTask([]);
    }

    //todo date and time

    // todo handlechecked functionality
    const handleCheckedTodo = (content)=>{
        const updatedTask = task.map((currtask)=>{
            if(currtask.content == content){
                // toggle checked
                return {...currtask, checked: !currtask.checked};
            }
            return currtask;
        })
        setTask(updatedTask);
    }
    



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
                        task.map((currelem) => {
                            return (
                                <TodoList key={currelem.id} data={currelem.content} checked = {currelem.checked} onHandleDeleteTodo={handleDeleteTodo}
                                onhandleCheckedTodo = {handleCheckedTodo}
                                
                                />

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