import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex p-[40px] gap-4 items-center'>
      <h1 className='font-bold'>Siddharth Raj</h1>
      <ul className="flex gap-12 m-auto">
        <li className="relative group">
          <a href="#" className="pb-1 block">
            Home
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#" className="pb-1 block">Projects</a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#" className="pb-1 block">Contact</a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <Button text="Resume" />
    </nav>
  )
}

export default Navbar