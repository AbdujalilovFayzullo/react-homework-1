import './headers.css'
import Logo from '../assets/images/logo.svg.svg'
import Navbar from './Navbar';
import Card from './card';
import Info from './info';
import Input from './input';
import Footer from './footer';

function Headers(){
    return (
        <div className="container">
            <div className='header__block'>
                <div>
                    <a href="#"><img src={Logo} alt="Logosvg" /></a>
                </div>
                <div className='header__list'>
                    <li><a className='header__link' href="#">Services</a></li>
                    <li><a className='header__link' href="#">Portfolio</a></li>
                    <li><a className='header__link' href="#">Team</a></li>
                    <li><a className='header__link' href="#">Blog</a></li>
                    <li><a className='header__link' href="#">Contacts</a></li>
                </div>
                <div>
                    <button className='header__btn'>(239) 555-0108</button>
                </div>
            </div>
            <span className='header__span'></span>
            <Navbar/>
            <Card/>
            <Info/>
            <Input/>
            <Footer/>
        </div>
    )
}

export default Headers;