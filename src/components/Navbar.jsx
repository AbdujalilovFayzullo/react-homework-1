import '../components/navbar.css'
import '../components/card'



function Navbar(){
    return (
        <div className='navbar__block'>
            <div className='navbar__left'>
                <h2 className='navbar__title'>Take your <br /> business to the next <br /> level take out</h2>
                <p className='navbar__text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. <br /> Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. <br /> Vivamus mattis eros at sem pulvinar</p>
                <button className='navbar__btn'>Learn more</button>
            </div>
            
            <div className='navbar__right'><iframe width="592" height="334" src="https://www.youtube.com/embed/HYt79AL95qw" title="ГРАНД-ФИНАЛ! NaVi vs G2 - IEM Cologne 2021 - ЛУЧШИЕ МОМЕНТЫ CSGO" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}


export default Navbar;