import Intro from './Intro'
import Skills from './Skills'
import Experience from './Experience'
import TBD from './TBD'
import Contact from './Contact'
import ThemeToggle from './ThemeToggle'


const Layout = () => {
  return (
    <>
      <ThemeToggle />
    <main className="grid grid-cols-2 grid-rows-3 gap-4 p-4 bg-zinc-950 text-white h-screen overflow-y-auto">
      <div className="col-span-2"><Intro /></div>
      <Skills />
      <Experience />
      <TBD />
      <Contact />
    </main>
  </>
  )
}

export default Layout