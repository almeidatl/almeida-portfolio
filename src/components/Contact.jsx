import GetInTouch from "./small-components/GetInTouch"
import './Contact.css'

const Contact = () => {
    return(
        <div className="container">
            <section className="contact-content">
                <h2 className="title" id="contact">Deixa um contato <br /> que falo contigo ;)</h2>
                <GetInTouch />
            </section>
        </div>
    )
}

export default Contact