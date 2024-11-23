'use client'

import React from 'react'
import AnimatedHeader from './AnimatedHeader';
import { motion } from 'framer-motion';

const Education = () => {

  const educationData = [
    {
      degree: "Post-Graduate Diploma in Chemical Engineering",
      institution: "University of Lagos, Lagos State, Nigeria.",
      duration: "September 2017 - October 2019",
      description:
        "My second degree was focused on learning about chemical engineering and related concepts such as material balance, reactors, rate of chemical reactions and plant design.I took courses in computer programmming of a chemical reaction, the use of Matlab in design, the use of HYSYS to design a chemical plant and refining of chemical products. Graduated with honors.",
    },
    {
      degree: "Bachelor of Engineering in Petroleum Engineering",
      institution: "University of Benin, Edo State, Nigeria.",
      duration: "September 2007 - October 2012",
      description:
        "First degree was focused mainly on learning all about petroluem engineering and related concepts such as reservoirs, the extraction of crude oil and petroleum gases, crude oil refining and material balance.Took elective courses in computer programming in 200 level and got good grades. Graduated with a second class divison.",
    },
  ];

  return (
    <section className='pt-20 max-w-5xl w-full px-4' id='education'>
      <AnimatedHeader title='Education' className='mb-4'/>
      { educationData.map((item, index:number) => (
        <motion.div
          initial={{opacity:0, x: -40}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1, delay: index * 0.5}}  
          className="mb-6 py-10" 
          key={index}
        >
          <h3 className='text-2xl'>{item.degree}</h3>
          <p className='text-xl'>{item.institution}</p>
          <p className="text-sm">{item.duration}</p>
          <p className="mt-6">{item.description}</p>
        </motion.div>
      ))}
    </section>
  )
}

export default Education