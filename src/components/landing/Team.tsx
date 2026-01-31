import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Heart } from "lucide-react";

const team = [
  {
    name: "Psikolog Profesional",
    role: "Founder & Lead Psychologist",
    specialization: "Psikologi Klinis",
    description: "Berpengalaman dalam konseling individu, keluarga, dan trauma dengan pendekatan integratif.",
    image: null, // Placeholder for team photo
  },
  {
    name: "Konselor Profesional",
    role: "Senior Counselor",
    specialization: "Kesehatan Mental",
    description: "Spesialisasi dalam penanganan kecemasan, depresi, dan pengembangan personal.",
    image: null,
  },
  {
    name: "Assessor Profesional",
    role: "Assessment Specialist",
    specialization: "Asesmen Psikologi",
    description: "Ahli dalam asesmen kepribadian, minat bakat, dan tumbuh kembang anak.",
    image: null,
  },
];

const Team = () => {
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
    <section id="tim" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Tim Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Psikolog Profesional Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Tim kami terdiri dari psikolog dan konselor bersertifikat yang siap
              membantu Anda dengan empati dan profesionalisme.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-background rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  {/* Photo placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center">
                      <span className="font-heading text-3xl font-bold text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6">
                    <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {member.specialization}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
