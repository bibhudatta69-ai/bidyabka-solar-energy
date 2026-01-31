import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Clock, 
  BadgeCheck, 
  Headphones, 
  Banknote,
  Award
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "12+ Years Experience",
    description: "Deep expertise in solar technology with hundreds of successful installations across Odisha.",
  },
  {
    icon: BadgeCheck,
    title: "Government Approved",
    description: "Authorized vendor under PM Surya Ghar scheme. Registered with MNRE and state DISCOMs.",
  },
  {
    icon: Shield,
    title: "25 Year Warranty",
    description: "Comprehensive warranty on panels, inverters, and installation workmanship for complete peace of mind.",
  },
  {
    icon: Banknote,
    title: "Best Price Guarantee",
    description: "Competitive pricing with zero hidden costs. We match or beat any genuine quote.",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "From survey to commissioning in just 15-20 days. Fast subsidy processing with our expertise.",
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    description: "Dedicated support team for maintenance, repairs, and performance monitoring throughout system life.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding eco-pattern relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">
            Why Choose <span className="gradient-text">BSEAS</span>?
          </h2>
          <p className="section-subtitle">
            Trusted by 500+ families across Odisha for their solar needs
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative feature-card hover:border-primary/30 overflow-hidden"
            >
              {/* Decorative Corner Gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="relative">
                <div className="w-14 h-14 mb-6 rounded-2xl icon-gradient flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
