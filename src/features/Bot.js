import { useEffect } from "react";

const home = document.getElementById("home");

export const Bot = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("async", true);
        script.setAttribute("src", "https://collectcdn.com/launcher.js");
        home.appendChild(script);
    }, []);
    return <div>bot</div>;
};
