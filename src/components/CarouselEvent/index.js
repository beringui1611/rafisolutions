import Path1 from '../../assets/event-profile/path1.jpg';
import BlRio from '../../assets/event-profile/blrio.jpeg';
import Gitec from '../../assets/event-profile/path6.jpg';
import GitecTwo from '../../assets/event-profile/gitec-two.jpeg';
import Oab from '../../assets/event-profile/oab.jpeg';

export const CardEvent = () => {
    return (
        <div className=''>
            <div className=''>
                <h4 className='text-center font-bold bg-[#082455] text-white'>#EVENTOS</h4>
                <div className='flex'>
                    <img className='' src={GitecTwo} alt='icon'/>
                </div>
                 <div className='flex'>
                    <img className='w-48' src={BlRio} alt='icon'/>
                    <img className='w-52' src={Path1} alt='icon'/>
                 </div>

                 <div className='flex'>
                    <img className='' src={Gitec} alt='icon'/>
                </div>

                <div className='flex'>
                    <img className='' src={Oab} alt='icon'/>
                </div>
            </div>
        </div>
    );
};
