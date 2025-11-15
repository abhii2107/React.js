import React from "react";
import { DarkLight, ThemeProvider } from "./components/hooks/ContextApi/DarkLight";
import { ReducerComp } from "./components/hooks/useReducer";
import { ReactMemo } from "./components/hooks/Memo/ReactMemo";
import { MemoParentComponent } from "./components/hooks/Memo/UseMemo";
export const App = () => {
  return (
    // ThemeProvider context kis kis ko data provide karega
    <>
      <MemoParentComponent/>
    </>
  )
};
