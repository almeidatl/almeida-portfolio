import './Footer.css'

const Footer = () => {
    return(
        <div className="footer-bg">
            <div className="container">
                
                    <div className="footer-content">

                        <div className="footer-header">
                            <div className="title">
                                <h1>Almeida</h1>
                            </div>
                            <div className="footer-social">
                                <a href="https://www.linkedin.com/in/almeidatl" target='_blank'>
                                    <img src="assets/linkedin-in.svg" alt="" />
                                </a>
                                <a href="https://github.com/almeidatl" target='_blank'>
                                    <img src="assets/github-alt.svg" alt="" />
                                </a>
                                <a href="https://www.instagram.com/almeidatl" target='_blank'>
                                    <img src="assets/instagram.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="footer-main">
                            <p>&copy; 2024 All Rights Reserved </p>
                        </div>
                        <div className="footer-message">
                            <div className="footer-line"></div>
                            <p>
                            "Every great design begins with an even better story." <span className="footer-message-author">- Lorinda Mamo</span>
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default Footer