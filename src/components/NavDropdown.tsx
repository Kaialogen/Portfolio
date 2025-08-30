import { Link } from 'react-router';

export default function NavDropdown() {
  return (
    <nav className='absolute top-full left-0 w-full bg-Cosmic-Black border-t border-white/20 shadow-lg z-50 md:hidden'>
      <ul className='flex flex-col gap-4 py-4 text-center text-zinc-300'>
        <li key='/cv'>
          <a href='/CV.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-white transition'>
            CV
          </a>
        </li>
        <li key='/blog'>
          <Link to='/blog' className='hover:text-white transition'>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
