import './Hero.css'
import foto-quadrada.png from '/static/foto-quadrada.png'

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
                        <div className="call">
                            <form action="">
                                <input className='input-email' type="email" name="email" id="email" placeholder='example@email.com' />
                                <input className='btn' type="submit" value="Let's get in touch" />
                            </form>
                        </div>
                    </div>
                    <img src="/static/foto-quadrada.png" alt="alt" />
                </section>
            </div>
            
        </>
    )
}

export default Hero