import { Code, Server, ShieldCheck, Boxes, Rocket } from 'lucide-react';

export default function Text() {
  const skills = [
    {
      icon: <Server className='w-5 h-5 text-blue-400' />,
      text: 'Backend Engineering: REST APIs, authentication, data modelling with PostgreSQL and MongoDB.',
    },
    {
      icon: <Code className='w-5 h-5 text-green-400' />,
      text: 'Frontend Development: Responsive UIs with React and Tailwind CSS, integrated with secure APIs.',
    },
    {
      icon: <ShieldCheck className='w-5 h-5 text-red-400' />,
      text: 'Security-First Approach: My cybersecurity background shapes how I design systems; from auth flows to data protection.',
    },
    {
      icon: <Boxes className='w-5 h-5 text-purple-400' />,
      text: 'DevOps & Workflow: Containerisation with Docker, Agile teamwork, TDD/BDD practices.',
    },
    {
      icon: <Rocket className='w-5 h-5 text-yellow-400' />,
      text: 'Currently Exploring: Java and Go',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {/* What I Do */}
      <section className='p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-Cosmic-Black shadow-lg h-full flex flex-col'>
        <h1 className='text-3xl font-bold text-WhiteChalk text-center mb-6'>What I Do</h1>
        <ul className='space-y-4'>
          {skills.map((item, idx) => (
            <li key={idx} className='flex items-start gap-3'>
              <span className='mt-1'>{item.icon}</span>
              <p className='text-zinc-300 leading-relaxed'>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* My Focus */}
      <section className='p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-Cosmic-Black shadow-lg h-full flex flex-col'>
        <h1 className='text-3xl font-bold text-center mb-6'>My Focus</h1>
        <p className='text-zinc-300 leading-relaxed text-lg'>
          I thrive in roles where I can both own backend and frontend services, ensure they’re scalable, testable, and
          secure, and collaborate across the stack when needed. I love shipping features end-to-end; but my strength is
          designing and optimising the backend that makes everything work.
        </p>
      </section>
    </div>
  );
}
