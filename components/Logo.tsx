"use client";

import { useState } from "react";

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export default function Logo({ className = "h-10 w-auto", inverted = false }: LogoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center font-black rounded-lg px-2 py-1 ${
        inverted ? "bg-teal-DEFAULT/20 text-teal-accent border border-teal-DEFAULT/30" : "bg-navy text-white"
      }`}>
        <span className="text-sm tracking-wider">PDEU</span>
      </div>
    );
  }

  return (
    <img
      src="https://www.pdpu.ac.in/images/pdpu-logo.png"
      alt="PDEU Logo"
      className={`${className} object-contain ${inverted ? "brightness-0 invert" : ""}`}
      onError={() => setError(true)}
    />
  );
}
