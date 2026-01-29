import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Users } from "lucide-react";
import superGraphic2 from "@/assets/super-graphic-2.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="tentang"
      className="py-20 lg:py-32 bg-card relative overflow-hidden"
    >
      {/* Super Graphic Background */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-10 pointer-events-none">
        <img
          src={superGraphic2}
          alt=""
          className="w-full h-full object-contain object-left-bottom"
        />
      </div>

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
            <div className="text-accent font-medium text-sm uppercase tracking-wider">
              Mengapa Kami
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Mengenal Finesse
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Finesse Psychological Care adalah layanan psikologi profesional
              yang berkomitmen untuk menemani perjalanan kesejahteraan
              psikologis Anda dengan pendekatan holistik dan berbasis riset.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-4 gap-16 lg:gap-20 items-center mb-20">
            <motion.div variants={fadeInUp}>
              <div className="bg-secondary/50 rounded-3xl p-6 lg:p-12 relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="text-primary-foreground" size={28} />
                </div>
                <h1 className="text-foreground text-6xl text-center font-bold mb-1">
                  500+
                </h1>
                <h2 className="text-heading text-center">Klien Terbantu</h2>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="bg-secondary/50 rounded-3xl p-6 lg:p-12 relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="text-primary-foreground" size={28} />
                </div>
                <h1 className="text-foreground text-6xl text-center font-bold mb-1">
                  1000+
                </h1>
                <h2 className="text-heading text-center">Sesi Konseling</h2>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="bg-secondary/50 rounded-3xl p-6 lg:p-12 relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="text-primary-foreground" size={28} />
                </div>
                <h1 className="text-foreground text-6xl text-center font-bold mb-1">
                  98%
                </h1>
                <h2 className="text-heading text-center">Kepuasan Klien</h2>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="bg-secondary/50 rounded-3xl p-6 lg:p-12 relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="text-primary-foreground" size={28} />
                </div>
                <h1 className="text-foreground text-6xl text-center font-bold mb-1">
                  5+
                </h1>
                <h2 className="text-heading text-center">Tahun Pengalaman</h2>
              </div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-6 grid-rows-1 gap-14">
            <div className="col-span-2 flex">
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-primary to-finesse-teal-light text-primary-foreground rounded-3xl p-8 lg:p-10 flex flex-col w-full"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="text-white" size={28} />
                </div>
                <h1 className="text-primary-foreground text-2xl font-bold mb-4">
                  Visi Kami
                </h1>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Menjadi pusat unggulan dalam pelayanan psikologi yang
                  menyeluruh, memberikan dampak positif bagi individu, keluarga,
                  dan masyarakat secara luas.
                </p>
              </motion.div>
            </div>

            <div className="col-span-4 col-start-3 flex">
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-accent to-finesse-brown-light text-accent-foreground rounded-3xl p-8 lg:p-10 flex flex-col w-full"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={28} />
                </div>
                <h2 className="text-primary-foreground text-2xl font-bold mb-4">
                  Misi Kami
                </h2>
                <ul className="text-accent-foreground/90 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5" />
                    Menyediakan layanan psikologi yang berkualitas dan
                    terjangkau untuk semua lapisan masyarakat.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5" />
                    Menyediakan lingkungan yang aman dan mendukung untuk
                    berbicara dan mengeksplorasi masalah emosional, psikologis,
                    dan interpersonal.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5" />
                    Memperkuat stigma positif seputar kesehatan mental dan
                    mendorong kesadaran akan pentingnya perawatan psikologis
                    dalam menjalani kehidupan yang seimbang dan bermakna.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5" />
                    Melakukan kerja sama dengan berbagai pihak, termasuk
                    institusi pendidikan, organisasi masyarakat, dan layanan
                    kesehatan, untuk meningkatkan aksesibilitas layanan
                    psikologi.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
