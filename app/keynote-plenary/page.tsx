import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Mic,
  Sparkles,
  Building2,
  GraduationCap,
  MapPin,
  Radio,
  Car,
  Calendar,
  ArrowRight,
  BookOpen,
  Award,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Keynote & Plenary Talks | IC6GST 2027",
  description:
    "Distinguished Keynote and Plenary Speakers at IC6GST 2027 — Dr. R. David Koilpillai (IIT Madras) and Dr. Dhaval Patel (Ahmedabad University).",
};

interface Speaker {
  id: string;
  name: string;
  type: "Keynote" | "Plenary";
  roleBadge: string;
  badgeColor: string;
  designation: string;
  department: string;
  institution: string;
  location: string;
  image: string;
  talkTitle: string;
  talkCategory: string;
  abstract: string;
  highlights: string[];
}

const speakers: Speaker[] = [
  {
    id: "dr-r-david-koilpillai",
    name: "Dr. R. David Koilpillai",
    type: "Keynote",
    roleBadge: "Keynote Speaker",
    badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
    designation: "Chair, Bharat 6G Alliance & Qualcomm Chair Professor",
    department: "Head, Department of Electrical Engineering",
    institution: "Indian Institute of Technology (IIT) Madras",
    location: "Chennai, Tamil Nadu, India",
    image: "/images/speakers/dr-r-david-koilpillai.jpg",
    talkTitle: "Cellular Evolution to 6G - An India Perspective",
    talkCategory: "Next-Gen 6G Wireless Architecture",
    abstract:
      "A visionary keynote address examining the technological, infrastructural, and regulatory progression of cellular systems from 4G/5G deployments toward indigenous 6G wireless innovation, specifically tailored to India's telecom ecosystem and the Bharat 6G mission.",
    highlights: [
      "Evolutionary progression from 4G/5G networks to beyond-5G & 6G indigenous architectures.",
      "Strategic alignment with India's national telecom missions, TSDSI standards, and Bharat 6G vision.",
      "Breakthroughs in physical layer design, ultra-dense wireless topologies, and massive connectivity.",
      "Bridging academia, industry, and governance for scalable telecommunications infrastructure.",
    ],
  },
  {
    id: "dr-dhaval-patel",
    name: "Dr. Dhaval Patel",
    type: "Plenary",
    roleBadge: "Plenary Speaker",
    badgeColor: "bg-gradient-to-r from-teal-500 to-cyan-600 text-white",
    designation: "Associate Professor",
    department: "School of Engineering and Applied Science",
    institution: "Ahmedabad University",
    location: "Ahmedabad, Gujarat, India",
    image: "/images/speakers/dr-dhaval-patel.jpg",
    talkTitle: "6G-Enabled C-V2X for Connected Mobility in Smart Cities under the Bharat 6G Vision",
    talkCategory: "Intelligent Connected Mobility & C-V2X",
    abstract:
      "An expert plenary talk delving into Cellular Vehicle-to-Everything (C-V2X) communications driven by 6G technologies, focusing on mission-critical low latency, collaborative automated driving, and intelligent mobility solutions under the national Bharat 6G framework.",
    highlights: [
      "Cellular Vehicle-to-Everything (C-V2X) communication architectures powered by 6G URLLC.",
      "Intelligent Transportation Systems (ITS) and real-time cooperative vehicular intelligence.",
      "Smart urban mobility deployments and low-latency infrastructure in modern smart cities.",
      "Contributions to India's Bharat 6G Vision for safe, sustainable, and connected transit systems.",
    ],
  },
];

export default function KeynotePlenaryPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-DEFAULT/20 border border-teal-DEFAULT/40 mb-4">
              <Sparkles size={14} className="text-teal-accent" />
              <span className="text-teal-accent text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Distinguished Speakers
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Keynote & <span className="gradient-text">Plenary Talks</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Hear from renowned academic pioneers and leading researchers driving breakthrough developments in 6G wireless systems, intelligent computing, and sustainable connected mobility.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-navy border-b border-teal-DEFAULT/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <p className="text-2xl font-black text-teal-accent">Keynotes</p>
              <p className="text-xs text-gray-300 mt-0.5">Visionary 6G Insights</p>
            </div>
            <div className="p-3">
              <p className="text-2xl font-black text-teal-accent">Plenary</p>
              <p className="text-xs text-gray-300 mt-0.5">Domain-Specific Deep Dives</p>
            </div>
            <div className="p-3">
              <p className="text-2xl font-black text-teal-accent">Bharat 6G</p>
              <p className="text-xs text-gray-300 mt-0.5">National Strategic Vision</p>
            </div>
            <div className="p-3">
              <p className="text-2xl font-black text-teal-accent">In-Person</p>
              <p className="text-xs text-gray-300 mt-0.5">Direct Q&A at PDEU</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {speakers.map((speaker, index) => (
            <AnimatedSection key={speaker.id} delay={index * 0.15}>
              <div
                id={speaker.id}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-teal-DEFAULT/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Column: Speaker Photo & Profile */}
                  <div className="lg:col-span-4 bg-gradient-to-b from-navy-dark via-navy to-navy-dark p-8 sm:p-10 flex flex-col items-center justify-between text-center relative overflow-hidden">
                    <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />

                    <div className="relative z-10 w-full flex flex-col items-center">
                      {/* Badge */}
                      <Badge className={`mb-6 text-xs uppercase tracking-wider font-extrabold px-3 py-1 shadow-md ${speaker.badgeColor}`}>
                        {speaker.roleBadge}
                      </Badge>

                      {/* Photo with frame */}
                      <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl mb-6 group">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Name & Designation */}
                      <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                        {speaker.name}
                      </h2>
                      <p className="text-teal-accent font-semibold text-sm mb-1 leading-snug">
                        {speaker.designation}
                      </p>
                      <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                        {speaker.department}
                      </p>

                      <div className="w-12 h-0.5 bg-teal-DEFAULT/40 my-2" />

                      {/* Institution & Location */}
                      <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium mb-1.5">
                        <Building2 size={13} className="text-teal-accent flex-shrink-0" />
                        <span>{speaker.institution}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <MapPin size={13} className="text-teal-accent flex-shrink-0" />
                        <span>{speaker.location}</span>
                      </div>
                    </div>

                    {/* Bottom Pill */}
                    <div className="relative z-10 mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-2 text-[11px] text-teal-accent/90">
                      <GraduationCap size={14} />
                      <span>IC6GST 2027 Invited Speaker</span>
                    </div>
                  </div>

                  {/* Right Column: Talk Details, Abstract & Highlights */}
                  <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      {/* Category Pill */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-teal-DEFAULT/10 text-teal-DEFAULT text-xs font-bold uppercase tracking-wider border border-teal-DEFAULT/30 flex items-center gap-1.5">
                          {speaker.type === "Keynote" ? <Radio size={13} /> : <Car size={13} />}
                          {speaker.talkCategory}
                        </span>
                        <span className="text-xs text-slate-light font-medium">Official Conference Talk</span>
                      </div>

                      {/* Talk Title */}
                      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-teal-DEFAULT/5 via-white to-background border border-teal-DEFAULT/30 mb-6 shadow-xs">
                        <p className="text-xs uppercase tracking-wider font-bold text-slate-light mb-1.5 flex items-center gap-1.5">
                          <Mic size={14} className="text-teal-DEFAULT" /> Talk Title
                        </p>
                        <h3 className="text-xl sm:text-2xl font-black text-navy leading-snug">
                          &ldquo;{speaker.talkTitle}&rdquo;
                        </h3>
                      </div>

                      {/* Abstract / Scope */}
                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-wider font-bold text-navy mb-2 flex items-center gap-1.5">
                          <BookOpen size={14} className="text-teal-DEFAULT" /> Session Overview & Abstract
                        </h4>
                        <p className="text-slate-body text-sm sm:text-base leading-relaxed">
                          {speaker.abstract}
                        </p>
                      </div>

                      {/* Key Highlights */}
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-navy mb-3 flex items-center gap-1.5">
                          <Award size={14} className="text-teal-DEFAULT" /> Key Takeaways & Focus Areas
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {speaker.highlights.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-body bg-gray-50/80 p-3 rounded-xl border border-gray-100"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-DEFAULT mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Info inside card */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-light">
                        <Calendar size={14} className="text-teal-DEFAULT" />
                        <span>Date & Time: <strong>October 2–3, 2027</strong> | Venue: <strong>PDEU Campus</strong></span>
                      </div>
                      <Link
                        href="/registration"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-DEFAULT hover:text-teal-600 transition-colors group"
                      >
                        <span>Register to Attend Talk</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* More Speakers Announcement Box */}
          <AnimatedSection>
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-navy-dark via-navy to-navy-dark text-white text-center relative overflow-hidden border border-teal-DEFAULT/30 shadow-xl">
              <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="px-3.5 py-1.5 rounded-full bg-teal-DEFAULT/20 text-teal-accent text-xs font-bold uppercase tracking-wider border border-teal-DEFAULT/40 inline-block mb-4">
                  Lineup in Progress
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mb-3">
                  More Distinguished Speakers Joining Soon
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  The technical program committee is confirming additional keynote addresses and plenary panels by prominent global scholars, industry leaders, and pioneers in 6G and intelligent computing.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/call-for-papers"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-DEFAULT text-white text-xs sm:text-sm font-bold hover:bg-teal-600 transition-all shadow-md"
                  >
                    <span>Submit Your Paper</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-teal-accent text-white hover:text-teal-accent text-xs sm:text-sm font-bold transition-all"
                  >
                    <span>Contact Secretariat</span>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
