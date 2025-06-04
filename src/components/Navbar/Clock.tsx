import { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Convert local time to Europe/London string
  const gmtTime = time.toLocaleTimeString('en-GB', {
    timeZone: 'Europe/London',
    hour12: true, // optional: use 24-hour format
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return <div className='text-center text-xs text-zinc-400 mt-4'>{gmtTime} UK Local Time</div>;
};

export default Clock;
