import { useRef } from "react"
import "../assets/css/cardlist.css"

export const CardAbout = (props) => {
    const logo = props.logo
    const texto = props.text

    const parent = useRef(null)
    const icon = useRef(null)
    const text = useRef(null)

    const addOver = (e) => {
        parent.current.classList.add("hovered")
    }

    const addOut = (e) => {
        parent.current.classList.remove("hovered")
    }

    return (
        <article className="cardabout-card" ref={parent} onMouseOver={addOver} onMouseOut={addOut}>
            <div className="cardabout-img-container">
                <a className="cardabout-icons" href="#contact" ref={icon}>
                    <span className="material-symbols-outlined cardabout-icon">{`${logo}`}</span>
                </a>
            </div>
            <div className="cardabout-description">
                <section className="cardabout-title-container">
                    <p> {texto} </p>
                </section>
                <p className="cardabout-description-text" ref={text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus in.
                </p>
            </div>
        </article>
    )
}
