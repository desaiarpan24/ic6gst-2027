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
  targetDate = new Date("2027-05-31T23:59:00+05:30"),
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
    <div className="text-center">
      <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${
        dark ? "text-teal-accent" : "text-teal-DEFAULT"
      }`}>
        {label}
      </p>
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {units.map((unit, idx) => (
          <div key={unit.label} className="flex items-center gap-3 sm:gap-6">
            <div className="flex flex-col items-center">
              <div
                className={`w-16 h-16 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center text-2xl sm:text-4xl font-black tabular-nums ${
                  dark
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-navy text-teal-accent border border-teal-DEFAULT/30"
                }`}
              >
                {mounted ? String(unit.value).padStart(2, "0") : "--"}
              </div>
              <span className={`mt-2 text-xs font-semibold uppercase tracking-wider ${
                dark ? "text-gray-300" : "text-slate-light"
              }`}>
                {unit.label}
              </span>
            </div>
            {idx < units.length - 1 && (
              <span className={`text-2xl sm:text-4xl font-bold mb-6 ${
                dark ? "text-teal-accent" : "text-teal-DEFAULT"
              }`}>
                :
              </span>
            )}
          </div>
        ))}
      </div>
      <p className={`mt-4 text-xs ${
        dark ? "text-gray-400" : "text-slate-light"
      }`}>
        Deadline: May 31, 2027, 11:59 PM IST
      </p>
    </div>
  );
}
