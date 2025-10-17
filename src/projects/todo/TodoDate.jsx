import React from "react";
import { useState } from "react";
export const TodoDate = () => {
    const [datetime, setDateTime] = useState("");

    const interval = setInterval(() => {
        const now = new Date();
        const FormattedDate = now.toLocaleDateString();
        const FormattedTime = now.toLocaleTimeString();
        setDateTime(`${FormattedDate} - ${FormattedTime}`)
    }, 1000);

    return <h2 className="date-time"> {datetime}</h2>;
}