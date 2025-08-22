import { useEffect, useState } from 'react';

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Convert local time to Europe/London string
  const gmtTime = time.toLocaleTimeString('en-GB', {
    timeZone: 'Europe/London',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return (
    <footer className='backdrop-blur-md bg-white/5 border-t border-white/10 shadow-lg'>
      <div className='max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300'>
        <div>© {new Date().getFullYear()} Kai Constantine. All rights reserved.</div>
        <div className='text-center'>Built with React, TypeScript, and Tailwind CSS. Designed by Kai Constantine.</div>
        <div className='text-right'>{gmtTime} UK Local Time</div>
      </div>
    </footer>
  );
}
