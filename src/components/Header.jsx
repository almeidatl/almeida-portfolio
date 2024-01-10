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
                                    <a href="#projects">
                                        <li className="nav-item">Projects</li>
                                    </a>
                                    <a href="#contact">
                                        <li className="nav-item">Contact</li>
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