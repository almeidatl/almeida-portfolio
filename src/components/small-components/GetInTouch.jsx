import './GetInTouch.css'

const GetInTouch = () =>{
    return(
        <div className="call center">
            <form action="">
                <input className='user-input' type="text" name="name" id="name" placeholder='Name' />
                <input className='user-input' type="email" name="email" id="email" placeholder='example@email.com' />
                <input className='btn' type="submit" value="Let's get in touch" />
            </form>
        </div>
    )
}

export default GetInTouch