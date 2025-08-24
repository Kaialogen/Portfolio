import Navbar from './components/Navbar';
import Layout from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-Cosmic-Black'>
      <Navbar />
      <main className='flex-1 p-4'>
        <Layout />
      </main>
      <Footer />
    </div>
  );
}

export default App;
