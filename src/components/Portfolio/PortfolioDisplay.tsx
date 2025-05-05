import { projects } from './Projects'

interface Props {
  currentIndex: number
}

const PortfolioDisplay = ({ currentIndex}: Props) => {
    const project = projects[currentIndex]
    
    return (
      <div className="bg-zinc-800 rounded-2xl p-6 flex flex-col gap-4 shadow-md text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold">{project.title}</h2>
  
        {/* Image Carousel */}
        <div className="relative w-full h-256 bg-zinc-700 rounded-lg flex items-center justify-center">
          <button className="absolute left-4 text-white">{'<'}</button>
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} screenshot`}
            className="max-h-full object-contain rounded"
          />
          <button className="absolute right-4 text-white">{'>'}</button>
        </div>
  
        {/* Description */}
        <p className="text-zinc-400 text-left">{project.description}</p>
      </div>
    )
  }
  export default PortfolioDisplay
  