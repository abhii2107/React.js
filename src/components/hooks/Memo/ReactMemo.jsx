import { useState } from "react"

export const ReactMemo = ()=>{
    
    const[count,setCount] = useState(0);

    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
                <div className="bg-white/90 dark:bg-slate-800/80 dark:text-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">{count}</h1>
                    <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-transform active:scale-95"
                        onClick={()=>setCount((prev)=>prev+1)}
                    >
                        Increment
                    </button>
                </div>
            </div>
            <counts/>
        </>
    )
    // rect memo is used when you dont want to rerender the child componet when the parentr component rerenders 
    // when you don"t wnat to disturb the child
}