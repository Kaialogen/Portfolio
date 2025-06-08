import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-Cosmic-Black text-TomatoCurry'>
      <Navbar />
      <main className='flex-1 p-4'>
        <Layout />
      </main>
    </div>
  );
}

export default App;
