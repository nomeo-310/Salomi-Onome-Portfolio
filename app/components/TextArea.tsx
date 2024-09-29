'use client'

import React from 'react'
import { IconType } from 'react-icons/lib';
import { cn } from '../hooks/cn';

interface textareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: IconType
}

const TextArea = React.forwardRef<HTMLTextAreaElement, textareaProps>(({className, icon:Icon, ...props}, ref) => {
  return (
    <div className={cn('border rounded bg-inherit w-full relative h-[14rem]', className)}>
      <textarea className={`cursor-pointer rounded bg-inherit w-full h-full md:p-3 p-2.5 focus:outline-none resize-none text-base ${Icon ? 'pl-10 md:pl-12 lg:pl-12' : ''}`} {...props} ref={ref}>
      </textarea>
      {Icon && <Icon size={22} className='md:hidden absolute left-2.5 top-2.5'/>}
      {Icon && <Icon size={25} className='hidden md:block absolute left-3.5 top-3.5'/>}
    </div>
  )
});

TextArea.displayName = 'TextArea';

export default TextArea