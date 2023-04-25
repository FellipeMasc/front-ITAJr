import { CardAbout } from "./CardAbout"
import "../assets/css/about.css"

export const About = () => {
    return (
        <div id="about" className="about">
            <div className="list-title-about">
                <h2>
                    NOSSOS <br></br>
                    <span>DIFERENCIAIS</span>
                </h2>
            </div>
            <div className="list-text-about">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe unde
                    repellendus a assumenda in voluptatibus aliquid qui quas nostrum
                </p>
            </div>
            <div className="about-list">
                <CardAbout logo={"engineering"} text={"Capacidade"}></CardAbout>
                <CardAbout logo={"social_leaderboard"} text={"Tradição"}></CardAbout>
                <CardAbout logo={"award_star"} text={"Exclusividade"}></CardAbout>
                <CardAbout logo={"offline_bolt"} text={"Eficiência"}></CardAbout>
            </div>
        </div>
    )
}
