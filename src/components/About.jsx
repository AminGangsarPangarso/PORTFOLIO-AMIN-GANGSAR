import React from 'react';
import Countup from 'react-countup'
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants';
import { motion } from "framer-motion"
import ReactWhatsapp from 'react-whatsapp';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className=" section" id='about' ref={ref}>

      <div className="container mx-auto">
        <div className="flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen mt-[800px]">
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>I'm a Front-end Developer web with over 3 years of experience</h3>
            <p className='mb-6'>
I am a Web Frontend Developer with more than 3 years of experience. Proficient in web development technologies, I am dedicated to creating engaging user experiences</p>
          </motion.div>

          <div className="flex gap-x-6 lg:gap-x-10 mb-12">
            <div className="">
              <div className=" text-[40px] font-tertiary text-gradient mb-2">
                {
                  inView ?
                    <Countup start={0} end={3} duration={3} /> : null}
              </div>
              <div className="font-primary text-sm traking-[2px]">Years of <br /> Experinece</div>
            </div>
            <div className="">
              <div className=" text-[40px] font-tertiary text-gradient mb-2">
                {
                  inView ?
                    <Countup start={0} end={36} duration={3} /> : null}

              </div>
              <div className="font-primary text-sm traking-[2px]">Project<br /> Complate</div>
            </div>
            <div className="">
              <div className=" text-[40px] font-tertiary text-gradient mb-2">
                {
                  inView ?
                    <Countup start={0} end={30} duration={3} /> : null}

              </div>
              <div className="font-primary text-sm traking-[2px]">Satisfied <br /> Client</div>
            </div>

          </div>
          <div className="mt-6 flex gap-x-8 items-center">
            <ReactWhatsapp className='btn btn-sm lg:btn cursor-pointer' number="62-81804838974" message="Hello ....">
              Contact me
            </ReactWhatsapp>

            <a href="https://github.com/AminGangsarPangarso" className='text-gradient btn-link'>
              My Portofolio
            </a>
          </div>
        </div>
      </div>

    </section>




  )
};

export default About;
