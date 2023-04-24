import { useEffect, useRef } from "react"
import { Hero } from "../components/Hero"
import { List } from "../components/List"
import { About } from "./About"

export const Home = () => {
    const refContainer = useRef(null)

    useEffect(() => {
        //Adicionar o bot toda vez que a pagina home renderiza (first render - react)
        const home = refContainer.current

        /* if (!home.querySelector("script")) {
            var script = document.createElement("script")
            window.CollectId = "6431d3082f45336a32164d74"
            var h = home
            script.setAttribute("type", "text/javascript")
            script.async = true
            script.setAttribute("src", "https://collectcdn.com/launcher.js") // caminho relativo para o arquivo launcher.js
            h.appendChild(script)
        } */
    }, [])

    return (
        <div ref={refContainer} id="home" className="home">
            <Hero></Hero>
            <List></List>
            <About></About>
        </div>
    )
}
