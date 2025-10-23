
import React, { useState } from "react"
export const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        message: "",
    }) 
    const handleInputChange = (e)=>{
        const{name,value} = e.target;
        setUser((prev) => ({...prev,[name]:value}))
    }
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        console.log(user);
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        required 
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={user.username}


                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        required 
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={user.password}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        type="password"
                        required
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={user.message}
                        rows="6"
                    ></textarea>
                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}