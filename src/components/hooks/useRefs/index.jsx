import React, { useRef } from "react"
export const UseRef = () => {
// this is an old method of javascriopt
    // const username = document.getElementById("username")
    // const password = document.getElementById("password")

    // in react we will use useref
    const username = useRef(null);
    const password = useRef(null);
    console.log(username);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value,password.current.value);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username} />
            <input type="text" id="password" ref={password}/>
            <button>Submit</button>
        </form>
    )
}