import React, { useContext } from "react"
import { BioContext } from "."
export const Services =()=>{

  const {myName,myAge} = useContext(BioContext)
    return <h1> Hello context(services) Api my name is {myName} and my age is{myAge}</h1>
}