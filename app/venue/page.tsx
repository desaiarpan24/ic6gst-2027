import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Trees, Building2, Train, Plane, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Venue",
  description:
    "IC6GST 2027 venue — PDEU campus in Gandhinagar, Gujarat, India. Nearby attractions and travel information.",
};

const attractions = [
  {
    name: "Science City",
    desc: "India's premier science exploration complex featuring interactive science halls, a space dome planetarium, robotics gallery, IMAX 3D, and aquatic exhibitions.",
    image: "/images/science-city.jpeg",
    distance: "25 km from PDEU",
  },
  {
    name: "Akshardham Temple",
    desc: "A breathtaking architectural and spiritual masterpiece in Gandhinagar carved from pink sandstone, surrounded by manicured gardens and musical water fountains.",
    image: "/images/akshardham-temple.jpeg",
    distance: "15 km from PDEU",
  },
  {
    name: "Mahatma Mandir",
    desc: "A landmark convention and exhibition centre in Gandhinagar celebrating Mahatma Gandhi's ethos, hosting major international congresses and diplomatic summits.",
    image: "/images/mahatma-mandir.jpg",
    distance: "10 km from PDEU",
  },
  {
    name: "Indroda Nature Park",
    desc: "Often hailed as India's Jurassic Park, featuring fossilized dinosaur hatcheries, botanical reserves, an open zoo, and indigenous bird sanctuaries along the Sabarmati.",
    image: "/images/indroda-nature-park.jpeg",
    distance: "8 km from PDEU",
  },
];

const travelInfo = [
  {
    icon: Plane,
    title: "By Air",
    desc: "Sardar Vallabhbhai Patel International Airport (AMD) in Ahmedabad is approximately 20 km from PDEU, offering direct domestic and international flights.",
  },
  {
    icon: Train,
    title: "By Train",
    desc: "Gandhinagar Capital Railway Station (GDNR) is 8 km away, and Ahmedabad Junction (ADI / Kalupur) is 25 km away, connecting to all major Indian metropolitan hubs.",
  },
  {
    icon: Building2,
    title: "Accommodation",
    desc: "Numerous premium, business, and budget hotels are available across Gandhinagar, GIFT City, and Ahmedabad. Preferential conference rates will be shared with registered delegates.",
  },
];

export default function VenuePage() {
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
              Conference Venue
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Venue &amp; <span className="gradient-text">City</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              PDEU, Gandhinagar — Gujarat&apos;s administrative capital and one of the greenest cities in Asia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Gandhinagar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                Host City
              </span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-6">
                Gandhinagar, Gujarat
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-body leading-relaxed mb-5">
                Gandhinagar is the capital city of Gujarat, India — a meticulously planned
                city located just 23 km north of Ahmedabad. Named in honour of Mahatma
                Gandhi, it is renowned as one of the greenest capital cities in Asia, with
                over 50% green cover.
              </p>
              <p className="text-slate-body leading-relaxed mb-5">
                The city is a thriving knowledge and technology nexus, hosting premier
                institutions including PDEU, IIT Gandhinagar, NFSU, and GIFT City
                (Gujarat International Finance Tec-City). Its proximity to Ahmedabad provides
                delegates with seamless transit, heritage architecture, and vibrant culture.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-body text-sm font-medium">
                  <MapPin size={16} className="text-teal-DEFAULT flex-shrink-0" />
                  Raisan, Gandhinagar, Gujarat — 382007, India
                </div>
                <div className="flex items-center gap-3 text-slate-body text-sm font-medium">
                  <Trees size={16} className="text-teal-DEFAULT flex-shrink-0" />
                  Tree Capital of Gujarat — pristine, sustainable, and peaceful
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="/images/pdeu-campus.jpeg"
                  alt="PDEU Campus, Gandhinagar"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-black text-xl">PDEU Gandhinagar</p>
                  <p className="text-teal-accent text-sm">
                    NAAC A++ Accredited 100-Acre Campus
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PDEU Campus & Map */}
      <section className="py-20 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                Campus Location
              </span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">
                PDEU Campus Map
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-slate-light max-w-2xl mx-auto">
                The conference sessions will be held at the Department of ICT within
                Pandit Deendayal Energy University.
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
              Pandit Deendayal Energy University, Knowledge Corridor, Raisan, Gandhinagar — 382007, Gujarat, India
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Attractions with Updated Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-DEFAULT font-semibold uppercase tracking-widest text-sm">
                Explore Gujarat
              </span>
              <h2 className="text-4xl font-black text-navy mt-3 mb-4">
                Nearby Attractions
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <div className="max-w-2xl mx-auto mb-8">
                <p className="text-slate-light text-base mb-4">
                  Discover Gandhinagar and Ahmedabad&apos;s celebrated cultural landmarks,
                  temples, architectural wonders, and natural sanctuaries during your stay.
                </p>
                <a
                  href="https://gujarattourism.com/central-zone/ahmedabad.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-teal-DEFAULT/10 hover:bg-teal-DEFAULT text-teal-DEFAULT hover:text-white font-semibold text-sm transition-all border border-teal-DEFAULT/30 shadow-xs"
                >
                  Explore More on Gujarat Tourism Official Portal <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((a, i) => (
              <AnimatedSection key={a.name} delay={i * 0.1}>
                <Card className="overflow-hidden card-hover group h-full flex flex-col justify-between border-gray-200">
                  <div>
                    <div className="relative h-52 overflow-hidden bg-navy-dark">
                      <img
                        src={a.image}
                        alt={a.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-1 bg-teal-DEFAULT text-white text-xs font-bold rounded-full shadow-md">
                          {a.distance}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-xl text-navy font-bold">
                        {a.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-light text-sm leading-relaxed">
                        {a.desc}
                      </p>
                    </CardContent>
                  </div>
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
              <span className="text-teal-accent font-semibold uppercase tracking-widest text-sm">
                Transit &amp; Lodging
              </span>
              <h2 className="text-4xl font-black text-white mt-3 mb-4">
                Travel Information
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelInfo.map((info, i) => (
              <AnimatedSection key={info.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur hover:bg-white/15 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-teal-DEFAULT/30 flex items-center justify-center mb-5">
                    <info.icon size={24} className="text-teal-accent" />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {info.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
