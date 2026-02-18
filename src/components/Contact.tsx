import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="pt-6 pb-6 rounded-2xl shadow-md h-full">
      <h2 className="text-2xl text-WhiteChalk">Contact</h2>
      <br />
      <div className="mt-6 flex justify-center items-center">
        <div className="flex items-center justify-between w-72">
          <a
            href="https://www.linkedin.com/in/kai-constantine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-zinc-300 hover:text-zinc-100 text-sm"
          >
            <FaLinkedin className="w-12 h-12 text-red-400 mt-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Kaialogen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-zinc-300 hover:text-zinc-100 text-sm"
          >
            <FaGithub className="w-12 h-12 text-red-400 mt-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
