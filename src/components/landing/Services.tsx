import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  ClipboardList,
  Building2,
  Users,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL = "#"; 

const services = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Konseling Psikologi",
    description: "Layanan konseling profesional untuk membantu Anda mengatasi berbagai tantangan psikologis dalam perjalanan hidup.",
    features: ["Kesehatan Mental & Emosional", "Hubungan & Keluarga", "Pengembangan Diri", "Trauma & Pemulihan"],
    color: "primary",
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Asesmen Psikologi",
    description: "Penilaian psikologis komprehensif menggunakan alat ukur terstandar untuk memahami potensi dan kondisi psikologis Anda.",
    features: ["Tes Kepribadian", "Tumbuh Kembang Anak", "Minat & Bakat", "Karir & Pekerjaan"],
    color: "accent",
  },
  {
    id: 3,
    icon: Building2,
    title: "Organizational Partner",
    description: "Solusi psikologi untuk organisasi dan perusahaan dalam mengembangkan SDM dan menciptakan lingkungan kerja yang sehat.",
    features: ["Training & Workshop", "Executive Coaching", "Team Building", "Organizational Assessment"],
    color: "primary",
  },
  {
    id: 4,
    icon: Users,
    title: "Persepsi Perempuan",
    description: "Program khusus untuk pemberdayaan perempuan dalam memahami dan mengembangkan potensi diri secara holistik.",
    features: ["Healing Academy", "Sharing Session", "Support Group", "Empowerment Workshop"],
    color: "accent",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="layanan" className="bg-background relative py-12 md:py-12 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[-5%] w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 md:mb-16 mt-8 md:mt-20"
          >
            <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-[0.2em]">
              Layanan Kami
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Solusi untuk Kesejahteraan Anda
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto px-2">
              Kami menyediakan berbagai layanan psikologi profesional yang
              dirancang untuk memenuhi kebutuhan unik setiap individu dan
              organisasi.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants} className="group">
                <div className="bg-card rounded-[2rem] p-7 md:p-10 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${
                    service.color === "primary" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                  }`}>
                    <service.icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-foreground/80 text-sm md:text-base">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${
                            service.color === "primary" ? "bg-primary" : "bg-accent"
                          }`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button asChild variant="outline" className="w-full sm:w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn rounded-xl">
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Daftar Sekarang
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Capsule CTA - Optimized for Mobile */}
        <div className="flex justify-center items-center w-full py-12 md:py-16">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#F1F6F7] p-4 sm:pl-3 sm:pr-8 sm:py-3 rounded-3xl sm:rounded-full shadow-sm max-w-2xl w-full border border-teal-50">
            {/* Grup Ikon */}
            <div className="flex -space-x-3 items-center">
              {[
                { icon: MessageCircle, bg: "bg-[#2D5A5E]" },
                { icon: ClipboardList, bg: "bg-[#8D6E5D]" },
                { icon: Stethoscope, bg: "bg-[#2D5A5E]" },
                { icon: Users, bg: "bg-[#8D6E5D]" }
              ].map((item, i) => (
                <div key={i} className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${item.bg} flex items-center justify-center border-2 border-white text-white shadow-sm`}>
                  <item.icon size={18} className="md:size-5" />
                </div>
              ))}
            </div>

            {/* Bagian Teks */}
            <div className="text-center sm:text-left">
              <p className="text-[#6B8E91] text-xs md:text-sm lg:text-base leading-tight">
                Masih bingung layanan mana yang cocok?{" "}
                <br className="block sm:hidden" />
                <span className="font-bold text-[#2D5A5E] cursor-pointer hover:underline inline-block mt-1 sm:mt-0">
                  Konsultasi gratis
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;