export default function Portfolio() {
  return (
    <section className='p-6 rounded-2xl bg-Cosmic-Black shadow-md h-full'>
      <h1 className='text-3xl font-bold text-WhiteChalk text-center'>Portfolio</h1>
      <br />
      <br />
      <div className='w-full grid grid-cols-2 gap-8 max-md:grid-cols-1'>
        <div className='rounded-lg w-full border p-5 flex flex-col gap-5 border-WhiteChalk/40'>
          <div className='w-full h-40 mb-4 rounded-lg overflow-hidden'>
            <img
              src='/images/Moviepad.jpeg'
              alt='Project Thumbnail'
              className='w-full h-full object-cover'
              width={600}
              height={380}
            />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-2xl font-semibold text-WhiteChalk'>Movie Pad</h2>
            <p className='text-WhiteChalk opacity-50'>
              A full-stack movie database app with a React frontend and Express backend, featuring user authentication
              and a PostgreSQL database.
            </p>
            <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-blue-600/20 text-blue-300'
              >
                <p className='text-xs font-semibold'>React</p>
              </div>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-yellow-600/20 text-yellow-300'
              >
                <p className='text-xs font-semibold'>JavaScript</p>
              </div>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-green-600/20 text-green-300'
              >
                <p className='text-xs font-semibold'>Express</p>
              </div>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-emerald-600/20 text-emerald-300'
              >
                <p className='text-xs font-semibold'>MongoDB</p>
              </div>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-indigo-600/20 text-indigo-300'
              >
                <p className='text-xs font-semibold'>PostgreSQL</p>
              </div>
            </div>
            <div className='flex items-center gap-2 w-full mt-8'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='w-1/3 bg-CelestialCanvas rounded-lg uppercase text-xs transition-all hover:bg-light-gray/20 font-bold text-WhiteChalk flex items-center justify-center px-4 py-2 gap-2 max-md:w-full'
                href='https://github.com/Kaialogen/Movie-Pad'
              >
                Source code
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='w-1/3 bg-CelestialCanvas rounded-lg uppercase text-xs transition-all hover:bg-light-gray/20 font-bold text-WhiteChalk flex items-center justify-center px-4 py-2 gap-2 max-md:w-full'
                href='https://github.com/Kaialogen/Movie-Pad'
              >
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className='rounded-lg w-full border p-5 flex flex-col gap-5 border-WhiteChalk/40'>
          <div className='w-full h-40 mb-4 rounded-lg overflow-hidden'>
            <img
              src='/images/CarFinance.png'
              alt='Project Thumbnail'
              className='w-full h-full object-cover'
              width={600}
              height={380}
            />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-2xl font-semibold text-WhiteChalk'>Warwick Car Finance</h2>
            <p className='text-WhiteChalk opacity-50'>
              A car finance website built with PHP, Bootstrap, and MySQL, featuring a user-friendly interface for car
              finance calculations and comparisons.
            </p>
            <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-indigo-600/20 text-indigo-300'
              >
                <p className='text-xs font-semibold'>PHP</p>
              </div>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-blue-600/20 text-blue-300'
              >
                <p className='text-xs font-semibold'>Bootstrap</p>
              </div>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-yellow-600/20 text-yellow-300'
              >
                <p className='text-xs font-semibold'>JavaScript</p>
              </div>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-emerald-600/20 text-emerald-300'
              >
                <p className='text-xs font-semibold'>MySQL</p>
              </div>
              <div
                className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                                    bg-blue-600/20 text-blue-300'
              >
                <p className='text-xs font-semibold'>CSS</p>
              </div>
            </div>
            <div className='flex items-center gap-2 w-full mt-8'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='w-1/3 bg-CelestialCanvas rounded-lg uppercase text-xs transition-all hover:bg-light-gray/20 font-bold text-WhiteChalk flex items-center justify-center px-4 py-2 gap-2 max-md:w-full'
                href='https://github.com/Kaialogen/car_rental'
              >
                Source code
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='w-1/3 bg-CelestialCanvas rounded-lg uppercase text-xs transition-all hover:bg-light-gray/20 font-bold text-WhiteChalk flex items-center justify-center px-4 py-2 gap-2 max-md:w-full'
                href='https://github.com/Kaialogen/car_rental'
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
