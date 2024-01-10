import './Header.css'


function Header(){
    
        return(
            <>
                <header>
                    <div className="container">
                        <section className="header-content">
                            <div className="logo">
                                <h1 className='title'>Almeida</h1>
                            </div>
                            <nav>
                                <ul className="nav-bar">
                                    {/* <a href="#about">
                                        <li className="nav-item">About</li>
                                    </a> */}
                                    {/* <a href="#skills">
                                        <li className="nav-item">Skills</li>
                                    </a> */}
                                    <a href="#projects">
                                        <li className="nav-item">Projects</li>
                                    </a>
                                    <a href="#contact">
                                        <li className="contact">Contact</li>
                                    </a>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </header>
            </>
        )
    
}

export default Header