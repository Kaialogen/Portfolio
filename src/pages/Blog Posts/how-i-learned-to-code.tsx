export default function HowILearnedToCode() {
  return (
    <main className='grid grid-cols-1 gap-4 p-4 auto-rows-min max-w-[800px] mx-auto'>
      <article className='col-span-1 md:col-span-2'>
        <a
          className='inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md'
          href='/'
        >
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M10 12L6 8L10 4'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
          back
        </a>
        <h2 className='text-2xl'>How I learned to Code</h2>
        <p className='text-neutral-400 text-sm mb-6'>Kai Constantine - January 6, 2026 - 5 min read</p>
        <hr className=''></hr>
        <section>
          <p className='my-4 text-neutral-400 italic text-sm'>Lessons that taught me to code from start to end</p>
          <ul className='text-sm list-disc pl-5 space-y-1'>
            <li>
              2021 - Built a{' '}
              <a href='https://github.com/Kaialogen/Hurst-Chat' className='underline hover:text-slate-300'>
                social media website
              </a>{' '}
              for my A-Level Computer Science
            </li>
            <li>2021 - Completed my A-Level in Computer Science</li>
            <li>
              2021 - 2022 First Year of University
              <ul className='text-sm list-disc pl-5 mt-2 space-y-1'>
                <li>Learned basic programming in C</li>
                <li>
                  Built a{' '}
                  <a href='https://github.com/Kaialogen/Enchiridion' className='underline hover:text-slate-300'>
                    dungeon crawler game
                  </a>{' '}
                  in C
                </li>
              </ul>
            </li>
            <li>
              2022 - 2023 Second Year of University
              <ul className='text-sm list-disc pl-5 mt-2 space-y-1'>
                <li>
                  Built a{' '}
                  <a href='https://github.com/Kaialogen/Movie-Pad' className='underline hover:text-slate-300'>
                    Movie Rental
                  </a>{' '}
                  website
                </li>
                <li>
                  Built a{' '}
                  <a href='https://github.com/Kaialogen/car_rental' className='underline hover:text-slate-300'>
                    Car Finance
                  </a>{' '}
                  website
                </li>
              </ul>
            </li>
            <li>
              2023 - 2024 Third Year of University
              <ul className='text-sm list-disc pl-5 mt-2 space-y-1'>
                <li>
                  Built a{' '}
                  <a href='https://github.com/Kaialogen/Traffic-Analysis-ML' className='underline hover:text-slate-300'>
                    machine learning model
                  </a>{' '}
                  for malicious network monitoring
                </li>
              </ul>
            </li>
            <li>
              2025 - Built this{' '}
              <a href='https://github.com/Kaialogen/Portfolio' className='underline hover:text-slate-300'>
                portfolio
              </a>{' '}
              website
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
