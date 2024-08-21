import './GetInTouch.css'

const GetInTouch = () =>{
    return(
        <div className="call center">
            <form action="https://formsubmit.co/e27adcf3ea2246909ac6d7a0b3ace074" method='POST'>
                <input className='user-input' type="text" name="name" id="name" placeholder='Nome' />
                <input className='user-input' type="text" name="phone" id="phone" placeholder='(xx)9 9999-9999' />
                <input className='user-input' type="email" name="email" id="email" placeholder='exemplo@email.com' />
                <input className='btn' type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default GetInTouch