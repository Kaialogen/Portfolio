import WelcomeText from './WelcomeText';

export default function Intro() {
  return (
    <div className='flex flex-col gap-4'>
      <section className='p-6 rounded-2xl bg-Cosmic-Black shadow-md'>
        <WelcomeText />
      </section>
      <span className='text-center text-2xl'>Backend & Systems Engineer</span>
      <p className='text-sm'>
        Hi, I’m Kai, a backend-focused software engineer with a cybersecurity background, targeting fintech and trading
        system roles.
      </p>
      <p className='text-sm'>
        I am experienced in Python and Go for building scalable, data-driven services, APIs, and backend infrastructure.
      </p>
      <p className='text-sm'>
        I have a strong interest in trading systems, market data processing, and performance-critical software.
      </p>
      <p className='text-sm'>Based in the UK 🇬🇧</p>
    </div>
  );
}
