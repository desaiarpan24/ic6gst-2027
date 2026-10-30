"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

interface CountdownTimerProps {
  targetDate?: Date;
  label?: string;
  dark?: boolean;
}

export default function CountdownTimer({
  targetDate = new Date("2027-05-15T23:59:00+05:30"),
  label = "Full Paper Submission Deadline",
  dark = false,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="text-center w-full max-w-full overflow-hidden">
      <p
        className={`text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 truncate ${
          dark ? "text-teal-accent" : "text-teal-DEFAULT"
        }`}
      >
        {label}
      </p>

      {/* Responsive 4-Column Grid — mathematically bounded */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-sm mx-auto px-1">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div
              className={`w-full aspect-square max-w-[4.25rem] max-h-[4.25rem] rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-black tabular-nums transition-all ${
                dark
                  ? "bg-white/10 text-white border border-white/20 shadow-inner"
                  : "bg-navy text-teal-accent border border-teal-DEFAULT/30 shadow-md"
              }`}
            >
              {mounted ? String(unit.value).padStart(2, "0") : "--"}
            </div>
            <span
              className={`mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${
                dark ? "text-gray-300" : "text-slate-light"
              }`}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      <p
        className={`mt-4 text-xs ${
          dark ? "text-gray-400" : "text-slate-light"
        }`}
      >
        Deadline: May 15, 2027, 11:59 PM IST
      </p>
    </div>
  );
}
