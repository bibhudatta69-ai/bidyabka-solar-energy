import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Users, Building2 } from "lucide-react";

const stats = [
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Building2, value: "2", label: "Office Locations" },
  { icon: GraduationCap, value: "B.Tech", label: "Electrical Engineer" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding eco-pattern relative overflow-hidden" ref={ref}>
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="govt-badge mb-8"
            >
              <Award className="w-4 h-4" />
              Government Approved Vendor
            </motion.div>
            
            <h2 className="section-title text-foreground mb-6">
              About <span className="gradient-text">BSEAS</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Bidyabka Solar Energy and Service (BSEAS) is a leading solar EPC company 
              in Odisha, founded by <strong className="text-foreground">Bidyabhusan Kar</strong>, a B.Tech Electrical 
              Engineer with over 12 years of expertise in the solar industry.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We specialize in residential and commercial solar installations, offering 
              end-to-end solutions from design to commissioning. As an authorized vendor 
              under the PM Surya Ghar Muft Bijli Yojana, we help homeowners access 
              government subsidies while ensuring premium quality installations with 
              comprehensive warranty coverage.
            </p>

            <div className="flex flex-wrap gap-3">
              {["MNRE Approved", "ISO Certified", "DISCOM Registered"].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <span className="font-semibold text-sm text-foreground">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="feature-card text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl icon-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-4xl font-extrabold gradient-text mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
