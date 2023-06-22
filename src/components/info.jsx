import '../components/info.css'
import InfoImgthree from '../assets/images/imgone.png'
import InfoImgtwo from '../assets/images/imgtwo.png'
import InfoImgone from '../assets/images/imgthree.png'

function Info(){
    return(
        <div>
            <h2 className='info__title'>How do we work?</h2>
            <p className='info__text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
            <div className='info__block__one'>
                <img src={InfoImgone} width={488} alt="info-img" />
                <div className='info__right'>
                    <h3 className='info__item__title'>Let's clarify the requirements</h3>
                    <p className='info__item__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>


            <div className='info__block__two'>
                <div className='info__right'>
                    <h3 className='info__item__title'>Let's clarify the requirements</h3>
                    <p className='info__item__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <img src={InfoImgtwo} width={488} alt="info-img" />
            </div>

            <div className='info__block__one'>
                <img src={InfoImgthree} width={488} alt="info-img" />
                <div className='info__right'>
                    <h3 className='info__item__title'>Let's clarify the requirements</h3>
                    <p className='info__item__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Info;