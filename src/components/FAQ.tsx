import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much subsidy is available under PM Surya Ghar Yojana?",
    answer: "Under the PM Surya Ghar Muft Bijli Yojana, you can get up to ₹78,000 subsidy. The subsidy structure is: ₹30,000 for 1kW system, ₹60,000 for 2kW system, and ₹78,000 for 3kW and above systems. The subsidy is directly transferred to your bank account after installation and verification."
  },
  {
    question: "Will I get zero electricity bill?",
    answer: "With a properly sized solar system, you can reduce your electricity bill by 80-90%. Many of our customers with 3kW+ systems achieve near-zero bills. Any excess power generated is exported to the grid through net metering, giving you credits that offset your consumption charges."
  },
  {
    question: "How long does solar installation take?",
    answer: "The complete process from site survey to commissioning typically takes 15-20 days. This includes: Day 1 - Site survey, Day 2-3 - System design, Day 4-7 - Installation, Day 8-15 - Documentation and subsidy processing, Day 16-20 - Net metering and final commissioning."
  },
  {
    question: "Is net metering included?",
    answer: "Yes, net metering is included in our complete solar installation package. We handle all documentation, DISCOM liaison, and coordinate the bi-directional meter installation. Net metering allows you to export excess power to the grid and earn credits, maximizing your savings."
  },
  {
    question: "What warranty is provided?",
    answer: "We provide comprehensive warranty coverage: 25 years performance warranty on solar panels (guaranteeing 80% output), 5-10 years warranty on inverters (depending on brand), and 5 years warranty on installation workmanship. We also offer optional Annual Maintenance Contracts (AMC) for long-term peace of mind."
  }
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding eco-pattern relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Got Questions?</span>
          </motion.div>
          <h2 className="section-title text-foreground mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about solar installation and subsidies
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="glass-card-strong rounded-2xl px-6 border-0 overflow-hidden data-[state=open]:shadow-xl transition-shadow duration-300"
                >
                  <AccordionTrigger className="py-5 text-left hover:no-underline group">
                    <span className="text-base md:text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
