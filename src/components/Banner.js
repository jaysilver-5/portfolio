import React from 'react';

import Image from '../assets/avatar.svg';

import Contact from './Contact';
import { useHistory } from 'react-router-dom';

import Work from './Work';
import { Link } from 'react-scroll';

// Keep the second import as is


import Profile from '../assets/profile.png'
import { FaGithub, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

const Banner = () => {
  const navigateToExternalUrl = (url) => {
    window.location.href = url;
  };
  
  return (
  <section className='h-screen text-white p-12 flex justify-center items-center' id='home'>
    <div className='container justify-center flex items-center mx-auto'>
      <div className='flex flex-col justify-between w-full lg:flex-row lg:items-center'>
        {/*  text */}       
        <div className='flex-1 text-center w-full font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-[45px] font-bold leading-[0.8] lg:text-[90px]'>
            Joshua <span>Udo-Udo</span>
          </motion.h1>
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-5 text-[36px] lg:text-[60px] font-semibold uppercase loading-[1]'>
            <span className='text-white mr-4'>I&apos;m a</span>
            < TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Freelancer',
              2000
            ]}
              speed={50}
              className='text-gradient'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-7 lg:mx-0 max-w-lg leading-4 mx-auto lg:max-0'>
            I am a Senior Full-stack Engineer with years of experience dedicated to delivering the best user experiences. On my way to becoming the best Robotics Engineer ever😁 
          </motion.p>
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.6}} className='flex max-w-max gap-x-6 items-center mb-10 mx-auto lg:mx-0'>
            <Link to='contact' activeClass='active' smooth={true} spy={true}>
              <button className='btn btn-lg'>  
                Contact me
              </button> 
            </Link>
                <Link to='work' className='text-gradient btn-link' activeClass='active' smooth={true} spy={true}>
                  My portfolio
                </Link>
          </motion.div>
          {/* socials */}
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='flex text-[24px] gap-x-6 max-w-mas mx-auto lg:mx-0'>
            <button onClick={() => navigateToExternalUrl('https://twitter.com/udojoshua3')}>
              <FaTwitter />
            </button>
            <button onClick={() => navigateToExternalUrl('https://github.com/jaysilver-5')}>
              <FaGithub />
            </button>
            <button onClick={() => navigateToExternalUrl('https://linkedin.com/in/udojoshua3')}>
              <FaLinkedin />
            </button>
          </motion.div>
        </div> 
        {/* image */}
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='lg:flex items-end justify-end flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
          <img src={Profile} alt="" />
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default Banner;
