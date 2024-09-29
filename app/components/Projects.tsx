'use client'

import Image from 'next/image';
import React from 'react'
import { MdArrowOutward } from 'react-icons/md';
import AnimatedHeader from './AnimatedHeader';
import { motion } from 'framer-motion';

const Projects = () => {

  const projectList = [
    {
      name: 'Nomeo Threads',
      description: 'A social media webapp similar to Threads which enable users to create posts, create communities and post images. This is Threads clone.',
      techStacks: 'NextJS, ReactJS, TailwindCSS, NodeJS, MongoDB, Clerk',
      image: '/images/nomeo-threads.png',
      githubLink: 'https://github.com/nomeo-310/Nomeo-Threads-1.0',
      liveLink: 'https://nomeo-threads.vercel.app/'
    },
    {
      name: 'Nomeo Coliving',
      description: 'A real estate webapp similar to AirBnb which enable user to lease apartments, and put their apartment up for lease. This is an AirBnb clone.',
      techStacks: 'NextJS, ReactJS, TailwindCSS, NodeJS, MongoDB, Prisma',
      image: '/images/nomeo-coliving.png',
      githubLink: 'https://github.com/nomeo-310/Nomeo-Co-Living-1.0',
      liveLink: 'https://nomeo-coliving.vercel.app/'     
    },
    {
      name: 'Nomeo Social',
      description: 'A social media webapp similar to Facebook but with more interesting features. This app is meant to contain features from facebook, instagram and twitter.',
      techStacks: 'NextJS, ReactJS, TailwindCSS, NodeJS, MongoDB',
      image: '/images/nomeo-social.png',
      githubLink: 'https://github.com/nomeo-310/Nomeo-Social-5.2',
      liveLink: 'https://nomeo-coliving.vercel.app/'     
    },
    {
      name: 'Nomeo Blogs',
      description: 'A blog webapp that shows various interesting topics and as well as other features. This app is meant to be a Medium clone and should contain features from other blogs.',
      techStacks: 'NextJS, ReactJS, TailwindCSS, NodeJS, MongoDB',
      image: '/images/nomeo-blog.png',
      githubLink: 'https://github.com/nomeo-310/Nomeo-Blog-1.0',
      liveLink: 'https://nomeo-blog.vercel.app/'     
    },
    {
      name: 'Nomeo Chats',
      description: 'This is a chat webapp meant to contain normal chatting features like those found in facebook messenger. This app enables users chat their fellow users, create group chats and send images.',
      techStacks: 'NextJS, ReactJS, TailwindCSS, NodeJS, MongoDB',
      image: '/images/nomeo-chats.png',
      githubLink: 'https://github.com/nomeo-310/Nomeo-Chats-1.0',
      liveLink: 'https://nomeo-chats.vercel.app/'     
    },
    {
      name: 'Nomeo Suites',
      description: 'This is a real estate webapp that is meant to help users lease and purchase apartments while also enabling users to apply as agent and advertise apartment. This app is unique and not a clone.',
      techStacks: 'NextJS, ReactJS, TailwindCSS, NodeJS, MongoDB',
      image: '/images/nomeo-suites.png',
      githubLink: 'https://github.com/nomeo-310/Nomeo-Realtors-5.0',
      liveLink: 'https://nomeo-realtors-5-0.vercel.app/'     
    },
    {
      name: 'Nomeo Realtors',
      description: 'This is a real estate webapp that is meant to help users lease and purchase apartments while also enabling users to apply as agent and advertise apartment. This app is unique and an upgrade to Nomeo Suites.',
      techStacks: 'NextJS, ReactJS, TailwindCSS, NodeJS, MongoDB',
      image: '/images/nomeo-realtors.png',
      githubLink: 'https://github.com/nomeo-310/Nomeo-Realtors-5.1',
      liveLink: 'https://nomeo-realtors-5-1.vercel.app/'     
    }
  ];

  return (
    <section className='pt-20 w-full p-2' id='projects'>
      <AnimatedHeader title='Projects'/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 cursor-pointer mt-10">
        { projectList.map((item, index:number) => (
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            whileHover={{scale: 1.05}} 
            className="group relative overflow-hidden rounded-lg w-full h-[14rem] md:h-[16rem] lg:h-[17.5rem] cursor-pointer" 
            key={index}>
            <Image src={item.image} alt={item.name} fill className='object-cover group-hover:scale-105'/>
            <motion.div
              initial={{opacity: 0}}
              whileHover={{opacity: 1}}
              transition={{duration: 0.5}}            
              className="p-4 lg:p-6 w-full absolute left-0 top-0 inset-0 flex flex-col items-center justify-between backdrop-blur-md bg-black/30 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <h3 className='text-xl mb-2'>{item.name}</h3>
              <p className='my-2 text-sm'>{item.techStacks}</p>
              <p className='lg:mb-8 mb-3 tex-sm line-clamp-4'>{item.description}</p>
              <div className="w-full justify-between items-center flex ">
                <a href={item.githubLink} target='_blank' rel='noopener noreferrer' className='hover:bg-gray-300 active:bg-gray-300 rounded-full bg-white text-black px-4 py-2'>
                  <div className="flex items-center">
                    <span className='text-sm'>View on Github</span>
                    <MdArrowOutward/>
                  </div>
                </a>
                <a href={item.liveLink} target='_blank' rel='noopener noreferrer' className='hover:bg-gray-300 active:bg-gray-300 rounded-full bg-white text-black px-4 py-2'>
                  <div className="flex items-center">
                    <span className='text-sm'>View Livelink</span>
                    <MdArrowOutward/>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects