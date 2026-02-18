"use client";

import { useEffect, useState } from "react";

const LONDON_TIME_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export default function Footer() {
  const [gmtTime, setGmtTime] = useState("--:--:--");

  useEffect(() => {
    const updateTime = () => {
      setGmtTime(LONDON_TIME_FORMATTER.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="flex flex-col px-3 sm:px-3 md:px-4 pt-6 w-full border-t md:mt-8 border-neutral-800">
      <div className="flex justify-between items-center gap-2 mb-2 w-full">
        <div className="text-[13px] text-neutral-300">Designed by Kai Constantine.</div>
        <div className="text-[13px] text-neutral-300">London, UK {gmtTime}</div>
      </div>
      <div className="text-xs font-semibold text-center text-neutral-500">
        © {new Date().getFullYear()} Kai Constantine. All rights reserved.
      </div>
    </footer>
  );
}
