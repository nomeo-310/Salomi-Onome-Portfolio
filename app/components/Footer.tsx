'use client'

import { motion } from 'framer-motion';
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

  const socialMediaLinks = [
    {
      href: "https://facebook.com/salomi.afolabi",
      icon: <FaFacebook fontSize={28} className="hover:opacity-80" />,
    },
    {
      href: "https://instagram.com/onomesalomi",
      icon: <FaInstagram fontSize={28} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/iamonomsky",
      icon: <FaXTwitter fontSize={28} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/nomeo-310",
      icon: <FaGithub fontSize={28} className="hover:opacity-80" />,
    },
    {
      href: "https://linkedin.com/in/salomi-afolabi",
      icon: <FaLinkedin fontSize={28} className="hover:opacity-80" />,
    },
  ];

  return (
    <div className='max-w-5xl w-full px-4 mb-8 mt-20'>
      <div className="flex items-center justify-center gap-8">
        {socialMediaLinks.map((item, index:number) => (
          <motion.a 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.2, delay: index * 0.5}}
            href={item.href} 
            key={index} 
            target='_blank' rel='noopener noreferrer'
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
      <div className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy; Nomeo Consults. All rights reserved.
      </div>
    </div>
  )
}

export default Footer