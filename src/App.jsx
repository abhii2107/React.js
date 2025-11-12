import React from "react";
import { DarkLight, ThemeProvider } from "./components/hooks/ContextApi/DarkLight";
export const App = () => {
  return (
    // ThemeProvider context kis kis ko data provide karega
    <>
      <ThemeProvider>
    
        < DarkLight />
      </ThemeProvider>
    </>
  )
};
