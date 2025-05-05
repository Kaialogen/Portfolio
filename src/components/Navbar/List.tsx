import { Link } from "react-router-dom"

const List = () => {
  return (
    <ul className="space-y-3 text-zinc-300 text-center">
    <li><Link to="/" className="hover:text-white cursor-pointer transition">Home</Link></li>
    <li><Link to="/portfolio" className="hover:text-white cursor-pointer transition">Portfolio</Link></li>
    <li><Link to="/blog" className="hover:text-white cursor-pointer transition">Blog</Link></li>
  </ul>
  )
}
  
  export default List
