// PortfolioPage.tsx
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import PortfolioDisplay from './PortfolioDisplay'
import ProjectNavigation from './ProjectNavigation'
import { projects } from './Projects'


const PortfolioPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    return (
      <div className="min-h-screen flex bg-zinc-950 text-zinc-100">
        <Navbar />
  
        <div className="flex flex-col flex-1 p-6 gap-4">
          <PortfolioDisplay currentIndex={currentIndex} />
          <ProjectNavigation
            total={projects.length}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    )
  }

export default PortfolioPage
