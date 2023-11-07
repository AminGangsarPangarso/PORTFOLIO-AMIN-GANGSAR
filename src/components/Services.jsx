import React from 'react';
import { BsArrowRight } from 'react-icons/bs'

import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
const Services = () => {

  const services = [
    {
      id: 1,
      name: 'User Experience (UX) Design',
      description: ' Collaborate with UX/UI designers to implement visually appealing and user-friendly interfaces.',

    },
    {
      id: 2,
      name: 'Collaboration',
      description: ' Work closely with backend developers, designers, and other team members to achieve project goals.',
 
    },
    {
      id: 3,
      name: 'Code Implementation',
      description: ' Write clean, maintainable, and efficient code for the frontend of our web applications Implement responsive and visually appealing user interfaces based on design specifications.',

    },
    {
      id: 4,
      name: 'API Integration',
      description: ' Integrate with backend APIs to fetch and display data dynamically on the frontend.',

    },
    {
      id: 5,
      name: 'Testing',
      description: ' Implement unit tests and participate in integration testing to ensure the reliability of frontend code.',

    }
  ]



  return (
    <section className='section' id='services'>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat bg-blend-lighten bg-opacity-100  mb-12 lg:mb-0 ">
            <h1 className='h2 text-accent mb-5'>What I DO</h1>
            <h3 className='h3 max-w-[450px] mb-16'>As a frontend web developer, my main focus is designing and implementing the user interface and user experience of a website or web application</h3>

            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1">
            {/* service list */}
            <div className="">
              {services.map((item) => {

                return (
                  <div key={item.id} className="border-b border-white/20 h-[146px]">
                    <div className="max-w-[476px] mb-[38px]">
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{item.name}</h4>
                      <p className='font-secondary leading-tight'>{item.description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">

                    </div>
                  </div>
                )

              })}
            </div>
          </motion.div>
        </div>

      </div>

    </section>



  )

};

export default Services;
