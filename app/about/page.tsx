import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Building2, Cpu, Wifi, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About IC6GST 2027 — Conference theme, PDEU, and the ICT Department.",
};

const ictResearchAreas = [
  "Wireless Communication & 5G/6G",
  "Artificial Intelligence & Machine Learning",
  "Signal Processing & Computer Vision",
  "Cybersecurity & Blockchain",
  "IoT, Edge & Cloud Computing",
  "VLSI Design & Embedded Systems",
  "Sustainable & Green ICT",
  "Data Science & Big Data Analytics",
];

const pdeuStats = [
  { value: "100+", label: "Acres Campus" },
  { value: "NAAC A++", label: "Accredited" },
  { value: "2007", label: "Established" },
  { value: "10,000+", label: "Alumni Globally" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <Badge variant="outline" className="border-teal-accent text-teal-accent mb-4">About IC6GST 2027</Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              About the <span className="gradient-text">Conference</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              A premier international forum bridging intelligent computing, next-generation wireless communication, and sustainable technologies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Conference Theme */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Theme</span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-6">
                Conference Theme &amp; Scope
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-body leading-relaxed mb-5">
                IC6GST 2027 serves as a common forum for engineers, researchers, scientists, and industry professionals
                to present and discuss the latest advances in intelligent computing, 6G-and-beyond wireless communication,
                and sustainable ICT-driven solutions for societal challenges.
              </p>
              <p className="text-slate-body leading-relaxed mb-5">
                The conference theme — <strong className="text-navy">&ldquo;Towards 6G and Beyond: Intelligent, Secure and Sustainable&rdquo;</strong> —
                reflects the convergence of transformative technologies that will define the next decade of digital infrastructure.
              </p>
              <p className="text-slate-body leading-relaxed">
                Spanning 5 carefully curated technical tracks, IC6GST 2027 covers the full spectrum from foundational
                AI and signal processing to 6G networks, cybersecurity, green computing, and ICT for society.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <Badge>Intelligent Computing</Badge>
                <Badge>6G & Beyond</Badge>
                <Badge>Cybersecurity</Badge>
                <Badge>Sustainability</Badge>
                <Badge>AI & ML</Badge>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80"
                  alt="6G technology visualization"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold text-lg">6G & Beyond</p>
                  <p className="text-gray-300 text-sm">Next-generation wireless systems</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About PDEU */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Host Institution</span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">About PDEU</h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                  alt="University campus"
                  className="w-full h-80 object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h3 className="text-2xl font-bold text-navy mb-4">Pandit Deendayal Energy University (PDEU)</h3>
              <p className="text-slate-body leading-relaxed mb-5">
                Established in 2007 by the Government of Gujarat, Pandit Deendayal Energy University (formerly PDPU)
                is a premier technical university spread across a 100-acre green campus in Gandhinagar — the planned
                capital of Gujarat, known as the &ldquo;Tree City of India.&rdquo;
              </p>
              <p className="text-slate-body leading-relaxed mb-8">
                Accredited with NAAC A++ grade, PDEU is a centre of excellence in energy, technology, and management.
                The university fosters innovation through industry partnerships, cutting-edge research, and a globally
                connected academic community.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {pdeuStats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <p className="text-xl font-black text-teal-DEFAULT">{stat.value}</p>
                    <p className="text-xs text-slate-light mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About ICT Department */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Organizing Department</span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">Department of ICT</h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <p className="text-slate-body leading-relaxed mb-5">
                Established in 2007, the Department of Information and Communication Technology (ICT) at PDEU
                has grown into a vibrant academic hub offering B.Tech, M.Tech, and PhD programs. The department
                is home to accomplished faculty researchers and state-of-the-art laboratories.
              </p>
              <p className="text-slate-body leading-relaxed mb-8">
                With a strong focus on applied research, the ICT department actively collaborates with national
                and international industry partners. Its research output spans publications in top-tier IEEE and
                Springer journals, patents, and government-funded R&D projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-navy text-navy px-3 py-1">B.Tech</Badge>
                <Badge variant="outline" className="border-navy text-navy px-3 py-1">M.Tech</Badge>
                <Badge variant="outline" className="border-navy text-navy px-3 py-1">PhD Programs</Badge>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h3 className="text-lg font-bold text-navy mb-5 flex items-center gap-2">
                <Cpu size={20} className="text-teal-DEFAULT" /> Research Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ictResearchAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-teal-DEFAULT flex-shrink-0" />
                    <span className="text-sm text-slate-body">{area}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Signature 6G Events */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-accent font-semibold uppercase tracking-widest text-sm">Exclusive Events</span>
              <h2 className="text-4xl font-black text-white mt-3 mb-4">Signature 6G Events</h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-teal-DEFAULT/30 flex items-center justify-center mb-4">
                    <Wifi size={24} className="text-teal-accent" />
                  </div>
                  <CardTitle className="text-white text-2xl">6G and Beyond Workshop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    An intensive pre-conference workshop bringing together world-leading researchers to explore
                    the architectural, algorithmic, and spectrum challenges of 6G networks. Attendees will gain
                    hands-on exposure to simulation tools, use-case demonstrations, and emerging standardization
                    frameworks for post-5G systems.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">Keynote Sessions</Badge>
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">Demos</Badge>
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">Networking</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-teal-DEFAULT/30 flex items-center justify-center mb-4">
                    <Building2 size={24} className="text-teal-accent" />
                  </div>
                  <CardTitle className="text-white text-2xl">6G Bharat Industry Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    A flagship industry-academia interaction session featuring C-suite executives and R&D heads
                    from India&apos;s leading telecom, semiconductor, and technology companies. Discussions will
                    cover India&apos;s 6G roadmap, indigenous technology development under the Bharat 6G Vision, and
                    startup ecosystem opportunities in next-generation wireless.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">Bharat 6G Vision</Badge>
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">Industry Leaders</Badge>
                    <Badge className="bg-teal-DEFAULT/30 text-teal-accent border-0">Startups</Badge>
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
