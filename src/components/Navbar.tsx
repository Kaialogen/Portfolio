import { useState } from 'react';
import { Link } from 'react-router';
import NavLinks from './NavLinks';
import NavDropdown from './NavDropdown';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full sticky top-0 z-1000'>
      <div className='relative flex justify-between items-center px-4 py-3 bg-Cosmic-Black h-20'>
        <Link className='text-3xl font-semibold' to='/'>
          Kai Constantine
        </Link>
        <NavLinks onToggle={setMenuOpen} />
      </div>

      {menuOpen && <NavDropdown />}
    </div>
  );
}
