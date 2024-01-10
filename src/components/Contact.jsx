import GetInTouch from "./small-components/GetInTouch"
import './Contact.css'
const Contact = () => {
    return(
        <div className="container">
            <section className="contact-content">
                <h2 className="title">Leave your info <br /> so I can reach you</h2>
                <GetInTouch />
            </section>
        </div>
    )
}

export default Contact