'use client'

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {

  const heroData = {
    name: 'SALOMI AFOLABI',
    greeting: 'Hello there!',
    intro: 'I am a passionate frontend developer who creates beautiful and functional user interfaces. I like transforming ideas into engaging web and mobile experiences, I have been doing this for close to five years now and have a huge project base to show for this as well as other client testimonies.'
  };

  return (
    <section className='lg:min-h-screen flex-wrap items-center flex' id='hero'>
      <motion.div 
        className="w-full md:w-1/2"
        initial={{opacity: 0, x: -50}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1}}
      >
        <h2 className="text-4xl my-8 p-2 font-bold md:text-5xl lg:text-[7rem]">{heroData.name}</h2>
        <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>{heroData.greeting}</p>
        <p className="mb-8 p-2 lg:text-xl text-lg">{heroData.intro}</p>
      </motion.div>
      <motion.div 
        className="w-full md:w-1/2 p-2"
        initial={{opacity:0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
      >
        <div className="relative w-full aspect-square flex items-center justify-center">
          <Image src={'/images/dummy_image.png'} alt='profile_image' width={520} height={520} className='rounded-2xl'/>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero