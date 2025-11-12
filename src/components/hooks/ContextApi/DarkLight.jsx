import React, { createContext, use, useState } from "react";

//step 1 creating context 
export const ThemeContext = createContext();

// step 2 provider component
export const ThemeProvider = ({children})=>{
    const[theme,setTheme] = useState("dark");
    const handleToggleTheme = ()=>{
        return setTheme((prev)=>(prev == "dark" ?"light":"dark"));
    }

    return <ThemeContext.Provider value={{theme,handleToggleTheme}}>
        {children}
        </ThemeContext.Provider>
}
// craeting a componenet

export const DarkLight = ()=>{
    const{theme,handleToggleTheme} = use(ThemeContext)
    return (
        <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${theme === "dark" ? "bg-slate-900 text-white" : "bg-gradient-to-br from-blue-50 to-indigo-100 text-slate-900"}`}>
            <div className="max-w-md w-full mx-4 p-8 rounded-2xl shadow-2xl backdrop-blur-lg" style={{background: theme === "dark" ? "rgba(15,23,42,0.8)" : "rgba(255,255,255,0.9)"}}>
                <h1 className="text-4xl font-bold mb-4 text-center">Dark Mode</h1>
                <p className={`text-center mb-8 text-lg transition-colors ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                    Click the button below to switch between dark and light themes
                </p>
                <button 
                    onClick={handleToggleTheme}
                    className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 ${
                        theme === "dark" 
                            ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700" 
                            : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
                    }`}
                >
                    {theme === "dark" ? "☀️ Switch To Light Mode" : "🌙 Switch to Dark Mode"}
                </button>
            </div>
        </div>
    )
}