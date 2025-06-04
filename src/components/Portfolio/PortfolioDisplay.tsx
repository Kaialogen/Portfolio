import { projects } from './Projects';

interface Props {
  currentIndex: number;
}

const PortfolioDisplay = ({ currentIndex }: Props) => {
  const project = projects[currentIndex];

  return (
    <div className='bg-zinc-800 rounded-2xl p-6 flex flex-col gap-4 shadow-md text-center'>
      {/* Title */}
      <h2 className='text-2xl font-bold'>{project.title}</h2>

      {/* Image Carousel */}
      <div className='relative w-full aspect-video bg-zinc-700 rounded-lg flex items-center justify-center overflow-hidden'>
        <button className='absolute left-4 text-white z-10'>{'<'}</button>
        <img
          src={project.images[currentIndex]}
          alt={`${project.title} screenshot`}
          className='w-full h-full object-contain rounded'
          style={{ maxHeight: '100%', maxWidth: '100%' }}
        />
        <button className='absolute right-4 text-white z-10'>{'>'}</button>
      </div>

      {/* Description */}
      <h3 className='text-lg font-semibold mt-4 text-left'>Description</h3>
      <p className='text-zinc-400 text-left'>{project.description}</p>

      {/* Links */}
      <div className='flex justify-center gap-4 mt-4'>
        <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
          Github: {project.title}
        </a>
      </div>
    </div>
  );
};
export default PortfolioDisplay;
