import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Klien A.",
    role: "Professional",
    content: "Finesse membantu saya melewati masa-masa sulit dengan pendekatan yang hangat dan profesional. Saya merasa didengar dan dipahami sepanjang proses konseling.",
    rating: 5,
  },
  {
    id: 2,
    name: "Klien B.",
    role: "Mahasiswa",
    content: "Asesmen karir di Finesse membuka wawasan baru tentang potensi diri saya. Sangat membantu dalam menentukan langkah karir ke depan.",
    rating: 5,
  },
  {
    id: 3,
    name: "Klien C.",
    role: "Ibu Rumah Tangga",
    content: "Program Persepsi Perempuan sangat memberdayakan. Saya menemukan komunitas yang suportif dan belajar banyak tentang self-care.",
    rating: 5,
  },
  {
    id: 4,
    name: "HR Manager",
    role: "Perusahaan",
    content: "Kerjasama dengan Finesse dalam program employee wellness sangat berdampak positif. Karyawan kami lebih produktif dan bahagia.",
    rating: 5,
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
    <section id="testimoni" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Testimoni
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Apa Kata Mereka
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Cerita dan pengalaman dari klien yang telah bersama Finesse dalam
              perjalanan kesejahteraan psikologis mereka.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-lg relative">
                {/* Quote Icon */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#1F555C] rounded-2xl flex items-center justify-center">
                  <Quote className="text-white" size={32} />
                </div>

                {/* Rating */}
                {/* <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-finesse-gold fill-finesse-gold" size={20} />
                  ))}
                </div> */}

                {/* Content */}
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-foreground text-lg lg:text-xl leading-relaxed mb-8 font-medium"
                >
                  "{testimonials[currentIndex].content}"
                </motion.p>

                {/* Author */}
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  {/* <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name[0]}
                    </span>
                  </div> */}  
                  <div>
                    <div className="font-heading font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft size={20} />
                </Button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "bg-primary w-8"
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
