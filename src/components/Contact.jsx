import React from 'react';
import { fadeIn } from '../variants';
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section className='lg:section py-16' id='contact'>
      <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row ">
              {/* text */}
              <motion.div
              variants={fadeIn ('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex justify-start items-center">
                <div className="">
                  <h4 className='text-cl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                  <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Lets work <br />together</h2>
                </div>
              </motion.div>
              {/* form*/}
              <motion.form 
              variants={fadeIn ('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
                <input 
                className='bg-transparent border-b py-3 
                outline-none w-full placeholder:text-white transition-all
                 focus:border-accent ' type="text" name="" id="" 
                 placeholder='Your email'/>
                <input 
                className='bg-transparent border-b py-3 
                outline-none w-full placeholder:text-white transition-all
                 focus:border-accent resize-none mb-12' type="text" name="" id="" 
                 placeholder='Your name'/>
                <textarea
                className='bg-transparent border-b py-12
                outline-none w-full placeholder:text-white transition-all
                 focus:border-accent'
                 
                 placeholder='Your message'
                name="" id="" cols="30" rows="10"></textarea>

                <button className='btn btn-sm'>Send message</button>
              </motion.form>

            </div>
      </div>
    </section>



  )
  
  

};

export default Contact;
