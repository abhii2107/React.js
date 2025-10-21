import "./Hooks.css";
import React, { useState } from "react";
export const ShortCircuitExample = ()=>{
const[isloggedIn,setIsloggedIn] = useState(true);
const[user,setUser] = useState("")

    return(

        <section className="container short-container">
            <h1>Welcome To ShortCircuit Evaluation</h1>
            {/* conditonal rendering using short circuit evaluation */}                                                                                                

            {isloggedIn && <p>You are Logged In</p>}
            {/* another example of short circuit evaluatiion */}

            {user ? `hello ${user}` : "Pleasee log in"} 

            <div className="grid-three-columns">
                <button onClick={()=> setIsloggedIn(!isloggedIn)}>Toggle loggin state</button>
                <button onClick={()=>setUser("Hola Amigo")}>set user</button>
                <button onClick={()=> setUser("")}>clear user</button>   
            </div>
        </section>
    )
}  