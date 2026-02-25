import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Import Assets (Tetap sama)
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
import AsmianiFawziah from "/psikolog/asmiani-fawziah.svg";
import AisyadivaIlmiani from "/psikolog/aisyadiva-ilmiani.svg";
import DillaTriaFebrina from "/psikolog/dilla-tria-febrina.svg";
import AyuLaraswati from "/psikolog/ayu-laraswati.svg";
import AnggiRengganis from "/psikolog/anggi-rengganis.svg";
import FarhanZakariyya from "/psikolog/farhan-zakariyya.svg";
import NoviAdelina from "/psikolog/novi-adelina.svg";

const categories = [
  {
    name: "Psikolog Klinis Dewasa",
    description:
      "Memahami dan menangani masalah kesehatan mental individu dewasa melalui pemeriksaan psikologis, konseling, dan terapi.",
  },
  {
    name: "Psikolog Klinis Anak & Pendidikan",
    description:
      "Membantu memahami dan menangani masalah mental, emosional, perilaku, dan tumbuh kembang serta potensi anak.",
  },
  {
    name: "Psikolog Industri & Organisasi",
    description:
      "Membantu perusahaan dalam manajemen SDM dan membantu individu agar sesuai dengan kompetensi organisasi.",
  },
];

const teamData = [
  {
    name: "Novi Adelina, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: NoviAdelina,
    sipp: "20240268 - 2024 - 1358",
    specialties: [
      "Relasi Sosial",
      "Quarter Life Crisis",
      "Anxiety",
      "Stress",
      "Hubungan Keluarga",
      "Career",
    ],
    schedule: [
      {
        day: "By Appointment",
        time: "",
        type: ["Offline", "Online"],
      },
    ],
  },
  {
    name: "Dwi Ayu Elita Kartilia, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: DwiAyuElita,
    sipp: "20220664 - 2023 - 0772",
    specialties: ["Anxiety", "PTSD", "Quarter Life Crisis"],
    schedule: [
      { day: "Senin - Kamis", time: "19.00 - 21.00", type: ["Online"] },
      { day: "Sabtu", time: "10.00 - 15.00", type: ["Online"] },
    ],
  },
  {
    name: "Tekstidinegari Thaufik, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: TekstidinegariThaufik,
    sipp: "20180809-2024-1359",
    specialties: [
      "Kecemasan",
      "Depresi",
      "Trauma",
      "Psikosomatis Akibat Stress",
      "Relationship",
    ],
    schedule: [
      { day: "Kamis", time: "09.00 - 14.00", type: ["Offline"] },
      { day: "Sabtu", time: "14.00 - 17.00", type: ["Offline"] },
    ],
  },
  {
    name: "Astri Firdasannah, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: AstriFirdasannah,
    sipp: "20180763-2022-01-2127",
    specialties: [
      "Anxiety",
      "OCD",
      "Depresi",
      "Quarter Life Crisis",
      "Relationship",
      "Parenting",
    ],
    schedule: [
      { day: "Selasa", time: "16.00 - 20.00", type: ["Online", "Offline"] },
    ],
  },
  {
    name: "Diah Ayu Permatasari, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: DiahAyuPermatasari,
    sipp: "20240269 - 2024 - 1357",
    specialties: [
      "Anxiety",
      "Trauma",
      "Relationship",
      "Regulasi Emosi",
      "Self-Harm",
    ],
    schedule: [{ day: "By Appointment", time: "", type: ["Online"] }],
  },
  {
    name: "Mindy Maghfira, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: MindyMaghfira,
    sipp: "20231327 - 2023 - 0777",
    specialties: [
      "Anxiety",
      "Stress",
      "Depresi",
      "PTSD",
      "Relationship",
      "Regulasi Emosi",
      "Self-Acceptance",
    ],
    schedule: [
      { day: "Selasa", time: "11.00 - 13.00", type: ["Online"] },
      { day: "Rabu", time: "11.00 - 13.00", type: ["Online"] },
      { day: "Jumat", time: "10.00 - 15.00", type: ["Online"] },
    ],
  },
  {
    name: "Astrid Nur Alfaradais, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: AstridNurAlfaradais,
    sipp: "20231329-2023-01-2209",
    specialties: [
      "Anxiety",
      "Stress",
      "Depresi",
      "Gangguan Kepribadian",
      "Relationship",
      "Self Development",
    ],
    schedule: [
      { day: "Kamis", time: "09.00 - 11.00", type: ["Offline"] },
      { day: "Jumat", time: "16.00 - 18.00", type: ["Online"] },
    ],
  },
  {
    name: "Norhafizha Rinanda, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: NorhafizhaRinanda,
    sipp: "503/002/SIPPK-DisPMPTSP/HSS/VI/2022",
    specialties: ["Anxiety", "PTSD", "Relationship", "Masalah Akademik"],
    schedule: [
      { day: "Senin - Kamis", time: "18.00 - 20.00", type: ["Online"] },
    ],
  },
  {
    name: "Rifa Viscarini, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: RifaViscarini,
    sipp: "20250540 - 2025 - 0990",
    specialties: [
      "Trauma",
      "Relationship",
      "Konseling Pra-nikah",
      "Regulasi Emosi",
    ],
    schedule: [
      {
        day: "Kamis",
        time: "09.00 - 15.00",
        type: ["Offline"],
      },
      {
        day: "Setiap Hari",
        time: "09.00 - 15.00",
        type: ["Online"],
      },
    ],
  },
  {
    name: "Gitarani Sofia, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Klinis Dewasa"],
    image: GitaraniSofia,
    sipp: "20250539-2025-01-1632",
    specialties: ["Relationship", "Penyesuaian Diri", "Kecemasan", "Stress"],
    schedule: [
      {
        day: "Kamis",
        time: "09.00 - 15.00",
        type: ["Offline"],
      },
      {
        day: "Jumat",
        time: "09.00 - 15.00",
        type: ["Offline"],
      },
      {
        day: "Senin",
        time: "09.00 - 16.00",
        type: ["Online"],
      },
      {
        day: "Kamis",
        time: "09.00 - 16.00",
        type: ["Online"],
      },
      {
        day: "Jumat",
        time: "09.00 - 16.00",
        type: ["Online"],
      },
    ],
  },
  {
    name: "Farhan Zakariyya, M.Psi., Psikolog",
    role: "Psikolog Klinis Anak & Pendidikan",
    category: ["Psikolog Klinis Anak & Pendidikan"],
    image: FarhanZakariyya,
    sipp: "20170643 - 2020 - 02 - 0502",
    specialties: [
      "Masalah Belajar",
      "Minat & Bakat",
      "Kesehatan Mental",
      "Relationship",
    ],
    schedule: [
      { day: "Rabu", time: "13.00 - 15.00", type: ["Offline", "Online"] },
      { day: "Kamis", time: "13.00 - 15.00", type: ["Offline", "Online"] },
    ],
  },
  {
    name: "Dilla Tria Febrina, M.Psi., Psikolog",
    role: "Psikolog Klinis Anak & Pendidikan",
    category: ["Psikolog Klinis Anak & Pendidikan"],
    image: DillaTriaFebrina,
    sipp: "20180812 – 2021 – 02 – 0387",
    specialties: [
      "Kesiapan Sekolah",
      "Minat & Bakat",
      "Masalah Belajar",
      "Parenting",
    ],
    schedule: [
      { day: "By Appointment", time: "", type: ["Offline", "Online"] },
      { day: "Jumat", time: "13.00 - 16.00", type: ["Online"] },
    ],
  },
  {
    name: "Rahmatika Septina Chairunnisa, M.Psi., Psikolog",
    role: "Psikolog Klinis Anak & Pendidikan",
    category: ["Psikolog Klinis Anak & Pendidikan"],
    image: RahmatikaSeptinaChairunnisa,
    sipp: "20191429-2023-02-2109",
    specialties: [
      "Perkembangan Anak",
      "Pola Asuh",
      "Parenting Stress",
      "Kesiapan Sekolah",
    ],
    schedule: [
      {
        day: "Rabu",
        time: "13.00 - 15.00 (By Appointment)",
        type: ["Offline"],
      },
    ],
  },
  {
    name: "Anggi Rengganis, M.Psi., Psikolog",
    role: "Psikolog Klinis Anak & Pendidikan",
    category: ["Psikolog Klinis Anak & Pendidikan"],
    image: AnggiRengganis,
    sipp: "20181107 - 2021 - 01 - 0117",
    specialties: [
      "Perkembangan Anak",
      "School Refusal",
      "ABK",
      "Masalah Emosi Remaja",
    ],
    schedule: [
      { day: "Selasa", time: "08.00 - 12.00", type: ["Offline"] },
      { day: "Rabu", time: "08.00 - 12.00", type: ["Offline"] },
      { day: "Kamis", time: "08.00 - 12.00", type: ["Offline"] },
      { day: "Selasa", time: "09.00 - 16.00", type: ["Online"] },
      { day: "Rabu", time: "09.00 - 16.00", type: ["Online"] },
      { day: "Kamis", time: "09.00 - 16.00", type: ["Online"] },
    ],
  },
  {
    name: "Ayu Laraswati Setianing Budi, M.Psi., Psikolog",
    role: "Psikolog Klinis Anak & Pendidikan",
    category: ["Psikolog Klinis Anak & Pendidikan"],
    image: AyuLaraswati,
    sipp: "0420-15-2-1",
    specialties: [
      "Masalah Remaja",
      "Masalah Belajar",
      "Minat & Bakat",
      "Parenting",
    ],
    schedule: [
      { day: "Sabtu", time: "10.00 - 16.00", type: ["Offline"] },
      { day: "Minggu", time: "10.00 - 16.00", type: ["Offline"] },
      { day: "By Appointment", time: "", type: ["Online"] },
    ],
  },
  {
    name: "Aisyadiva Ilmiani, M.Psi., Psikolog",
    role: "Psikolog Klinis Anak & Pendidikan",
    category: ["Psikolog Klinis Anak & Pendidikan"],
    image: AisyadivaIlmiani,
    sipp: "20231335 - 2023 - 01 - 2220",
    specialties: [
      "Masalah Belajar",
      "Karir",
      "Kesiapan Sekolah",
      "Relationship",
    ],
    schedule: [{ day: "Minggu", time: "09.00 - 12.00", type: ["Online"] }],
  },
  {
    name: "Asmiani Fawziah, M.Psi., Psikolog",
    role: "Psikolog Industri & Organisasi",
    category: ["Psikolog Industri & Organisasi"],
    image: AsmianiFawziah,
    sipp: "20191151 - 2019 - 01 - 0197",
    specialties: [
      "Relasi Sosial",
      "Hubungan Keluarga",
      "Self Development",
      "Assessment Center",
    ],
    schedule: [
      { day: "By Appointment", time: "", type: ["Offline", "Online"] },
    ],
  },
  {
    name: "Tri Ayu Arimbi, M.Psi., Psikolog ",
    role: "Psikolog Industri & Organisasi",
    category: ["Psikolog Industri & Organisasi"],
    image: TriAyuArimbi,
    sipp: "0420-15-2-1",
    specialties: ["Rekrutmen", "Promosi", "Performance Appraisal"],
    schedule: [
      {
        day: "Senin - Kamis",
        time: "14.00 - 17.00",
        type: ["Offline"],
      },
      {
        day: "Jumat",
        time: "13.00 - 16.00",
        type: ["Offline"],
      },
    ],
  },
  {
    name: "Amanda Putri Yuliardi, M.Psi., Psikolog",
    role: "Psikolog Industri & Organisasi",
    category: ["Psikolog Industri & Organisasi"],
    image: AmandaPutriYuliardi,
    sipp: "20160647 - 2023 - 02 - 2404",
    specialties: ["Asesmen & Feedback"],
    schedule: [
      { day: "By Appointment", time: "", type: ["Offline", "Online"] },
    ],
  },
];

const Team = () => {
  const [activeTab, setActiveTab] = useState("Psikolog Klinis Dewasa");
  const [selectedMember, setSelectedMember] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleEscKey = (e) => e.key === "Escape" && setSelectedMember(null);
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscKey);
    }
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [selectedMember]);

  const activeCategoryDetail = categories.find((cat) => cat.name === activeTab);

  // PERBAIKAN: Logika filter karena teamData sekarang flat array
  const filteredTeam = teamData.filter((member) =>
    member.category.some(cat => cat === activeTab),
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
    <section id="tim" className="py-16 md:py-16 bg-[#fdfcf9]" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-[0.2em]">
            Tim Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1D5158] mt-2 mb-4 leading-tight">
            Tim Profesional Kami
          </h2>
          <p className="text-muted-foreground max-w-5xl mx-auto text-sm md:text-base px-4">
            Bertemu dengan para psikolog bersertifikat kami yang berdedikasi
            untuk menemani perjalanan kesejahteraan Anda.
          </p>
        </div>

        {/* Tab Filter & Dropdown Mobile */}
        <div className="relative mb-12 flex justify-center px-4">
          {/* Mobile Dropdown Button */}
          <div className="lg:hidden w-full max-w-xs relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-[#1D5158] font-semibold text-sm transition-all active:scale-95"
            >
              <span>{activeTab}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  {/* Overlay untuk menutup saat klik di luar */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => {
                          setActiveTab(cat.name);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-5 py-4 text-sm transition-colors border-b border-gray-50 last:border-none ${
                          activeTab === cat.name
                            ? "bg-[#f8f6f2] text-[#4a707a] font-bold"
                            : "text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Tab Filter (Sama seperti sebelumnya, disembunyikan di mobile) */}
          <div className="hidden lg:flex flex-wrap justify-center gap-3">
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
        </div>

        {/* Category Description */}
        <motion.div
          key={`header-${activeTab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#1e3a47] mb-2">
            {activeCategoryDetail?.name}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm max-w-6xl leading-relaxed">
            {activeCategoryDetail?.description}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest whitespace-nowrap">
              Daftar Psikolog
            </span>
            <div className="h-[1px] w-full bg-[#C6C8CE]"></div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filteredTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedMember(member)}
              className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/5] sm:aspect-[5/4] bg-[#f8f6f2] relative overflow-hidden shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-3 md:p-5 flex-grow">
                <h4 className="font-heading text-sm md:text-lg font-bold text-[#1D5158] leading-tight mb-1 md:mb-2 line-clamp-2 md:min-h-[44px]">
                  {member.name}
                </h4>
                <p className="text-[10px] md:text-sm text-gray-400 font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-0 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-[#1e3a47]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative bg-white w-full h-full sm:h-auto sm:max-w-4xl md:max-w-5xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[100vh] sm:max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full transition-all text-gray-800 shadow-lg"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Left: Image */}
              <div className="w-full md:w-[40%] lg:w-[45%] bg-[#f8f6f2] flex items-end justify-center relative overflow-hidden shrink-0 h-[35vh] md:h-auto">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-top scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
              </div>

              {/* Modal Right: Content */}
              <div className="w-full md:w-[60%] lg:w-[55%] flex flex-col bg-white overflow-hidden">
                <div className="px-6 md:px-10 pt-6 md:pt-10 pb-4 border-b border-gray-50">
                  <h3 className="text-xl md:text-3xl font-bold text-[#1e3a47] mb-1 leading-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="text-[#a67c52] font-bold text-xs md:text-sm uppercase tracking-wider">
                    {selectedMember.role}
                  </p>
                  <p className="text-gray-400 text-[10px] mt-1 italic">
                    SIPP: {selectedMember.sipp}
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto px-6 md:px-10 py-6 space-y-8">
                  {/* Specialties */}
                  <section>
                    <h4 className="text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-widest">
                      Spesialisasi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialties?.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-50 text-[#4a707a] rounded-lg text-[10px] md:text-xs font-semibold border border-gray-100"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Schedule */}
                  <section>
                    <h4 className="text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-widest">
                      Jadwal Praktik
                    </h4>
                    <div className="grid gap-2.5">
                      {selectedMember.schedule?.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-[#fcfcfc] rounded-xl border border-gray-50 transition-all hover:border-[#4a707a]/20"
                        >
                          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                            <span className="text-gray-800 font-bold text-xs">
                              {item.day}
                            </span>
                            <span className="text-gray-500 text-[10px] md:text-xs">
                              {item.time}
                            </span>
                          </div>
                          <div className="flex gap-1.5">
                            {item.type.map((t, idx) => (
                              <span
                                key={idx}
                                className={`px-2 py-0.5 rounded-full text-[8px] font-extrabold uppercase tracking-tighter ${
                                  t.toLowerCase() === "online"
                                    ? "bg-[#e8f5f0] text-[#54b18d]"
                                    : "bg-[#e0f2fe] text-[#0284c7]"
                                }`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Footer Action */}
                <div className="p-6 md:p-10 pt-4 border-t border-gray-50">
                  <a
                    href="https://wa.me/6287824820728?text=Halo,%20saya%20ingin%20konsultasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button className="w-full py-4 bg-[#4a707a] text-white rounded-2xl font-bold hover:bg-[#3d5d66] transition-all flex items-center justify-center gap-3">
                      Konsultasi Sekarang
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;
