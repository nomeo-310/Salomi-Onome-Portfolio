'use client'

import React from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import Input from './Input';
import { HiAtSymbol, HiOutlineEnvelope, HiOutlineSparkles, HiOutlineUser } from 'react-icons/hi2';
import TextArea from './TextArea';
import { cn } from '../hooks/cn';
import AnimatedHeader from './AnimatedHeader';
import { motion } from 'framer-motion';

type errorProps = {
  name?: string;
  email?: string;
  title?: string;
  message?: string
}

type formDataProps = {
  name: string;
  email: string;
  title: string;
  message: string
}

const Contact = () => {

  const [formData, setFormData] = React.useState<formDataProps>({name: "", email: "", title: "", message: ""});
  const [errors, setErrors] = React.useState<errorProps>({});
  const [isSending, setIsSending] = React.useState(false);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (value.trim() !== '') {
      setErrors((prevError) => ({
        ...prevError,
        [name]: undefined,
      }))
    };

  }

  const handleSubmission = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const emailRegEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;

    const newErrors:errorProps = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required when sending message'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required when sending message'
    } else if (!emailRegEx.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    };
    if (!formData.title.trim()) newErrors.title = 'Title of message is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0 ) {
      setIsSending(true);
      await emailjs
      .send(
        "service_b0nf99i",
        "template_7hxpoxh",
        formData,
        "Z07lRblwfF0EUzty_",
      )
      .then((response) => {
        toast.success("Message sent successfully.")
        setFormData({name: "", email: "", title: "", message: ""})
      })
      .catch((error) => {
        console.log('Failed', error)
        toast.error("Failed to send message. Please try again later")
      })
      .finally(() => {
        setIsSending(false)
      })
    }
  }

  return ( 
    <div className='max-w-5xl w-full px-4' id='contact'>
      <AnimatedHeader title="Let's Connect" className='my-8'/>
      <motion.form onSubmit={handleSubmission}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.7}}
      >
        <div className="mb-4 flex gap-4 md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <Input
              type='text'
              id='name'
              name='name'
              icon={HiOutlineUser}
              placeholder='enter your full name e.g john doe'
              value={formData.name}
              onChange={handleChange}
              className='border-stone-50/30 bg-transparent'
            />
            {errors.name && (
              <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                className='text-sm text-red-500 mt-1'
              >
                  {errors.name}
              </motion.p>
              )}
          </div>
          <div className="md:w-1/2 w-full">
            <Input
              type='email'
              id='email'
              name='email'
              icon={HiOutlineEnvelope}
              placeholder='enter your email address e.g john.doe@email.com'
              value={formData.email}
              onChange={handleChange}
              className='border-stone-50/30 bg-transparent'
            />
            {errors.email && (
              <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}} 
                className='text-sm text-red-500 mt-1'
              >
                {errors.email}
              </motion.p>
              )}
          </div>
        </div>
        <div className="mb-4">
          <Input
            type='text'
            id='title'
            name='title'
            icon={HiAtSymbol}
            placeholder='enter the title of your message'
            value={formData.title}
            onChange={handleChange}
            className='border-stone-50/30 bg-transparent'
          />
          {errors.title && (
            <motion.p 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              className='text-sm text-red-500 mt-1'
            >
              {errors.title}
            </motion.p>
            )}         
        </div>
        <div className="mb-16">
          <TextArea
            id='message'
            name='message'
            value={formData.message}
            icon={HiOutlineSparkles}
            className='border-stone-50/30'
            onChange={handleChange}
            placeholder='enter your message'
          />
          {errors.message && (
            <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1}} 
              className='text-sm text-red-500 mt-1'
            >
              {errors.message}
            </motion.p>
          )}   
        </div>
        <button type='submit' className={cn('w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2.5 lg:py-3 text-base text-stone-900 mb-8', isSending ? 'cursor-not-allowed opacity-50': '')}>
          {isSending ? '...Sending message' : 'Send message'}
        </button>
      </motion.form>
    </div>
  )
}

export default Contact