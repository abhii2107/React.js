import React from "react";
import { ToggleSwitch } from "./projects/toggleswitch/ToggleSwitch";
import "./components/ev.css";
import { Todo } from "./projects/todo/Todo";

import { LiftingStateup } from "./components/LiftingStateup";

export const App = () => {
  return (
    <section className="container">
      <Todo/>
     
    </section>
  );
};
