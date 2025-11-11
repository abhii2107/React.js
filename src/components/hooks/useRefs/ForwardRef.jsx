import { forwardRef, useRef, useId } from "react"
import React from "react";
// ReactForward allows parent component to move down the refs to their children . it gives a child component a refernce to dom entity created by the parent componenet in the react this helps the child to read and modify the element from any location it is used but in react version 19 it sis not needed 
export const ForwardRef = ()=>{
    const username = useRef(null);
    const password = useRef(null);
    const handleFormSubmit = (e)=>{
        e.preventdeDefault();
        console.log(username.current.value,password.current.value);
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <BeforeReact19Input label = "username" ref = {username}/>
            <BeforeReact19Input label = "password" ref = {password}/>
            <button>Submit</button>
        </form>
    )
};

//create BeforeReact19Input component
//const BeforeReact19Input = forwardRef((props,ref)=>{
const BeforeReact19Input = (props)=>{
    const id = useId();
    return(
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={props.ref}/>
        </div>
    )
}