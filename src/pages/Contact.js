import { CardContact } from "../components/CardContact"
import "../assets/css/contact.css"
import { AsideContact } from "../components/AsideContact"

export const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-list">
                <CardContact></CardContact>
                <AsideContact></AsideContact>
            </div>
        </section>
    )
}
