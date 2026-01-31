import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ClipboardCheck, 
  Ruler, 
  Hammer, 
  FileText, 
  Gauge,
  PartyPopper
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey",
    description: "Our experts visit your location to assess roof condition, shading, and optimal panel placement.",
    duration: "Day 1",
  },
  {
    icon: Ruler,
    step: "02",
    title: "System Design",
    description: "Custom solar system design based on your energy consumption and available roof space.",
    duration: "Day 2-3",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Installation",
    description: "Professional installation by trained technicians using premium quality components.",
    duration: "Day 4-7",
  },
  {
    icon: FileText,
    step: "04",
    title: "Subsidy Processing",
    description: "Complete documentation and application for PM Surya Ghar subsidy on your behalf.",
    duration: "Day 8-15",
  },
  {
    icon: Gauge,
    step: "05",
    title: "Net Metering",
    description: "DISCOM inspection and bi-directional meter installation for grid connectivity.",
    duration: "Day 16-20",
  },
  {
    icon: PartyPopper,
    step: "06",
    title: "Go Solar!",
    description: "Start generating free electricity and enjoy savings for the next 25 years!",
    duration: "Day 21+",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding eco-section-gradient relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">
            Installation <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle">
            From survey to solar power in just 20 days
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="feature-card h-full hover:border-secondary/30">
                  {/* Step Number */}
                  <div className="relative z-10 w-18 h-18 mb-6 mx-auto lg:mx-0 rounded-2xl icon-gradient flex items-center justify-center shadow-lg">
                    <step.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  
                  {/* Duration Badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 text-accent border border-accent/20 text-xs font-bold mb-4"
                  >
                    {step.duration}
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
