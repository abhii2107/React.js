// export const App = () =>{
//   return (
//     <div>

// import React from "react";

// import React from "react"; // Correct import for React

   
//       <Anime/>
//       <Anime/>
//       <Anime/>
//       </div>
    
    
//   );
// };
//  //todo
//  //each jsx element must have one parent element,which means if you try to return multiple elemets,react will throw an error
//  // because in jsx when you return something is objects and you cannot return multiple objects at same time even in javascript.
 



//  // every jsx tags need to be closed you can use self closing tags for elements that don't have any children e.g <img src  = "url">

//  //component
 // whnerver you are creating the component do it in the pascal like NetflixSeries
// const Anime = ()=>{
//   return(
//     <div>
//       <div>
//         <img src="ironman.jpg" alt="ironman.jpg" width="40%" height="40%"/>
//       </div>
//       <h2>Name: Queen Of Tears</h2>
//       <h3>Rating:8.2</h3>
//       <p>
//         summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quos asperiores? Necessitatibus nulla laudantium repellat nesciunt ducimus enim asperiores soluta aliquid sapiente! Quasi commodi dolore ad obcaecati laudantium, voluptas temporibus.

//       </p>
//     </div>
//   );
// }

// ********** REACT WITH FRAGMENTS****** 

// when you want to remove that extra wrapper div(parent) you can use array with keys but this is very tough
import {Anime, Footer} from "./components/anime";
import React from "react"; // Correct import for React
 
export const App = () => {
    // return( [<Anime keys = "1"/> ,< Anime keys = "2"/>])

    return(
      <>
        <Anime />
        <Anime />
        <Footer/>

      </>
    )
};

// ************* lecture 03 ***************************
// ************* DYNAMIC VALUES IN JSX ******************

// 1 VAriables
// you can embed any javascript variable by using curly bracket.
// the value of the variable will be inserted at the respected DOM location


// const Anime = ()=>{
//   const name = "iron man"
//   const rating = "9.4"
//   const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quos asperiores? Necessitatibus nulla laudantium repellat nesciunt ducimus enim asperiores soluta aliquid sapiente! Quasi commodi dolore ad obcaecati laudantium, voluptas temporibus."

//   return(
//     <div>
//       <div>
//         <img src="ironman.jpg" alt="ironman.jpg" width="40%" height="40%"/>
//       </div>
//       <h2>Name: {name}</h2>
//       <h3>Rating:{5+5}</h3>
//       <p>
//         Summary: {summary}
//       </p> 
//       <p>Genre:{returnGenre()}</p>
//     </div>
//   );
// }

// *2 expression
// jsx allows you to write javascript expression inside cyrly braces. this includes operation ,function calls and other javascript values that produces a value
// const Anime = ()=>{
//   const name = "iron man"
//   const rating = "9.4"
//   const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quos asperiores? Necessitatibus nulla laudantium repellat nesciunt ducimus enim asperiores soluta aliquid sapiente! Quasi commodi dolore ad obcaecati laudantium, voluptas temporibus."
//   const returnGenre = ()=>{
//     const genre  = "sci-fi"
//     return genre;
//   }

//   return(
//     <div>
//       <div>
//         <img src="ironman.jpg" alt="ironman.jpg" width="40%" height="40%"/>
//       </div>
//       <h2>Name: {name}</h2>
//       <h3>Rating:{5+5}</h3>
//       <p>
//         Summary: {summary}
//       </p> 
//       <p>Genre:{returnGenre()}</p>
//     </div>
//   );
// }


// ********** LECTURE 03 ****************
// ********** CONDITIONAL RENDERING IN JSX ***************

// const Anime = ()=>{
//   const name = "iron man"
//   const rating = "9.4"
//   const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quos asperiores? Necessitatibus nulla laudantium repellat nesciunt ducimus enim asperiores soluta aliquid sapiente! Quasi commodi dolore ad obcaecati laudantium, voluptas temporibus."
//   let age = 11;

//   let canwatch = "Not Available"
//   if(age>=18) canwatch = "Watch Now"


//   const returnGenre = ()=>{
//     const genre  = "sci-fi"
//     return genre;
//   }

//   // if(age<18){
//   //   return(
//   //   <div>
//   //     <div>
//   //       <img src="ironman.jpg" alt="ironman.jpg" width="40%" height="40%"/>
//   //     </div>
//   //     <h2>Name: {name}</h2>
//   //     <h3>Rating:{5+5}</h3>
//   //     <p>
//   //       Summary: {summary}
//   //     </p> 
//   //     <p>Genre:{returnGenre()}</p>
//   //     <button>Not Available</button>
//   //   </div>
//   // );
//   // }
// //   return(
// //     <div>
// //       <div>
// //         <img src="ironman.jpg" alt="ironman.jpg" width="40%" height="40%"/>
// //       </div>
// //       <h2>Name: {name}</h2>
// //       <h3>Rating:{5+5}</h3>
// //       <p>
// //         Summary: {summary}
// //       </p> 
// //       <p>Genre:{returnGenre()}</p>
// //       {/* <button>{age>=18 ? "Watch Now" : "Not Available"}</button> */
// //        canwatch
// //       }
// //     </div>
// //   );

  
// // }