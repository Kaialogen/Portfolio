import { useEffect, useState } from "react";
import { FaReact, FaJsSquare, FaGitAlt, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

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
    <SiTypescript key="typescript" className="w-12 h-12 text-zinc-400" />,
    <SiTailwindcss key="tailwind" className="w-12 h-12 text-zinc-400" />,
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
        <p className="mt-4 text-zinc-400 text-center">I am proficient in JavaScript and TypeScript, with a strong focus on React and Tailwind CSS. I also have experience with Git for version control and Node.js for backend development.</p>
        <br />
        <p className="mt-4 text-zinc-400 text-center">My current tech stack: React, JavaScript, TypeScript, Tailwind CSS, Git, HTML, CSS, Node.js</p>
      </div>
      <br />
      <br />
      <br />
      <div className="mt-6 flex justify-center items-center">
        <div className="flex items-center justify-between w-72">
          {/* Left icon */}
          <div className="w-12">{displayedIcons[0]}</div>
          {/* Center icon */}
          <div className="w-12">{displayedIcons[1]}</div>
          {/* Right icon */}
          <div className="w-12">{displayedIcons[2]}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
