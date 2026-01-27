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
    <section id="tentang" className="py-20 lg:py-32 bg-card relative overflow-hidden">
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
            <h1 className="text-accent font-medium text-sm uppercase tracking-wider">
              Tentang Kami
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Mengenal Finesse
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Finesse Psychological Care adalah layanan psikologi profesional yang
              berkomitmen untuk menemani perjalanan kesejahteraan psikologis Anda
              dengan pendekatan holistik dan berbasis riset.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left - Philosophy */}
            <motion.div variants={fadeInUp}>
              <div className="bg-secondary/50 rounded-3xl p-8 lg:p-12 relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6 mt-6">
                  Filosofi Kami
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Logo Finesse terdiri dari dua garis yang saling melengkapi dan
                  membentuk simbol tak terhingga. Ini melambangkan perjalanan bersama
                  antara klien dan psikolog dalam proses menuju kesejahteraan yang
                  berkelanjutan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Finesse</strong> berarti
                  kehalusan dan ketelitian — nilai yang kami pegang dalam setiap
                  layanan yang kami berikan. Kami percaya bahwa setiap individu
                  memiliki kekuatan untuk tumbuh dan berkembang.
                </p>
              </div>
            </motion.div>

            {/* Right - Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center">
                <Users className="mx-auto mb-3" size={32} />
                <div className="font-heading text-3xl font-bold mb-1">500+</div>
                <div className="text-primary-foreground/80 text-sm">Klien Terbantu</div>
              </div>
              <div className="bg-accent text-accent-foreground rounded-2xl p-6 text-center">
                <Heart className="mx-auto mb-3" size={32} />
                <div className="font-heading text-3xl font-bold mb-1">1000+</div>
                <div className="text-accent-foreground/80 text-sm">Sesi Konseling</div>
              </div>
              <div className="bg-finesse-teal-light text-white rounded-2xl p-6 text-center">
                <Target className="mx-auto mb-3" size={32} />
                <div className="font-heading text-3xl font-bold mb-1">98%</div>
                <div className="text-white/80 text-sm">Kepuasan Klien</div>
              </div>
              <div className="bg-finesse-brown-light text-white rounded-2xl p-6 text-center">
                <Eye className="mx-auto mb-3" size={32} />
                <div className="font-heading text-3xl font-bold mb-1">5+</div>
                <div className="text-white/80 text-sm">Tahun Pengalaman</div>
              </div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary to-finesse-teal-light text-primary-foreground rounded-3xl p-8 lg:p-10"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Menjadi mitra terpercaya dalam perjalanan kesejahteraan psikologis
                masyarakat Indonesia, dengan menyediakan layanan psikologi yang
                berkualitas, accessible, dan inklusif.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-accent to-finesse-brown-light text-accent-foreground rounded-3xl p-8 lg:p-10"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Misi Kami</h3>
              <ul className="text-accent-foreground/90 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5" />
                  Memberikan layanan psikologi berbasis bukti
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5" />
                  Menciptakan ruang aman dan inklusif
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5" />
                  Edukasi kesehatan mental masyarakat
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
