import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, ExternalLink, Zap, Radio, Cpu, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";

export const metadata: Metadata = {
  title: "Home",
  description: "IC6GST 2027 — International Conference on Intelligent Computing, 6G-and-Beyond Communication and Sustainable Technologies. October 2–3, 2027 at PDEU, Gandhinagar.",
};

const newsItems = [
  "🔔 Call for Papers is now OPEN! Submit your research to IC6GST 2027",
  "📅 Special Session Proposals due March 15, 2027",
  "🏆 Best Paper Awards in all 8 Technical Tracks",
  "🌐 IEEE Xplore® publication for accepted papers",
  "🎯 Full Paper Submission Deadline: May 31, 2027",
  "🚀 6G and Beyond Workshop — Exclusive Industry Session",
];

const highlights = [
  { icon: Zap, title: "8 Technical Tracks", desc: "Spanning AI, 6G, Cybersecurity, VLSI, Edge Computing, and Sustainability" },
  { icon: Radio, title: "6G & Beyond", desc: "Exclusive workshops and industry sessions on next-gen wireless communication" },
  { icon: Cpu, title: "IEEE Publication", desc: "Accepted papers published in IEEE Xplore® Digital Library" },
  { icon: Globe, title: "Global Participation", desc: "Researchers, engineers, and industry leaders from across the globe" },
];

export default function HomePage() {
  return (
    <div>
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-DEFAULT/20 border border-teal-DEFAULT/40 mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
              <span className="text-teal-accent text-sm font-semibold uppercase tracking-wider">October 2–3, 2027</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-none mb-6">
              IC6GST
              <span className="block gradient-text">2027</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 font-light mb-4 leading-relaxed">
              Towards 6G and Beyond: <span className="text-teal-accent font-semibold">Intelligent, Secure and Sustainable</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm mb-10">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-teal-DEFAULT" />
                <span>October 2–3, 2027 (Physical Conference)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-teal-DEFAULT" />
                <span>PDEU, Gandhinagar, Gujarat, India</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/call-for-papers"
                id="cta-submit-paper"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-DEFAULT text-white font-bold rounded-full hover:bg-teal-600 transition-all hover:shadow-2xl hover:shadow-teal-DEFAULT/40 hover:-translate-y-1 text-lg"
              >
                Submit Paper <ArrowRight size={20} />
              </Link>
              <Link
                href="/key-dates"
                id="cta-key-dates"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:border-teal-accent hover:text-teal-accent transition-all hover:-translate-y-1 text-lg"
              >
                View Key Dates <Calendar size={20} />
              </Link>
            </div>
          </div>

          {/* Countdown - bottom right */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 glow-teal shadow-2xl">
              <CountdownTimer dark />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* NEWS TICKER */}
      <section className="bg-teal-DEFAULT py-3 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...newsItems, ...newsItems].map((item, i) => (
              <span key={i} className="text-white font-semibold text-sm mx-12">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Conference Highlights</span>
              <h2 className="text-4xl sm:text-5xl font-black text-navy mt-3 mb-4">
                Why Attend IC6GST 2027?
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-teal-DEFAULT/30 hover:shadow-xl hover:shadow-teal-DEFAULT/10 transition-all duration-300 hover:-translate-y-2 bg-white text-center">
                  <div className="w-14 h-14 rounded-xl bg-teal-DEFAULT/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-teal-DEFAULT group-hover:scale-110 transition-all">
                    <h.icon size={26} className="text-teal-DEFAULT group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">{h.title}</h3>
                  <p className="text-slate-light text-sm leading-relaxed">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Welcome</span>
              <h2 className="text-4xl sm:text-5xl font-black text-navy mt-3 mb-6">
                A Premier Forum for
                <span className="gradient-text block">Next-Gen Technologies</span>
              </h2>
              <p className="text-slate-body leading-relaxed mb-5">
                IC6GST 2027 provides a premier international platform for engineers, researchers, scientists,
                and industry professionals to share cutting-edge research, exchange ideas, and foster
                collaborations in intelligent computing, 6G-and-beyond wireless communication, and
                sustainable ICT solutions.
              </p>
              <p className="text-slate-body leading-relaxed mb-8">
                Hosted by the Department of ICT at Pandit Deendayal Energy University (PDEU) — a NAAC A++
                accredited institution — in the vibrant city of Gandhinagar, Gujarat, this conference brings
                together global thought leaders at the frontiers of technology.
              </p>
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

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1596525737119-e0c46dfcf4e0?auto=format&fit=crop&w=800&q=80"
                    alt="Gujarat architecture — conference venue region"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-bold text-lg">Gandhinagar, Gujarat</p>
                    <p className="text-sm text-gray-300">Capital of Gujarat, 23 km from Ahmedabad</p>
                  </div>
                </div>
                {/* Stats badge */}
                <div className="absolute -top-4 -right-4 bg-teal-DEFAULT text-white p-4 rounded-2xl shadow-xl">
                  <p className="text-3xl font-black">8</p>
                  <p className="text-xs font-semibold">Tech Tracks</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-navy text-white p-4 rounded-2xl shadow-xl">
                  <p className="text-3xl font-black text-teal-accent">2</p>
                  <p className="text-xs font-semibold">Conference Days</p>
                </div>
              </div>
            </AnimatedSection>
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
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Join researchers and engineers from around the world. Submit your work for
              peer review and IEEE Xplore® publication.
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
