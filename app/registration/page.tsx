"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import FeeTable from "@/components/FeeTable";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle2, XCircle, Info, Wallet, Globe, Gift } from "lucide-react";

export default function RegistrationPage() {
  const [isUSD, setIsUSD] = useState(false);

  return (
    <div>
      {/* Header */}
      <section className="bg-navy-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div>
            <Badge variant="outline" className="border-teal-accent text-teal-accent mb-4">Registrations Open</Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Registration <span className="gradient-text">Fees</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Select your category and register to attend IC6GST 2027 at PDEU, Gandhinagar.
            </p>
          </div>
        </div>
      </section>

      {/* Currency Toggle */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            {/* Toggle */}
            <div className="flex items-center justify-center gap-6 mb-10 p-6 rounded-2xl bg-background border border-gray-100">
              <div className={`flex items-center gap-2 font-bold text-lg transition-colors ${
                !isUSD ? "text-teal-DEFAULT" : "text-slate-light"
              }`}>
                <span className="text-2xl">🇮🇳</span>
                <span>Indian (INR ₹)</span>
              </div>
              <Switch
                id="currency-toggle"
                checked={isUSD}
                onCheckedChange={setIsUSD}
                className="scale-125"
              />
              <div className={`flex items-center gap-2 font-bold text-lg transition-colors ${
                isUSD ? "text-teal-DEFAULT" : "text-slate-light"
              }`}>
                <span className="text-2xl">🌐</span>
                <span>Foreign (USD $)</span>
              </div>
            </div>

            {/* Active currency badge */}
            <div className="flex justify-center mb-8">
              <Badge className="text-base px-6 py-2">
                Showing fees in: {isUSD ? "USD ($)" : "INR (₹)"}
              </Badge>
            </div>

            {/* Fee Table */}
            <FeeTable currency={isUSD ? "USD" : "INR"} />
          </AnimatedSection>

          {/* IEEE member note */}
          <AnimatedSection delay={0.1}>
            <div className="mt-8 p-5 rounded-xl bg-teal-DEFAULT/5 border border-teal-DEFAULT/20 flex items-start gap-3">
              <Info size={20} className="text-teal-DEFAULT mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-body">
                <strong className="text-teal-DEFAULT">IEEE Members</strong> receive a discounted registration fee. Please ensure your IEEE membership is valid at the time of registration. Membership number will be required.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Registration Notes */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-navy mb-4">Registration Notes</h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={0.05}>
              <div className="p-6 rounded-2xl border border-gray-100 bg-white h-full">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <Wallet size={20} className="text-teal-DEFAULT" /> Payment & Fees
                </h3>
                <ul className="space-y-3">
                  {[
                    "Early bird rates apply until July 31, 2027.",
                    "Final registration deadline with 10% extra fee is August 25, 2027.",
                    "At least one author per accepted paper must register at full author rate.",
                    "Authors can present at most 2 papers per registration.",
                    "Payment must be completed in full to confirm registration.",
                  ].map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-body">
                      <CheckCircle2 size={16} className="text-teal-DEFAULT mt-0.5 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-2xl border border-gray-100 bg-white h-full">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <XCircle size={20} className="text-red-500" /> No-Show Policy
                </h3>
                <ul className="space-y-3">
                  {[
                    "Registration fees are non-refundable under any circumstances.",
                    "Papers not presented at the conference will be excluded from IEEE Xplore.",
                    "In case of an emergency, proxy presentations may be arranged with prior written approval.",
                    "No-shows will be reported to IEEE for their records.",
                  ].map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="p-6 rounded-2xl border border-gray-100 bg-white h-full">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-teal-DEFAULT" /> Receipts & Invoices
                </h3>
                <ul className="space-y-3">
                  {[
                    "Official receipt will be issued within 5 working days of payment.",
                    "GST invoice available for Indian participants upon request.",
                    "Foreign participants will receive a USD receipt for reimbursement purposes.",
                  ].map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-body">
                      <CheckCircle2 size={16} className="text-teal-DEFAULT mt-0.5 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-2xl border border-teal-DEFAULT/20 bg-teal-DEFAULT/5 h-full">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <Gift size={20} className="text-teal-DEFAULT" /> What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Conference kit (badge, bag, stationery, proceedings USB)",
                    "Access to all technical sessions and keynote lectures",
                    "High tea and lunch on both conference days",
                    "Conference Gala Dinner (Oct 2, 2027)",
                    "Participation certificate",
                    "Exclusive networking sessions with industry leaders",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-body">
                      <span className="text-teal-DEFAULT font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
