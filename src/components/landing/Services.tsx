import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  ClipboardList,
  Building2,
  Users,
  Heart,
  Brain,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL = "#"; // Replace with actual Google Form URL

const services = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Konseling Psikologi",
    description:
      "Layanan konseling profesional untuk membantu Anda mengatasi berbagai tantangan psikologis dalam perjalanan hidup.",
    features: [
      "Kesehatan Mental & Emosional",
      "Hubungan & Keluarga",
      "Pengembangan Diri",
      "Trauma & Pemulihan",
    ],
    color: "primary",
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Asesmen Psikologi",
    description:
      "Penilaian psikologis komprehensif menggunakan alat ukur terstandar untuk memahami potensi dan kondisi psikologis Anda.",
    features: [
      "Tes Kepribadian",
      "Tumbuh Kembang Anak",
      "Minat & Bakat",
      "Karir & Pekerjaan",
    ],
    color: "accent",
  },
  {
    id: 3,
    icon: Building2,
    title: "Organizational Partner",
    description:
      "Solusi psikologi untuk organisasi dan perusahaan dalam mengembangkan SDM dan menciptakan lingkungan kerja yang sehat.",
    features: [
      "Training & Workshop",
      "Executive Coaching",
      "Team Building",
      "Organizational Assessment",
    ],
    color: "primary",
  },
  {
    id: 4,
    icon: Users,
    title: "Persepsi Perempuan",
    description:
      "Program khusus untuk pemberdayaan perempuan dalam memahami dan mengembangkan potensi diri secara holistik.",
    features: [
      "Healing Academy",
      "Sharing Session",
      "Support Group",
      "Empowerment Workshop",
    ],
    color: "accent",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="layanan" className="bg-background relative">
      {/* Trust Badge */}
      <motion.div
        variants={itemVariants}
        className="bg-primary text-primary-foreground p-8 lg:p-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:max-w-md">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
              Dipercaya oleh Berbagai Kalangan
            </h3>
            <p className="text-primary-foreground/80">
              Dari individu hingga perusahaan, kami telah membantu berbagai
              klien dalam perjalanan mereka menuju kesejahteraan psikologis.
            </p>
          </div>

          {/* Right Stats */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-8 lg:gap-12">
            <div className="text-center">
              <div className="font-heading text-4xl lg:text-8xl font-bold mb-1">
                300+
              </div>
              <div className="text-primary-foreground/70 text-3xl">
                Klien Individual
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl lg:text-8xl font-bold mb-1">
                20+
              </div>
              <div className="text-primary-foreground/70 text-3xl">
                Perusahaan
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl lg:text-8xl font-bold mb-1">
                20+
              </div>
              <div className="text-primary-foreground/70 text-3xl">
                Komunitas
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 mt-32">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Layanan Kami
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Solusi untuk Kesejahteraan Anda
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan psikologi profesional yang
              dirancang untuk memenuhi kebutuhan unik setiap individu dan
              organisasi.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      service.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    <service.icon size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            service.color === "primary"
                              ? "bg-primary"
                              : "bg-accent"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                  >
                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Daftar Sekarang
                      <ArrowRight
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                        size={18}
                      />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-secondary/50 rounded-full px-6 py-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="text-primary-foreground" size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Brain className="text-accent-foreground" size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-finesse-gold flex items-center justify-center">
                  <Sparkles className="text-white" size={18} />
                </div>
              </div>
              <p className="text-muted-foreground">
                Tidak yakin layanan mana yang cocok?{" "}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Konsultasi gratis
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
