import React from "react";
import { useId } from "react";
export const useId = ()=>{

    // instead of using manually id use react useID()

    //   const usernameID = useId();
    //   const emailID = useId();
    // return(
    //     <form >
    //         <div>
    //             <label htmlFor={usernameID}>Username:</label>
    //             <input type="text" id={usernameID} name="name" />
    //         </div>
    //         <div>
    //             <label htmlFor={emailID}>Email:</label>
    //             <input type="text" id={emailID}  name="email" />
    //         </div>
    //         <button type="submit">Submit</button>
            
    //     </form>
    // )



     //** this leyts you avoid calling the useID for every single elements that need a unique id */

     const ID = useId();
    // concatinate  
    return(
        <form >
            <div>
                <label htmlFor={ID+usernameID}>Username:</label>
                <input type="text" id={ID+usernameID} name="name" />
            </div>
            <div>
                <label htmlFor={ID+emailID}>Email:</label>
                <input type="text" id={ID+emailID}  name="email" />
            </div>
            <button type="submit">Submit</button>
            
        </form>
    )
}