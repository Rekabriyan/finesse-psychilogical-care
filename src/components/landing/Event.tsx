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
    <section id="event" className="py-12 md:py-24 px-4 md:px-8 lg:px-16">
      <div 
        ref={ref}
        /* Penyesuaian: items-start di mobile agar teks di atas, items-center di desktop */
        className="max-w-none mx-auto relative overflow-hidden rounded-[2rem] min-h-[550px] md:min-h-[400px] flex items-start md:items-center bg-[#f8fafc]"
      >
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={Banner}
            alt="Event Background"
            className="w-full h-full object-cover object-center opacity-70 md:opacity-60"
          />
          

          <div className="absolute inset-0 bg-gradient-to-b from-[#E3F0F2D9] via-[#E3F0F2D9] to-transparent md:bg-gradient-to-r md:from-[#E3F0F2D9] md:via-[#E3F0F2D9] md:to-transparent" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-16 relative z-10 pt-16 md:pt-0">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-xl text-center md:text-left"
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 text-[#1e3a47]"
            >
              Stay Updated on Our Events
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-[#5c727d] text-base md:text-lg leading-relaxed mb-8"
            >
              Get the latest information about our workshops, webinars, and community events. 
              Stay informed about mental health awareness programs and exclusive sessions 
              with our professionals.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex justify-center md:justify-start">
              <Button 
                className="bg-[#1e3a47] hover:bg-[#2a4d5e] text-white px-8 py-6 rounded-xl text-md flex items-center gap-2 transition-all group w-full md:w-auto justify-center"
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