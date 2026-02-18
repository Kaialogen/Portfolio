"use client";

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
    <footer className='flex flex-col px-3 sm:px-3 md:px-4 pt-6 w-full border-t md:mt-8 border-neutral-800'>
      <div className='flex justify-between items-center gap-2 mb-2 w-full'>
        <div className='text-[13px] text-neutral-300'>Designed by Kai Constantine.</div>
        <div className='text-[13px] text-neutral-300'>London, UK {gmtTime}</div>
      </div>
      <div className='text-xs font-semibold text-center text-neutral-500'>
        © {new Date().getFullYear()} Kai Constantine. All rights reserved.
      </div>
    </footer>
  );
}
