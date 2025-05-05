// PortfolioPage.tsx
import Navbar from '../Navbar/Navbar'
import PortfolioDisplay from './PortfolioDisplay'
import ProjectNavigation from './ProjectNavigation'

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex bg-zinc-950 text-zinc-100">
      {/* Left Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Portfolio Display Card */}
        <PortfolioDisplay />

        {/* Bottom Navigation */}
        <ProjectNavigation />
      </div>
    </div>
  )
}

export default PortfolioPage
