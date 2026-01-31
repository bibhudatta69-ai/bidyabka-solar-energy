import { motion } from "framer-motion";
import { Sun, MessageCircle, ArrowRight, Zap, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

export default function Hero() {
  const scrollToForm = () => {
    const element = document.querySelector("#apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in installing solar panels. Please provide more information about your services and government subsidy."
    );
    window.open(`https://wa.me/919337784113?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar Installation"
          className="w-full h-full object-cover"
        />
        {/* Eco-friendly Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        
        {/* Animated Glow Effects */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-secondary/25 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-primary-foreground mb-8"
          >
            <Sun className="w-4 h-4 text-accent animate-glow" />
            <span className="text-sm font-semibold tracking-wide">PM Surya Ghar Muft Bijli Yojana Approved</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-tight mb-6"
          >
            Turn Your Roof Into a{" "}
            <span className="relative">
              <span className="text-accent">Revenue Stream</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-accent/50 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 max-w-2xl leading-relaxed"
          >
            Get up to <span className="font-bold text-accent">₹78,000</span> government subsidy on residential solar installation. 
            Save 90% on electricity bills with BSEAS – Odisha's trusted solar EPC company.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 md:gap-6 mb-10"
          >
            {[
              { label: "12+ Years Experience", icon: Zap },
              { label: "500+ Installations", icon: Zap },
              { label: "Government Approved", icon: Zap },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              >
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToForm}
              className="group btn-hero-primary flex items-center justify-center gap-3 pulse-glow"
            >
              <span>Apply for Solar Subsidy</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openWhatsApp}
              className="btn-hero-secondary flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2 backdrop-blur-sm"
        >
          <motion.div
            animate={{ height: [6, 12, 6] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 rounded-full bg-primary-foreground/70"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
