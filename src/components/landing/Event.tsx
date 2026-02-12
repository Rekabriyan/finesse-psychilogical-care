import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Banner from "@/assets/event-banner.webp";

const EventsBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="event" className="py-24 px-4 md:px-8 lg:px-16">
      <div 
        ref={ref}
        className="max-w-none mx-auto relative overflow-hidden rounded-[2rem] min-h-[400px] flex items-center bg-[#f8fafc]"
      >
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={Banner}
            alt="Event Background"
            className="w-full h-full object-cover object-center opacity-60"
          />
          {/* Gradient untuk memastikan teks tetap terbaca */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E3F0F2D9] via-[#E3F0F2D9] to-transparent" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-8 md:px-16 relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-xl"
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Stay Updated on Our Events
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-[#5c727d] text-lg leading-relaxed mb-8"
            >
              Get the latest information about our workshops, webinars, and community events. 
              Stay informed about mental health awareness programs and exclusive sessions 
              with our professionals.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button 
                className="bg-[#1e3a47] hover:bg-[#2a4d5e] text-white px-8 py-6 rounded-xl text-md flex items-center gap-2 transition-all group"
              >
                Our Updated Events
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsBanner;