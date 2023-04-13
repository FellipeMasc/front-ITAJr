import { useRef } from "react"
import "../assets/css/cardlist.css"

export const CardList = (props) => {
    const logo = props.logo
    const texto = props.text

    const parent = useRef(null)
    const icon = useRef(null)
    const text = useRef(null)

    const addOver = (e) => {
        icon.current.style.display = "none"
        text.current.style.display = "inline-block"
        text.current.classList.add("show")
    }

    const addOut = (e) => {
        icon.current.style.display = "inline-block"
        text.current.style.display = "none"
        text.current.classList.remove("show")
    }

    return (
        <article className="cardlist-card" ref={parent} onMouseOver={addOver} onMouseOut={addOut}>
            <div className="cardlist-img-container">
                <a className="cardlist-icons" href="https://www.facebook.com" ref={icon}>
                    <span className="material-symbols-outlined cardlist-icon">{`${logo}`}</span>
                </a>
                <p className="cardlist-description" ref={text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus in.
                </p>
            </div>
            <section className="cardlist-title-container">
                <p> {texto} </p>
            </section>
        </article>
    )
}
