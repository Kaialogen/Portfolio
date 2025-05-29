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
      {/* Top bar for mobile */}
      <div className='md:hidden w-full bg-zinc-900 text-white flex justify-between items-center px-4 py-3 shadow'>
        <Link className='text-lg font-semibold' to='/'>
          Kai Constantine
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} aria-label='Toggle Menu'>
          {isOpen ? <FaTimes className='w-6 h-6 text-white' /> : <FaBars className='w-6 h-6' />}
        </button>
      </div>

      {/* Sidebar for desktop */}
      <nav
        className={`
          flex-col bg-zinc-900 text-white px-4 py-6 transition-all
          ${isOpen ? 'flex' : 'hidden'}
          md:flex md:w-64 md:min-h-screen md:static absolute w-full z-10
        `}
      >
        <div className='flex flex-col gap-4'>
          <Avatar />
          <List onLinkClick={() => setIsOpen(false)} />
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
