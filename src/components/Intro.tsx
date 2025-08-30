import WelcomeText from './WelcomeText';

const Intro = () => (
  <div className='flex flex-col gap-4'>
    <section className='p-6 rounded-2xl bg-Cosmic-Black shadow-md'>
      <WelcomeText />
    </section>
    <span className='text-center text-xl'>
      Backend-leaning Full-Stack Developer | Security-Minded Engineer | Based in the UK
    </span>
    <p className='text-sm md:text-lg text-center'>
      Hi, I’m Kai — a Cyber Security graduate turned full-stack web developer. I build fast, secure, and scalable
      applications with a backend focus, combining a JavaScript/TypeScript frontend skillset with Python (FastAPI) on
      the backend.
    </p>
  </div>
);

export default Intro;
