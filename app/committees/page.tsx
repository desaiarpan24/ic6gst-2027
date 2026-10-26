import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { User, Users, Star, Award, Shield, BookOpen, DollarSign, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Committees",
  description: "IC6GST 2027 organizing, technical program, advisory, and steering committees.",
};

const committeeData = {
  leadership: {
    label: "Leadership",
    icon: Star,
    roles: [
      { role: "Chief Patron", members: ["Dr. S Sundar Manoharan, Vice Chancellor, PDEU"] },
      { role: "Patron", members: ["Dr. Anirbid Sircar, Director, School of Technology, PDEU"] },
      { role: "General Chair", members: ["Dr. Mohendra Roy, Associate Professor, Dept. of ICT, PDEU", "Dr. Chirag Paunwala, Professor, Dept. of ICT, PDEU"] },
      { role: "Organizing Chair", members: ["Dr. Arpan Desai, Assistant Professor, Dept. of ICT, PDEU", "Dr. Ganga Prasad Pandey, Associate Professor, Dept. of ICT, PDEU"] },
    ],
  },
  organizing: {
    label: "Organizing",
    icon: Users,
    roles: [
      {
        role: "Organizing Committee",
        members: [
          "[Name], Dept. of ICT, PDEU",
          "[Name], Dept. of ICT, PDEU",
          "[Name], Dept. of ICT, PDEU",
          "[Name], Dept. of ICT, PDEU",
          "[Name], Dept. of ICT, PDEU",
          "[Name], Dept. of ICT, PDEU",
        ],
      },
    ],
  },
  tpc: {
    label: "TPC",
    icon: BookOpen,
    roles: [
      {
        role: "TPC Chairs",
        members: [
          "[Name] — TPC Chair (AI & ML)",
          "[Name] — TPC Chair (6G & Wireless)",
          "[Name] — TPC Chair (Cybersecurity)",
          "[Name] — TPC Chair (Green ICT)",
        ],
      },
      {
        role: "Track Chairs",
        members: [
          "[Name] — TT1: AI, Machine Learning and Generative AI",
          "[Name] — TT2: Data Science, Vision and Signal Processing",
          "[Name] — TT3: 6G and Beyond: Networks and Wireless Systems",
          "[Name] — TT4: Cybersecurity, Privacy and Blockchain",
          "[Name] — TT5: Cloud, Edge and High-Performance Computing",
          "[Name] — TT6: VLSI, Embedded Systems and Hardware",
          "[Name] — TT7: ICT for Energy and Sustainability",
          "[Name] — TT8: ICT for Society",
        ],
      },
    ],
  },
  advisory: {
    label: "Advisory",
    icon: Award,
    roles: [
      {
        role: "Advisory Committee",
        members: [
          "[Distinguished Name], [University/Institution], [Country]",
          "[Distinguished Name], [University/Institution], [Country]",
          "[Distinguished Name], [University/Institution], [Country]",
          "[Distinguished Name], [University/Institution], [Country]",
          "[Distinguished Name], [University/Institution], [Country]",
          "[Distinguished Name], [University/Institution], [Country]",
        ],
      },
      {
        role: "Steering Committee",
        members: [
          "[Name], [Institution]",
          "[Name], [Institution]",
          "[Name], [Institution]",
        ],
      },
    ],
  },
  support: {
    label: "Support",
    icon: Shield,
    roles: [
      {
        role: "Publication Committee",
        members: [
          "[Name] — Publication Chair",
          "[Name] — Co-Chair, Proceedings",
        ],
      },
      {
        role: "Sponsorship Committee",
        members: [
          "[Name] — Sponsorship Chair",
          "[Name] — Industry Liaison",
        ],
      },
      {
        role: "Publicity Committee",
        members: [
          "[Name] — Publicity Chair",
          "[Name] — Social Media & Web",
          "[Name] — International Outreach",
        ],
      },
      {
        role: "Finance Committee",
        members: [
          "[Name] — Finance Chair",
          "[Name] — Accounts",
        ],
      },
    ],
  },
};

function RoleCard({ role, members }: { role: string; members: string[] }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-navy text-base mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-teal-DEFAULT" />
        {role}
      </h3>
      <ul className="space-y-2">
        {members.map((m, i) => (
          <li key={i} className="text-sm text-slate-body flex items-start gap-2">
            <User size={14} className="text-slate-xlight mt-0.5 flex-shrink-0" />
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CommitteesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <Badge variant="outline" className="border-teal-accent text-teal-accent mb-4">IC6GST 2027</Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              <span className="gradient-text">Committees</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Meet the organizers, technical program chairs, and advisory members shaping IC6GST 2027.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Committees */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <Tabs defaultValue="leadership" className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-2 mb-8 bg-white border border-gray-200 p-2 rounded-xl shadow-sm">
                {Object.entries(committeeData).map(([key, val]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg"
                  >
                    <val.icon size={16} />
                    {val.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(committeeData).map(([key, val]) => (
                <TabsContent key={key} value={key}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {val.roles.map((roleGroup) => (
                      <RoleCard
                        key={roleGroup.role}
                        role={roleGroup.role}
                        members={roleGroup.members}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
