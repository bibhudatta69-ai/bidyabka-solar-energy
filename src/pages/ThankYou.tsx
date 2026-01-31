import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Home, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I just submitted a solar inquiry form. Looking forward to hearing from you!"
    );
    window.open(`https://wa.me/919337784113?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-solar-blue-light flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-8 rounded-full bg-secondary flex items-center justify-center"
        >
          <CheckCircle className="w-14 h-14 text-secondary-foreground" />
        </motion.div>

        {/* Logo */}
        <img src={logo} alt="BSEAS Logo" className="h-14 mx-auto" />


        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-primary-foreground/90 mb-8">
          Your solar inquiry has been submitted successfully. Our team will contact you within 24 hours.
        </p>

        {/* What's Next */}
        <div className="glass-card-dark rounded-2xl p-6 mb-8 text-left">
          <h3 className="font-bold text-primary-foreground mb-4">What happens next?</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary flex-shrink-0">1</span>
              Our team will review your application
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary flex-shrink-0">2</span>
              We'll call you to discuss your requirements
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary flex-shrink-0">3</span>
              Free site survey will be scheduled
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary flex-shrink-0">4</span>
              Custom quote with subsidy calculation
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </button>
        </div>

        {/* Contact */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/70 mb-2">Need immediate assistance?</p>
          <a
            href="tel:+917008404029"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            <Phone className="w-4 h-4" />
            +91 7008404029
          </a>
        </div>
      </motion.div>
    </div>
  );
}
