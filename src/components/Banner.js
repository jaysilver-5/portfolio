import React from 'react';

import Image from '../assets/avatar.svg';

import Contact from './Contact';
import Work from './Work';
import { Link } from 'react-scroll';

import Profile from '../assets/profile.png'
import { FaGithub, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

const Banner = () => {
  return (
  <section className='min-h-[85vh] text-white lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/*  text */}       
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
            Joshua <span>Udo-Udo</span>
          </motion.h1>
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase loading-[1]'>
            <span className='text-white mr-4'>I'm a</span>
            < TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000
            ]}
              speed={50}
              className='text-gradient'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-8 lg:mx-0 max-w-lg mx-auto lg:max-0'>
            I am a full-stack developer and engineer with years of experience dedicated to delivering the best user experiences.
          </motion.p>
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.6}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
               <button className='btn btn-lg'>  
                <Link to='contact' activeClass='active' smooth={true} spy={true}>
                  Contact me
                </Link> 
               </button> 
                <Link to='work' className='text-gradient btn-link' activeClass='active' smooth={true} spy={true}>
                  My portfolio
                </Link>
          </motion.div>
          {/* socials */}
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='flex text-[20px] gap-x-6 max-w-mas mx-auto lg:mx-0'>
            <a href='https://twitter.com/udojoshua3'>
              <FaTwitter />
            </a>
            <a href='https://github.com/jaysilver-5'>
              <FaGithub />
            </a>
            <a href='https://linkedin.com/in/udojoshua3'>
              <FaLinkedin />
            </a>
          </motion.div>
        </div> 
      {/* image */}
      <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
        <img src={Profile} alt="" />
      </motion.div>
      </div>
    </div>
  </section>
  )
};

export default Banner;
