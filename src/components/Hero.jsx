import './Hero.css'
import GetInTouch from './small-components/GetInTouch'

function Hero(){
    return(
        <>
            
            <div className="container">
                <section className="hero">
                    <div className="hero-text">
                        <p>
                            Hey there! <strong>Almeida</strong> here, a <strong>front-end developer</strong> with a passion
                            for translating <strong>ideas</strong> into <strong>immersive digital experiences</strong>.
                        </p>
                        <GetInTouch />
                    </div>
                    <div className="hero-image"></div>
                </section>
            </div>
            
        </>
    )
}

export default Hero