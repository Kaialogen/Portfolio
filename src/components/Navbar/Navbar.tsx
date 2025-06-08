import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Copyright from './Copyright';
import Clock from './Clock';
import Avatar from './Avatar';
import List from './List';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar for all screen sizes */}
      <div className='w-full bg-Cosmic-Black text-WhiteChalk flex justify-between items-center px-4 py-3 shadow z-10'>
        <Link className='text-2xl font-semibold' to='/'>
          Kai Constantine
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} aria-label='Toggle Menu'>
          {isOpen ? <FaTimes className='w-6 h-6 text-white' /> : <FaBars className='w-6 h-6' />}
        </button>
      </div>

      {/* Dropdown menu for all screen sizes */}
      <nav
        className={`
        flex-col bg-zinc-900 text-white px-4 py-6 transition-all
        ${isOpen ? 'flex' : 'hidden'}
        absolute w-full z-10
      `}
      >
        {/* Close icon in top right */}
        <button onClick={() => setIsOpen(false)} aria-label='Close Menu' className='absolute top-4 right-4'>
          <FaTimes className='w-6 h-6 text-white' />
        </button>
        <div className='flex flex-col gap-4 mt-8'>
          <Avatar />
          <List onLinkClick={() => setIsOpen(true)} />
        </div>
        <div className='mt-auto pt-6'>
          <Clock />
          <Copyright />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
