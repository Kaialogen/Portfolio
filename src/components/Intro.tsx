import WelcomeText from './WelcomeText';

export default function Intro() {
  return (
    <div className='flex flex-col gap-4'>
      <section className='p-6 rounded-2xl bg-Cosmic-Black shadow-md'>
        <WelcomeText />
      </section>
      <span className='text-center text-3xl'>Full-Stack Developer</span>
      <p className='text-sm md:text-lg text-center'>
        Hi, I’m Kai, a Cyber Security graduate turned full-stack web developer. I build fast, secure, and scalable
        applications.
      </p>
      <p className='text-sm md:text-lg text-center'>Based in the UK 🇬🇧</p>
    </div>
  );
}
