import '../components/card.css'
import Cardimg from '../assets/images/Group 39346.svg'

function Card(){
    return (
        <div className='cards'>
            <h2 className='card__desc'>How can we help you?</h2>
            <div className='card'>
                 <div className='card__block'>
                    <div className='card__item__block'>
                        <h3 className='card__title'>Web Designer</h3>
                        <img className='card__img' src={Cardimg} alt="cardimg" />
                    </div>
                    <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
                    <a className='card__link' href="#">View  more</a>
                 </div>
                 <div className='card__block'>
                    <div className='card__item__block'>
                        <h3 className='card__title'>SMM</h3>
                        <img className='card__img' src={Cardimg} alt="cardimg" />
                    </div>
                    <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
                    <a className='card__link' href="#">View  more</a>
                 </div>
                 <div className='card__block'>
                    <div className='card__item__block'>
                        <h3 className='card__title'>Branding</h3>
                        <img className='card__img' src={Cardimg} alt="cardimg" />
                    </div>
                    <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
                    <a className='card__link' href="#">View  more</a>
                 </div>
                 <div className='card__block'>
                    <div className='card__item__block'>
                        <h3 className='card__title'>Developer</h3>
                        <img className='card__img' src={Cardimg} alt="cardimg" />
                    </div>
                    <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
                    <a className='card__link' href="#">View  more</a>
                 </div>
                 <div className='card__block'>
                    <div className='card__item__block'>
                        <h3 className='card__title'>Graphic design</h3>
                        <img className='card__img' src={Cardimg} alt="cardimg" />
                    </div>
                    <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
                    <a className='card__link' href="#">View  more</a>
                 </div>
            </div>
        </div>
        
    )
}

export default Card;

