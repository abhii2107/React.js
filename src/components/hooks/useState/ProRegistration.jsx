import React, { useState } from "react";
import "./index.css"


export const ProRegistration = () => {
  const[user,setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    Phone:"",

  });
    
    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setUser((prev) => ({...prev, [name]:value})) 
        
       
    }
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>

                    <input
                        type="text"
                        name="firstName" 
                        placeholder="Enter firstName"
                        required
                        onChange={handleInputChange}
                        value={user.firstName}

                    />
                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter lastname"
                        required 
                        onChange={handleInputChange}
                        value={user.lastName}
                    />
                    <label htmlFor="email">
                        <b>Email</b>

                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                        onChange={handleInputChange}
                        value={user.email}
                        

                    />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        onChange={handleInputChange}
                        value={user.password}

                    />

                    <label htmlFor="Phone">
                        <b>Phone Number</b>
                    </label>

                    <input type="Phone"
                        placeholder="9588797435"
                        name="Phone"
                        required
                        onChange={handleInputChange}
                        value={user.Phone}

                    />


                    <p>
                        By creating an account you agrre to our
                        <a href="#" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>

                </div>
            </form>
        </>
    )
}