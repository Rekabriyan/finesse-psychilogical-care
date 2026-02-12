import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// --- Import Asset (Sesuaikan dengan path Anda) ---
import MindyMaghfira from "/psikolog/mindy.svg";
import RifaViscarini from "/psikolog/rifa.svg";
import DwiAyuElita from "/psikolog/dwi-ayu.svg";
import AstridNurAlfaradais from "/psikolog/astrid-nur.svg";
import DiahAyuPermatasari from "/psikolog/diah-ayu.svg";
import AstriFirdasannah from "/psikolog/astri-firdasannah.svg";
import TekstidinegariThaufik from "/psikolog/tekstidinegari-thaufik.svg";
import NorhafizhaRinanda from "/psikolog/norhafizha-rinanda.svg";
import GitaraniSofia from "/psikolog/gitarani-sofia.svg";
import RahmatikaSeptinaChairunnisa from "/psikolog/rahmatika-septina.svg";
import AmandaPutriYuliardi from "/psikolog/amanda-putri-yuliardi.svg";
import TriAyuArimbi from "/psikolog/tri-ayu-arimbi.svg";

const categories = [
  {
    name: "Psikolog Dewasa",
    description: "Memahami dan menangani masalah kesehatan mental individu dewasa melalui pemeriksaan psikologis, konseling, dan terapi.",
  },
  {
    name: "Psikolog Anak & Pendidikan",
    description: "Membantu memahami dan menangani masalah mental, emosional, perilaku, dan tumbuh kembang serta potensi anak.",
  },
  {
    name: "Psikolog Industri & Organisasi",
    description: "Membantu perusahaan dalam memilih, mengembangkan dan menjaga kinerja karyawan agar lebih sehat dan produktif.",
  },
];

const teamData = [
  {
    name: "Mindy Maghfira, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: MindyMaghfira,
    sipp: "20231327 - 2023 - 0777",
    specialties: ["Anxiety", "Relationship", "Marriage and Family Conflict", "PTSD", "Stress", "Penerimaan Diri", "Stress dan Depresi", "Keluhan Mood dan Emosi"],
    schedule: [
      { day: "Selasa", time: "11.00 - 13.00", type: "Online" },
      { day: "Rabu", time: "11.00 - 13.00", type: "Online" },
      { day: "Jumat", time: "10.00 - 15.00", type: "Online" },
    ]
  },
  {
    name: "Rifa Viscarini, M.Psi., Psikolog.",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: RifaViscarini,
    sipp: "2023xxxx - 2023 - xxxx",
    specialties: ["Self-Growth", "Anxiety", "Depresi"],
    schedule: [
      { day: "Setiap Hari", time: "09.00 - 15.00", type: "Online" },
      { day: "Kamis", time: "09.00 - 15.00", type: "Offline" },
    ]
  },
  {
    name: "Dwi Ayu Elita Kartilia, M.Psi , Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: DwiAyuElita,
    sipp: "2023xxxx - 2023 - xxxx",
    specialties: ["Anxiety", "Relationship", "Quarter Life Crisis"],
    schedule: [
      { day: "Senin - Kamis", time: "19.00 - 21.00", type: "Online" },
      { day: "Sabtu", time: "10.00 - 15.00", type: "Online" },]
  },
  {
    name: "Astrid Nur Alfaradais, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: AstridNurAlfaradais,
    sipp: "20231329-2023-01-2209",
    specialties: ["Anxiety", "Stress", "Depresi", "Gangguan Kepribadian", "Gangguan Mood", "Relationship", "Self Development"],
    schedule: [
      { day: "Kamis", time: "09.00 - 11.00", type: "Offline" },
      { day: "Jumat", time: "16.00 - 18.00", type: "Online" },]
  },
  {
    name: "Diah Ayu Permatasari, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: DiahAyuPermatasari,
    sipp: "20231329-2023-01-2209",
    specialties: ["Anxiety", "Trauma", "Relasi Sosial", "Masalah Mood dan Emosi", "Masalah pada Primary Support Group", "Self Harm"],
    schedule: [
      { day: "By Appointment", time: "", type: "Online" }]
  },
  {
    name: "Astri Firdasannah, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: AstriFirdasannah,
    sipp: "20180763-2022-01-2127",
    specialties: ["Anxiety", "OCD", "Panic Attack", "Depresi", "Quarter Life Crisis", "Toxic Relationship", "Permasalahan Remaja dan Keluarga", "Toxic Parenting"],
    schedule: [
      { day: "Selasa", time: "16.00 - 20.00", type: "Online Offline" }]
  },
  {
    name: "Tekstidinegari Thaufik, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: TekstidinegariThaufik,
    sipp: "20180809-2024-1359",
    specialties: ["Kecemasan", "Depresi", "Trauma", "Psikosomatis Akibat Stress", "Self-Harm/NSSI", "Masalah Regulasi Emosi", "Quarter Life Crisis dan Loneliness", "Kehilangan/menurunnya motivasi", "Masalah Relasi Sosial", "Konseling Pranikah"],
    schedule: [
      { day: "Kamis", time: "09.00 - 14.00", type: "Offline" },
      { day: "Sabtu", time: "14.00 - 17.00", type: "Offline" },
    ]
  },
  {
    name: "Norhafizha Rinanda, S.Psi., M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa", "Psikolog Anak & Pendidikan"],
    image: NorhafizhaRinanda,
    sipp: "503/002/SIPPK-DisPMPTSP/HSS/VI/2022",
    specialties: ["Anxiety", "PTSD", "Relationship", "Penanganan KOrban Kekerasan", "Masalah Akademik", "+ Lainnya"],
    schedule: [
      { day: "Senin - Kamis", time: "18.00 - 20.00 (sesuai perjanjian)", type: "Online" },
    ]
  },
  {
    name: "Gitarani Sofia, M.Psi., Psikolog.",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: GitaraniSofia,
    sipp: "20250539-2025-01-1632",
    specialties: ["Kecemasan", "Depresi", "Trauma", "Psikosomatis Akibat Stress", "Self-Harm/NSSI", "+ Masalah Regulasi Emosi", "Quarter Life Crisis dan Loneliness", "Kehilangan/menurunnya motivasi", "Masalah Relasi Sosial", "Konseling Pranikah", "Kehilangan/menurunnya motivasi", "Masalah Relasi Sosial", "Konseling Pranikah"],
    schedule: [
      { day: "Senin", time: "09.00 - 15.00", type: "Online" },
      { day: "Kamis", time: "09.00 - 15.00", type: "Offline" },
      { day: "Jumat", time: "09.00 - 14.00", type: "Online" },
    ]
  },
  {
    name: "Rahmatika Septina Chairunnisa, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Anak & Pendidikan"],
    image: RahmatikaSeptinaChairunnisa,
    sipp: "20191429-2023-02-2109",
    specialties: ["Perkembangan Anak", "Pola Asuh", "Parenting Stress", "Tes Kesiapan Sekolah", "Kecerdasan", "Regulasi Emosi & Kecemasan", "Skrining Tumbuh Kembang"],
    schedule: [
      { day: "Rabu", time: "13.00 - 15.00 (By Appointment)", type: "Offline" },
    ]
  },
  {
    name: "Amanda Putri Yuliardi, M. Psi., Psikolog",
    role: "Psikolog Industri & Organisasi",
    category: ["Psikolog Industri & Organisasi"],
    image: AmandaPutriYuliardi,
    sipp: "20160647-2023-02-2404",
    specialties: ["Kecemasan", "Depresi", "Trauma", "Psikosomatis Akibat Stress", "Self-Harm/NSSI", "+ Masalah Regulasi Emosi", "Quarter Life Crisis dan Loneliness", "Kehilangan/menurunnya motivasi", "Masalah Relasi Sosial", "Konseling Pranikah", "Kehilangan/menurunnya motivasi", "Masalah Relasi Sosial", "Konseling Pranikah"],
    schedule: [
      { day: "By Appointment", type: "Online" },
    ]
  },
  {
    name: "Tri Ayu Arimbi., M. Psi., Psikolog.",
    role: "Psikolog Industri & Organisasi",
    category: ["Psikolog Industri & Organisasi"],
    image: TriAyuArimbi,
    sipp: "0420-15-2-1",
    specialties: ["Kecemasan", "Depresi", "Trauma", "Psikosomatis Akibat Stress", "Self-Harm/NSSI", "+ Masalah Regulasi Emosi", "Quarter Life Crisis dan Loneliness", "Kehilangan/menurunnya motivasi", "Masalah Relasi Sosial", "Konseling Pranikah", "Kehilangan/menurunnya motivasi", "Masalah Relasi Sosial", "Konseling Pranikah"],
    schedule: [
      { day: "Senin - Kamis", time: "14.00 - 17.00", type: "Online" },
      { day: "Jumat", time: "13.00 - 16.00", type: "Online" },
    ]
  },

];

const Team = () => {
  const [activeTab, setActiveTab] = useState("Psikolog Dewasa");
  const [selectedMember, setSelectedMember] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedMember]);

  const activeCategoryDetail = categories.find((cat) => cat.name === activeTab);
  const filteredTeam = teamData.filter((member) =>
    member.category.includes(activeTab)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="tim" className="py-20 bg-[#fdfcf9]" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Tim Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a47] mt-2 mb-4">Tim Profesional Kami</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Bertemu dengan para psikolog bersertifikat kami yang berdedikasi untuk menemani perjalanan kesejahteraan Anda.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-6 py-2 rounded-full border text-sm transition-all duration-300 ${
                activeTab === cat.name
                  ? "bg-[#4a707a] text-white border-[#4a707a] shadow-md"
                  : "bg-white text-gray-400 border-gray-200 hover:border-[#4a707a]/50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <motion.div key={`header-${activeTab}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
          <h3 className="text-2xl font-bold text-[#1e3a47] mb-2">{activeCategoryDetail?.name}</h3>
          <p className="text-gray-400 text-sm mb-4 max-w-4xl leading-relaxed">{activeCategoryDetail?.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest whitespace-nowrap">Daftar Psikolog</span>
            <div className="h-[1px] w-full bg-gray-200"></div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {filteredTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedMember(member)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[5/4] bg-gradient-to-b from-orange-50 to-white relative flex items-end justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-lg font-bold text-[#1e3a47] leading-snug mb-2 min-h-[44px]">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- MODAL DETAIL --- */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-[#1e3a47]/40 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Bagian Foto (Kiri) */}
              <div className="w-full md:w-[40%] bg-[#fdfcf9] flex items-end justify-center pt-10">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-[90%] h-auto object-cover filter contrast-[1.02]"
                />
              </div>

              {/* Bagian Info (Kanan) */}
              <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto max-h-[70vh] md:max-h-[600px]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#1e3a47] mb-1">{selectedMember.name}</h3>
                  <p className="text-[#a67c52] font-medium">{selectedMember.role}</p>
                  <p className="text-xs text-gray-400 mt-2 tracking-widest">SIPP: {selectedMember.sipp}</p>
                </div>

                <div className="h-[1px] w-full bg-gray-100 mb-8" />

                {/* Spesialisasi */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-[#1e3a47] mb-4 uppercase tracking-widest">Spesialisasi Kasus</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.specialties?.map((spec, i) => (
                      <span key={i} className="px-4 py-1.5 bg-[#f3f6f6] text-[#4a707a] rounded-full text-xs font-medium border border-[#4a707a]/10">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Jadwal Praktik */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-[#1e3a47] mb-4 uppercase tracking-widest">Jadwal Praktik</h4>
                  <div className="space-y-3">
                    {selectedMember.schedule?.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm group">
                        <div className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-[#4a707a] mr-3" />
                          <span className="text-gray-600 font-medium w-20">{item.day}</span>
                          <span className="text-gray-400 mx-2">:</span>
                          <span className="text-gray-500">{item.time}</span>
                        </div>
                        <span className="px-3 py-1 bg-[#e8f5f0] text-[#54b18d] rounded-lg text-[10px] font-bold uppercase tracking-tighter">
                          {item.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-4 bg-[#4a707a] text-white rounded-2xl font-bold hover:bg-[#3d5d66] transition-all transform active:scale-[0.98] shadow-lg shadow-[#4a707a]/20">
                  Konsultasi Sekarang
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;