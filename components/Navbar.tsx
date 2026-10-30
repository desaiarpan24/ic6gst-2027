"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/key-dates", label: "Key Dates" },
  { href: "/registration", label: "Registration" },
  { href: "/committees", label: "Committees" },
  { href: "/venue", label: "Venue" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-navy-dark text-teal-accent text-xs py-1.5 px-4 text-center hidden md:block">
        <span className="mr-6">📅 October 2–3, 2027 | PDEU, Gandhinagar, Gujarat, India</span>
        <span>📧 ic6gst@gmail.com</span>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-auto flex-shrink-0">
                <Logo className="h-10 w-auto" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-navy font-black text-lg tracking-tight group-hover:opacity-90 transition-opacity">
                  <span className="font-ic text-cyan-600">IC</span>
                  <span className="font-6g text-teal-600 tracking-wider">6G</span>
                  <span className="font-st text-emerald-600">ST</span>
                  <span className="text-navy ml-1 font-sans font-extrabold">2027</span>
                </span>
                <span className="text-xs text-slate-light hidden sm:block">
                  PDEU, Gandhinagar
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-teal-DEFAULT bg-teal-DEFAULT/10"
                      : "text-slate-body hover:text-teal-DEFAULT hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/call-for-papers"
                className="ml-3 px-4 py-2 bg-teal-DEFAULT text-white text-sm font-semibold rounded-full hover:bg-teal-600 transition-all hover:shadow-lg hover:shadow-teal-DEFAULT/30 hover:-translate-y-0.5"
              >
                Submit Paper
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-navy hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-teal-DEFAULT bg-teal-DEFAULT/10 font-semibold"
                      : "text-slate-body hover:text-teal-DEFAULT hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/call-for-papers"
                className="mt-3 px-4 py-3 bg-teal-DEFAULT text-white text-sm font-semibold rounded-lg text-center hover:bg-teal-600 transition-colors"
              >
                Submit Paper →
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
