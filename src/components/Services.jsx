import React from 'react';
import { BsArrowRight } from 'react-icons/bs'

import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
const Services = () => {

  const services = [
    {
      id: 1,
      name: 'Web Developeer',
      description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolore, aperiam repellat illum quod repudiandae id a dolorum qui quis.',
      link: 'lorem fsdfadfd'
    },
    {
      id: 2,
      name: 'Web Developeer',
      description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolore, aperiam repellat illum quod repudiandae id a dolorum qui quis.',
      link: 'lorem fsdfadfd'
    },
    {
      id: 3,
      name: 'Web Developeer',
      description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolore, aperiam repellat illum quod repudiandae id a dolorum qui quis.',
      link: 'lorem fsdfadfd'
    },
    {
      id: 4,
      name: 'UI UX Designer',
      description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolore, aperiam repellat illum quod repudiandae id a dolorum qui quis.',
      link: 'lorem fsdfadfd'
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
            <h3 className='h3 max-w-[450px] mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, eaque ipsa recusandae atque optio numquam minima est voluptatum fuga minus?</h3>

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
                      <a href="" className='btn w-9 h-9 mb-[24px] flex justify-center items-center'>
                        <BsArrowRight/>
                      </a>
                      <a href="" className='text-gradient text-sm'>{item.link}</a>
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
