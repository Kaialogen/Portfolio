import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <div className="flex">
          <Navbar />
          <Layout />
        </div>
    </>
  )
}

export default App
