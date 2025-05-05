const PortfolioDisplay = () => {
    return (
      <div className="bg-zinc-800 rounded-2xl p-6 flex flex-col gap-4 shadow-md text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold">Project Title</h2>
  
        {/* Image Carousel */}
        <div className="relative w-full h-64 bg-zinc-700 rounded-lg flex items-center justify-center">
          <button className="absolute left-4 text-white">{'<'}</button>
          <img
            src="https://via.placeholder.com/400"
            alt="Project"
            className="max-h-full object-contain rounded"
          />
          <button className="absolute right-4 text-white">{'>'}</button>
        </div>
  
        {/* Description */}
        <p className="text-zinc-400 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore assumenda non aut voluptas, quas, doloremque ipsam facilis nobis omnis velit ad nostrum repellendus veniam eveniet libero excepturi est! Ratione?
        </p>
      </div>
    )
  }
  export default PortfolioDisplay
  