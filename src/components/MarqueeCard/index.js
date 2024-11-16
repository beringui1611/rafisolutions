import Marquee from "react-fast-marquee";
import IBchain from '../../assets/ibchain.png';
import Daniel from '../../assets/danielmatos-logo.jpg';
import Next from '../../assets/log-next.png';
import RioCrypto from '../../assets/riocrypto.jpeg';
import Rapha from '../../assets/rapha.jpeg';

export const MarqueCarousel = () => {
    
    return (
    <Marquee className="flex justify-center items-center h-12 " speed={100} direction="left" gradientWidth={200} gradientColor="#082455" loop={0} gradient={true}>
        <div className='ml-20'>
          <a>
            <img className="w-32" src={IBchain} alt='icon'  />
          </a>
        </div>

        <div className='ml-20'>
          <a>
            <img className="w-32" src={Daniel} alt='icon'  />
          </a>
        </div>

        <div className='ml-20'>
          <a>
            <img className="w-10" src={Next} alt='icon'  />
          </a>
        </div>

        <div className='ml-20'>
          <a>
            <img className="w-10 mix-blend-multiply" src={RioCrypto} alt='icon'  />
          </a>
        </div>

        <div className='ml-20'>
          <a>
            <img className="w-32" src={Rapha} alt='icon'  />
          </a>
        </div>
    </Marquee>
    )
}