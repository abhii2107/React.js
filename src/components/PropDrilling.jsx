import React from "react"
export const ParentComponent = () => {
    return (
        <div>
            <h1>HEllo ParentComponent</h1>
            <ChildComponent data = "React Js"/>
        </div>
    )
}

const ChildComponent = (props)=>{
    return <>
        <h1>HEllo ,I am childcomponent B</h1>
        <GrandChildComponent data = {props.data}/>

    </>
}
const GrandChildComponent = (props)=>{
    return <>
        <h1>HEllo ,I am childcomponent B</h1>
        <GrandGrandChildComponent data = {props.data}/>

    </>
}
const GrandGRandChildComponent = (props)=>{
    return <>
        <h1>HEllo ,I am childcomponent B</h1>
        <GrandGRandChildComponent data = {props.data}/>

    </>
}