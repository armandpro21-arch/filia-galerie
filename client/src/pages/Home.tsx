import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronRight, ShoppingBag, Search, Menu, X, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FILIA GALERIE - Luxury Linen Home Store
 * Direction Artistique: Minimalisme luxueux, éditoriale, immersif
 * 
 * Éléments clés:
 * - Animations cinématiques fluides
 * - Micro-interactions élégantes
 * - Parallaxe moderne subtil
 * - Transitions sophistiquées
 * - Effets de révélation au scroll
 * - Typographie premium (Playfair Display + Montserrat)
 * - Palette: Blanc, Beige, Crème, Gris clair, touches d'or
 */

// Données des collections
const COLLECTIONS = [
  {
    id: 1,
    name: "Linge de Lit Premium",
    description: "Draps en coton égyptien, housses de couette luxe",
    image: "/images/hero.jpg",
    category: "bedding"
  },
  {
    id: 2,
    name: "Serviettes Spa",
    description: "Serviettes de bain premium, peignoirs de luxe",
    image: "/images/bath.jpg",
    category: "bath"
  },
  {
    id: 3,
    name: "Textiles d'Intérieur",
    description: "Plaids, coussins, textiles de décoration",
    image: "/images/detail.jpg",
    category: "home"
  },
  {
    id: 4,
    name: "Collection Showroom",
    description: "Pièces d'exception, éditions limitées",
    image: "/images/showroom.jpg",
    category: "collection"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "La qualité exceptionnelle de ces textiles a transformé mon expérience quotidienne. Chaque détail respire le luxe.",
    author: "Marie Dubois",
    role: "Architecte d'intérieur"
  },
  {
    id: 2,
    text: "Un savoir-faire inégalé. Les draps sont d'une douceur incomparable, les finitions impeccables.",
    author: "Jean Leclerc",
    role: "Collectionneur"
  },
  {
    id: 3,
    text: "Filia Galerie redéfinit le luxe accessible. Chaque produit est une œuvre d'art.",
    author: "Sophie Martin",
    role: "Designer"
  }
];

const FEATURES = [
  {
    title: "Coton Égyptien Premium",
    description: "Les plus belles fibres du monde, sélectionnées avec soin pour leur douceur incomparable."
  },
  {
    title: "Teinture Naturelle",
    description: "Processus de teinture écologique respectant l'environnement et la peau."
  },
  {
    title: "Coutures Artisanales",
    description: "Chaque pièce est finalisée à la main par nos artisans spécialisés."
  },
  {
    title: "Durabilité Garantie",
    description: "Conçus pour durer des années, nos textiles gagnent en douceur avec le temps."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation Premium - Sticky with Backdrop Blur */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30"
      >
        <div className="container flex items-center justify-between py-5">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="text-xl md:text-2xl font-serif font-light tracking-widest hover:opacity-70 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            FILIA GALERIE
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            {["Linge de Lit", "Bain", "Décoration", "Collection"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-sm font-light tracking-wide text-foreground/70 hover:text-foreground transition-colors relative group"
                whileHover={{ color: "#1a1a1a" }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-foreground"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <motion.button 
              className="p-2 hover:bg-muted/40 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={18} className="text-foreground/70" />
            </motion.button>
            <motion.button 
              className="p-2 hover:bg-muted/40 rounded-full transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={18} className="text-foreground/70" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted/40 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl"
            >
              <div className="container py-6 space-y-4">
                {["Linge de Lit", "Bain", "Décoration", "Collection"].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block text-sm font-light tracking-wide text-foreground/70 hover:text-foreground transition-colors"
                    whileHover={{ x: 8 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section - Immersive with Parallax */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-0 md:pt-40 min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: scrollY * 0.5
          }}
        >
          <img
            src="/images/hero.jpg"
            alt="Chambre luxe avec linge premium"
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Editorial Content */}
            <motion.div
              className="max-w-xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p 
                className="text-label text-secondary mb-6 tracking-widest"
                variants={itemVariants}
              >
                ÉDITION GALERIE
              </motion.p>

              <motion.h1 
                className="text-5xl md:text-7xl font-serif font-light leading-tight mb-8 text-foreground"
                variants={titleVariants}
              >
                Luxe & Confort
              </motion.h1>

              <motion.p 
                className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed font-light"
                variants={itemVariants}
              >
                Découvrez notre collection exclusive de linge de maison premium. Chaque pièce est une célébration du savoir-faire artisanal et de la qualité intemporelle.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                variants={itemVariants}
              >
                <motion.button
                  className="px-8 py-4 border border-foreground text-foreground font-light tracking-wider text-sm hover:bg-foreground hover:text-background transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  DÉCOUVRIR
                  <ChevronRight className="inline ml-2" size={16} />
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-secondary text-secondary font-light tracking-wider text-sm hover:bg-secondary hover:text-background transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  COLLECTION
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: Decorative Element */}
            <motion.div
              className="hidden md:block relative h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl" />
              <motion.div
                className="absolute inset-0 border border-secondary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-foreground/50" />
        </motion.div>
      </section>

      {/* Collections Section - Grid with Hover Effects */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-label text-secondary mb-6 tracking-widest">NOS COLLECTIONS</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light">
              Univers de Luxe
            </h2>
          </motion.div>

          {/* Collections Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {COLLECTIONS.map((collection, index) => (
              <motion.div
                key={collection.id}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden mb-8 aspect-square rounded-sm">
                  <motion.img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Content */}
                <motion.h3 
                  className="text-2xl md:text-3xl font-serif font-light mb-3 group-hover:text-secondary transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {collection.name}
                </motion.h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {collection.description}
                </p>

                {/* CTA Link */}
                <motion.div
                  className="mt-6 flex items-center gap-2 text-secondary font-light tracking-wide text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  EXPLORER
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight size={16} />
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section - Premium Materials & Craftsmanship */}
      <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="container">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-label text-secondary mb-6 tracking-widest">SAVOIR-FAIRE</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light">
              Excellence & Qualité
            </h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-8 border border-border/50 hover:border-secondary/50 transition-colors duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />

                {/* Number */}
                <div className="text-5xl font-serif font-light text-secondary/20 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif font-light mb-4 group-hover:text-secondary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Immersive Showcase */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-label text-secondary mb-6 tracking-widest">GALERIE</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light">
              Mise en Scène
            </h2>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/images/bedding.jpg", title: "Linge de Lit" },
              { src: "/images/bath.jpg", title: "Collection Bain" },
              { src: "/images/towels.png", title: "Serviettes Premium" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden aspect-square group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="p-8 w-full"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white font-light text-lg tracking-wide">
                      {item.title}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Reviews */}
      <section className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
        <div className="container">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-label text-secondary mb-6 tracking-widest">TÉMOIGNAGES</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light">
              Avis Clients
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="p-8 bg-background border border-border/50 hover:border-secondary/50 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                {/* Quote Mark */}
                <div className="text-5xl font-serif text-secondary/30 mb-4">"</div>

                {/* Text */}
                <p className="text-foreground/80 font-light leading-relaxed mb-8 italic">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t border-border/30 pt-6">
                  <p className="font-serif font-light text-foreground mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-secondary font-light text-sm tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Final Call to Action */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-label text-secondary mb-6 tracking-widest">REJOIGNEZ-NOUS</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8">
              Vivez l'Expérience Filia
            </h2>
            <p className="text-lg text-foreground/70 font-light mb-12 leading-relaxed">
              Explorez notre collection complète et découvrez comment le luxe peut transformer votre quotidien.
            </p>

            <motion.button
              className="px-12 py-4 border border-foreground text-foreground font-light tracking-wider text-sm hover:bg-foreground hover:text-background transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ACCÉDER À LA BOUTIQUE
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <p className="font-serif font-light text-lg mb-4">FILIA GALERIE</p>
              <p className="text-foreground/60 font-light text-sm">
                Linge de maison premium depuis 2020
              </p>
            </div>
            <div>
              <p className="text-label text-secondary mb-6 tracking-widest">COLLECTIONS</p>
              <ul className="space-y-3">
                {["Linge de Lit", "Bain", "Décoration", "Éditions Limitées"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-foreground/70 font-light text-sm hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-label text-secondary mb-6 tracking-widest">SUPPORT</p>
              <ul className="space-y-3">
                {["À Propos", "Livraison", "Retours", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-foreground/70 font-light text-sm hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-label text-secondary mb-6 tracking-widest">SUIVEZ-NOUS</p>
              <ul className="space-y-3">
                {["Instagram", "Pinterest", "Facebook", "LinkedIn"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-foreground/70 font-light text-sm hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8">
            <p className="text-foreground/50 font-light text-sm text-center">
              © 2026 Filia Galerie. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
