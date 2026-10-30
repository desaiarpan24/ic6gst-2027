import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";
import { Calendar, CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Key Dates",
  description:
    "IC6GST 2027 important deadlines — paper submission, notification, camera-ready, and registration dates.",
};

const deadlineTable = [
  { event: "Full paper submission date", date: "May 15, 2027", highlight: true },
  { event: "Paper acceptance notification", date: "Jun 30, 2027", highlight: false },
  { event: "Submission of camera-ready paper", date: "Jul 31, 2027", highlight: false },
  { event: "Early bird registration", date: "Jul 31, 2027", highlight: false },
  { event: "Final registration with 10% extra fee", date: "Aug 25, 2027", highlight: false },
  { event: "Conference Dates (Physical)", date: "October 2–3, 2027", highlight: true },
];

const timeline = [
  {
    date: "May 15, 2027",
    event: "Full Paper Submission Deadline",
    desc: "Submit your complete research paper via Microsoft CMT. 11:59 PM IST.",
    status: "deadline",
    icon: "📄",
  },
  {
    date: "June 30, 2027",
    event: "Paper Acceptance Notification",
    desc: "Authors notified of acceptance, revision, or rejection decisions.",
    status: "upcoming",
    icon: "✉️",
  },
  {
    date: "July 31, 2027",
    event: "Camera-Ready Paper & Early Bird Registration",
    desc: "Submit final camera-ready manuscript. Early bird registration closes at regular fee.",
    status: "upcoming",
    icon: "🏆",
  },
  {
    date: "August 25, 2027",
    event: "Final Registration Deadline",
    desc: "Last date to register. A 10% surcharge applies on all registration categories.",
    status: "upcoming",
    icon: "⚠️",
  },
  {
    date: "October 2–3, 2027",
    event: "Conference Days",
    desc: "Main conference at PDEU, Gandhinagar. Physical attendance. Keynotes, paper presentations, workshops, and industry sessions.",
    status: "conference",
    icon: "🎉",
  },
];

export default function KeyDatesPage() {
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
              Important Dates
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Key <span className="gradient-text">Dates</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Mark your calendar. All deadlines are firm — plan your submission accordingly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto p-10 rounded-3xl bg-white/5 border border-teal-DEFAULT/30 backdrop-blur glow-teal">
              <CountdownTimer dark />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Conference Deadlines Table */}
      <section className="py-16 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-navy px-6 py-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="text-teal-accent" size={20} />
                  <h2 className="text-lg font-bold">Conference Deadlines</h2>
                </div>
                <Badge className="bg-teal-DEFAULT text-white">2027 Schedule</Badge>
              </div>
              <div className="divide-y divide-gray-100">
                {deadlineTable.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 transition-colors hover:bg-teal-DEFAULT/5 ${
                      item.highlight ? "bg-teal-DEFAULT/5 font-semibold" : ""
                    }`}
                  >
                    <span className="text-navy text-base flex items-center gap-2">
                      <Clock size={16} className={item.highlight ? "text-teal-DEFAULT" : "text-slate-light"} />
                      {item.event}
                    </span>
                    <span className={`text-base font-bold mt-1 sm:mt-0 ${
                      item.highlight ? "text-teal-DEFAULT" : "text-slate-body"
                    }`}>
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                Schedule
              </span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">
                Conference Timeline
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-DEFAULT to-teal-accent transform md:-translate-x-px" />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const isRight = i % 2 === 0;
                return (
                  <AnimatedSection key={item.event} delay={i * 0.1}>
                    <div
                      className={`relative flex items-start md:justify-center gap-6 ${
                        isRight ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 z-10">
                        <div
                          className={`w-5 h-5 rounded-full border-4 border-white flex items-center justify-center ${
                            item.status === "deadline"
                              ? "bg-red-500"
                              : item.status === "conference"
                              ? "bg-teal-DEFAULT"
                              : "bg-teal-DEFAULT/60"
                          }`}
                        />
                      </div>

                      {/* Card */}
                      <div
                        className={`ml-12 md:ml-0 md:w-5/12 ${
                          isRight
                            ? "md:mr-8 md:text-right"
                            : "md:ml-8 md:text-left"
                        }`}
                      >
                        <div
                          className={`p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all ${
                            item.status === "deadline"
                              ? "border-red-200 bg-red-50"
                              : item.status === "conference"
                              ? "border-teal-DEFAULT/30 bg-teal-50"
                              : "border-gray-100 bg-white"
                          }`}
                        >
                          <div
                            className={`flex items-center gap-2 mb-3 ${
                              isRight ? "md:justify-end" : ""
                            }`}
                          >
                            <span className="text-2xl">{item.icon}</span>
                            {item.status === "deadline" && (
                              <Badge className="bg-red-500 text-white border-0 text-xs">
                                Key Deadline
                              </Badge>
                            )}
                            {item.status === "conference" && (
                              <Badge className="text-xs">Main Event</Badge>
                            )}
                          </div>
                          <p
                            className="text-sm font-bold text-teal-DEFAULT uppercase tracking-wider mb-1"
                          >
                            {item.date}
                          </p>
                          <h3 className="font-bold text-navy text-lg mb-2">
                            {item.event}
                          </h3>
                          <p className="text-slate-light text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block md:w-5/12" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="p-6 rounded-2xl border border-amber-200 bg-amber-50">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Important Notes</h3>
                <ul className="space-y-2 text-amber-800 text-sm">
                  <li>
                    • All deadlines are at{" "}
                    <strong>11:59 PM Indian Standard Time (IST / UTC+5:30)</strong>
                  </li>
                  <li>
                    • Deadlines are <strong>firm</strong>. Extensions will not be
                    granted under ordinary circumstances.
                  </li>
                  <li>
                    • Authors are encouraged to submit{" "}
                    <strong>well before the deadline</strong> to avoid last-minute
                    system load.
                  </li>
                  <li>
                    • The conference is <strong>physical-only</strong>; virtual
                    presentations are not available.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
