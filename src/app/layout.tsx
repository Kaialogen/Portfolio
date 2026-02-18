import type { Metadata } from 'next';
import '@fontsource/inter';
import '@fontsource/instrument-serif';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Kai Constantine',
  description: 'Portfolio website for fullstack developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col bg-Obsidian text-relic'>
        <Navbar />
        <main className='flex-1 flex justify-center'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
