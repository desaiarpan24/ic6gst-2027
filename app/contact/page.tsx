"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Mail,
  MapPin,
  Send,
  Star,
  Award,
  Handshake,
  Building2,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const sponsorTiers = [
    {
      tier: "Platinum Sponsor",
      icon: Star,
      color: "text-purple-400",
      bg: "bg-purple-900/30",
      border: "border-purple-700/50",
      perks:
        "Prime keynote presentation, prominent logo across all conference materials & backdrop, 10 complimentary registrations, prime exhibition booth.",
    },
    {
      tier: "Gold Sponsor",
      icon: Award,
      color: "text-yellow-400",
      bg: "bg-yellow-900/30",
      border: "border-yellow-700/50",
      perks:
        "Prominent branding on conference kit and website, 6 complimentary registrations, dedicated exhibition booth space.",
    },
    {
      tier: "Silver Sponsor",
      icon: Star,
      color: "text-gray-300",
      bg: "bg-gray-800/50",
      border: "border-gray-600/50",
      perks:
        "Logo in conference proceedings and website, 4 complimentary delegate registrations.",
    },
    {
      tier: "Bronze Sponsor",
      icon: Star,
      color: "text-orange-400",
      bg: "bg-orange-900/30",
      border: "border-orange-700/50",
      perks:
        "Logo on official website and banner acknowledgments, 2 complimentary registrations.",
    },
    {
      tier: "6G Session Partner",
      icon: Handshake,
      color: "text-teal-400",
      bg: "bg-teal-900/30",
      border: "border-teal-700/50",
      perks:
        "Exclusive co-hosting privileges for the 6G Bharat Industry Session, panel speaker invitation, executive networking.",
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

      {/* Contact Cards & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-black text-navy mb-8">
                Conference Secretariat
              </h2>

              {/* Primary Contact Card — without personal chair name or phone */}
              <div className="p-8 rounded-3xl border border-teal-DEFAULT/30 bg-gradient-to-br from-background via-white to-teal-DEFAULT/5 shadow-lg mb-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-teal-DEFAULT/15 flex items-center justify-center flex-shrink-0">
                    <Building2 size={26} className="text-teal-DEFAULT" />
                  </div>
                  <div>
                    <Badge className="mb-3 text-xs bg-teal-DEFAULT text-white">
                      Conference Organizing Secretariat
                    </Badge>
                    <h3 className="font-black text-navy text-xl sm:text-2xl mb-1">
                      IC6GST 2027 Secretariat
                    </h3>
                    <p className="text-slate-light text-sm mb-5 leading-relaxed">
                      Department of Information and Communication Technology (ICT)<br />
                      School of Technology, Pandit Deendayal Energy University (PDEU)
                    </p>

                    <div className="space-y-4">
                      {/* Updated Email */}
                      <a
                        href="mailto:ic6gst@gmail.com"
                        className="flex items-center gap-3 text-sm font-semibold text-slate-body hover:text-teal-DEFAULT transition-colors group"
                      >
                        <span className="w-10 h-10 rounded-xl bg-teal-DEFAULT/10 flex items-center justify-center group-hover:bg-teal-DEFAULT group-hover:text-white transition-all flex-shrink-0">
                          <Mail size={16} className="text-teal-DEFAULT group-hover:text-white" />
                        </span>
                        <div>
                          <p className="text-xs text-slate-light font-normal">Official Email</p>
                          <p className="text-teal-DEFAULT font-bold text-base">ic6gst@gmail.com</p>
                        </div>
                      </a>

                      {/* Location */}
                      <div className="flex items-start gap-3 text-sm text-slate-body">
                        <span className="w-10 h-10 rounded-xl bg-teal-DEFAULT/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin size={16} className="text-teal-DEFAULT" />
                        </span>
                        <div>
                          <p className="text-xs text-slate-light">Conference Venue Address</p>
                          <p className="font-medium text-navy">
                            Pandit Deendayal Energy University, Knowledge Corridor,
                            Raisan, Gandhinagar — 382007, Gujarat, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://cmt3.research.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl border border-gray-100 hover:border-teal-DEFAULT/30 hover:shadow-md transition-all text-center group bg-white"
                >
                  <p className="text-3xl mb-2">💻</p>
                  <p className="font-bold text-navy text-sm group-hover:text-teal-DEFAULT transition-colors">
                    CMT Portal
                  </p>
                  <p className="text-xs text-slate-light mt-0.5">Submit Paper</p>
                </a>
                <a
                  href="mailto:ic6gst@gmail.com?subject=IC6GST 2027 Query"
                  className="p-5 rounded-2xl border border-gray-100 hover:border-teal-DEFAULT/30 hover:shadow-md transition-all text-center group bg-white"
                >
                  <p className="text-3xl mb-2">✉️</p>
                  <p className="font-bold text-navy text-sm group-hover:text-teal-DEFAULT transition-colors">
                    Email Inquiry
                  </p>
                  <p className="text-xs text-slate-light mt-0.5">ic6gst@gmail.com</p>
                </a>
              </div>
            </AnimatedSection>

            {/* Right: Contact Form */}
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-black text-navy mb-8">Send a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-teal-DEFAULT/30 bg-teal-DEFAULT/5 text-center min-h-[380px]">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="font-bold text-navy text-2xl mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-body max-w-md leading-relaxed mb-6">
                    Thank you for reaching out to IC6GST 2027. The organizing team will respond to your inquiry at the earliest.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-teal-DEFAULT text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8 rounded-3xl border border-gray-100 bg-background shadow-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Dr. / Prof. / Full Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@institution.edu"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      placeholder="Paper Submission, Registration, Sponsorship..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Write your query or message here..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-teal-DEFAULT text-white font-bold rounded-xl hover:bg-teal-600 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-teal-DEFAULT/20 disabled:opacity-70 text-base"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
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
                  <a
                    href="mailto:ic6gst@gmail.com?subject=Sponsorship Inquiry - IC6GST 2027"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-accent hover:underline mt-2"
                  >
                    Inquire for Package <ExternalLink size={12} />
                  </a>
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
