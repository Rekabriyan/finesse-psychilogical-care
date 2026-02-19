import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Heart, 
  GraduationCap, 
  Users, 
  Clock, 
  Lock 
} from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Profesional Bersertifikat",
    description: "Tim psikolog kami memiliki sertifikasi dan pengalaman di berbagai bidang psikologi untuk mendukung perjalanan Anda.",
  },
  {
    icon: Heart,
    title: "Pendekatan Holistik",
    description: "Layanan kami dapat disesuaikan dengan kebutuhan dan tujuan Anda agar hasilnya lebih maksimal dan relevan.",
  },
  {
    icon: Shield,
    title: "Berbasis Riset",
    description: "Layanan kami dilakukan dengan menggunakan pendekatan yang sudah teruji dan mengikuti standar profesional psikologi.",
  },
  {
    icon: Lock,
    title: "Kerahasiaan Terjamin",
    description: "Privasi Anda dijaga sepenuhnya sesuai kode etik profesi, sehingga Anda bisa merasa aman saat berbagi.",
  },
  {
    icon: Users,
    title: "Layanan Inklusif",
    description: "Kami melayani semua kalangan tanpa diskriminasi, dengan pendekatan yang sensitif terhadap keberagaman.",
  },
  {
    icon: Clock,
    title: "Fleksibel & Sesuai Kebutuhan",
    description: "Layanan kami dapat disesuaikan untuk individu, pasangan, keluarga, maupun organisasi, sehingga lebih praktis dan relevan.",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="keunggulankami" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-bl-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-accent/5 rounded-tr-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Keunggulan Finesse
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Partner Kesehatan Mental Terbaik
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Finesse berkomitmen untuk memberikan layanan psikologi berkualitas
              tinggi dengan standar etika dan profesionalisme tertinggi.
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <reason.icon 
                      className="text-primary group-hover:text-primary-foreground transition-colors" 
                      size={28} 
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
