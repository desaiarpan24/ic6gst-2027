import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  FileText,
  Globe,
  Shield,
  Upload,
  BookOpen,
  Cpu,
  Leaf,
  Users,
  Award,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Call for Papers",
  description:
    "IC6GST 2027 Call for Papers — submission guidelines, IEEE template, 5 technical tracks, and IEEE Xplore indexing details.",
};

const tracks = [
  {
    id: "t1",
    code: "T1",
    title: "AI, Data Science and Signal Processing",
    icon: Cpu,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    topics: [
      "Deep learning, large language models and generative AI",
      "Reinforcement learning and autonomous systems",
      "Explainable, ethical and responsible AI",
      "Federated, distributed and edge learning",
      "Big data analytics and predictive modeling",
      "Computer vision, image and video processing",
      "Speech, natural language and audio processing",
      "Biomedical signal processing and health informatics",
      "Remote sensing and spatial data analytics",
      "Pattern recognition and neural networks",
    ],
  },
  {
    id: "t2",
    code: "T2",
    title: "6G and Beyond: Networks, Wireless Systems and Antennas",
    icon: Globe,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    topics: [
      "THz and mmWave communications and channel modeling",
      "Reconfigurable intelligent surfaces (RIS)",
      "Integrated sensing and communication (ISAC)",
      "AI-native air interface and physical layer designs",
      "Cell-free massive MIMO and ultra-dense networks",
      "Semantic and goal-oriented communications",
      "Non-terrestrial (satellite / UAV / HAP) networks",
      "Open RAN, disaggregated networks and SDN/NFV",
      "Optical wireless, LiFi and quantum communications",
      "Antenna design, beamforming and RF propagation",
    ],
  },
  {
    id: "t3",
    code: "T3",
    title: "Cybersecurity, Cloud and Edge Computing",
    icon: Shield,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
    topics: [
      "Network, zero-trust and operating system security",
      "Post-quantum cryptography and quantum key distribution",
      "Secure 6G architectures and threat modeling",
      "Intrusion detection, cyber threat intelligence & forensics",
      "Blockchain and distributed ledger technologies",
      "Privacy-preserving computation and differential privacy",
      "IoT, fog, and mobile edge computing architectures",
      "Cloud-native, microservices and serverless paradigms",
      "High-performance and heterogeneous computing",
      "Digital twins and cyber-physical security",
    ],
  },
  {
    id: "t4",
    code: "T4",
    title: "VLSI, Embedded Systems and RF Hardware",
    icon: Cpu,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    topics: [
      "Ultra-low-power VLSI circuits and systems",
      "RF, microwave, millimeter-wave and mixed-signal circuits",
      "FPGA and ASIC hardware accelerators for AI/ML",
      "System-on-Chip (SoC) and Network-on-Chip (NoC)",
      "Embedded microcontrollers and cyber-physical hardware",
      "Sensors, actuators, MEMS and bio-electronics",
      "Semiconductor devices, 2D materials and nanoelectronics",
      "Hardware security, PUFs and side-channel analysis",
    ],
  },
  {
    id: "t5",
    code: "T5",
    title: "ICT for Energy, Sustainability and Society",
    icon: Leaf,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    topics: [
      "Smart grid communications, monitoring and automated control",
      "Renewable energy forecasting and smart microgrids",
      "Electric vehicle (EV) infrastructure and battery analytics",
      "Green communication protocols and carbon-aware computing",
      "ICT for climate change mitigation and environmental sensing",
      "Digital healthcare and telemedicine platforms",
      "Smart agriculture, drone sensing and precision farming",
      "Smart cities, intelligent transportation and public transit",
      "E-governance, digital inclusion and ICT in education",
      "Assistive technologies for accessible computing",
    ],
  },
];

export default function CallForPapersPage() {
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
              Submissions Open
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Call for <span className="gradient-text">Papers</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Submit your original, unpublished research to IC6GST 2027. Best Paper
              Awards will be conferred across all 5 technical tracks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                Guidelines
              </span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">
                Submission Guidelines
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Language",
                desc: "All papers must be written in English. Non-English submissions will not be considered.",
                emoji: "🌐",
              },
              {
                title: "Page Limit",
                desc: "Up to 4-5 pages including figures and tables.",
                emoji: "📄",
              },
              {
                title: "Template",
                desc: "Submissions must adhere strictly to the standard IEEE Conference Proceedings double-column format.",
                emoji: "📐",
              },
              {
                title: "Review Process",
                desc: "Single blind peer review.",
                emoji: "🔍",
              },
              {
                title: "Submission Portal",
                desc: "Submit your manuscript electronically via the Microsoft CMT conference management portal.",
                emoji: "💻",
              },
              {
                title: "Originality & Ethics",
                desc: "Submissions must describe original work and must not be published or under concurrent review elsewhere.",
                emoji: "✅",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-gray-100 hover:border-teal-DEFAULT/30 hover:shadow-lg transition-all duration-300 bg-white h-full">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Publication banner with mandatory IEEE statement */}
          <AnimatedSection>
            <div className="p-8 rounded-3xl bg-gradient-to-r from-navy to-navy-light border border-teal-DEFAULT/30 shadow-xl flex flex-col md:flex-row items-center gap-6">
              <div className="text-5xl">📚</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-white font-bold text-xl">
                    IEEE Xplore® Publication Opportunity
                  </h3>
                  <Badge className="bg-teal-DEFAULT text-white text-xs">
                    IEEE Technical Co-Sponsor
                  </Badge>
                </div>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  &ldquo;Accepted papers will be submitted for possible inclusion into IEEE
                  Xplore subject to meeting IEEE Xplore’s scope and quality requirements.&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2 text-teal-accent text-xs font-semibold">
                  <Award size={16} />
                  <span>Best Paper Awards will be presented in all 5 Technical Tracks</span>
                </div>
              </div>
              <a
                href="https://cmt3.research.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-8 py-4 bg-teal-DEFAULT text-white font-bold rounded-full hover:bg-teal-600 transition-all hover:shadow-lg whitespace-nowrap"
              >
                Submit via CMT →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technical Tracks */}
      <section className="py-20 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                Scope &amp; Domains
              </span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">
                5 Technical Tracks (T1–T5)
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-slate-light max-w-2xl mx-auto">
                Authors are invited to submit prospective papers across the 5 conference tracks.
                Best paper awards will be conferred in every track.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4 max-w-5xl mx-auto">
              {tracks.map((track) => (
                <AccordionItem
                  key={track.id}
                  value={track.id}
                  className={`rounded-2xl border ${track.border} px-6 bg-white shadow-sm hover:shadow-md transition-shadow`}
                >
                  <AccordionTrigger className="py-5 gap-4">
                    <div className="flex items-center gap-4 text-left">
                      <div
                        className={`w-10 h-10 rounded-lg ${track.bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <track.icon size={20} className={track.color} />
                      </div>
                      <div>
                        <span
                          className={`text-xs font-bold uppercase tracking-widest ${track.color}`}
                        >
                          {track.code}
                        </span>
                        <p className="font-bold text-navy text-base mt-0.5">
                          {track.title}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-teal-DEFAULT">
                        <Award size={14} />
                        <span>Best Paper Award offered in this track</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {track.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-2 text-slate-body text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-DEFAULT mt-2 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Badge className="bg-teal-DEFAULT text-white mb-4">Submission Milestone</Badge>
          <h2 className="text-3xl font-black mb-3">Ready to Submit Your Paper?</h2>
          <p className="text-gray-300 mb-8 text-base">
            Full paper submission deadline:{" "}
            <strong className="text-teal-accent">May 15, 2027 (11:59 PM IST)</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cmt3.research.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-teal-DEFAULT text-white font-bold rounded-full hover:bg-teal-600 transition-colors shadow-lg"
            >
              Submit Paper via CMT
            </a>
            <Link
              href="/key-dates"
              className="px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:border-teal-accent hover:text-teal-accent transition-colors"
            >
              View Full Timeline
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
