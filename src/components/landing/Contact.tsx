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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcons from "@/assets/icons-whatsapp.svg";

const GOOGLE_FORM_URL = "#";
const WHATSAPP_URL = "https://wa.me/62881023348781";

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Bengawan No. 45, Cihapit - Bandung",
    href: "https://maps.google.com/?q=Jl.+Bengawan+No.+45,+Cihapit,+Bandung",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "0881-0233-48781",
    href: "tel:+62881023348781",
  },
  {
    icon: Mail,
    label: "Email",
    value: "halo.finesse@gmail.com",
    href: "mailto:halo.finesse@gmail.com",
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
    <section
      id="kontak"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-teal-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
              HUBUNGI KAMI
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 md:mb-6 text-gray-900">
              Mulai Perjalanan Anda
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Siap untuk memulai? Hubungi kami untuk konsultasi awal atau
              langsung isi formulir untuk menjadwalkan sesi Anda.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left - Contact Info */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              {/* Main CTA Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-gradient-to-br from-teal-700 to-teal-600 text-white rounded-3xl p-8 shadow-xl">
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl font-bold">
                    Jadwalkan Konsultasi
                  </h3>
                  <p className="text-teal-50 text-sm leading-relaxed max-w-xs">
                    Isi formulir pendaftaran dan tim kami akan menghubungi Anda
                    dalam 1x24 jam.
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 shadow-md transition-all shrink-0 h-14 rounded-2xl"
                >
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Daftar Sekarang
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-teal-50 transition-colors border border-gray-100">
                      <item.icon
                        className="text-gray-600 group-hover:text-teal-600 transition-colors"
                        size={22}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-semibold text-gray-900 text-sm truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Operational Hours */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mt-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gray-900 rounded-lg">
                    <Clock className="text-white" size={18} />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 text-lg">
                    Jam Operasional
                  </h4>
                </div>
                <div className="space-y-4">
                  {operationalHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm border-b border-gray-50 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-500 font-medium">
                        {item.day}
                      </span>
                      <span className="font-bold text-gray-900">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Map */}
            <motion.div variants={fadeInUp} className="h-full lg:max-h-[600px]">
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg h-full relative group">
                {/* Overlay kecil untuk petunjuk interaksi (Opsional) */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                    GOOGLE MAPS
                  </span>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9014899805844!2d107.6177!3d-6.9063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMjIuNyJTIDEwN8KwMzcnMDMuNyJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid" // Pastikan menggunakan link embed yang valid
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "400px", // Tinggi minimal di mobile diturunkan dari 545px ke 400px
                  }}
                  className="w-full h-full lg:aspect-square xl:aspect-auto" // Menggunakan aspect ratio agar tetap proporsional
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
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
        aria-label="Chat via WhatsApp"
      >
        <img src={WhatsAppIcons} alt="WhatsApp" className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 pointer-events-none whitespace-nowrap shadow-lg">
          Tanya Kami di WhatsApp
        </span>
      </motion.a>
    </section>
  );
};

export default Contact;
