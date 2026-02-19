import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPrimary from "@/assets/logo-finesse.svg";

const WHATSAPP_URL = "https://wa.me/6287824820728";

const navLinks = [
  { label: "Mengapa Kami", href: "#mengapakami" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulankami" },
  { label: "Tim Kami", href: "#tim" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Event", href: "#event" },
  { label: "Kontak", href: "#kontak" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi khusus untuk handle klik navigasi
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    // Tutup menu mobile terlebih dahulu
    setIsMobileMenuOpen(false);

    if (element) {
      // Memberikan sedikit delay agar menu mobile tertutup dulu sebelum scroll
      setTimeout(() => {
        const headerOffset = 80; // Sesuaikan dengan tinggi header Anda
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 300); // 300ms sesuai dengan durasi transisi Framer Motion
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <img src={logoPrimary} alt="Logo" className="h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Konsultasi Sekarang</a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-3 border-b border-border/50"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-primary mt-4 w-full">
                <a href={WHATSAPP_URL} target="_blank">Konsultasi Sekarang</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
