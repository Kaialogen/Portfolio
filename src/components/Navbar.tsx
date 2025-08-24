import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'CV', to: '/cv' },
    { name: 'Blog', to: '/blog' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className='w-full text-WhiteChalk flex justify-between items-center px-4 py-3 z-10 bg-slate-900/80 backdrop-blur-md border-b border-white/10 h-16 relative'>
        <Link className='text-2xl font-semibold' to='/'>
          Kai Constantine
        </Link>

        {/* Desktop links (hidden on mobile) */}
        <ul className='hidden md:flex gap-6 text-zinc-300 items-center'>
          {links.map((link) =>
            link.name === 'CV' ? (
              <li key={link.to}>
                <a href='/CV.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-white transition'>
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={link.to}>
                <Link to={link.to} className='hover:text-white transition'>
                  {link.name}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} aria-label='Toggle Menu' className='md:hidden'>
          {isOpen ? <FaTimes className='w-6 h-6 text-white' /> : <FaBars className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <nav
        className={`
          flex-col bg-zinc-900 text-white px-4 py-6 transition-all md:hidden
          ${isOpen ? 'flex' : 'hidden'}
          absolute w-full z-10
        `}
      >
        <button onClick={() => setIsOpen(false)} aria-label='Close Menu' className='absolute top-4 right-4'>
          <FaTimes className='w-6 h-6 text-white' />
        </button>
        <ul className='flex flex-col gap-4 mt-8 text-center text-zinc-300'>
          {links.map((link) =>
            link.name === 'CV' ? (
              <li key={link.to}>
                <a
                  href='/CV.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition'
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setIsOpen(false)} className='hover:text-white transition'>
                  {link.name}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
