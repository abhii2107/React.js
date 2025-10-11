import React, { useState } from "react";

//const users = 

export const StatePractice = ()=>{
    // creating usestate
    const[users,setUsers] = useState([
    {name:"Alice",age:25},
    {name:"Alice",age:25},
    {name:"Alice",age:25},
    {name:"Alice",age:25},
    {name:"Alice",age:25}
]);
    return(
        <div className="div-main">
            <h1> Users List</h1>
            <ul>
                {
                    users.map((currElem,index) =>{
                        return <>
                            <li key={index}>
                                {currElem.name} - {index.age} year old
                            </li>
                        
                        </>
                    })
                }
            </ul>
        </div>
    );
}