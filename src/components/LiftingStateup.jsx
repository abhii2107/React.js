import { useState } from "react";
import React from "react";

export const LiftingStateup = () => {
     const [inputValue, setInputValue] = useState("");
    return (
        <>

            <InputComponenet  inputValue = {inputValue} setInputValue = {setInputValue}/>;
            <DisplayComponenet inputValue = {inputValue}/>;
        </>
    )
}
const InputComponenet = ({inputValue,setInputValue}) => {
   
    return (
        <>
            <input
                type="text"
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}

            />


        </>
    )
}

const DisplayComponenet = ({inputValue}) => {
    return (
        <>
            <p>The current Input value is:{inputValue}</p>
        </>
    )
}