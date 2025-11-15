import { useMemo, useState } from "react";
import React from "react";
const ExpensveComponent = () =>{
    const sum = ()=>{
        console.log("claculating the sum...");
        let i=0;
        for( i=0; i<=1000000000000; i++){
            i = i+1;
        }
        return i;

    }

    useMemo(()=>{
        return sum();
    },[])
    // const total = sum();
    return <p> sum:{total}</p>
}

export const MemoParentComponent = ()=>{
    const [count,setCount] = useState(0);

    return (
        <div>
            <ExpensveComponent/>
            <button onClick={()=>setCount(count+1)}> Re - Render Parent</button>
            <p>parent re-renders: {count}</p>
        </div>
    )
}