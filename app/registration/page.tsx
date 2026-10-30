"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import FeeTable from "@/components/FeeTable";
import AnimatedSection from "@/components/AnimatedSection";
import {
  CheckCircle2,
  XCircle,
  Info,
  Wallet,
  Globe,
  Gift,
  Clock,
  Sparkles,
} from "lucide-react";

export default function RegistrationPage() {
  const [isUSD, setIsUSD] = useState(false);

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
              Registrations Open
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Registration <span className="gradient-text">Fees</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Select your category and register to attend IC6GST 2027 at PDEU, Gandhinagar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Registration Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Early Bird 10-Day Policy Instruction Card (No Counter) */}
          <AnimatedSection>
            <div className="mb-8 p-6 sm:p-7 rounded-3xl bg-navy text-white border border-teal-DEFAULT/30 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-DEFAULT/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles size={24} className="text-teal-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-teal-DEFAULT text-white text-xs font-bold uppercase tracking-wider">
                      Early Bird Registration
                    </span>
                    <span className="text-xs text-teal-accent font-semibold">
                      10-Day Window
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5">
                    Early Bird Policy &amp; Fee Structure
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Early bird registration is valid for <strong>10 days</strong> from the
                    opening of registration. After 10 days, a <strong>10% extra fee surcharge</strong> applies
                    across all registration categories as shown in the schedule below.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Currency Toggle */}
          <AnimatedSection>
            <div className="flex items-center justify-center gap-6 mb-8 p-5 rounded-2xl bg-background border border-gray-100">
              <div
                className={`flex items-center gap-2 font-bold text-base sm:text-lg transition-colors ${
                  !isUSD ? "text-teal-DEFAULT" : "text-slate-light"
                }`}
              >
                <span className="text-2xl">🇮🇳</span>
                <span>Indian (INR ₹)</span>
              </div>
              <Switch
                id="currency-toggle"
                checked={isUSD}
                onCheckedChange={setIsUSD}
                className="scale-125"
              />
              <div
                className={`flex items-center gap-2 font-bold text-base sm:text-lg transition-colors ${
                  isUSD ? "text-teal-DEFAULT" : "text-slate-light"
                }`}
              >
                <span className="text-2xl">🌐</span>
                <span>Foreign (USD $)</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4 px-1">
              <Badge className="text-sm px-4 py-1.5">
                Showing fees in: {isUSD ? "USD ($)" : "INR (₹)"}
              </Badge>
              <span className="text-xs text-slate-light font-medium hidden sm:inline">
                Both Early Bird &amp; Final (+10%) schedules listed below
              </span>
            </div>

            {/* Fee Table */}
            <FeeTable currency={isUSD ? "USD" : "INR"} />

            {/* Note under fee table */}
            <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-slate-body text-sm flex items-start gap-3 shadow-xs">
              <Info size={18} className="text-amber-700 mt-0.5 flex-shrink-0" />
              <p className="text-amber-950 font-medium leading-relaxed">
                Fees are exclusive of 18% GST. Authors from outside India pay in USD. At least one author per accepted paper must register by 31 July 2027.
              </p>
            </div>
          </AnimatedSection>

          {/* IEEE member note */}
          <AnimatedSection delay={0.1}>
            <div className="mt-6 p-5 rounded-xl bg-teal-DEFAULT/5 border border-teal-DEFAULT/20 flex items-start gap-3">
              <Info size={20} className="text-teal-DEFAULT mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-body">
                <strong className="text-teal-DEFAULT">IEEE Members</strong> receive a
                discounted registration fee across all categories. Please ensure your
                IEEE membership is valid at the time of registration. A valid IEEE
                Membership Number is required during form submission.
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
              <h2 className="text-3xl font-black text-navy mb-4">
                Registration Notes
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Payment & Fees */}
            <AnimatedSection delay={0.05}>
              <div className="p-6 rounded-2xl border border-gray-100 bg-white h-full">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <Wallet size={20} className="text-teal-DEFAULT" /> Payment &amp; Fees
                </h3>
                <ul className="space-y-3">
                  {[
                    "Early bird registration is valid for 10 days.",
                    "After 10 days, a 10% extra fee surcharge applies on all categories.",
                    "At least one author per accepted paper must register at full author rate.",
                    "Authors can present at most 2 papers per registration.",
                    "Students can present only 1 paper per registration.",
                    "Payment must be completed in full to confirm registration.",
                  ].map((note, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-body"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-teal-DEFAULT mt-0.5 flex-shrink-0"
                      />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* No-Show Policy */}
            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-2xl border border-gray-100 bg-white h-full">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <XCircle size={20} className="text-red-500" /> No-Show Policy
                </h3>
                <ul className="space-y-3">
                  {[
                    "Registration fees are non-refundable under any circumstances.",
                    "Papers not presented at the conference will be excluded from IEEE Xplore.",
                    "Accepted papers will be submitted for possible inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.",
                    "In case of an emergency, proxy presentations may be arranged with prior written approval from General Chairs.",
                    "No-shows will be reported to IEEE for their records.",
                  ].map((note, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-body"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Receipts & Invoices */}
            <AnimatedSection delay={0.15}>
              <div className="p-6 rounded-2xl border border-gray-100 bg-white h-full">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-teal-DEFAULT" /> Receipts &amp;
                  Invoices
                </h3>
                <ul className="space-y-3">
                  {[
                    "Official receipt will be issued within 5 working days of payment confirmation.",
                    "GST invoice available for Indian participants and institutions upon request.",
                    "Foreign participants will receive an official USD receipt for institutional reimbursement purposes.",
                  ].map((note, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-body"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-teal-DEFAULT mt-0.5 flex-shrink-0"
                      />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* What's Included */}
            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-2xl border border-teal-DEFAULT/20 bg-teal-DEFAULT/5 h-full">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <Gift size={20} className="text-teal-DEFAULT" /> What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Conference kit (badge, bag, stationery)",
                    "Access to all technical sessions, workshops and keynote lectures",
                    "High tea and lunch on both conference days",
                    "Conference Gala Dinner (Oct 2, 2027)",
                    "Participation & Presentation certificate",
                    "Exclusive networking sessions with industry and academic leaders",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-body"
                    >
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
