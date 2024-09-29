'use client'

import Link from 'next/link';
import React from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2';

const Navigation = () => {

  const navigationList = [
    {
      href: '#projects',
      label: 'Projects'
    },
    {
      href: '#bio',
      label: 'Bio'
    },
    {
      href: '#skills',
      label: 'Skills'
    },
    {
      href: '#experiences',
      label: 'Work Experiences'
    },
    {
      href: '#education',
      label: 'Education'
    },
    {
      href: '#contact',
      label: 'Contact'
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
   };

  const useSmoothScroll = (event:React.MouseEvent<HTMLAnchorElement> , href:string) => {
    event.preventDefault();

    const targetElement = document.querySelector(href)
    if (targetElement) {
      const offSet = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offSetPosition = elementPosition + window.scrollY + offSet;
      window.scrollTo({
        top: offSetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false)
  };


  return (
    <div>
      <nav className='fixed left-0 right-0 top-4 z-50 mb-5'>
        <div className="mx-auto hidden max-w-2xl justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <ul className="flex items-center gap-4">
            <Link href={'/'} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            { navigationList.map((item:{href: string;label: string;}, index:number) => (
              <li key={index}>
                <Link href={item.href} className='list-none hover:text-yellow-400' onClick={(event) => useSmoothScroll(event, item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <div className="flex items-center justify-end">
            <button className='focus:outline-none' onClick={toggleMenu}>
              {isMobileMenuOpen ? (<HiXMark size={32}/>) : (<HiBars3 size={32}/>)}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && 
          <ul className='ml-4 mr-1 mt-4 flex flex-col gap-4 backdrop-blur-md py-4 pl-2 rounded bg-black/30'>
            <Link href={'/'} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            { navigationList.map((item:{href: string;label: string;}, index:number) => (
              <li key={index}>
                <Link href={item.href} className='list-none hover:text-yellow-400 block w-full' onClick={(event) => useSmoothScroll(event, item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        }
      </nav>
    </div>
  )
}

export default Navigation;