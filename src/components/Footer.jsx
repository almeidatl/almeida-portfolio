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
                                    <img src="/linkedin-in.svg" alt="" />
                                </a>
                                <a href="https://github.com/almeidatl" target='_blank'>
                                    <img src="/github-alt.svg" alt="" />
                                </a>
                                <a href="https://www.instagram.com/almeidatl" target='_blank'>
                                    <img src="/instagram.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="footer-main">
                            
                        </div>
                        <div className="footer-message">
                            <div className="footer-line"></div>
                            <p>
                            "Every great design begins with an even better story." <span className="footer-message-author">- Lorinda Mamo</span>
                            </p>
                            <p>&copy; {new Date().getFullYear()} All Rights Reserved </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default Footer