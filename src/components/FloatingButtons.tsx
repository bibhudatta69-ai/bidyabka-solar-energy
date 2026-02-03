import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in installing solar panels. Please provide more information."
    );
    window.open(`https://wa.me/919337784113?text=${message}`, "_blank");
  };

  const makeCall = () => {
    window.location.href = "tel:+919337784113";
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={openWhatsApp}
        className="floating-btn bottom-24 right-4 md:bottom-28 md:right-6 z-40"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
        {/* Ping indicator */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent" />
      </motion.button>

      {/* Call Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        onClick={makeCall}
        className="floating-btn bottom-6 right-4 md:bottom-8 md:right-6 z-40"
        style={{
          background: 'linear-gradient(135deg, hsl(168, 76%, 26%), hsl(175, 84%, 32%))',
        }}
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </motion.button>
    </>
  );
}
