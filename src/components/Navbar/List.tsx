import { Link } from 'react-router-dom';

const List = ({ onLinkClick }: { onLinkClick: () => void }) => {
  const links = [
    { name: 'Home', to: '/' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Blog', to: '/blog' },
  ];

  return (
    <ul className='space-y-3 text-center md:text-left text-zinc-300'>
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} onClick={onLinkClick} className='hover:text-white transition'>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
