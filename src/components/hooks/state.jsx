import React from "react";
import { useState } from "react";
//syntax
// const[count,usecount] = useState(0)
// count = the current state value , useCount = function that update the state value, usestate(0) =(hooks) and 0 means initial value of the state 
export const State =()=>{
    // let value = 0;
    // const handleButtonclick = ()=>{
    //     value++;
    //     console.log(value);
    //}
    const [count,setCount] = useState(0);
    console.log("parent componenet rendered");
    const handleButtonclick = ()=>{
        setCount(() => count+1);
    }
    
    return(
        <>
            <div className="main-div">
                <h1>{count}</h1>
                 <button onClick={handleButtonclick} > 
                    Increment
                </button>
            </div>
            <ChildComponent count = {count}/>
        </>
    );
};


function ChildComponent (){
    console.log("child component rendered");
    return (
    <div className="main-div">
        <h2>Child Component  - {count}</h2>
    </div>)
}

 export function SiblingComponent(){
    console.log("Sibling Componenet is rendered");
    return(
        <div className="main-div">
            <h2>Sibling component</h2>
        </div>
    )
}

