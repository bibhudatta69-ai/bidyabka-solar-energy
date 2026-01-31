import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, MapPin, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { 
    src: gallery1, 
    alt: "Commercial Solar Installation", 
    category: "Commercial",
    location: "Bhubaneswar",
    systemSize: "10kW"
  },
  { 
    src: gallery2, 
    alt: "Residential Rooftop Solar", 
    category: "Residential",
    location: "Cuttack",
    systemSize: "3kW"
  },
  { 
    src: gallery3, 
    alt: "Installation Team at Work", 
    category: "Team",
    location: "Jajpur",
    systemSize: "5kW"
  },
  { 
    src: gallery4, 
    alt: "Solar Inverter Setup", 
    category: "Equipment",
    location: "Puri",
    systemSize: "2kW"
  },
  { 
    src: gallery5, 
    alt: "Ground Mount Solar Farm", 
    category: "Commercial",
    location: "Khordha",
    systemSize: "50kW"
  },
  { 
    src: gallery6, 
    alt: "Net Metering Installation", 
    category: "Equipment",
    location: "Balasore",
    systemSize: "3kW"
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="section-padding eco-pattern relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">
            Our Solar <span className="gradient-text">Installations</span>
          </h2>
          <p className="section-subtitle">
            See our quality installations across Odisha
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group gallery-item relative cursor-pointer ${
                index === 0 || index === 5 ? 'md:row-span-1' : ''
              }`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIn className="w-5 h-5 text-primary-foreground" />
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-xs font-semibold mb-2">
                  {item.category}
                </span>
                <p className="text-primary-foreground font-semibold mb-1">{item.alt}</p>
                <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                  <span className="mx-1">•</span>
                  <span className="font-medium">{item.systemSize}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
          >
            <X className="w-6 h-6" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl"
            />
            {/* Caption Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-2xl">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-3">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">{selectedImage.alt}</h3>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>{selectedImage.location}</span>
                <span className="mx-1">•</span>
                <span className="font-semibold">{selectedImage.systemSize} System</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
