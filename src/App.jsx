import React from "react";
import { ForwardRef } from "./components/hooks/useRefs/ForwardRef";
import { UseRef } from "./components/hooks/useRefs";
import { ParentComponent } from "./components/propdrilling";
import { Home } from "./components/hooks/ContextApi/home";
import { BioProvider } from "./components/hooks/ContextApi";
import { Services } from "./components/hooks/ContextApi/Services";
export const App = () => {
  return(
  <BioProvider>
    // BioProvider context kis kis ko data provide karega 
    <Home/>;
    <Services/>
  </BioProvider>
  )
};
