import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
            variants={fadeIn ('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            
            {/* text */}
            <div className="">
              <h2 className='h2 leading-tight text-accent'>My Latest <br />Work.</h2>
              <p className='max-w-sm mb-16'>As lead developer on this project, I was responsible for designing and implementing an innovative content management system for a publishing industry client. Leverages expertise in creating responsive, engaging, and easy-to-use user interfaces. Collaborating closely with the design team, I transformed visual concepts into functional React components, creating an intuitive and efficient user experience. The success of this project reflects my commitment to quality frontend development and the ability to deliver solutions that meet the unique needs of the client's industry.</p>
              <button className='btn btn-sm'>View all project</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img1}alt="" />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className='text-gradient'>Education</span>
                  </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className='text-3xl text-white'>Website course</span>
                </div>
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn ('left', 0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10">
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img2}alt="" />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className='text-gradient'>Ecommerce</span>
                  </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className='text-3xl text-white'>Website UMKM</span>
                </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img3}alt="" />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className='text-gradient'>Medical History</span>
                  </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className='text-3xl text-white'>Website HealthyDoc</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>



  )
}

export default Work;
