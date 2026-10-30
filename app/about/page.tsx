import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { Building2, Cpu, Wifi, Award, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About IC6GST 2027 — Conference theme, PDEU host institution, ICT Department, and signature 6G events.",
};

const ictResearchAreas = [
  "Wireless Communication & 5G/6G",
  "Artificial Intelligence & Machine Learning",
  "Signal Processing & Computer Vision",
  "Cybersecurity, Privacy & Blockchain",
  "Cloud, Edge & High-Performance Computing",
  "VLSI Design, Embedded Systems & Hardware",
  "ICT for Energy & Sustainable Technologies",
  "ICT for Society & Smart Infrastructure",
];

const pdeuStats = [
  { value: "100+", label: "Acres Green Campus" },
  { value: "NAAC A++", label: "Grade Accreditation" },
  { value: "2007", label: "Year Established" },
  { value: "10,000+", label: "Global Alumni Network" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <Badge
              variant="outline"
              className="border-teal-accent text-teal-accent mb-4"
            >
              About IC6GST 2027
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              About the <span className="gradient-text">Conference</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              A premier international academic forum bridging intelligent computing,
              next-generation 6G wireless systems, and sustainable technologies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Conference Theme — Clean layout without placeholder figure */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
              Theme &amp; Vision
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-navy mt-3 mb-6">
              Conference Theme &amp; Scope
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-slate-body text-lg leading-relaxed mb-6">
              IC6GST 2027 serves as a common forum for engineers, researchers,
              scientists, and industry professionals to present and discuss the latest
              breakthroughs in intelligent computing, 6G-and-beyond communication, and
              sustainable technologies.
            </p>
            <p className="text-slate-body text-lg leading-relaxed mb-6">
              The overarching theme —{" "}
              <strong className="text-navy font-bold">
                &ldquo;Towards 6G and Beyond: Intelligent, Secure and Sustainable&rdquo;
              </strong>{" "}
              — captures the convergence of emerging AI paradigms, ultra-reliable
              terahertz-speed networks, robust security architectures, and energy-efficient
              computing infrastructures shaping our sustainable digital future.
            </p>
            <p className="text-slate-body leading-relaxed mb-8">
              Spanning 5 carefully structured technical tracks, IC6GST 2027 fosters
              interdisciplinary collaboration across foundational computing, advanced
              wireless communications, hardware systems, and sustainable applications.
            </p>

            <div className="p-6 rounded-2xl bg-teal-DEFAULT/10 border border-teal-DEFAULT/20 text-slate-body">
              <p className="font-bold text-navy text-base mb-2">
                IEEE Xplore Publication
              </p>
              <p className="text-sm leading-relaxed">
                Accepted papers will be submitted for possible inclusion into IEEE Xplore
                subject to meeting IEEE Xplore’s scope and quality requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About PDEU — Featuring Official PDEU Aerial Campus Image */}
      <section className="py-20 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                Host Institution
              </span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">About PDEU</h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real PDEU Campus Aerial Image */}
            <div className="lg:col-span-6">
              <AnimatedSection direction="left">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
                  <img
                    src="/images/pdeu-campus.jpeg"
                    alt="Pandit Deendayal Energy University (PDEU) Campus, Gandhinagar"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent p-6 text-white">
                    <p className="font-black text-lg">Pandit Deendayal Energy University</p>
                    <p className="text-xs text-teal-accent">
                      Translational Research Centre &amp; 100-Acre Campus, Gandhinagar
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* PDEU Description & Stats */}
            <div className="lg:col-span-6">
              <AnimatedSection direction="right">
                <h3 className="text-2xl sm:text-3xl font-black text-navy mb-4">
                  Pandit Deendayal Energy University
                </h3>
                <p className="text-slate-body leading-relaxed mb-5">
                  Established in 2007 by the Government of Gujarat, Pandit Deendayal Energy
                  University (PDEU, formerly PDPU) is a premier technical institution spread
                  across a picturesque 100-acre lush green campus in Gandhinagar, the planned
                  capital city of Gujarat.
                </p>
                <p className="text-slate-body leading-relaxed mb-8">
                  Accredited with the prestigious <strong className="text-navy">NAAC A++ grade</strong>,
                  PDEU is a recognized centre of excellence in energy, technology, management,
                  and interdisciplinary engineering research. The university actively collaborates
                  with premier global research institutions and industry leaders worldwide.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {pdeuStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                    >
                      <p className="text-xl font-black text-teal-DEFAULT">{stat.value}</p>
                      <p className="text-xs text-slate-light mt-1 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* About ICT Department */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                Organizing Department
              </span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">
                Department of ICT
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <AnimatedSection direction="left">
                <p className="text-slate-body leading-relaxed mb-5 text-base sm:text-lg">
                  Established in 2007 under the School of Technology, the Department of
                  Information and Communication Technology (ICT) at PDEU has emerged as an
                  acknowledged seat of excellence offering undergraduate (B.Tech),
                  postgraduate (M.Tech), and doctoral (Ph.D.) research programs.
                </p>
                <p className="text-slate-body leading-relaxed mb-8">
                  With state-of-the-art computational facilities and specialized experimental
                  laboratories, the ICT faculty and scholars contribute actively to high-impact
                  research in 6G communications, artificial intelligence, cybersecurity, and
                  hardware systems, publishing extensively in top-tier IEEE journals and
                  conferences.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="border-navy text-navy px-3 py-1 font-semibold">
                    B.Tech in ICT
                  </Badge>
                  <Badge variant="outline" className="border-navy text-navy px-3 py-1 font-semibold">
                    M.Tech Programs
                  </Badge>
                  <Badge variant="outline" className="border-navy text-navy px-3 py-1 font-semibold">
                    Doctoral (Ph.D.) Research
                  </Badge>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-6">
              <AnimatedSection direction="right">
                <h3 className="text-lg font-bold text-navy mb-5 flex items-center gap-2">
                  <Cpu size={20} className="text-teal-DEFAULT" /> Major Research Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ictResearchAreas.map((area, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-background border border-gray-100 shadow-xs"
                    >
                      <CheckCircle2 size={16} className="text-teal-DEFAULT flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-body">{area}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Signature 6G Events */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-accent font-semibold uppercase tracking-widest text-sm">
                Exclusive Events
              </span>
              <h2 className="text-4xl font-black text-white mt-3 mb-4">
                Signature 6G Events
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur card-hover h-full flex flex-col justify-between">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-teal-DEFAULT/30 flex items-center justify-center mb-4">
                    <Wifi size={24} className="text-teal-accent" />
                  </div>
                  <CardTitle className="text-white text-2xl">
                    6G and Beyond Workshop
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    An intensive pre-conference workshop bringing together world-leading
                    researchers to explore the architectural, algorithmic, and spectrum
                    challenges of 6G networks. Attendees will gain hands-on exposure to
                    simulation tools, use-case demonstrations, and emerging standardization
                    frameworks for post-5G systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">
                      Keynote Sessions
                    </Badge>
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">
                      Standardization &amp; Demos
                    </Badge>
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">
                      Expert Panels
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur card-hover h-full flex flex-col justify-between">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-teal-DEFAULT/30 flex items-center justify-center mb-4">
                    <Building2 size={24} className="text-teal-accent" />
                  </div>
                  <CardTitle className="text-white text-2xl">
                    6G Bharat Industry Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    A flagship industry-academia interaction session featuring C-suite
                    executives and R&amp;D heads from India&apos;s leading telecom,
                    semiconductor, and technology companies. Discussions will cover India&apos;s
                    6G roadmap, indigenous technology development under the Bharat 6G Vision,
                    and startup ecosystem opportunities in next-generation wireless.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">
                      Bharat 6G Vision
                    </Badge>
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">
                      Telecom &amp; Tech Leaders
                    </Badge>
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">
                      Startup Ecosystem
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
