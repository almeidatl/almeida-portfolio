import './GetInTouch.css'

const GetInTouch = () =>{
    return(
        <div className="call">
            <form action="">
                <input className='input-email' type="email" name="email" id="email" placeholder='example@email.com' />
                <input className='btn' type="submit" value="Let's get in touch" />
            </form>
        </div>
    )
}

export default GetInTouch