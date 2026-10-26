import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Trees, Building2, Train, Plane } from "lucide-react";

export const metadata: Metadata = {
  title: "Venue",
  description: "IC6GST 2027 venue — PDEU campus in Gandhinagar, Gujarat, India. Nearby attractions and travel information.",
};

const attractions = [
  {
    name: "Akshardham Temple",
    desc: "A stunning spiritual and cultural monument, one of the world's largest Hindu temples with intricate carved architecture and exhibitions.",
    image: "https://images.unsplash.com/photo-1621496503614-c78e48c6d944?auto=format&fit=crop&w=600&q=80",
    distance: "15 km from PDEU",
  },
  {
    name: "ISKCON Temple",
    desc: "A magnificent temple dedicated to Lord Krishna with serene gardens, spiritual programs, and beautiful architecture.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    distance: "12 km from PDEU",
  },
  {
    name: "Gujarat Science City",
    desc: "India's largest science centre with interactive exhibits, a planetarium, IMAX theatre, and a 4D motion theatre for science enthusiasts.",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=600&q=80",
    distance: "25 km from PDEU",
  },
  {
    name: "Sabarmati Ashram",
    desc: "Gandhi's historic residence on the banks of the Sabarmati River — the spiritual cradle of India's independence movement.",
    image: "https://images.unsplash.com/photo-1596493138222-2db2c67e68a3?auto=format&fit=crop&w=600&q=80",
    distance: "30 km from PDEU",
  },
];

const travelInfo = [
  { icon: Plane, title: "By Air", desc: "Sardar Vallabhbhai Patel International Airport, Ahmedabad (AMD) — 35 km from PDEU. Well connected to major Indian and international cities." },
  { icon: Train, title: "By Train", desc: "Gandhinagar Capital Railway Station (GDNR) is 8 km from PDEU. Ahmedabad Railway Station (ADI) is 28 km away with excellent connectivity." },
  { icon: Building2, title: "Accommodation", desc: "Several hotels in Gandhinagar and Ahmedabad within 10–35 km. Recommended hotels list will be shared with registered participants." },
];

export default function VenuePage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <Badge variant="outline" className="border-teal-accent text-teal-accent mb-4">Location</Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Venue &amp; <span className="gradient-text">City</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              PDEU, Gandhinagar — the "Tree City of India" and administrative capital of Gujarat.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Gandhinagar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Host City</span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-6">Gandhinagar, Gujarat</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-body leading-relaxed mb-5">
                Gandhinagar is the capital city of Gujarat, India — a planned city located 23 km north of
                Ahmedabad. Named after Mahatma Gandhi, it is one of the greenest cities in Asia, often
                called the <strong className="text-navy">"Tree City of India"</strong> for its remarkable green cover.
              </p>
              <p className="text-slate-body leading-relaxed mb-5">
                The city is home to India's premier institutions including IIT Gandhinagar, NIFT, GIFT City
                (India's first operational smart city), and PDEU. Its proximity to Ahmedabad gives delegates
                access to world-class hospitality, dining, and cultural experiences.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-body text-sm">
                  <MapPin size={16} className="text-teal-DEFAULT flex-shrink-0" />
                  23 km north of Ahmedabad, Gujarat, India
                </div>
                <div className="flex items-center gap-3 text-slate-body text-sm">
                  <Trees size={16} className="text-teal-DEFAULT flex-shrink-0" />
                  60% green cover — among the greenest planned cities in India
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1596525737119-e0c46dfcf4e0?auto=format&fit=crop&w=800&q=80"
                  alt="Gujarat landmark architecture"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold text-lg">Gujarat, India</p>
                  <p className="text-gray-300 text-sm">Capital city of Gujarat</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PDEU Campus */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Venue</span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">PDEU Campus</h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-slate-light max-w-2xl mx-auto">
                The conference will be held at the Department of ICT, PDEU's 100-acre green campus in Gandhinagar.
              </p>
            </div>
          </AnimatedSection>

          {/* Google Maps Embed */}
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.6776584853835!2d72.6714399!3d23.1560799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3b0a0c3a7b%3A0x8a09eafc7dba6541!2sPandit%20Deendayal%20Energy%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PDEU Gandhinagar on Google Maps"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-slate-light text-sm">
              <MapPin size={16} className="text-teal-DEFAULT" />
              Pandit Deendayal Energy University, Raisan, Gandhinagar — 382007, Gujarat, India
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">Explore</span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">Nearby Attractions</h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((a, i) => (
              <AnimatedSection key={a.name} delay={i * 0.1}>
                <Card className="overflow-hidden card-hover group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-teal-DEFAULT text-white text-xs font-semibold rounded-full">
                        {a.distance}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{a.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-light text-sm leading-relaxed">{a.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-accent font-semibold uppercase tracking-widest text-sm">Getting Here</span>
              <h2 className="text-4xl font-black text-white mt-3 mb-4">Travel Information</h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelInfo.map((info, i) => (
              <AnimatedSection key={info.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur hover:bg-white/15 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-teal-DEFAULT/30 flex items-center justify-center mb-5">
                    <info.icon size={24} className="text-teal-accent" />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">{info.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{info.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
