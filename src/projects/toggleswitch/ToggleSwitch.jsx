import { useState } from "react"
import React from "react";
import "./ToggleSwitch.css";
import { FaToggleOn } from "react-icons/fa";

export const ToggleSwitch = ()=>{
    //usetate
    const [isOn,setIsOn] = useState(false);
    const handleToggleSwitch = ()=>{
        setIsOn(!isOn);//toggles the on off value on to off vice versa
    }
    const checkIson = isOn ? "ON":"OFF";
    return (
        <>
        <h1 style={{
            color:"#000",textAlign:"center"
        }}>Toggle Switch <FaToggleOn /></h1>
        <div className="toggle-switch" style={{backgroundColor: isOn ? "#4ade80" : "#cc53"}} onClick={handleToggleSwitch}>
            <div className={`switch ${checkIson}`}>
                <span className="switch-state">{checkIson}</span>
            </div>

        </div>
        </>
    )
};