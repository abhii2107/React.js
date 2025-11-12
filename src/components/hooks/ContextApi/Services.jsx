import React, { use, useContext } from "react"
import { BioContext, useBioContext } from "."
export const Services =()=>{

  // const {myName,myAge} = useBioContext();
  // const{myName,myAge} = useContext(BioContext);
  
  // use can be used in condition example
  const newHook = true;
  let myName,myAge;
  if(newHook)( 
    ({myName,myAge} = use(BioContext))
  )
  
    return <h1> Hello context(services) Api my name is {myName} and my age is{myAge}</h1>
}