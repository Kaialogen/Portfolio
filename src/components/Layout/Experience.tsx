const Experience = () => (
  <section className='p-6 rounded-2xl bg-Cosmic-Black shadow-md h-full'>
    <h1 className='text-3xl font-bold text-WhiteChalk text-center'>Work Experience</h1>
    <br />
    <div className='flex flex-col w-full gap-14'>
      <div className='flex w-full gap-10'>
        <div className='flex flex-col'>
          <p className='text-WhiteChalk text-lg font-semibold'>Summer Internship</p>
          <p className='text-WhiteChalk opacity-50'>Forvis Mazars LLP</p>
          <p className='text-WhiteChalk whitespace-nowrap opacity-50 mb-4'>July 2023 - August 2023</p>
          <p className='text-WhiteChalk'>
            Internship in cyber attack and defence. Focused on projects including c2 infrastructure, malware EDR evasion
            techniques and IoT penetration testing.
          </p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className='flex flex-col w-full gap-14'>
      <div className='flex w-full gap-10'>
        <div className='flex flex-col'>
          <p className='text-WhiteChalk text-lg font-semibold'>Cyber Security Graduate</p>
          <p className='text-WhiteChalk opacity-50'>University of Warwick</p>
          <p className='text-WhiteChalk whitespace-nowrap opacity-50 mb-4'>October 2021 - July 2024</p>
          <p className='text-WhiteChalk'>Graduated in Cyber Security from the University of Warwick.</p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className='flex flex-col w-full gap-14'>
      <div className='flex w-full gap-10'>
        <div className='flex flex-col'>
          <p className='text-WhiteChalk text-lg font-semibold'>Cyber Security Software Engineer</p>
          <p className='text-WhiteChalk opacity-50'>Civil Service</p>
          <p className='text-WhiteChalk whitespace-nowrap opacity-50 mb-4'>November 2024 - April 2025</p>
          <p className='text-WhiteChalk'>
            Developed secure software solutions using C and Python in a high-assurance environment.
          </p>
          <p className='text-WhiteChalk'>Focused on secure coding practices and vulnerability mitigation.</p>
        </div>
      </div>
    </div>
    <br />
    <br />
  </section>
);

export default Experience;
