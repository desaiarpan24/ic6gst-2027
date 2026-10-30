"use client";

import { useState, useEffect } from "react";
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
  AlertTriangle,
} from "lucide-react";

const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;

export default function RegistrationPage() {
  const [isUSD, setIsUSD] = useState(false);
  const [manualLate, setManualLate] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    expired: boolean;
  }>({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Read or set 10-day early bird timer start in localStorage
    const STORAGE_KEY = "ic6gst_earlybird_start_v1";
    let startTime = localStorage.getItem(STORAGE_KEY);
    if (!startTime) {
      startTime = Date.now().toString();
      localStorage.setItem(STORAGE_KEY, startTime);
    }

    const targetTime = parseInt(startTime, 10) + TEN_DAYS_MS;

    const updateTimer = () => {
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds, expired: false });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Surcharge applies if timer expired OR if preview toggle is active
  const isLate = timeLeft.expired || manualLate;

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
              Register for IC6GST 2027. Early bird rates are active for 10 days; a 10%
              surcharge applies thereafter.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Registration Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* 10-Day Early Bird Countdown Timer Box */}
          <AnimatedSection>
            <div
              className={`mb-10 p-6 sm:p-8 rounded-3xl border transition-all ${
                isLate
                  ? "bg-amber-500/10 border-amber-500/30 text-navy"
                  : "bg-navy text-white border-teal-DEFAULT/30 shadow-xl"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isLate
                          ? "bg-amber-600 text-white"
                          : "bg-teal-DEFAULT text-white"
                      }`}
                    >
                      {isLate ? (
                        <>
                          <AlertTriangle size={13} /> Regular Rate Active (+10% Fee)
                        </>
                      ) : (
                        <>
                          <Sparkles size={13} /> Early Bird Rate Active (Save 10%)
                        </>
                      )}
                    </span>
                    <span
                      className={`text-xs ${
                        isLate ? "text-amber-800" : "text-teal-accent"
                      } font-medium`}
                    >
                      10-Day Early Bird Window
                    </span>
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl font-black ${
                      isLate ? "text-navy" : "text-white"
                    }`}
                  >
                    {isLate
                      ? "Early Bird Has Ended — 10% Extra Fee Applied"
                      : "Early Bird Discount Period Ends In:"}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      isLate ? "text-slate-600" : "text-gray-300"
                    }`}
                  >
                    {isLate
                      ? "Standard early bird registration has concluded. All amounts in the fee table now reflect the 10% surcharge."
                      : "Register now to lock in early bird rates across all attendee, academia, industry, and student categories."}
                  </p>
                </div>

                {/* 4-Column Time Display */}
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  {[
                    { label: "Days", val: timeLeft.days },
                    { label: "Hours", val: timeLeft.hours },
                    { label: "Mins", val: timeLeft.minutes },
                    { label: "Secs", val: timeLeft.seconds },
                  ].map((unit) => (
                    <div key={unit.label} className="text-center">
                      <div
                        className={`w-14 sm:w-16 h-14 sm:h-16 rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl shadow-inner tabular-nums ${
                          isLate
                            ? "bg-amber-100 text-amber-900 border border-amber-300"
                            : "bg-white/10 text-teal-accent border border-white/20"
                        }`}
                      >
                        {mounted ? String(unit.val).padStart(2, "0") : "--"}
                      </div>
                      <span
                        className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider block mt-1.5 ${
                          isLate ? "text-amber-800" : "text-gray-300"
                        }`}
                      >
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Phase Switcher Bar */}
              <div
                className={`mt-6 pt-5 border-t flex flex-wrap items-center justify-between gap-4 text-xs ${
                  isLate ? "border-amber-200" : "border-white/10"
                }`}
              >
                <span className={isLate ? "text-slate-600" : "text-gray-300"}>
                  Automatic 10-day countdown timer actively controls registration phase.
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className={`font-semibold ${
                      !manualLate ? "text-teal-400 font-bold" : "opacity-60"
                    }`}
                  >
                    Early Bird Rates
                  </span>
                  <Switch
                    checked={manualLate}
                    onCheckedChange={setManualLate}
                    className="scale-90"
                    title="Toggle to preview fee after 10 days (+10% extra fee)"
                  />
                  <span
                    className={`font-semibold ${
                      manualLate ? "text-amber-500 font-bold" : "opacity-60"
                    }`}
                  >
                    Preview +10% Fee
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Currency Toggle & Active State */}
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

            {/* Active Rate Status Banner */}
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6 px-1">
              <Badge className="text-sm px-4 py-1.5">
                Currency: {isUSD ? "USD ($)" : "INR (₹)"}
              </Badge>
              {isLate ? (
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 flex items-center gap-1.5">
                  <AlertTriangle size={13} />
                  Displaying Regular Registration (+10% Fee Applied)
                </span>
              ) : (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1.5">
                  <Clock size={13} />
                  Displaying Early Bird Discounted Rates
                </span>
              )}
            </div>

            {/* Dynamic Fee Table (with 10% surcharge calculation) */}
            <FeeTable currency={isUSD ? "USD" : "INR"} applySurcharge={isLate} />

            {/* Mandatory Fee Note */}
            <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-slate-body text-sm flex items-start gap-3 shadow-xs">
              <Info size={18} className="text-amber-700 mt-0.5 flex-shrink-0" />
              <p className="text-amber-950 font-medium leading-relaxed">
                Fees are exclusive of 18% GST. Authors from outside India pay in USD. At least one author per accepted paper must register by 31 July 2027.
              </p>
            </div>
          </AnimatedSection>

          {/* IEEE member note */}
          <AnimatedSection delay={0.1}>
            <div className="mt-8 p-5 rounded-xl bg-teal-DEFAULT/5 border border-teal-DEFAULT/20 flex items-start gap-3">
              <Info size={20} className="text-teal-DEFAULT mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-body">
                <strong className="text-teal-DEFAULT">IEEE Members</strong> receive a
                discounted registration fee across all categories. Please ensure your
                IEEE membership is active at the time of registration. A valid IEEE
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
                    "Early bird registration window is valid for 10 days.",
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
