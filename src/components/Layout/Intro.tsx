import WelcomeText from '../WelcomeText/WelcomeText';
import { InfiniteCarousel } from './InfiniteCarousel';

const Intro = () => (
  <section className='p-6 rounded-2xl bg-Cosmic-Black shadow-md h-full'>
    <WelcomeText />
    <br />
    <span className='block mb-1 text-WhiteChalk text-center p-6 text-xl'>
      Full Stack Developer | Cybersecurity Enthusiast | Based in the UK
    </span>
    <p className='text-WhiteChalk mb-4 text-14px text-center'>
      Hey, I'm Kai, a dedicated Cyber Security graduate and full-stack developer who thrives on building and shipping
      solutions that truly matter. I work primarily with React.js, JavaScript, Node.js, and TypeScript to craft robust
      applications on both the frontend and backend.
      <br />
      <br />I specialise in crafting secure, accessible, and performant web apps. My background in cybersecurity gives
      me a security-first mindset when building interfaces.
    </p>
    <InfiniteCarousel />
  </section>
);

export default Intro;
