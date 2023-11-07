import React from 'react';
import image from '../assets/avatar.svg'
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import ReactWhatsapp from 'react-whatsapp';

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
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              "I am a Web Frontend Developer with a proven track record in crafting captivating user experiences. Proficient in key web technologies, including HTML, CSS, and JavaScript, I bring a dynamic skill set to the table. My expertise extends to leveraging popular frameworks such as Bootstrap, ReactBootstrap, Tailwind, and React.js. I excel in translating design concepts into seamless, responsive, and visually appealing interfaces. With a keen eye for detail and a commitment to staying abreast of the latest industry trends, I am dedicated to creating user-centric websites that not only meet but exceed expectations."</motion.p>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <ReactWhatsapp className='btn btn-lg mr-2 cursor-pointer' number="62-81804838974" message="Hello ....">
                Contact me
              </ReactWhatsapp>

              <a href="https://github.com/AminGangsarPangarso" className='text-gradient btn-link cursor-pointer'>
                My Portofilio
              </a>
            </motion.div>


            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-6 items-center  py-5 text-[20px] max-w-max mx-auto lg:mx-0">
              <a href="https://www.instagram.com/amin_gangsar/">
                <FaInstagramSquare />
              </a>
              <a href="https://github.com/AminGangsarPangarso">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/amin-gangsar-55b66726b/">
                <AiFillLinkedin />
              </a>
            </motion.div>


          </div>
          <motion.div
            variants={fadeIn('down', 0.3)}
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
