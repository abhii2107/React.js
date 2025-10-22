import React, { useState } from "react";
import "./index.css"

export const RegistrationForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Phone, setPhone] = useState("");
    
    const handleInputChange = (e)=>{
        const {name,value} = e.target;

        switch(name){
            case "firstName":
            setFirstName(value);
            break;
            case "lastName":
            setlastName(value);
            break;
            case "email":
            setEmail(value);
            break;
            case "password":
            setPassword(value);
            break;
            case "phone":
            setPhone(value);
            break;
        }
        
       
    }
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            Phone
        }
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
                        value={firstName}

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
                        value={lastName}
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
                        value={email}
                        

                    />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        onChange={handleInputChange}
                        value={password}

                    />

                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>

                    <input type="phone"
                        placeholder="9588797435"
                        name="phone"
                        required
                        onChange={handleInputChange}
                        value={Phone}

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