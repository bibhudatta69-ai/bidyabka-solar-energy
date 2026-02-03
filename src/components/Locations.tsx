import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import ownerPhoto from "@/assets/owner.jpg";

const locations = [
  {
    name: "Bhubaneswar Office",
    address: "K8, Kalinga Nagar, Shampur, Bhubaneswar – 751003",
    mapUrl: "https://maps.google.com/?q=Kalinga+Nagar+Shampur+Bhubaneswar",
  },
  {
    name: "Jajpur Office",
    address: "Mugupal, Kuakhia, Jajpur – 755009",
    mapUrl: "https://maps.google.com/?q=Kuakhia+Jajpur+Odisha",
  },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone & Whatsapp",
    value: "+91 9337784113",
    href: "tel:+919337784113",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bidyabkasolarenergy@gmail.com",
    href: "mailto:bidyabkasolarenergy@gmail.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9 AM - 7 PM",
    href: null,
  },
];

export default function Locations() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="locations"
      ref={ref}
      className="section-padding eco-section-gradient relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">
            Our <span className="gradient-text">Locations</span>
          </h2>
          <p className="section-subtitle">
            Visit us at our offices across Odisha
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {locations.map((location) => (
              <a
                key={location.name}
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block feature-card hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl icon-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {location.address}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-3 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                      View on Google Maps
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0982987652397!2d85.8!3d20.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE2JzEyLjAiTiA4NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 mb-0.5 font-medium">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-primary-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-primary-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Owner Info */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={ownerPhoto}
                  alt="Bidyabhusan Kar"
                  className="w-20 h-20 rounded-full object-cover border-2 border-white/30 shadow-md"
                />
                <div>
                  <p className="text-sm opacity-80 text-primary-foreground">
                    Owner & Founder
                  </p>
                  <p className="text-lg font-semibold text-primary-foreground">
                    Bidyabhusan Kar
                  </p>
                  <p className="text-sm opacity-80 text-primary-foreground">
                    B.Tech Electrical Engineer
                  </p>
                  <p className="text-sm opacity-80 text-primary-foreground">
                    12+ Years in Solar Industry
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
