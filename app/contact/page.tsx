import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Mail,
  MapPin,
  Star,
  Award,
  Handshake,
  Building2,
  ExternalLink,
  Info,
} from "lucide-react";

export default function ContactPage() {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsor",
      icon: Star,
      color: "text-purple-400",
      bg: "bg-purple-900/30",
      border: "border-purple-700/50",
      perks:
        "₹2,00,000 — Prime keynote presentation, prominent logo across all conference materials & backdrop, 5 complimentary registrations, prime exhibition booth.",
    },
    {
      tier: "6G Session Partner",
      icon: Handshake,
      color: "text-teal-400",
      bg: "bg-teal-900/30",
      border: "border-teal-700/50",
      perks:
        "₹1,50,000 — Exclusive co-hosting privileges for the 6G Bharat Industry Session, panel speaker invitation, 4 complimentary registrations, executive networking.",
    },
    {
      tier: "Gold Sponsor",
      icon: Award,
      color: "text-yellow-400",
      bg: "bg-yellow-900/30",
      border: "border-yellow-700/50",
      perks:
        "₹1,00,000 — Prominent branding on conference kit and website, 3 complimentary registrations, dedicated exhibition booth space.",
    },
    {
      tier: "Silver Sponsor",
      icon: Star,
      color: "text-gray-300",
      bg: "bg-gray-800/50",
      border: "border-gray-600/50",
      perks:
        "₹50,000 — Logo in conference proceedings and website, 2 complimentary delegate registrations.",
    },
    {
      tier: "Bronze Sponsor",
      icon: Star,
      color: "text-orange-400",
      bg: "bg-orange-900/30",
      border: "border-orange-700/50",
      perks:
        "₹25,000 — Logo on official website and banner acknowledgments, 1 complimentary registration.",
    },
  ];

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
              Get in Touch
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Reach out for inquiries regarding paper submissions, registrations, sponsorships, or general conference coordination.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Conference Secretariat & Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-10">
              <Badge className="mb-3 text-xs bg-teal-DEFAULT text-white">
                Conference Organizing Secretariat
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-navy">
                IC6GST 2027 Secretariat
              </h2>
              <div className="section-divider mx-auto mt-4" />
            </div>

            {/* Main Secretariat Card */}
            <div className="p-8 sm:p-10 rounded-3xl border border-teal-DEFAULT/30 bg-gradient-to-br from-background via-white to-teal-DEFAULT/5 shadow-lg mb-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-teal-DEFAULT/15 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Building2 size={32} className="text-teal-DEFAULT" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="font-black text-navy text-xl sm:text-2xl mb-2">
                    Department of Information and Communication Technology (ICT)
                  </h3>
                  <p className="text-slate-light text-base leading-relaxed mb-4">
                    School of Technology, Pandit Deendayal Energy University (PDEU)
                  </p>

                  <div className="mb-6">
                    <a
                      href="https://pdeu.ac.in/school-of-technology/academics/information-and-communication-technology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-teal-DEFAULT/10 hover:bg-teal-DEFAULT text-teal-DEFAULT hover:text-white font-semibold text-xs sm:text-sm transition-all border border-teal-DEFAULT/30 shadow-sm"
                    >
                      <span>Visit Department of ICT Website</span>
                      <ExternalLink size={14} className="flex-shrink-0" />
                    </a>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-gray-100">
                    {/* Official Inquiry Email */}
                    <a
                      href="mailto:ic6gst@gmail.com"
                      className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-gray-100 hover:border-teal-DEFAULT/40 hover:shadow-sm transition-all group"
                    >
                      <span className="w-11 h-11 rounded-xl bg-teal-DEFAULT/10 flex items-center justify-center group-hover:bg-teal-DEFAULT transition-all flex-shrink-0">
                        <Mail size={18} className="text-teal-DEFAULT group-hover:text-white" />
                      </span>
                      <div className="flex-1">
                        <p className="text-xs text-slate-light font-medium">Official Inquiry Email</p>
                        <p className="text-teal-DEFAULT font-bold text-base sm:text-lg">ic6gst@gmail.com</p>
                      </div>
                      <span className="text-xs font-semibold text-teal-DEFAULT hidden sm:inline-flex items-center gap-1 group-hover:underline pr-2">
                        Send Mail <ExternalLink size={12} />
                      </span>
                    </a>

                    {/* Conference Venue Address */}
                    <div className="flex items-start gap-4 p-3 rounded-2xl bg-white border border-gray-100">
                      <span className="w-11 h-11 rounded-xl bg-teal-DEFAULT/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin size={18} className="text-teal-DEFAULT" />
                      </span>
                      <div>
                        <p className="text-xs text-slate-light font-medium">Conference Venue Address</p>
                        <p className="font-semibold text-navy text-sm sm:text-base leading-relaxed mt-0.5">
                          Pandit Deendayal Energy University, Knowledge Corridor,
                          Raisan, Gandhinagar – 382 426, Gujarat, India
                        </p>
                      </div>
                    </div>

                    {/* Spam Folder Notice */}
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
                      <Info size={18} className="text-amber-700 mt-0.5 flex-shrink-0" />
                      <p className="leading-relaxed">
                        <strong>Note:</strong> Please make sure to check your <strong>spam / junk folder</strong> for email replies from the organizing committee (<code>ic6gst@gmail.com</code>).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://app.confconnects.com/conference/nbCZz3fX1pFSgGiOY9NZ/mypapers"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-gray-100 hover:border-teal-DEFAULT/30 hover:shadow-md transition-all text-center group bg-white"
              >
                <p className="text-3xl mb-2">💻</p>
                <p className="font-bold text-navy text-base group-hover:text-teal-DEFAULT transition-colors">
                  ConfConnects Portal
                </p>
                <p className="text-xs text-slate-light mt-1">Submit & Manage Papers</p>
              </a>
              <a
                href="mailto:ic6gst@gmail.com?subject=IC6GST 2027 Query"
                className="p-6 rounded-2xl border border-gray-100 hover:border-teal-DEFAULT/30 hover:shadow-md transition-all text-center group bg-white"
              >
                <p className="text-3xl mb-2">✉️</p>
                <p className="font-bold text-navy text-base group-hover:text-teal-DEFAULT transition-colors">
                  Direct Email Inquiry
                </p>
                <p className="text-xs text-slate-light mt-1">ic6gst@gmail.com</p>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sponsorship Callout */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-accent font-semibold uppercase tracking-widest text-sm">
                Partnership Opportunities
              </span>
              <h2 className="text-4xl font-black text-white mt-3 mb-4">
                Sponsor IC6GST 2027
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-300 max-w-2xl mx-auto text-base">
                Showcase your organization&apos;s leadership in AI, 6G communication, and sustainable technologies before leading international academics and industry decision-makers.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sponsorTiers.map((s) => (
              <AnimatedSection key={s.tier}>
                <div
                  className={`p-6 rounded-2xl border ${s.border} ${s.bg} backdrop-blur h-full flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <s.icon size={20} className={s.color} />
                      <h3 className="font-bold text-white text-lg">{s.tier}</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {s.perks}
                    </p>
                  </div>
                  <div>
                    <a
                      href={`mailto:ic6gst@gmail.com?subject=${encodeURIComponent(`Sponsorship Inquiry - ${s.tier} - IC6GST 2027`)}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-DEFAULT/20 hover:bg-teal-DEFAULT text-teal-accent hover:text-navy-dark font-semibold text-xs transition-all border border-teal-DEFAULT/40 w-fit mt-3 group shadow-sm"
                    >
                      <span>Inquire for Packages</span>
                      <Mail size={13} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center p-8 rounded-3xl bg-white/5 border border-teal-DEFAULT/30 max-w-2xl mx-auto">
              <p className="text-white text-lg font-semibold mb-2">
                Interested in Custom Sponsorship or 6G Session Partnership?
              </p>
              <p className="text-gray-300 text-sm mb-6">
                Connect with our sponsorship chairs directly via email.
              </p>
              <a
                href="mailto:ic6gst@gmail.com?subject=Custom Sponsorship Inquiry - IC6GST 2027"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-DEFAULT text-white font-bold rounded-full hover:bg-teal-600 transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm"
              >
                <Mail size={16} /> Contact for Sponsorship (ic6gst@gmail.com)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
