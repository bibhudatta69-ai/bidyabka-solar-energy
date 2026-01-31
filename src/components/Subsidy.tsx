import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, IndianRupee, Leaf, FileCheck, Sparkles } from "lucide-react";

const subsidyDetails = [
  {
    capacity: "1 kW",
    subsidy: "₹30,000",
    totalCost: "~₹60,000",
    afterSubsidy: "~₹30,000",
  },
  {
    capacity: "2 kW",
    subsidy: "₹60,000",
    totalCost: "~₹1,20,000",
    afterSubsidy: "~₹60,000",
  },
  {
    capacity: "3 kW",
    subsidy: "₹78,000",
    totalCost: "~₹1,80,000",
    afterSubsidy: "~₹1,02,000",
  },
  {
    capacity: "5 kW+",
    subsidy: "₹78,000",
    totalCost: "Custom Quote",
    afterSubsidy: "Contact Us",
  },
];

const benefits = [
  {
    icon: IndianRupee,
    title: "Up to ₹138,000 Subsidy",
    description: "Direct benefit transfer to your bank account from the Government of India",
  },
  {
    icon: Leaf,
    title: "300 Units Free Electricity",
    description: "Generate your own clean energy and say goodbye to rising electricity bills",
  },
  {
    icon: Sun,
    title: "25 Year Performance",
    description: "Premium solar panels with guaranteed performance for 25 years",
  },
  {
    icon: FileCheck,
    title: "Easy Documentation",
    description: "We handle all paperwork - from application to subsidy disbursement",
  },
];

export default function Subsidy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="subsidy" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Eco Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.15, 0.1], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 text-accent mb-6 backdrop-blur-sm border border-accent/30"
          >
            <Sun className="w-4 h-4 animate-glow" />
            <span className="font-semibold">Government Scheme</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 text-primary-foreground">
            PM Surya Ghar Muft Bijli Yojana
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Get up to <span className="font-bold text-accent">₹138,000</span> government subsidy on your rooftop solar installation. 
            Generate free electricity for 25 years!
            Central ₹78000 and ₹60000 for State Solar Subsidy
          </p>
        </motion.div>

        {/* Subsidy Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass-card-dark rounded-3xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-8 text-center text-primary-foreground flex items-center justify-center gap-2">
              <IndianRupee className="w-5 h-5 text-accent" />
              Subsidy Calculator
            </h3>
            <div className="grid grid-cols-4 gap-4 text-center mb-4 pb-4 border-b border-primary-foreground/20">
              <div className="text-sm font-bold text-accent tracking-wide">Capacity</div>
              <div className="text-sm font-bold text-accent tracking-wide">Subsidy</div>
              <div className="text-sm font-bold text-accent tracking-wide">Total Cost</div>
              <div className="text-sm font-bold text-accent tracking-wide">You Pay</div>
            </div>
            {subsidyDetails.map((item, index) => (
              <motion.div
                key={item.capacity}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="grid grid-cols-4 gap-4 text-center py-4 border-b border-primary-foreground/10 last:border-0 hover:bg-primary-foreground/5 rounded-lg transition-colors"
              >
                <div className="font-bold text-primary-foreground">{item.capacity}</div>
                <div className="font-bold text-accent text-lg">{item.subsidy}</div>
                <div className="text-primary-foreground/70">{item.totalCost}</div>
                <div className="font-bold text-primary-foreground">{item.afterSubsidy}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group text-center p-7 rounded-3xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/10 hover:bg-primary-foreground/15 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl icon-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-primary-foreground">{benefit.title}</h4>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
