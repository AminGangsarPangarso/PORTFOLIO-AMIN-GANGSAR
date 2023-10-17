import React from 'react';
import image from '../assets/avatar.svg'
// import {BsGithub} from 'react-icons/bs'
// import {AiFillLinkedin} from 'react-icons/ai'
// import {FaInstagramSquare} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../variants';

const Banner = () => {
  return <div className='section ' id='home'>
    <div className="container mx-auto flex "> 
      <div className=" flex flex-col">
        <span className='font-bold text text-4xl'>Amin {''}</span>
      </div>
      <div className="">
        <span className='font-bold text text-4xl'>Im a</span>
          <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Web Developer',
            9000, // wait 1s before replacing "Mice" with "Hamsters"
            'UI/UX DESIGNER',
          
          ]}
          wrapper="span"
          className='text-chan'
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
          />
      </div>

    <div className="">
      <img src={image} alt="" className='w-52 h-52' />
      </div>
    </div>
    </div>;
};

export default Banner;
