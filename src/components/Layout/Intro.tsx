import WelcomeText from '../WelcomeText/WelcomeText';

const Intro = () => (
  <div className='flex flex-col gap-4'>
    <section className='p-6 rounded-2xl bg-Cosmic-Black shadow-md'>
      <WelcomeText />
    </section>
    <span className='text-WhiteChalk text-center text-xl'>
      Full Stack Developer | Cybersecurity Enthusiast | Based in the UK
    </span>
    <p className='text-WhiteChalk text-sm md:text-lg text-center'>
      Hey, I'm Kai, a dedicated Cyber Security graduate and full-stack developer who thrives on building and shipping
      solutions that truly matter. I work primarily with React.js, JavaScript, Node.js, and TypeScript to craft robust
      applications on both the frontend and backend.
      <br />
      <br />I specialise in crafting secure, accessible, and performant web apps. My background in cybersecurity gives
      me a security-first mindset when building interfaces.
    </p>
  </div>
);

export default Intro;
