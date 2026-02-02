import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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
    description: "Membantu memahami dan menangani masalah mental, emosional, perilaku, dan tumbuh kembang serta potensi anak, memahami cara belajar, mengatasi kesulitan dalam belajar, dan juga kebutuhan dan kesiapan belajar dengan optimal.",
  },
  {
    name: "Psikolog Industri & Organisasi",
    description: "Membantu perusahaan dalam memilih, mengembangkan dan menjaga kinerja karyawan agar lebih sehat dan produktif, dan membantu individu dalam ruang lingkup organisasi agar lebih sesuai dengan kompetensi dan potensi yang dimiliki.",
  },
];

const teamData = [
  {
    name: "Mindy Maghfira, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: MindyMaghfira,
  },
  {
    name: "Rifa Viscarini, M.Psi., Psikolog.",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: RifaViscarini,
  },
  {
    name: "Dwi Ayu Elita Kartilia, M.Psi , Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: DwiAyuElita,
  },
  {
    name: "Astrid Nur Alfaradais, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: AstridNurAlfaradais,
  },
  {
    name: "Diah Ayu Permatasari, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: DiahAyuPermatasari,
  },
  {
    name: "Astri Firdasannah, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: AstriFirdasannah,
  },
  {
    name: "Tekstidinegari Thaufik, M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: TekstidinegariThaufik,
  },
  {
    name: "Norhafizha Rinanda, S.Psi., M.Psi., Psikolog",
    role: "Psikolog Klinis Dewasa & Anak",
    category: ["Psikolog Dewasa", "Psikolog Anak & Pendidikan"],
    image: NorhafizhaRinanda,
  },
  {
    name: "Gitarani Sofia, M.Psi., Psikolog.",
    role: "Psikolog Klinis Dewasa",
    category: ["Psikolog Dewasa"],
    image: GitaraniSofia,
  },
  {
    name: "Rahmatika Septina Chairunnisa, M.Psi., Psikolog.",
    role: "Psikolog Klinis Anak & Pendidikan",
    category: ["Psikolog Anak & Pendidikan"],
    image: RahmatikaSeptinaChairunnisa,
  },
  {
    name: "Amanda Putri Yuliardi, M. Psi., Psikolog",
    role: "Psikolog Industri & Organisasi",
    category: ["Psikolog Industri & Organisasi"],
    image: AmandaPutriYuliardi,
  },
  {
    name: "Tri Ayu Arimbi., M. Psi., Psikolog.",
    role: "Psikolog Industri & Organisasi",
    category: ["Psikolog Industri & Organisasi"],
    image: TriAyuArimbi,
  },
];

const Team = () => {
  const [activeTab, setActiveTab] = useState("Psikolog Dewasa");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 1. Mencari detail kategori yang aktif untuk menampilkan deskripsi
  const activeCategoryDetail = categories.find((cat) => cat.name === activeTab);

  // 2. Filter tim berdasarkan category (array)
  const filteredTeam = teamData.filter((member) =>
    member.category.includes(activeTab)
  );

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
    <section id="tim" className="py-20 bg-[#fdfcf9]" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
            Tim Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a47] mt-2 mb-4">
            Tim Profesional Kami
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Bertemu dengan para psikolog bersertifikat kami yang berdedikasi
            untuk menemani perjalanan kesejahteraan Anda.
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

        {/* Category Title & Dynamic Description */}
        <motion.div 
          key={`header-${activeTab}`} // Key agar deskripsi beranimasi saat ganti tab
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold text-[#1e3a47] mb-2">
            {activeCategoryDetail?.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4 max-w-4xl leading-relaxed">
            {activeCategoryDetail?.description}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest whitespace-nowrap">
              Daftar Psikolog
            </span>
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Photo Area */}
              <div className="aspect-[5/4] bg-gradient-to-b from-orange-50 to-white relative flex items-end justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
              </div>

              {/* Info Area */}
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
    </section>
  );
};

export default Team;