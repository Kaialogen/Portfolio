import React from 'react'
import Copyright from './Copyright'

const Navbar: React.FC = () => {
    return (
      <nav className="flex flex-col justify-between w-64 h-screen px-4 py-6 bg-zinc-900 text-white">
        <div>
        </div>
        <div>
            <Copyright />
        </div>
      </nav>
    )
  }
  
  export default Navbar