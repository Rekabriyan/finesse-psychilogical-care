import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/assets/hero-banner.webp";

const GOOGLE_FORM_URL = "#"; // Replace with actual Google Form URL

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-finesse-cream pt-20">
      {/* Hero Image with Gradient Overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <img
            src={HeroBanner}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay from left to blend with background */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          {/* Additional white overlay for softer look */}
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Finesse Psychological Care
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Menemani Perjalanan Kesehatan
              <span className="text-primary block mt-2">Mental Anda</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Finesse hadir sebagai mitra terpercaya dalam perjalanan Anda menuju
              kesejahteraan psikologis. Dengan pendekatan holistik dan berbasis
              riset, kami siap membantu Anda menemukan keseimbangan hidup.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Mulai Konsultasi
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
              >
                <a href="#layanan">Lihat Layanan</a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="flex flex-col items-center lg:items-start">
                <Heart className="text-accent mb-2" size={24} />
                <span className="text-sm text-muted-foreground text-center lg:text-left">
                  Pendekatan Holistik
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Shield className="text-accent mb-2" size={24} />
                <span className="text-sm text-muted-foreground text-center lg:text-left">
                  Privasi Terjamin
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Sparkles className="text-accent mb-2" size={24} />
                <span className="text-sm text-muted-foreground text-center lg:text-left">
                  Profesional Bersertifikat
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;