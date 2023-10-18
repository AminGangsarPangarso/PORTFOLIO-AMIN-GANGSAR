import React from 'react';
import Countup from 'react-countup'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import { fadein } from '../variants'
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className=" section" id='about' ref={ref}>

      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten   bg-top"></div>
          {/* text */}
          <div className="flex-1">
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>I'm a Front-end Developer web with over 3 years of experience</h3>
            <p className='mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, libero sed dolorem perferendis expedita quo voluptatum at velit labore! Tenetur!</p>
          </div>

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
                    <Countup start={0} end={10} duration={3} /> : null}
                k+
              </div>
              <div className="font-primary text-sm traking-[2px]">Project<br /> Complate</div>
            </div>
            <div className="">
              <div className=" text-[40px] font-tertiary text-gradient mb-2">
                {
                  inView ?
                    <Countup start={0} end={13} duration={3} /> : null}
                k+
              </div>
              <div className="font-primary text-sm traking-[2px]">Satisfied <br /> Client</div>
            </div>
            
          </div>
          <div className="mt-6 flex gap-x-8 items-center">
            <button className='btn btn-sm lg:btn'>Contact me</button>
            <a href="#" className='text-gradient btn-link'>
              My Portofolio
            </a>
          </div>
        </div>
      </div>

    </section>




  )
};

export default About;
