import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { User, Users, Star, Award, Shield, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Committees",
  description:
    "IC6GST 2027 leadership, organizing, technical program, advisory, and support committees.",
};

interface Member {
  name: string;
  affiliation: string;
}

interface CommitteeRole {
  role: string;
  members: Member[];
}

const leadershipData: CommitteeRole[] = [
  {
    role: "Chief Patron",
    members: [
      { name: "Prof. S. S. Manoharan", affiliation: "Director General, PDEU" },
    ],
  },
  {
    role: "Patron",
    members: [
      {
        name: "Prof. Anirbid Sircar",
        affiliation: "Director, School of Technology, PDEU",
      },
    ],
  },
  {
    role: "General Chairs",
    members: [
      {
        name: "Dr. Mohendra Roy",
        affiliation: "Head, Department of ICT, PDEU, Gandhinagar",
      },
      {
        name: "Dr. Chirag Paunwala",
        affiliation: "Chair, IEEE Gujarat Section",
      },
    ],
  },
  {
    role: "Organizing Chairs",
    members: [
      { name: "Dr. Arpan Desai", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Ganga Prasad Pandey", affiliation: "PDEU, Gandhinagar" },
    ],
  },
  {
    role: "Steering Committee",
    members: [
      { name: "Dr. Shakti Mishra", affiliation: "PDEU, Gandhinagar" },
      { name: "Prof. Bhawanisingh Desai", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Pavan Gurrala", affiliation: "PDEU, Gandhinagar" },
    ],
  },
];

const organizingData: CommitteeRole[] = [
  {
    role: "Organizing Secretaries",
    members: [
      { name: "Dr. Paawan Sharma", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Mahesh Kumar", affiliation: "PDEU, Gandhinagar" },
    ],
  },
  {
    role: "Finance Chairs",
    members: [
      { name: "Dr. Jigar Shah", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Naimish Bhatt", affiliation: "PDEU, Gandhinagar" },
    ],
  },
  {
    role: "Publication Chair",
    members: [
      { name: "Dr. Abhishek Kumar", affiliation: "PDEU, Gandhinagar" },
    ],
  },
  {
    role: "6G Workshop and Industry Session Chairs",
    members: [
      { name: "Dr. Manish Mandloi", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. V Vikas", affiliation: "PDEU, Gandhinagar" },
    ],
  },
  {
    role: "6G Workshop and Industry Session Co-Chair",
    members: [
      { name: "Mr. Jayamohan Govindaraj", affiliation: "MathWorks" },
    ],
  },
  {
    role: "Industry and Exhibition Chair",
    members: [
      { name: "Dr. Nitin Rajput", affiliation: "PDEU, Gandhinagar" },
    ],
  },
  {
    role: "Student Activities and Student Paper Contest Chair",
    members: [
      { name: "Dr. Devlina Adhikari", affiliation: "PDEU, Gandhinagar" },
    ],
  },
  {
    role: "Awards Chair",
    members: [
      { name: "Dr. Gaurav Bhargava", affiliation: "PDEU, Gandhinagar" },
    ],
  },
  {
    role: "Publicity Chairs",
    members: [
      { name: "Dr. Deepak Sahu", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Bablu Singh", affiliation: "PDEU, Gandhinagar" },
      {
        name: "Mr. Ankit Dave",
        affiliation: "IEEE Gujarat Section / Young Professionals",
      },
      {
        name: "Mr. Giriraj Shah",
        affiliation: "IEEE Gujarat Section / Young Professionals",
      },
    ],
  },
  {
    role: "Local Arrangements and Registration Chairs",
    members: [
      { name: "Dr. Prashant Dwivedi", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Kirtikant Sharma", affiliation: "PDEU, Gandhinagar" },
    ],
  },
];

const tpcData: CommitteeRole[] = [
  {
    role: "TPC Chairs",
    members: [
      { name: "Dr. Kamal Garg", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Jagannath Malik", affiliation: "IIT Patna" },
      { name: "Dr. Sameer S M", affiliation: "NIT Calicut" },
      { name: "Dr. Ashutosh Dutta", affiliation: "John Hopkins University, USA" },
      { name: "Dr. Mita Paunwala", affiliation: "IEEE Nominee" },
    ],
  },
  {
    role: "TPC Secretaries",
    members: [
      { name: "Dr. Santosh Sathapathy", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Vivek Pandit", affiliation: "PDEU, Gandhinagar" },
    ],
  },
  {
    role: "Track Chairs — T1: AI, Data Science and Signal Processing",
    members: [
      { name: "Dr. Rashmi Bhattad", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Surya Prakash Agnihotri", affiliation: "IIT Indore" },
      {
        name: "Prof. Deepu Rajan",
        affiliation: "Nanyang Technological University (NTU), Singapore",
      },
    ],
  },
  {
    role: "Track Chairs — T2: 6G and Beyond: Networks, Wireless Systems and Antennas",
    members: [
      { name: "Dr. Pradip Barik", affiliation: "PDEU, Gandhinagar" },
      { name: "Dr. Deborsi Basu", affiliation: "Ericsson Research, India" },
      {
        name: "Prof. Karu Esselle",
        affiliation: "University of Technology Sydney, Australia",
      },
    ],
  },
  {
    role: "Track Chairs — T3: Cybersecurity, Cloud and Edge Computing",
    members: [
      { name: "Dr. Deepak Sharma", affiliation: "PDEU, Gandhinagar" },
      {
        name: "Dr. Keshav Kaushik",
        affiliation:
          "Center for Cyber Security and Cryptology, Sharda University, Greater Noida",
      },
      {
        name: "Prof. Rajkumar Buyya",
        affiliation: "University of Melbourne, Australia",
      },
    ],
  },
  {
    role: "Track Chairs — T4: VLSI, Embedded Systems and RF Hardware",
    members: [
      { name: "Dr. Abhishek Joshi", affiliation: "PDEU, Gandhinagar" },
      {
        name: "Dr. Paritosh Peshwe",
        affiliation:
          "Head & Assistant Professor, Department of ECE, IIIT Nagpur",
      },
      {
        name: "Prof. Saraju P. Mohanty",
        affiliation: "University of North Texas, USA",
      },
    ],
  },
  {
    role: "Track Chairs — T5: ICT for Energy, Sustainability and Society",
    members: [
      { name: "Dr. Anand Singh", affiliation: "PDEU, Gandhinagar" },
      {
        name: "Dr. Manish Kumar",
        affiliation: "Associate Professor, DAU Gandhinagar",
      },
      {
        name: "Prof. Akshay Kumar Rathore",
        affiliation: "National University of Singapore (NUS)",
      },
    ],
  },
];

const advisoryData: CommitteeRole[] = [
  {
    role: "National Advisory Committee",
    members: [
      {
        name: "Dr. Kumar Sivarajan",
        affiliation: "Tejas Networks; Vice Chairman, Bharat 6G Alliance",
      },
      {
        name: "Shri Rajesh Kumar Pathak",
        affiliation: "Director General, Bharat 6G Alliance",
      },
      {
        name: "Prof. Jamil Akhtar",
        affiliation:
          "Ex-Director, Chief Scientist, & Professor - AcSIR from CEERI, Pilani",
      },
      {
        name: "Sh. Alok Kumar Singhal",
        affiliation: "Scientist-SG, SAC-ISRO, Ahmedabad",
      },
      {
        name: "Prof. Rajat Moona",
        affiliation: "Director, IIT Gandhinagar",
      },
      {
        name: "Prof. R. David Koilpillai",
        affiliation: "IIT Madras; Chairman, Bharat 6G Alliance",
      },
      {
        name: "Prof. Amit Bhatt",
        affiliation: "DG, Nirma University",
      },
      {
        name: "Dr. A. Chockalingam",
        affiliation: "Professor, IISc Bangalore",
      },
    ],
  },
  {
    role: "International Advisory Committee",
    members: [
      {
        name: "Prof. Matti Latva-aho",
        affiliation: "6G Flagship, University of Oulu, Finland",
      },
      {
        name: "Prof. Mehdi Bennis",
        affiliation: "University of Oulu, Finland",
      },
      {
        name: "Prof. Akshya Kumar Swain",
        affiliation: "University of Auckland, New Zealand",
      },
      {
        name: "Prof. R. T. Naayagi",
        affiliation: "Newcastle University in Singapore",
      },
      {
        name: "Prof. Heng Tung Hsu",
        affiliation: "National Yang Ming Chiao Tung University, Taiwan",
      },
      {
        name: "Prof. Hsi Tsheng Chou",
        affiliation: "National Taipei University, Taiwan",
      },
      {
        name: "Prof. Emil Björnson",
        affiliation: "KTH Royal Institute of Technology, Sweden",
      },
      {
        name: "Prof. Erik G. Larsson",
        affiliation: "Linköping University, Sweden",
      },
      {
        name: "Dr. Paul Whatmough",
        affiliation: "Qualcomm",
      },
    ],
  },
];

const supportData = [
  {
    role: "Organized by",
    organization:
      "Department of Information and Communication Technology, School of Technology",
    note: "Pandit Deendayal Energy University (PDEU), Gandhinagar",
  },
  {
    role: "Technical Co-sponsor",
    organization: "IEEE Gujarat Section",
    note: "Official Technical Co-Sponsor",
  },
  {
    role: "Industry Partners / Sponsors",
    organization: "Leading 6G, Telecommunication & Cloud Partners",
    note: "To be announced as sponsorship confirmations are finalized",
  },
  {
    role: "Student Volunteers",
    organization: "IEEE PDEU Student Branch & Volunteer Teams",
    note: "Coordinated by the Local Arrangements Chair",
  },
];

function RoleCard({ role, members }: { role: string; members: Member[] }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all">
      <h3 className="font-bold text-navy text-base mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-teal-DEFAULT" />
        {role}
      </h3>
      <ul className="space-y-3">
        {members.map((m, i) => (
          <li key={i} className="text-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-teal-DEFAULT/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <User size={15} className="text-teal-DEFAULT" />
            </div>
            <div>
              <p className="font-semibold text-navy leading-snug">{m.name}</p>
              <p className="text-xs text-slate-light leading-snug mt-0.5">
                {m.affiliation}
              </p>
            </div>
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
            <Badge
              variant="outline"
              className="border-teal-accent text-teal-accent mb-4"
            >
              IC6GST 2027
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              <span className="gradient-text">Committees</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Meet the distinguished leadership, organizing committees, technical program chairs, and advisory members shaping IC6GST 2027.
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
                <TabsTrigger
                  value="leadership"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg"
                >
                  <Star size={16} />
                  Leadership
                </TabsTrigger>
                <TabsTrigger
                  value="organizing"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg"
                >
                  <Users size={16} />
                  Organizing
                </TabsTrigger>
                <TabsTrigger
                  value="tpc"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg"
                >
                  <BookOpen size={16} />
                  TPC
                </TabsTrigger>
                <TabsTrigger
                  value="advisory"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg"
                >
                  <Award size={16} />
                  Advisory
                </TabsTrigger>
                <TabsTrigger
                  value="support"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg"
                >
                  <Shield size={16} />
                  Support
                </TabsTrigger>
              </TabsList>

              {/* Leadership Tab */}
              <TabsContent value="leadership">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {leadershipData.map((roleGroup) => (
                    <RoleCard
                      key={roleGroup.role}
                      role={roleGroup.role}
                      members={roleGroup.members}
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Organizing Tab */}
              <TabsContent value="organizing">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {organizingData.map((roleGroup) => (
                    <RoleCard
                      key={roleGroup.role}
                      role={roleGroup.role}
                      members={roleGroup.members}
                    />
                  ))}
                </div>
              </TabsContent>

              {/* TPC Tab */}
              <TabsContent value="tpc">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tpcData.map((roleGroup) => (
                    <RoleCard
                      key={roleGroup.role}
                      role={roleGroup.role}
                      members={roleGroup.members}
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Advisory Tab */}
              <TabsContent value="advisory">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advisoryData.map((roleGroup) => (
                    <RoleCard
                      key={roleGroup.role}
                      role={roleGroup.role}
                      members={roleGroup.members}
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Support Tab */}
              <TabsContent value="support">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {supportData.map((item, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <Badge className="bg-teal-DEFAULT text-white mb-3">
                        {item.role}
                      </Badge>
                      <h3 className="font-bold text-navy text-lg mb-2">
                        {item.organization}
                      </h3>
                      {item.note && (
                        <p className="text-sm text-slate-light">{item.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
