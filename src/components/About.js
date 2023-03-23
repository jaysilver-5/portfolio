import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer
import {useInView} from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
});
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-[1000px]'>
          {/* img */}
          <motion.div
           variants={fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={"show"}
           viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.3)}
           initial='hidden'
           whileInView={"show"}
           viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className="h2 text-accent">About me. </h2>
            <h3 className='h3 mb-4'>
              I'm a Full-stack Developer with years of experience.
            </h3>
            <p className='mb-6'>
            I'm passionate about using modern software engineering practices such as agile, test-driven development (TDD), continuous integration, and automated tests to refine my craft while staying current with industry trends.
            </p>
            {/* stats */}
              <div className='flex gay-x-6 lg:gap-x-10 mb-12'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={4} duration={1} /> : null }+
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years of <br />
                    Experience
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={21} duration={1} /> : null }+
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                  Completed <br />project
                    Experience
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={21} duration={1} /> : null }+
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Satisfied <br />clients
                  </div>
                </div>
              </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
