import React, { useContext } from "react"
import { BioContext } from "."
export const Home =()=>{

  const {myName,myAge} = useContext(BioContext)
    return <h1> Hello context(home) Api my name is {myName} and my age is{myAge}</h1>
}