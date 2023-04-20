import { CardAbout } from "../components/CardAbout"
import "../assets/css/about.css"
export const About = () => {
    return (
        <section className="about">
            <div className="about-list">
                <CardAbout logo={"engineering"} text={"Capacidade"}></CardAbout>
                <CardAbout logo={"social_leaderboard"} text={"Tradição"}></CardAbout>
                <CardAbout logo={"award_star"} text={"Exclusividade"}></CardAbout>
                <CardAbout logo={"offline_bolt"} text={"Eficiência"}></CardAbout>
            </div>
        </section>
    )
}
