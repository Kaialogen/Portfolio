import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaNpm,
  FaSass,
  FaPython,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiJest,
  SiMongodb,
  SiGraphql,
  SiNetlify,
  SiFirebase,
} from 'react-icons/si';

const icons = [
  <FaReact key='react' className='w-12 h-12 mx-4 inline' color='#61DAFB' />,
  <FaJsSquare key='js' className='w-12 h-12 mx-4 inline' color='#F7DF1E' />,
  <SiTypescript key='typescript' className='w-12 h-12 mx-4 inline' color='#3178C6' />,
  <FaGitAlt key='git' className='w-12 h-12 mx-4 inline' color='#F05032' />,
  <FaHtml5 key='html' className='w-12 h-12 mx-4 inline' color='#E34F26' />,
  <FaCss3Alt key='css' className='w-12 h-12 mx-4 inline' color='#1572B6' />,
  <SiTailwindcss key='tailwind' className='w-12 h-12 mx-4 inline' color='#06B6D4' />,
  <FaNodeJs key='node' className='w-12 h-12 mx-4 inline' color='#339933' />,
  <FaNpm key='npm' className='w-12 h-12 mx-4 inline' color='#CB3837' />,
  <FaSass key='sass' className='w-12 h-12 mx-4 inline' color='#CC6699' />,
  <SiRedux key='redux' className='w-12 h-12 mx-4 inline' color='#764ABC' />,
  <SiJest key='jest' className='w-12 h-12 mx-4 inline' color='#C21325' />,
  <SiMongodb key='mongodb' className='w-12 h-12 mx-4 inline' color='#47A248' />,
  <SiGraphql key='graphql' className='w-12 h-12 mx-4 inline' color='#E10098' />,
  <FaPython key='python' className='w-12 h-12 mx-4 inline' color='#3776AB' />,
  <FaDocker key='docker' className='w-12 h-12 mx-4 inline' color='#2496ED' />,
  <SiNetlify key='netlify' className='w-12 h-12 mx-4 inline' color='#00C7B7' />,
  <SiFirebase key='firebase' className='w-12 h-12 mx-4 inline' color='#FFCA28' />,
];

export const InfiniteCarousel = () => {
  return (
    <div className='logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]'>
      <div className='animate-slide-left-infinite inline-block w-max'>{icons}</div>
      <div className='animate-slide-left-infinite inline-block w-max'>{icons}</div>
    </div>
  );
};
