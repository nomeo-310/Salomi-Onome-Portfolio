'use client'

import React from 'react'
import { FaNodeJs } from 'react-icons/fa6';
import { RiReactjsLine } from 'react-icons/ri';
import { SiCss3, SiHtml5, SiMongodb, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from 'framer-motion';
import AnimatedHeader from './AnimatedHeader';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, x: -20},
  visible: {opacity: 1, x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Skills = () => {

  const skillsData = [
    {
      icon: <SiHtml5 className="text-4xl text-[#e34c26] lg:text-5xl" />,
      name: "HTML",
      experience: "3+ years",
    },
    {
      icon: <SiCss3 className="text-4xl text-[#264de4] lg:text-5xl" />,
      name: "CSS",
      experience: "3+ years",
    },
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      experience: "2+ years",
    },
    {
      icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
      name: "Next.js",
      experience: "1.5+ year",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
      name: "MongoDB",
      experience: "1.5+ years",
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Node.js",
      experience: "1+ years",
    },
    {
      icon: <SiTypescript className="text-4xl text-[#007acc] lg:text-5xl" />,
      name: "Typescript",
      experience: "1+ years",
    },
  ];

  return (
    <div className='max-w-5xl w-full px-4' id='skills'>
      <AnimatedHeader title='Skills' className='mt-20 mb-10'/>
      <motion.div
        initial='hidden'
        whileInView={'visible'}
        variants={containerVariants}
        viewport={{once: true}} 
        className="mx-2 flex flex-col rounded-xl border border-stone-50/30 px-4 py-2 lg:px-20 w-full"
      >
        {skillsData.map((item, index:number) => (
          <motion.div
            key={index}
            variants={itemVariants}              
            className={`py-6 flex items-center justify-between ${index !== skillsData.length - 1 ? 'border-b border-stone-50/30' : ''}`}>
            <div className="flex items-center">
              {item.icon}
              <h3 className='text-lg lg:text-xl px-6'>{item.name}</h3>
            </div>
            <div className="lg:text-xl text-base">
              <span>{item.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills;