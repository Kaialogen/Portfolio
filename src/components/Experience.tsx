import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section className='rounded-2xl shadow-lg h-full'>
      <h2 className='text-2xl mb-10'>Work Experience</h2>

      <div className='relative border-l border-zinc-700 pl-8 space-y-12'>
        <div className='relative'>
          <span className='absolute -left-4 top-1 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-600 shadow-md z-10'>
            <Briefcase className='w-4 h-4 text-blue-400' />
          </span>

          <div className='backdrop-blur-md bg-white/5 border-t border-white/10 shadow-sm rounded-xl p-6'>
            <p className='text-lg font-semibold'>Summer Internship</p>
            <p className='text-sm text-zinc-400'>Forvis Mazars LLP</p>
            <p className='text-sm text-zinc-500 mb-4'>July 2023 - August 2023</p>
            <p className='text-zinc-300 leading-relaxed text-sm'>
              Internship in cyber attack and defence. Focused on projects including C2 infrastructure, malware EDR
              evasion techniques, and IoT penetration testing.
            </p>
          </div>
        </div>

        <div className='relative'>
          <span className='absolute -left-4 top-1 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-600 shadow-md z-10'>
            <GraduationCap className='w-4 h-4 text-green-400' />
          </span>

          <div className='backdrop-blur-md bg-white/5 border-t border-white/10 shadow-sm rounded-xl p-6'>
            <p className='text-lg font-semibold'>Cyber Security Graduate</p>
            <p className='text-sm text-zinc-400'>University of Warwick</p>
            <p className='text-sm text-zinc-500 mb-4'>October 2021 – July 2024</p>
            <p className='text-zinc-300 leading-relaxed text-sm'>
              Graduated with Upper Second Class Honours. Focused on the intersection of software engineering and
              security, with modules in Data Structures & Algorithms, Secure Systems Implementation, and Networks &
              Cyber Defence. Gained experience applying secure coding practices to web applications, APIs, and backend
              architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
