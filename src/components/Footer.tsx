import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "PM Subsidy", href: "#subsidy" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Residential Solar",
  "Commercial Solar",
  "On-Grid Systems",
  "Hybrid Systems",
  "Net Metering",
  "AMC Services",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Eco Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-eco-green-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="BSEAS Logo" className="h-12 mb-3" />

              <div>
                <p className="font-bold text-lg text-primary-foreground tracking-wide">BSEAS</p>
                <p className="text-xs text-primary-foreground/70">Bidyabka Solar Energy</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-5 leading-relaxed">
              Clean Energy for a Greener Tomorrow. Odisha's trusted solar EPC company 
              with 12+ years of experience and 500+ successful installations.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 w-fit">
              <Sparkles className="w-4 h-4 text-accent" />
              <p className="text-xs text-accent font-semibold">
                PM Surya Ghar Approved
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-accent transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-accent transition-colors" />
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary-foreground">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                  <span className="text-sm text-primary-foreground/75">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917008404029"
                  className="group flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  +91 7008404029
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919337784113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  +91 9556355198 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="mailto:bidyabkasolarenergy@gmail.com"
                  className="group flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="break-all">bidyabkasolarenergy@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <div className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">
                  K8, Kalinga Nagar, Shampur, Bhubaneswar – 751003<br />
                  Mugupal, Kuakhia, Jajpur – 755009
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Bidyabka Solar Energy and Service (BSEAS). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/admin" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
                Admin
              </Link>
              <span className="text-xs text-primary-foreground/40">
                Founded by Bidyabhusan Kar, B.Tech Electrical
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
