import './GetInTouch.css'

const GetInTouch = () =>{
    return(
        <div className="call center">
            <form action="https://formsubmit.co/e27adcf3ea2246909ac6d7a0b3ace074" method='POST'>
                <input className='user-input' type="text" name="name" id="name" placeholder='Full Name' />
                <input className='user-input' type="text" name="phone" id="phone" placeholder='Phone Number' />
                <input className='user-input' type="email" name="email" id="email" placeholder='Valid Email' />
                <input className='btn' type="submit" value="Let's get in touch" />
            </form>
        </div>
    )
}

export default GetInTouch