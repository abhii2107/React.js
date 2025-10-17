import "./todo.css"
import React, { useState } from "react"
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
export const Todo = () => {

    const [task, setTask] = useState([]);



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

        setTask((prevTask) => [...prevTask, {id,content,checked}])
        // ... spread operator strore all prevtask in the arr and inputvalue 

    }
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
        const updatedTask = content.map((currtask)=>{
            if(currtask.content == content){
                //agar trur hai toh false kar doo and vice versa
                return{...currtask,checked: !currtask.checked};
            }
            else{
                return currtask;
            }
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