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
  MessageCircle,
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
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-2 lg:px-16 max-w-none" ref={ref}>
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
              HUBUNGI KAMI
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold mt-4 mb-6">
              Mulai Perjalanan Anda
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Siap untuk memulai? Hubungi kami untuk konsultasi awal atau
              langsung isi formulir untuk menjadwalkan sesi Anda.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Main CTA Card */}
              <div className="flex items-center bg-gradient-to-br from-teal-700 to-teal-600 text-white rounded-3xl p-8 lg:p-8 shadow-xl">
                <div className="flex flex-col justify-content-center">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                    Jadwalkan Konsultasi
                  </h3>
                  <p className="text-teal-50 mb-6 text-sm leading-relaxed">
                    Isi formulir pendaftaran dan tim kami akan menghubungi Anda
                    dalam 1x24 jam untuk mengatur jadwal konsultasi.
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-white text-teal-700 hover:bg-gray-50 font-semibold w-full sm:w-auto shadow-md hover:shadow-lg transition-all"
                >
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Daftar Sekarang
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>
              </div>

              {/* Contact Details Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-2 bg-white rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                      <item.icon
                        className="text-gray-600 group-hover:text-teal-600 transition-colors"
                        size={20}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 mb-1">
                        {item.label}
                      </div>
                      <div className="font-medium text-gray-900 text-xs break-words">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Operational Hours */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="text-black" size={20} />
                  <h4 className="font-heading font-bold text-gray-900 text-lg">
                    Jam Operasional
                  </h4>
                </div>
                <div className="space-y-3">
                  {operationalHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-semibold text-gray-900">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Map */}
            <motion.div variants={fadeInUp} className="lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg h-full min-h-[867px] lg:min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9014899805844!2d107.6177!3d-6.9063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMjIuNyJTIDEwN8KwMzcnMDMuNyJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
                  width="100%"
                  height="10%"
                  style={{ border: 0, minHeight: "545px" }}
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
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all group"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat WhatsApp
        </span>
      </motion.a>
    </section>
  );
};

export default Contact;
