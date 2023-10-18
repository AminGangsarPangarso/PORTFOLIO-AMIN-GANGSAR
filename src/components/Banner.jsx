import React from 'react';
import image from '../assets/avatar.svg'
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';

const Banner = () => {
  return (

    <section className='section  min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto   ">
        <div className="  flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12  ">
          <div className=" flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Amin {''}<span className=''>Gangsar </span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-1 mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className='font-bold text text-[55px mr-4 text-white
              '>Im a</span>
              <TypeAnimation
                sequence={[
                  'web developer',
                  2000,
                  'FRONTEND DEVELOPER',
                  2000,
                ]}
                wrapper="span"
                className='text-accent'
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam temporibus blanditiis neque aut non. Numquam pariatur eum architecto voluptates obcaecati? Suscipit nisi temporibus ex pariatur officia voluptatibus quidem ipsam non?</motion.p>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className='btn btn-lg mr-2 '>Contact me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portofilio
              </a>
            </motion.div>


            <motion.div
             variants={fadeIn('up',0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false, amount:0.7}}
            className="flex gap-x-6 items-center  py-5 text-[20px] max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <BsGithub />
              </a>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </motion.div>


          </div>
          <motion.div
           variants={fadeIn('down',0.3)}
           initial='hidden'
           whileInView={'show'}
          className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] ">
            <img src={image} alt="" className='w-[500px] h-[500px]' />
          </motion.div>
        </div>
      </div>
    </section>

  )
};

export default Banner;
