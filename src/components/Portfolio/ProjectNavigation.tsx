const ProjectNavigation = ({
  total,
  currentIndex,
  setCurrentIndex,
}: {
  total: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}) => {
  return (
    <div className='bg-zinc-800 rounded-2xl p-4 flex items-center justify-between shadow-md'>
      <button className='text-white px-2' onClick={() => setCurrentIndex((currentIndex - 1 + total) % total)}>
        {'<'}
      </button>

      <div className='flex gap-2'>
        {Array.from({ length: total }).map((_, i) => (
          <span key={i} className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-zinc-600'}`} />
        ))}
      </div>

      <button className='text-white px-2' onClick={() => setCurrentIndex((currentIndex + 1) % total)}>
        {'>'}
      </button>
    </div>
  );
};
export default ProjectNavigation;
