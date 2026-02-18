export default function Portfolio() {
  return (
    <section>
      <h2 className="text-2xl text-WhiteChalk">Portfolio</h2>
      <ul>
        <li>
          <a
            className="hover:underline hover:text-slate-300 cursor-pointer text-sm"
            href="https://github.com/Kaialogen/apple-music-cli"
          >
            Apple Music CLI: Download data about your playlists, built with
            Python
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:text-slate-300 cursor-pointer text-sm"
            href="https://github.com/Kaialogen/Enchiridion"
          >
            Enchiridion: A 2d dungeon crawler built with C
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:text-slate-300 cursor-pointer text-sm"
            href="https://github.com/Kaialogen/duskhollow_rpg"
          >
            DuskHollow: A text-based rpg built in Python
          </a>
        </li>
      </ul>
      <div className="my-4 text-center">
        <a
          href="https://github.com/Kaialogen?tab=repositories"
          className="text-sm hover:underline text-neutral-300 hover:text-neutral-100"
        >
          More Projects
        </a>
      </div>
    </section>
  );
}
