const ProjectNavigation = () => {
    return (
      <div className="bg-zinc-800 rounded-2xl p-4 flex items-center justify-between shadow-md">
        {/* Left Arrow */}
        <button className="text-white px-2">{'<'}</button>
  
        {/* Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-zinc-500" />
          ))}
        </div>
  
        {/* Right Arrow */}
        <button className="text-white px-2">{'>'}</button>
      </div>
    )
  }
  export default ProjectNavigation
  