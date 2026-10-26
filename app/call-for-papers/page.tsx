import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Globe, Shield, Upload, BookOpen, Cpu, Leaf, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Call for Papers",
  description: "IC6GST 2027 Call for Papers — submission guidelines, IEEE template, 8 technical tracks.",
};

const tracks = [
  {
    id: "tt1",
    code: "TT1",
    title: "AI, Machine Learning and Generative AI",
    icon: Cpu,
    color: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-200",
    topics: [
      "Deep Learning, Neural Networks, Transformers",
      "Large Language Models (LLMs) & Generative AI",
      "Federated Learning & Privacy-Preserving AI",
      "Explainable AI (XAI) and Trustworthy AI",
      "Reinforcement Learning and Autonomous Systems",
      "AI for Healthcare, Finance, and Smart Cities",
    ],
  },
  {
    id: "tt2",
    code: "TT2",
    title: "Data Science, Vision and Signal Processing",
    icon: FileText,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    topics: [
      "Big Data Analytics and Data Mining",
      "Computer Vision and Image Processing",
      "Natural Language Processing",
      "Speech Recognition and Audio Processing",
      "Medical Image Analysis",
      "Remote Sensing & Satellite Data",
    ],
  },
  {
    id: "tt3",
    code: "TT3",
    title: "6G and Beyond: Networks and Wireless Systems",
    icon: Globe,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    topics: [
      "6G Architecture, Spectrum and Standardization",
      "Massive MIMO and Beamforming",
      "Reconfigurable Intelligent Surfaces (RIS)",
      "Terahertz (THz) Communication",
      "Network Slicing and Virtualization",
      "UAV-aided Communications",
    ],
  },
  {
    id: "tt4",
    code: "TT4",
    title: "Cybersecurity, Privacy and Blockchain",
    icon: Shield,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
    topics: [
      "Network Security and Intrusion Detection",
      "Cryptography and Post-Quantum Security",
      "Blockchain and Distributed Ledger Technology",
      "Privacy-Preserving Computation",
      "AI-driven Cybersecurity",
      "Security for IoT and CPS",
    ],
  },
  {
    id: "tt5",
    code: "TT5",
    title: "Cloud, Edge and High-Performance Computing",
    icon: Upload,
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    topics: [
      "Cloud Architecture and Orchestration",
      "Edge and Fog Computing",
      "Serverless and Microservices",
      "HPC for AI Workloads",
      "Green Cloud Computing",
      "Digital Twins",
    ],
  },
  {
    id: "tt6",
    code: "TT6",
    title: "VLSI, Embedded Systems and Hardware",
    icon: Cpu,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    topics: [
      "VLSI Design and Verification",
      "SoC and ASIC Design",
      "FPGA-based Accelerators",
      "Embedded AI and TinyML",
      "Neuromorphic Computing Hardware",
      "Hardware Security",
    ],
  },
  {
    id: "tt7",
    code: "TT7",
    title: "ICT for Energy and Sustainability",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    topics: [
      "Smart Grid and Energy Management",
      "ICT for Renewable Energy",
      "Energy Harvesting in Wireless Networks",
      "Green Communication Systems",
      "Carbon Footprint Reduction in ICT",
      "Sustainable IoT Applications",
    ],
  },
  {
    id: "tt8",
    code: "TT8",
    title: "ICT for Society",
    icon: Users,
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
    topics: [
      "Smart Cities and Urban Computing",
      "E-Governance and Digital Public Services",
      "ICT for Agriculture and Rural Development",
      "Assistive Technologies and Accessibility",
      "Education Technology (EdTech)",
      "Digital Health and Telemedicine",
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
            <Badge variant="outline" className="border-teal-accent text-teal-accent mb-4">Submissions Open</Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Call for <span className="gradient-text">Papers</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Submit your original research for peer review and publication in IEEE Xplore® Digital Library.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Guidelines</span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">Submission Guidelines</h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Language", desc: "All papers must be written in English. Non-English submissions will not be considered.", emoji: "🌐" },
              { title: "Page Limit", desc: "Up to 6 pages. Additional pages (max 2) accepted with an extra fee at camera-ready stage.", emoji: "📄" },
              { title: "Template", desc: "Use the official IEEE Conference Proceedings template (double-column format).", emoji: "📐" },
              { title: "Review Process", desc: "Double-blind peer review. Remove all author identifying information before submission.", emoji: "🔍" },
              { title: "Submission Portal", desc: "Submit via Microsoft CMT conference management system. Register and create a new submission.", emoji: "💻" },
              { title: "Originality", desc: "Papers must be original and unpublished. Simultaneous submission to other venues is prohibited.", emoji: "✅" },
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

          {/* Publication banner */}
          <AnimatedSection>
            <div className="p-8 rounded-3xl bg-gradient-to-r from-navy to-navy-light border border-teal-DEFAULT/20 flex flex-col md:flex-row items-center gap-6">
              <div className="text-5xl">📚</div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">IEEE Xplore® Publication</h3>
                <p className="text-gray-300 leading-relaxed">
                  All accepted and presented papers will be submitted for inclusion in the{" "}
                  <strong className="text-teal-accent">IEEE Xplore® Digital Library</strong>, subject to IEEE approval.
                  The conference proceedings will be indexed in Scopus and other major academic databases.
                </p>
              </div>
              <a
                href="https://cmt3.research.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-6 py-3 bg-teal-DEFAULT text-white font-bold rounded-full hover:bg-teal-600 transition-colors whitespace-nowrap"
              >
                Submit via CMT →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technical Tracks */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Topics</span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">Technical Tracks</h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-slate-light max-w-2xl mx-auto">
                Submit to one of 8 rigorously curated technical tracks reviewed by domain experts.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {tracks.map((track) => (
                <AccordionItem
                  key={track.id}
                  value={track.id}
                  className={`rounded-2xl border ${track.border} px-6 bg-white shadow-sm hover:shadow-md transition-shadow`}
                >
                  <AccordionTrigger className="py-5 gap-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className={`w-10 h-10 rounded-lg ${track.bg} flex items-center justify-center flex-shrink-0`}>
                        <track.icon size={20} className={track.color} />
                      </div>
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${track.color}`}>{track.code}</span>
                        <p className="font-bold text-navy text-base mt-0.5">{track.title}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
                      {track.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-slate-body text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-DEFAULT mt-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-DEFAULT">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Submit?</h2>
          <p className="text-teal-50 mb-8">Full paper submission deadline: <strong>May 31, 2027</strong></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cmt3.research.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-teal-DEFAULT font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Submit Paper via CMT
            </a>
            <Link
              href="/key-dates"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-teal-DEFAULT transition-colors"
            >
              View All Deadlines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
