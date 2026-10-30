import Link from "next/link";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/key-dates", label: "Key Dates" },
  { href: "/registration", label: "Registration" },
  { href: "/committees", label: "Committees" },
  { href: "/venue", label: "Venue" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo inverted className="h-10 w-auto" />
            <div>
              <p className="font-black text-lg text-white">
                <span className="font-ic text-cyan-400">IC</span>
                <span className="font-6g text-teal-accent tracking-wider">6G</span>
                <span className="font-st text-emerald-400">ST</span>
                <span className="ml-1 text-white">2027</span>
              </p>
              <p className="text-xs text-teal-accent">PDEU, Gandhinagar</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            International Conference on Intelligent Computing, 6G-and-Beyond Communication
            and Sustainable Technologies. October 2–3, 2027.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="px-2 py-1 rounded-full bg-teal-DEFAULT/20 text-teal-accent text-xs">IEEE Sponsored</span>
            <span className="px-2 py-1 rounded-full bg-teal-DEFAULT/20 text-teal-accent text-xs">Peer Reviewed</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-teal-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-teal-DEFAULT group-hover:w-2 transition-all"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin size={16} className="text-teal-accent mt-0.5 flex-shrink-0" />
              <span>Dept. of ICT, PDEU<br />Gandhinagar - 382007<br />Gujarat, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-teal-accent flex-shrink-0" />
              <a href="mailto:ic6gst@gmail.com" className="text-gray-400 hover:text-teal-accent transition-colors">
                ic6gst@gmail.com
              </a>
            </li>
          </ul>
          <a
            href="https://www.pdpu.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-teal-accent hover:underline"
          >
            Visit PDEU Website <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2027 IC6GST 2027 — PDEU, Gandhinagar. All rights reserved.</p>
          <p>Organized by Department of ICT, Pandit Deendayal Energy University</p>
        </div>
      </div>
    </footer>
  );
}
