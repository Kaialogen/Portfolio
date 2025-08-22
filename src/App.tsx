import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-Cosmic-Black text-TomatoCurry'>
      <Navbar />
      <main className='flex-1 p-4'>
        <Layout />
      </main>
      <Footer />
    </div>
  );
}

export default App;
