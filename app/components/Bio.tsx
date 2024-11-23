'use client'

import React from 'react'
import AnimatedHeader from './AnimatedHeader';
import { motion } from 'framer-motion';

const Bio = () => {

  const bioData = [
    "I'm a software developer with 5 years of experience in crafting innovative solutions. I graduated from University of Benin, Edo State, Nigeria with a degree in Petroleum Engineering. Throughout my academic journey, I have developed the ability to be self motivated and work independently even though i had good knowledge on the usage of computer and took my undergraduate basic programming course serious. I fell in love with  again during the lockdown whicg started from around 2019 and since then i have honed my skills and learnt how to write better and cleaner codes",
    "My expertise lies in Javascript and all related libraries and frameworks, and I'm passionate about leveraging my skills to build efficient and scalable applications. I'm proficient in ReactJS, NextJS, TailwindCSS, Typescript and MongoDB and committed to staying up-to-date with the latest industry trends.",
    "I've successfully worked with two start ups as their frontend developer and in course of those times i have contributed to the building of complex full stack webapp which are e-commerce with a slight touch of social media interaction. The apps i have helped developed includes the use of ReactJs and with Typescript for the end. My ability to troubleshoot issues, learn new technologies quickly, work under pressure, work with a team and work with less supervision has enabled me to deliver high-quality results consistently and earn the trust of my line managers.",
  ];

  return (
    <section id='bio' className='flex max-w-5xl flex-col gap-12 pt-20'>
      <AnimatedHeader title='Bio'/>
      <motion.div 
        className='p-4'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
      >
        {bioData.map((item, index:number) => (
          <motion.p
            initial={{opacity: 0, x: -20}} 
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: index*0.5}}
            key={index} 
            className='mb-4 lg:text-lg'
          >{item}
          </motion.p>
        ))}
        <motion.p 
          className='mb-4 lg:text-lg'
          initial={{opacity: 0, x: -20}} 
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.8, delay: 3*0.5}}
        >
          I&apos;m excited to connect with like-minded professionals and explore new possibilities. Please feel free to check me out my 
          <a href="https://github.com/nomeo-310" target="_blank" rel="noopener noreferrer" className='underline'>github repository</a> 
          for more details on my projects and skills.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Bio;