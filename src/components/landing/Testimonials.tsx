import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "S",
    role: "Wiraswasta",
    content: "Bagi saya yang baru melakukan konseling pertama kali, cukup menyenangkan, melegakan, banyak insight yang didapat, dan yang paling utama saya bisa diskusi mengenai keadaan yang saya alami dari sudut keilmuan psikologi.",
  },
  {
    id: 2,
    name: "D",
    role: "Ibu Rumah Tangga",
    content: "Terima kasih telah hadir dan menjadi tempat penyembuhan terbaik.",
  },
  {
    id: 3,
    name: "R",
    role: "Pelajar/Mahasiswa",
    content: "Terima kasih Finesse. Dari yang awalnya ragu, sekarang malah ngerasa ini keputusan yang tepat buat mulai konseling.",
  },
  {
    id: 4,
    name: "P",
    role: "Karyawan Swasta",
    content: "Pengalaman pertama konseling ini sangat berkesan bagi saya. Saya merasa dipahami dan mulai mengerti apa yang sedang saya alami. Terima kasih, Finesse.",
  },
  {
    id: 5,
    name: "B",
    role: "Karyawan Swasta",
    content: "Setelah sesi konseling di Finesse, saya merasa lebih tenang dan tidak sendirian menghadapi keadaan saya. Penjelasan dari sudut pandang psikologi membantu saya untuk mengerti kondisi diri saya sendiri secara perlahan.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimoni" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-10 md:top-20 left-0 md:left-10 w-24 md:w-32 h-24 md:h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 md:bottom-20 right-0 md:right-10 w-32 md:w-40 h-32 md:h-40 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-[0.2em]">
              Testimoni
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 md:mb-6 px-2">
              Apa Kata Mereka
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Cerita dan pengalaman dari klien yang telah bersama Finesse dalam
              perjalanan kesejahteraan psikologis mereka.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto px-2 md:px-0">
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="bg-card rounded-[2rem] p-8 md:p-12 border border-border shadow-xl relative min-h-[320px] md:min-h-[300px] flex flex-col justify-center">
                
                {/* Quote Icon - Adjusted for Mobile */}
                <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-[#1F555C] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="text-white w-6 h-6 md:w-8 md:h-8" />
                </div>

                {/* Animated Content */}
                <div className="relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-foreground text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-medium italic">
                        "{testimonials[currentIndex].content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">
                          {testimonials[currentIndex].name[0]}
                        </div>
                        <div>
                          <div className="font-heading font-bold text-foreground text-base md:text-lg">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-muted-foreground text-xs md:text-sm">
                            {testimonials[currentIndex].role}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full w-12 h-12 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    <ChevronLeft size={24} />
                  </Button>

                  {/* Dots - Visible mostly on desktop or small steps */}
                  <div className="flex gap-2.5">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex
                            ? "bg-primary w-8"
                            : "bg-primary/20 hover:bg-primary/40 w-2.5"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full w-12 h-12 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    <ChevronRight size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;