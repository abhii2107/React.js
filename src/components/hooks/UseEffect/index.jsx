import React from "react"
import { useEffect,useState } from "react"
import "./index2.css"
export const ReactUseEffect = ()=>{
    const[count,setCount] = useState(0);
    useEffect(()=>{
        console.log("Count value",count)
    },[count])// two arguments in useeffect function first is callback function and second is dependancy array
    return(
        <div>
            <h1>Hello,UseEffect</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}