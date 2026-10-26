"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, User, Send, Star, Award, Handshake } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const sponsorTiers = [
    { tier: "Platinum", icon: Star, color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-700/50", perks: "Premium visibility, keynote slot, 10 registrations" },
    { tier: "Gold", icon: Award, color: "text-yellow-400", bg: "bg-yellow-900/30", border: "border-yellow-700/50", perks: "Prominent logo, 6 registrations, exhibition booth" },
    { tier: "Silver", icon: Star, color: "text-gray-300", bg: "bg-gray-800/50", border: "border-gray-600/50", perks: "Logo in proceedings, 4 registrations" },
    { tier: "Bronze", icon: Star, color: "text-orange-400", bg: "bg-orange-900/30", border: "border-orange-700/50", perks: "Website mention, 2 registrations" },
    { tier: "6G Session Partner", icon: Handshake, color: "text-teal-400", bg: "bg-teal-900/30", border: "border-teal-700/50", perks: "Co-host 6G Industry Session, branding" },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-navy-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <Badge variant="outline" className="border-teal-accent text-teal-accent mb-4">Get in Touch</Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Reach out for queries about submissions, registration, sponsorship, or any general inquiries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Contact Info */}
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-black text-navy mb-8">Contact Information</h2>

              {/* Primary Contact */}
              <div className="p-8 rounded-3xl border border-teal-DEFAULT/20 bg-gradient-to-br from-background to-white shadow-lg mb-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-teal-DEFAULT/10 flex items-center justify-center flex-shrink-0">
                    <User size={26} className="text-teal-DEFAULT" />
                  </div>
                  <div>
                    <Badge className="mb-3 text-xs">Organizing Chair</Badge>
                    <h3 className="font-bold text-navy text-xl mb-1">Dr. Arpan Desai</h3>
                    <p className="text-slate-light text-sm mb-4">Assistant Professor / Organising Chair<br />Department of ICT, PDEU</p>

                    <div className="space-y-3">
                      <a
                        href="mailto:ic6gst2027@pdpu.ac.in"
                        className="flex items-center gap-3 text-sm text-slate-body hover:text-teal-DEFAULT transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-teal-DEFAULT/10 flex items-center justify-center group-hover:bg-teal-DEFAULT group-hover:text-white transition-all">
                          <Mail size={14} className="text-teal-DEFAULT group-hover:text-white" />
                        </span>
                        ic6gst2027@pdpu.ac.in
                      </a>
                      <a
                        href="mailto:ic6gst2027@gmail.com"
                        className="flex items-center gap-3 text-sm text-slate-body hover:text-teal-DEFAULT transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-teal-DEFAULT/10 flex items-center justify-center group-hover:bg-teal-DEFAULT group-hover:text-white transition-all">
                          <Mail size={14} className="text-teal-DEFAULT group-hover:text-white" />
                        </span>
                        ic6gst2027@gmail.com
                      </a>
                      <a
                        href="tel:+919909980477"
                        className="flex items-center gap-3 text-sm text-slate-body hover:text-teal-DEFAULT transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-teal-DEFAULT/10 flex items-center justify-center group-hover:bg-teal-DEFAULT group-hover:text-white transition-all">
                          <Phone size={14} className="text-teal-DEFAULT group-hover:text-white" />
                        </span>
                        +91-9909980477
                      </a>
                      <div className="flex items-start gap-3 text-sm text-slate-body">
                        <span className="w-8 h-8 rounded-lg bg-teal-DEFAULT/10 flex items-center justify-center flex-shrink-0">
                          <MapPin size={14} className="text-teal-DEFAULT" />
                        </span>
                        <span>Dept. of ICT, PDEU<br />Raisan, Gandhinagar - 382007<br />Gujarat, India</span>
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
                  className="p-4 rounded-xl border border-gray-100 hover:border-teal-DEFAULT/30 hover:shadow-md transition-all text-center group"
                >
                  <p className="text-2xl mb-2">📝</p>
                  <p className="font-semibold text-navy text-sm group-hover:text-teal-DEFAULT transition-colors">Submit Paper</p>
                  <p className="text-xs text-slate-light">via CMT</p>
                </a>
                <a
                  href="mailto:ic6gst2027@pdpu.ac.in"
                  className="p-4 rounded-xl border border-gray-100 hover:border-teal-DEFAULT/30 hover:shadow-md transition-all text-center group"
                >
                  <p className="text-2xl mb-2">📧</p>
                  <p className="font-semibold text-navy text-sm group-hover:text-teal-DEFAULT transition-colors">Email Us</p>
                  <p className="text-xs text-slate-light">General Queries</p>
                </a>
              </div>
            </AnimatedSection>

            {/* Right: Contact Form */}
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-black text-navy mb-8">Send a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-teal-DEFAULT/30 bg-teal-DEFAULT/5 text-center h-80">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="font-bold text-navy text-2xl mb-3">Message Sent!</h3>
                  <p className="text-slate-light leading-relaxed">
                    Thank you for reaching out. We&apos;ll get back to you within 2–3 working days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-teal-DEFAULT text-white font-semibold rounded-full hover:bg-teal-600 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8 rounded-3xl border border-gray-100 bg-background shadow-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-navy mb-2">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-navy mb-2">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-navy mb-2">Subject *</label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g., Paper Submission Query"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-navy mb-2">Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your query in detail..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-DEFAULT focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-teal-DEFAULT text-white font-bold rounded-xl hover:bg-teal-600 transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-base"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} /> Send Message
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
              <span className="text-teal-accent font-semibold uppercase tracking-widest text-sm">Partner with Us</span>
              <h2 className="text-4xl font-black text-white mt-3 mb-4">Sponsorship Opportunities</h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-300 max-w-2xl mx-auto">
                Showcase your brand to hundreds of engineers, researchers, and industry leaders attending IC6GST 2027.
                Become a valued sponsor and be part of shaping the future of 6G and intelligent computing.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {sponsorTiers.map((tier, i) => (
              <AnimatedSection key={tier.tier} delay={i * 0.08}>
                <div className={`p-6 rounded-2xl border ${tier.bg} ${tier.border} hover:scale-105 transition-transform duration-300 text-center h-full flex flex-col`}>
                  <div className="mb-3">
                    <tier.icon size={28} className={`mx-auto ${tier.color}`} />
                  </div>
                  <h3 className={`font-bold text-lg mb-3 ${tier.color}`}>{tier.tier}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed flex-1">{tier.perks}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center p-8 rounded-3xl bg-white/5 border border-teal-DEFAULT/30">
              <p className="text-white text-lg font-semibold mb-2">Interested in sponsoring IC6GST 2027?</p>
              <p className="text-gray-300 mb-6">Download our sponsorship brochure or contact us directly.</p>
              <a
                href="mailto:ic6gst2027@pdpu.ac.in?subject=Sponsorship Inquiry - IC6GST 2027"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-DEFAULT text-white font-bold rounded-full hover:bg-teal-600 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <Mail size={18} /> Contact for Sponsorship
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
