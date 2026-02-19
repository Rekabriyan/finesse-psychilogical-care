import { Heart, Instagram, Mail, Phone } from "lucide-react";

const footerLinks = {
  layanan: [
    { label: "Konseling Psikologi", href: "#layanan" },
    { label: "Asesmen Psikologi", href: "#layanan" },
    { label: "Organizational Partner", href: "#layanan" },
    { label: "Persepsi Perempuan", href: "#layanan" },
  ],
  tentang: [
    { label: "Mengapa Kami", href: "#mengapakami" },
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulankami" },
    { label: "Tim Kami", href: "#tim" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Event", href: "#event" },
    { label: "Kontak", href: "#kontak" },
  ],
  kontak: [
    { label: "Jl. Bengawan No. 45, Cihapit - Bandung", href: "https://www.google.com/maps/place/White+space,+Jl.+Bengawan+No.45,+Cihapit,+Kec.+Bandung+Wetan,+Kota+Bandung,+Jawa+Barat+40114/@-6.9108196,107.6267001,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e7c915fda11f:0xc520c00a5ed35531!8m2!3d-6.9108249!4d107.629275!16s%2Fg%2F11csns7h3x?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D" },
    { label: "halo.finesse@gmail.com", href: "mailto:halo.finesse@gmail.com" },
    { label: "0881-0233-48781", href: "https://wa.me/6288102334878" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={"src/assets/logo-finesse-putih.svg"}
              alt="Finesse Psychological Care"
              className="h-12 w-auto mb-2"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Finesse Psychological Care adalah mitra terpercaya Anda dalam
              perjalanan menuju kesejahteraan psikologis yang holistik.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/finesse.psy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:halo.finesse@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+62881023348781"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tentang */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Tentang</h4>
            <ul className="space-y-3">
              {footerLinks.tentang.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Kontak</h4>
            <ul className="space-y-3">
              {footerLinks.kontak.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Finesse Psychological Care. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
