import React from "react";
import { DarkLight, ThemeProvider } from "./components/hooks/ContextApi/DarkLight";
import { ReducerComp } from "./components/hooks/useReducer";
export const App = () => {
  return (
    // ThemeProvider context kis kis ko data provide karega
    <>
      <ReducerComp/>
    </>
  )
};
