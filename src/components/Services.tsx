import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Home, 
  Building, 
  Plug, 
  Battery, 
  Gauge, 
  Wrench 
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Complete rooftop solar solutions for homes with 1kW to 10kW+ capacity. Perfect for reducing electricity bills.",
    features: ["On-grid & Hybrid", "25 Year Warranty", "Subsidy Assistance"],
  },
  {
    icon: Building,
    title: "Commercial Solar",
    description: "Large-scale solar installations for factories, offices, and commercial buildings to cut operational costs.",
    features: ["100kW+ Capacity", "Quick ROI", "Tax Benefits"],
  },
  {
    icon: Plug,
    title: "On-Grid Systems",
    description: "Grid-connected solar systems that export excess power to the grid, earning you credits through net metering.",
    features: ["Net Metering", "Zero Battery Cost", "Lowest Investment"],
  },
  {
    icon: Battery,
    title: "Hybrid Systems",
    description: "Best of both worlds - grid connectivity with battery backup for uninterrupted power during outages.",
    features: ["Battery Backup", "Power Independence", "24/7 Power"],
  },
  {
    icon: Gauge,
    title: "Net Metering",
    description: "Complete assistance in net metering application, approval, and bi-directional meter installation.",
    features: ["DISCOM Liaison", "Documentation", "Quick Approval"],
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description: "Annual maintenance contracts to keep your solar system running at peak performance year after year.",
    features: ["Regular Cleaning", "Performance Check", "Quick Support"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding eco-section-gradient relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive solar solutions tailored to your energy needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group feature-card hover:border-primary/30"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl icon-gradient flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
