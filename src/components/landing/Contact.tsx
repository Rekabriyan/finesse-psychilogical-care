import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Clock, 
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL = "#"; // Replace with actual Google Form URL
const WHATSAPP_URL = "https://wa.me/62881023348781";

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Bengawan No. 45, Cihapit - Bandung",
    href: "https://maps.google.com/?q=Jl.+Bengawan+No.+45,+Cihapit,+Bandung",
  },
  {
    icon: Mail,
    label: "Email",
    value: "halo.finesse@gmail.com",
    href: "mailto:halo.finesse@gmail.com",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "0881-0233-48781",
    href: "tel:+62881023348781",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@finesse.psy",
    href: "https://instagram.com/finesse.psy",
  },
];

const operationalHours = [
  { day: "Senin - Jumat", hours: "09:00 - 18:00" },
  { day: "Sabtu", hours: "09:00 - 15:00" },
  { day: "Minggu", hours: "By Appointment" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="kontak" className="py-20 lg:py-32 bg-card relative overflow-hidden">
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
              Hubungi Kami
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Mulai Perjalanan Anda
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Siap untuk memulai? Hubungi kami untuk konsultasi awal atau
              langsung isi formulir untuk menjadwalkan sesi Anda.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <motion.div variants={fadeInUp}>
              {/* Main CTA */}
              <div className="bg-gradient-to-br from-primary to-finesse-teal-light text-primary-foreground rounded-3xl p-8 lg:p-10 mb-8">
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Jadwalkan Konsultasi
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Isi formulir pendaftaran dan tim kami akan menghubungi Anda
                  dalam 1x24 jam untuk mengatur jadwal konsultasi.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto"
                >
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Daftar Sekarang
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all">
                      <item.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Operational Hours */}
              <div className="mt-8 p-6 bg-secondary/50 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-primary" size={20} />
                  <h4 className="font-heading font-bold text-foreground">Jam Operasional</h4>
                </div>
                <div className="space-y-2">
                  {operationalHours.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium text-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Map */}
            <motion.div variants={fadeInUp}>
              <div className="bg-background rounded-3xl overflow-hidden border border-border h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9014899805844!2d107.6177!3d-6.9063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMjIuNyJTIDEwN8KwMzcnMDMuNyJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Finesse Location"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-3 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat WhatsApp
        </span>
      </motion.a>
    </section>
  );
};

export default Contact;
