import '../components/footer.css'
import IconOne from '../assets/icons/twitter.icon.svg'
import IconTwo from '../assets/icons/facebook.icon.svg'
import IconThree from '../assets/icons/in.icon.svg'
import IconFour from '../assets/icons/instagram.icon.svg'

function Footer(){
    return(
        <div className='footer__block'>
            <div className='footer__block__left'>
                <li><a className='footer__linkk' href="#">Services</a></li>
                <li><a className='footer__link' href="#">SMM</a></li>
                <li><a className='footer__link' href="#">Web development</a></li>
                <li><a className='footer__link' href="#">Mobile apps</a></li>
                <li><a className='footer__link' href="#">Branding</a></li>
                <li><a className='footer__link' href="#">Graphic design</a></li>
            </div>
            <div className='footer__block__center'>
                <li><a className='footer__linkk' href="#">Resources</a></li>
                <li><a className='footer__link' href="#">About us</a></li>
                <li><a className='footer__link' href="#">Showcase</a></li>
                <li><a className='footer__link' href="#">Blog</a></li>
            </div>
            <div className='footer__block__right'>
                <li><a className='footer__linkk' href="#">Connect with us</a></li>
                <li><a className='footer__link' href="#">(239) 555-0108</a></li>
                <li><a className='footer__link' href="#">hello@pixer.com</a></li>
                <li><a className='footer__link' href="#">4140 Parker Rd. Allentown, New <br /> Mexico 31134</a></li>
                <div className='icon__block'>
                    <img src={IconOne} alt="icon" />
                    <img src={IconTwo} alt="icon" />
                    <img src={IconThree} alt="icon" />
                    <img src={IconFour} alt="icon" />
                </div>
            </div>
        </div>
    )
}



export default Footer;