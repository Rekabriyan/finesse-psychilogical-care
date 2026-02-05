import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Users } from "lucide-react";
import superGraphic2 from "@/assets/super-graphic-2.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { icon: Users, value: "500+", label: "Klien Terbantu" },
    { icon: Heart, value: "1000+", label: "Sesi Konseling" },
    { icon: Target, value: "98%", label: "Kepuasan Klien" },
    { icon: Eye, value: "5+", label: "Tahun Pengalaman" },
  ];

  return (
    <section id="tentang" className="py-16 md:py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Super Graphic Background - Disesuaikan agar tidak menutupi teks di mobile */}
      <div className="absolute bottom-0 left-0 w-1/2 md:w-1/3 h-1/4 md:h-1/2 opacity-5 md:opacity-10 pointer-events-none">
        <img
          src={superGraphic2}
          alt=""
          className="w-full h-full object-contain object-left-bottom"
        />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-20">
            <div className="text-accent font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
              Mengapa Kami
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mengenal Finesse
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Finesse Psychological Care adalah layanan psikologi profesional
              yang berkomitmen untuk menemani perjalanan kesejahteraan
              psikologis Anda dengan pendekatan holistik dan berbasis riset.
            </p>
          </motion.div>

          {/* Main Content (Stats) */}
          {/* Responsif: 1 kolom (HP), 2 kolom (Tablet), 4 kolom (Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-secondary/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:bg-secondary/60 transition-colors">
                  <div className="absolute -top-4 -left-4 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <stat.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-foreground text-4xl md:text-5xl font-bold mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vision & Mission */}
          {/* Responsif: Stack vertikal di mobile, Grid di desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
            {/* Visi */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-5 bg-gradient-to-br from-primary to-finesse-teal-light text-primary-foreground rounded-3xl p-8 md:p-12 flex flex-col justify-center"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Visi Kami</h3>
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
                Menjadi pusat unggulan dalam pelayanan psikologi yang
                menyeluruh, memberikan dampak positif bagi individu, keluarga,
                dan masyarakat secara luas.
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-7 bg-gradient-to-br from-accent to-finesse-brown-light text-accent-foreground rounded-3xl p-8 md:p-12 flex flex-col"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Misi Kami</h3>
              <ul className="space-y-4">
                {[
                  "Menyediakan layanan psikologi yang berkualitas dan terjangkau untuk semua lapisan masyarakat.",
                  "Menyediakan lingkungan yang aman dan mendukung untuk mengeksplorasi masalah emosional dan psikologis.",
                  "Memperkuat stigma positif seputar kesehatan mental dan mendorong kesadaran akan pentingnya perawatan diri.",
                  "Bekerja sama dengan berbagai institusi untuk meningkatkan aksesibilitas layanan psikologi."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-white mt-2.5 shrink-0" />
                    <p className="text-accent-foreground/90 text-sm md:text-base leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;