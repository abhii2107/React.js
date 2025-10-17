import { MdCheckCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import React from "react";
export const TodoList = ({key,data,onHandleDeleteTodo}) => {
    return (
        <li key={key} className="todo-item">
            <span>{data}</span>
            <button className="check-btn"><MdCheckCircle /></button>
            <button
             className="delete-btn" 
             onClick={() => onHandleDeleteTodo(data)}><MdDelete /></button>
        </li>
    );
}