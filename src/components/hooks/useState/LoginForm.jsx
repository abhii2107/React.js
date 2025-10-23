import "./index.css"
import React, { useState } from "react"



export const LoginForm = ()=>{
    const[user,setUSer] = useState({
        username:"",
        password:"",
    })
    const handleInputChange = (e)=>{
        const{name,value} = e.target;
        setUSer((prev)=>({...prev,[name]:value}))
    }
    const handleFormSubmit = (e)=>{
        e.preventDefault();
    }   


    return(
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" onChange={handleInputChange}
                       value={user.username}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required autoComplete="off" onChange={handleInputChange}
                        value={user.password}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}