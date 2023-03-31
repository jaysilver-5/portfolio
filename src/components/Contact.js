import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';


const Contact = () => {

  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_25t1ye8', 'template_36pxqgr', form.current, 'dy61nFO_tItmmQMTY')
      .then((result) => {
          console.log(result.text);
          showResult(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  const Result = ({ onClose }) => {
    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
        <motion.div 
          className='bg-black rounded-lg p-8'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}>
          <p className='text-green-600'>Your message has been sent successfully. I will contact you soon.</p>
          <button onClick={() => showResult(false)} className='p-1 btn mt-6'>Close</button>
        </motion.div>
      </div>
    );
  };

  return(
    <section className='section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn('right', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}}
           className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-gradient font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br/> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <form 
          // variants={fadeIn('left', 0.3)} 
          // initial="hidden" 
          // whileInView={'show'} 
          // viewport={{once: false, amount:0.7}}
          action="" 
          onSubmit={sendEmail}
          ref={form}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              name="from_name"
              placeholder='Your name'
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              name="email"
              placeholder='Your email'
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent resize-none'
              placeholder='Your message' name='message'></textarea>
              <button className='btn btn-lg' type='submit' value="Send">Send message</button>
          </form>
        </div>
     

      </div>
      <div className='overflow-hidden'></div>
      {result ? <Result />: null}
    </section>
  );
};

export default Contact;
