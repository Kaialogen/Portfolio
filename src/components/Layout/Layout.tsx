import Intro from './Intro'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'


const Layout = () => {
  return (
    <main className="grid grid-cols-2 grid-rows-3 gap-4 p-4 bg-zinc-950 text-white h-screen overflow-y-auto">
      <div className="col-span-2"><Intro /></div>
      <div className='row-span-2'><Skills /></div>
      <Experience />
      <Contact />
    </main>
  )
}

export default Layout