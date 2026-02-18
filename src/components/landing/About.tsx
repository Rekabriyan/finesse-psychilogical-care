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
    <section
      id="mengapakami"
      className="py-16 md:py-24 lg:py-32 bg-card relative overflow-hidden"
    >
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
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12 md:mb-20"
          >
            <div className="text-accent font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
              Mengapa Kami
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ruang Aman untuk Bertumbuh
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-7xl mx-auto leading-relaxed">
              Kami hadir bukan sekadar memberikan layanan, tapi menjadi rekan
              dalam perjalananmu menghadapi tantangan emosional dan psikologis
              dengan metode yang terukur dan penuh empati.
            </p>
          </motion.div>

          {/* Main Content (Stats) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24 p-8">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-secondary/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 relative group hover:bg-secondary/60 transition-colors">
                  <div className="absolute -top-4 -left-4 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <stat.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-foreground text-4xl md:text-5xl font-bold mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vision & Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 p-4 md:p-8 items-stretch max-w-7xl mx-auto">
            {/* Visi Kami */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-5 bg-[#2D5A5E] text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-start shadow-xl"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 md:mb-8">
                <Eye className="text-white/90" size={20} />
              </div>
              <h3 className="text-xl md:text-3xl font-semibold mb-4 md:mb-6">
                Visi Kami
              </h3>
              <p className="text-white/90 text-sm md:text-lg leading-relaxed">
                Menjadi pusat unggulan dalam pelayanan psikologi yang
                menyeluruh, memberikan dampak positif bagi individu, keluarga,
                dan masyarakat secara luas.
              </p>
            </motion.div>

            {/* Misi Kami */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-7 bg-[#8D6E5D] text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col shadow-xl"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 md:mb-8">
                <Target className="text-white/90" size={20} />
              </div>
              <h3 className="text-xl md:text-3xl font-semibold mb-6 md:mb-8">
                Misi Kami
              </h3>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Menyediakan layanan psikologi yang berkualitas dan terjangkau untuk semua lapisan masyarakat.",
                  "Menyediakan lingkungan yang aman dan mendukung untuk berbicara dan mengeksplorasi masalah emosional, psikologis, dan interpersonal.",
                  "Memperkuat stigma positif seputar kesehatan mental dan mendorong kesadaran akan pentingnya perawatan psikologis dalam menjalani kehidupan yang seimbang dan bermakna.",
                  "Melakukan kerja sama dengan berbagai pihak, termasuk institusi pendidikan, organisasi masyarakat, dan layanan kesehatan, untuk meningkatkan aksesibilitas layanan psikologi.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 md:mt-2.5 shrink-0" />
                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
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
