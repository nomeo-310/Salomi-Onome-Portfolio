'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../hooks/cn';

type Props = {
  className?: string
  title: string
}

const AnimatedHeader = ({className, title}: Props) => {
  return (
    <motion.h2 
      className={cn('text-center text-3xl lg:text-4xl', className)}
      initial={{opacity: 0, y:-80}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
    >
      {title}
    </motion.h2>
  )
}

export default AnimatedHeader