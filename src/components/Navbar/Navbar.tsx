import React from 'react'
import Copyright from './Copyright'
import Clock from './Clock'
import Avatar from './Avatar'
import List from './List'
import ThemeToggle from './ThemeToggle'

const Navbar: React.FC = () => {
    return (
      <nav className="flex flex-col justify-between w-64 h-screen px-4 py-6 bg-zinc-900 text-white">
        <div>
            <Avatar />
            <List />
        </div>
        <div>
            <ThemeToggle />
            <Clock />
            <Copyright />
        </div>
      </nav>
    )
  }
  
  export default Navbar