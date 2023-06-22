import '../components/input.css'

function Input(){
    return(
        <div>
            <h2 className='input__title'>Leave your number and we'll call you back</h2>
            <p className='input__text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
            <div className='input__block'>
                <input className='input__input' type="text" placeholder='Name' />
                <input className='input__input__two' type="number" placeholder='Phone number' />
                <select className='input__select'>
                    <option>Email</option>
                    <option>Icloud</option>
                </select>
                <button className='input__btn'>Send</button>
                <p className='input__desc'>We call back in 10-30 minutes, guaranteed!</p>
            </div>
        </div>
    )
}

export default Input;