import { useEffect, useState } from "react";
import { FaReact, FaJsSquare, FaGitAlt, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of icons for the carousel
  const icons = [
    <FaReact key="react" className="w-12 h-12 text-zinc-400" />,
    <FaJsSquare key="js" className="w-12 h-12 text-zinc-400" />,
    <FaGitAlt key="git" className="w-12 h-12 text-zinc-400" />,
    <FaHtml5 key="html" className="w-12 h-12 text-zinc-400" />,
    <FaCss3Alt key="css" className="w-12 h-12 text-zinc-400" />,
    <FaNodeJs key="node" className="w-12 h-12 text-zinc-400" />,
  ];

  // Change the current icon every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 6000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [icons.length]);

    // Get the icons for the carousel based on the current index
    const displayedIcons = [
      icons[(currentIndex - 1 + icons.length) % icons.length], // Left icon
      icons[currentIndex], // Center icon
      icons[(currentIndex + 1) % icons.length], // Right icon
    ];
  
  return (
    <section className="p-6 rounded-2xl bg-zinc-800 shadow-md h-full">
      <h1 className="text-2xl font-bold text-zinc-100">Skills</h1>
      
      <div className="mt-4">
        <ul className="mt-2 space-y-2 text-zinc-400">
          <li>React</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Git</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div className="mt-6 flex justify-center items-center">
        <div className="relative flex justify-between items-center w-36">
          {/* Left icon */}
          <div className="absolute left-0">{displayedIcons[0]}</div>
          {/* Center icon */}
          <div className="relative">{displayedIcons[1]}</div>
          {/* Right icon */}
          <div className="absolute right-0">{displayedIcons[2]}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
