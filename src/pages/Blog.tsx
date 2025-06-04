import Navbar from '../components/Navbar/Navbar';

export default function Blog() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-zinc-200 text-zinc-100'>
      {/* Navbar: responsive vertical (md+) or top bar (mobile) */}
      <Navbar />

      {/* Main Content */}
      <main className='grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-3 gap-4 p-4 text-white min-h-screen flex-1 overflow-y-auto'>
        <div className='col-span-1 md:col-span-2 row-span-1'>
          <section className='p-6 rounded-2xl bg-zinc-800 shadow-md h-full'>
            <h1 className='text-2xl font-bold text-zinc-100 text-center'>Blog</h1>
            <p className='mt-4 text-zinc-400 text-center'>Under Construction</p>
          </section>
        </div>
      </main>
    </div>
  );
}
