const List = () => {
    const links = ['Home', 'Portfolio', 'Blog']
    return (
      <ul className="space-y-3 text-zinc-300 text-center">
        {links.map((link) => (
          <li key={link} className="hover:text-white cursor-pointer transition">
            {link}
          </li>
        ))}
      </ul>
    )
  }
  
  export default List
  