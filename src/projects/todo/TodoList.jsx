import { MdCheckCircle, MdRemoveCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import React from "react";
export const TodoList = ({data,onHandleDeleteTodo,onhandleCheckedTodo,checked}) => {
    return (
        <li  className="todo-item">
            <span className= {checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={()=>onhandleCheckedTodo(data)}>
                {checked ? <MdRemoveCircleOutline /> : <MdCheckCircle />}
            </button>
            <button
             className="delete-btn" 
             onClick={() => onHandleDeleteTodo(data)}><MdDelete /></button>
        </li>
    );
}