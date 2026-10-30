import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  ExternalLink,
  Zap,
  Radio,
  Cpu,
  Globe,
  Award,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";

export const metadata: Metadata = {
  title: "Home",
  description:
    "IC6GST 2027 — International Conference on Intelligent Computing, 6G-and-Beyond Communication and Sustainable Technologies. October 2–3, 2027 at PDEU, Gandhinagar.",
};

const newsItems = [
  "📢 Call for papers is now open!! Submit your research to ICGST 2027",
  "🏆 Best paper Awards in all 5 tracks",
  "🎯 Full paper submission deadline: May 15, 2027",
  "📄 Accepted papers will be submitted for possible inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements",
  "📅 Physical Conference: October 2–3, 2027 at PDEU, Gandhinagar, Gujarat, India",
];

const highlights = [
  {
    icon: Zap,
    title: "5 Technical Tracks",
    desc: "Covering AI & Signal Processing, 6G Wireless Systems, Cybersecurity & Cloud, VLSI & Hardware, and Sustainable ICT",
  },
  {
    icon: Award,
    title: "Best Paper Awards",
    desc: "Prestigious Best Paper Awards across all 5 technical tracks recognizing outstanding research",
  },
  {
    icon: Cpu,
    title: "IEEE Xplore Inclusion",
    desc: "Accepted papers will be submitted for possible inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements",
  },
  {
    icon: Globe,
    title: "Global Participation",
    desc: "World-class researchers, scientists, engineers, and industry leaders uniting at PDEU Gandhinagar",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center bg-navy-dark overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/40 to-navy-dark" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-DEFAULT/20 border border-teal-DEFAULT/40 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
                <span className="text-teal-accent text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  October 2–3, 2027
                </span>
              </div>

              {/* Title with distinct fonts highlighting IC, 6G, ST */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-4 tracking-tight">
                <span
                  className="font-ic text-cyan-400 inline-block hover:scale-105 transition-transform"
                  title="Intelligent Computing"
                >
                  IC
                </span>
                <span
                  className="font-6g text-teal-accent inline-block mx-0.5 hover:scale-105 transition-transform tracking-wider"
                  title="6G & Beyond Communication"
                >
                  6G
                </span>
                <span
                  className="font-st text-emerald-400 inline-block hover:scale-105 transition-transform"
                  title="Sustainable Technologies"
                >
                  ST
                </span>
                <span className="block gradient-text">2027</span>
              </h1>

              {/* Domain Breakdown Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-ic">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <strong className="font-bold">IC:</strong> Intelligent Computing
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-accent font-6g">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                  <strong className="font-bold">6G:</strong> 6G &amp; Beyond
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 font-st">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <strong className="font-bold">ST:</strong> Sustainable Tech
                </span>
              </div>

              <p className="text-lg sm:text-2xl text-gray-300 font-light mb-6 leading-relaxed">
                Towards 6G and Beyond:{" "}
                <span className="text-teal-accent font-semibold block sm:inline">
                  Intelligent, Secure and Sustainable
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-400 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-teal-DEFAULT flex-shrink-0" />
                  <span>October 2–3, 2027 (Physical Conference)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-teal-DEFAULT flex-shrink-0" />
                  <span>PDEU, Gandhinagar, Gujarat, India</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/call-for-papers"
                  id="cta-submit-paper"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-DEFAULT text-white font-bold rounded-full hover:bg-teal-600 transition-all hover:shadow-2xl hover:shadow-teal-DEFAULT/40 hover:-translate-y-1 text-base sm:text-lg"
                >
                  Submit Paper <ArrowRight size={20} />
                </Link>
                <Link
                  href="/key-dates"
                  id="cta-key-dates"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:border-teal-accent hover:text-teal-accent transition-all hover:-translate-y-1 text-base sm:text-lg"
                >
                  View Key Dates <Calendar size={20} />
                </Link>
              </div>
            </div>

            {/* Right Column: Countdown / Paper Deadline Box */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end w-full min-w-0">
              <div className="w-full max-w-sm sm:max-w-md p-4 sm:p-6 lg:p-7 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 glow-teal shadow-2xl overflow-hidden">
                <CountdownTimer dark label="Full Paper Submission Deadline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS TICKER */}
      <section className="bg-teal-DEFAULT py-3 overflow-hidden shadow-inner">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...newsItems, ...newsItems].map((item, i) => (
              <span key={i} className="text-white font-semibold text-sm mx-10">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* KEY DATES TIMELINE SUMMARY */}
      <section className="py-14 bg-navy-dark border-t border-b border-teal-DEFAULT/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-8">
              <span className="text-teal-accent font-semibold uppercase tracking-widest text-xs">
                Milestones
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-2">
                Important <span className="gradient-text">Timeline</span>
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                label: "Paper Submission",
                date: "May 15, 2027",
                icon: "📄",
                status: "Deadline",
                highlight: true,
              },
              {
                label: "Acceptance Notification",
                date: "June 30, 2027",
                icon: "✉️",
                status: "Upcoming",
              },
              {
                label: "Camera-Ready & Early Bird",
                date: "July 31, 2027",
                icon: "🏆",
                status: "Upcoming",
              },
              {
                label: "Conference Days",
                date: "Oct 2–3, 2027",
                icon: "🎉",
                status: "Main Event",
              },
            ].map((milestone, i) => (
              <AnimatedSection key={milestone.label} delay={i * 0.1}>
                <div
                  className={`p-5 rounded-2xl border text-center transition-all h-full ${
                    milestone.highlight
                      ? "bg-teal-DEFAULT/15 border-teal-DEFAULT/50 shadow-lg shadow-teal-DEFAULT/10"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="text-2xl mb-2">{milestone.icon}</div>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${
                      milestone.highlight
                        ? "bg-red-500/20 text-red-300 border border-red-500/40"
                        : "bg-teal-DEFAULT/20 text-teal-accent"
                    }`}
                  >
                    {milestone.status}
                  </span>
                  <p className="text-white font-bold text-sm">{milestone.label}</p>
                  <p className="text-teal-accent font-semibold text-xs mt-1">
                    {milestone.date}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/key-dates"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-teal-accent hover:text-white font-semibold transition-colors"
            >
              View Full Conference Schedule &amp; Deadlines <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                Conference Highlights
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-navy mt-3 mb-4">
                Why Attend IC6GST 2027?
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-teal-DEFAULT/30 hover:shadow-xl hover:shadow-teal-DEFAULT/10 transition-all duration-300 hover:-translate-y-2 bg-white text-center h-full flex flex-col justify-start">
                  <div className="w-14 h-14 rounded-xl bg-teal-DEFAULT/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-teal-DEFAULT group-hover:scale-110 transition-all">
                    <h.icon
                      size={26}
                      className="text-teal-DEFAULT group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">{h.title}</h3>
                  <p className="text-slate-light text-sm leading-relaxed">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME & CONFERENCE VENUE REGION */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text description */}
            <div className="lg:col-span-6">
              <AnimatedSection direction="left">
                <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                  Welcome
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-navy mt-3 mb-6">
                  A Premier Forum for
                  <span className="gradient-text block">Next-Gen Technologies</span>
                </h2>
                <p className="text-slate-body leading-relaxed mb-5">
                  IC6GST 2027 provides a premier international platform for engineers,
                  researchers, scientists, and industry professionals to share cutting-edge
                  research, exchange ideas, and foster collaborations in intelligent
                  computing, 6G-and-beyond wireless communication, and sustainable ICT
                  solutions.
                </p>
                <p className="text-slate-body leading-relaxed mb-5">
                  Hosted by the Department of ICT at Pandit Deendayal Energy University
                  (PDEU) — a NAAC A++ accredited institution — in Gandhinagar, Gujarat,
                  the conference brings together global thought leaders at the frontiers
                  of technology.
                </p>
                <div className="p-4 rounded-xl bg-teal-DEFAULT/10 border border-teal-DEFAULT/20 text-slate-body text-sm mb-8">
                  <p className="font-semibold text-navy mb-1">Publication Opportunity:</p>
                  <p>
                    Accepted papers will be submitted for possible inclusion into IEEE Xplore
                    subject to meeting IEEE Xplore’s scope and quality requirements.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-all hover:-translate-y-0.5"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://www.pdpu.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold rounded-full hover:border-teal-DEFAULT hover:text-teal-DEFAULT transition-all hover:-translate-y-0.5"
                  >
                    Visit PDEU <ExternalLink size={18} />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Conference Venue Region Image — Statue of Unity, Gujarat */}
            <div className="lg:col-span-6">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xl transition-all hover:shadow-teal-DEFAULT/20">
                  <div className="relative w-full overflow-hidden bg-navy-dark">
                    <img
                      src="/images/statue-of-unity.png"
                      alt="Statue of Unity, Gujarat — Conference Venue Region"
                      className="w-full h-auto max-h-[420px] object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-navy/85 backdrop-blur-md text-teal-accent font-bold text-xs uppercase tracking-wider shadow-lg border border-teal-DEFAULT/30">
                        Gujarat, India
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h3 className="font-black text-navy text-xl sm:text-2xl">
                        Statue of Unity, Gujarat
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-teal-DEFAULT/10 text-teal-DEFAULT font-bold text-xs">
                        Conference Venue Region
                      </span>
                    </div>
                    <p className="text-slate-body text-sm leading-relaxed mb-4">
                      Standing at 182 meters as the world’s tallest statue, the Statue of Unity
                      symbolizes national unity and engineering excellence in Gujarat. Attendees
                      of IC6GST 2027 are invited to explore the rich heritage and landmark
                      marvels of Gujarat alongside the academic sessions at PDEU.
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-slate-light">
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin size={14} className="text-teal-DEFAULT" />
                        Kevadia / Gandhinagar, Gujarat
                      </span>
                      <Link
                        href="/venue"
                        className="text-teal-DEFAULT hover:underline font-semibold flex items-center gap-1"
                      >
                        Explore Venue &amp; Attractions →
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Ready to Submit Your
              <span className="gradient-text block">Research?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Join top researchers and engineers from around the world at IC6GST 2027.
              Accepted papers will be submitted for possible inclusion into IEEE Xplore
              subject to meeting IEEE Xplore’s scope and quality requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/call-for-papers"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-teal-DEFAULT text-white font-bold rounded-full text-lg hover:bg-teal-600 hover:shadow-2xl hover:shadow-teal-DEFAULT/30 transition-all hover:-translate-y-1"
              >
                View Call for Papers <ArrowRight size={22} />
              </Link>
              <Link
                href="/registration"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/40 text-white font-bold rounded-full text-lg hover:border-teal-accent hover:text-teal-accent transition-all hover:-translate-y-1"
              >
                Registration Fees
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
