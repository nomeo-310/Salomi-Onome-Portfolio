'use client'

import React from 'react'
import AnimatedHeader from './AnimatedHeader';
import { motion } from 'framer-motion';

const Experience = () => {

  const experienceData = [
    {
      title: "Frontend Engineer",
      company: "Unflinched Limited",
      duration: "August 2023 - January 2024",
      description:
        "At Unflinched Limited, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React and Typescript. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
    },
    {
      title: "Web Developer",
      company: "AremxyPlug Enterprises",
      duration: "July 2022 - December 2023",
      description:
        "In my role as a Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, JavaScript, and ReactJs to create user-friendly interfaces as well as how to use version control. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features company website.",
    },
  ];

  return (
    <section className='pt-20 max-w-5xl w-full px-4' id='experiences'>
      <AnimatedHeader title='Work Experiences' className='tracking-tighter'/>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1, delay: 0.5}} 
        className="space-y-8 py-10"
      >
        { experienceData.map((item, index:number) => (
          <motion.div 
            className="rounded-xl border-stone-50/30 border bg-white/10 p-4 lg:p-5" 
            key={index}
            initial={{opacity:0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: index * 0.5}} 
          >
            <h2 className='text-2xl'>{item.title}</h2>
            <p className='text-xl'>{item.company}</p>
            <p className="text-sm">{item.duration}</p>
            <p className="lg:mt-4 mt-2 text-base lg:text-lg">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience