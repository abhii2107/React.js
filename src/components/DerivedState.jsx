import React, { useState } from "react";

export const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Ali", age: 221 },
        { name: "lice", age: 234 }
    ]);
    console.log(users);
    // count of users
    const userCount = users.length;

    // averaAge 
    const averageAge = (users.reduce((accum,currElem) => accum+currElem.age,0))/userCount;


    return (
        <div>
            <h1>users list</h1>
            <ul>
                {
                    users.map((user, index) => (
                        <li key={index}>
                            {user.name} - {user.age} years old;
                        </li>
                    ))
                }
            </ul>
            <p>Total Users: {userCount}</p>
            <p>average age: {averageAge}</p>
        </div>
    );
}

