// context api ==> a way to pass the data through the component tree  without have to pass the data manually at every level
//. create context : creates a context object
//. Provider: a component that proviodes the context value to its children.
//.useCOntext: (Consumer) A hook that allows you to consume context
import React from "react";
import { createContext } from "react";
// 1st step 
export const BioContext = createContext();

//2nd step

export const BioProvider = ({children})=>{
    const myName = "vinod";
    console.log(children);
    const myAge = 30;

    return <BioContext.Provider value ={{myName,myAge}}>
        {children}
    </BioContext.Provider>
}