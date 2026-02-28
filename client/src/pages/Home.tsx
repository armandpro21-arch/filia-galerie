import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, ShoppingBag, Search, Menu, X } from "lucide-react";

/**
 * Direction Artistique: Galerie de Design Contemporain
 * - Minimalisme chaleureux avec bois clair et tons neutres
 * - Typographie éditoriale élégante (Playfair Display + Montserrat)
 * - Compositions asymétriques avec espaces généreux
 * - Narration produit et détails matière
 * - Interactions fluides et révélations au scroll
 * - Système de filtrage discret et élégant pour les univers
 */

// Données des univers avec catégories
const UNIVERS_DATA = [
  {
    id: 1,
    name: "Salon Minimal",
    description: "Canapé crème, table chêne clair, lumière généreuse",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-salon-minimal_b1a21b17.png",
    categories: ["tous", "canapés", "tables", "matières", "bois-clair"]
  },
  {
    id: 2,
    name: "Chambre Apaisée",
    description: "Lit bois, lin blanc, atmosphère sereine",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-chambre-apaisee_2a07bb46.png",
    categories: ["tous", "lits", "matières"]
  },
  {
    id: 3,
    name: "Matières Naturelles",
    description: "Bois, lin, céramique, textures tactiles",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-matieres-naturelles_42cfcee3.png",
    categories: ["tous", "matières", "bois-clair"]
  },
  {
    id: 4,
    name: "Bois Clair",
    description: "Salle à manger contemporaine, rangements",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-bois-clair_1166c0c8.png",
    categories: ["tous", "tables", "chaises", "rangements", "bois-clair"]
  },
  {
    id: 5,
    name: "Intérieur Lumineux",
    description: "Baies vitrées, lumière inondante",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-interieur-lumineux_6d530b15.png",
    categories: ["tous", "canapés", "tables"]
  },
  {
    id: 6,
    name: "Ligne Contemporaine",
    description: "Art géométrique, formes épurées",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-ligne-contemporaine_b1eda3db.png",
    categories: ["tous", "chaises", "tables"]
  },
  {
    id: 7,
    name: "Collection Essentielle",
    description: "Pièces curées, minimalisme intentionnel",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-collection-essentielle_94e5a031.png",
    categories: ["tous", "canapés", "tables", "chaises"]
  },
  {
    id: 8,
    name: "Espace Travail",
    description: "Bureau minimaliste, lumière naturelle",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-espace-travail_253bbfe6.png",
    categories: ["tous", "rangements", "tables"]
  }
];

const CATEGORIES = [
  { id: "tous", label: "Tous" },
  { id: "canapés", label: "Canapés" },
  { id: "tables", label: "Tables" },
  { id: "chaises", label: "Chaises" },
  { id: "lits", label: "Lits" },
  { id: "rangements", label: "Rangements" },
  { id: "matières", label: "Matières" },
  { id: "bois-clair", label: "Bois clair" }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState("tous");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtrer les univers selon la catégorie active
  const filteredUnivers = UNIVERS_DATA.filter(univers =>
    univers.categories.includes(activeCategory)
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Premium */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-6">
          <a href="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity" style={{fontFamily: 'Bodoni'}}>
            Filia appartement furnitures
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            <a href="/canapes" className="text-label hover:text-secondary transition-colors">
              Canapés
            </a>
            <a href="/tables" className="text-label hover:text-secondary transition-colors">
              Tables
            </a>
            <a href="/chaises" className="text-label hover:text-secondary transition-colors">
              Chaises
            </a>
            <a href="/collection" className="text-label hover:text-secondary transition-colors">
              Collection
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container py-6 space-y-4">
              <a href="/canapes" className="block text-label hover:text-secondary transition-colors">
                Canapés
              </a>
              <a href="/tables" className="block text-label hover:text-secondary transition-colors">
                Tables
              </a>
              <a href="/chaises" className="block text-label hover:text-secondary transition-colors">
                Chaises
              </a>
              <a href="/collection" className="block text-label hover:text-secondary transition-colors">
                Collection
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Immersive */}
      <section className="pt-32 pb-0 md:pt-40 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Left: Editorial Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-32 bg-background">
            <div className="max-w-md">
              <p className="text-label text-secondary mb-6">
                Édition Galerie
              </p>
              <h1 className="text-editorial mb-6 leading-tight">
                L'intégrale de la maison
              </h1>
              <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
                Découvrez notre collection exclusive de mobilier contemporain. Chaque pièce est une œuvre de design minimaliste, pensée pour créer des espaces de vie intemporels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/collection" className="btn-premium text-center">
                  Découvrir
                  <ChevronRight className="inline ml-2" size={16} />
                </a>
                <button className="btn-premium-secondary">
                  Explorer les Nouveautés
                </button>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div
            className="relative h-96 md:h-auto md:min-h-screen overflow-hidden"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-salon-minimal_b1a21b17.png"
              alt="Salon minimaliste luxe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collections Section - Editorial Gallery with Filtering */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="mb-16">
            <p className="text-label text-secondary mb-4">Collections</p>
            <h2 className="text-editorial mb-12">Nos Univers</h2>
          </div>

          {/* Category Filter - Chips Filia Style */}
          <div className="mb-12 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex gap-3 md:gap-4 min-w-min md:min-w-0 md:flex-wrap">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 md:flex-shrink ${
                    activeCategory === category.id
                      ? "bg-secondary text-background border border-secondary shadow-sm"
                      : "bg-muted/40 text-foreground border border-border/50 hover:bg-muted/60 hover:border-border"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500">
            {filteredUnivers.map((univers) => (
              <article key={univers.id} className="group cursor-pointer animate-fadeIn">
                <div className="relative overflow-hidden mb-6 aspect-square">
                  <img
                    src={univers.image}
                    alt={univers.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">
                  {univers.name}
                </h3>
                <p className="text-foreground/60 text-sm">{univers.description}</p>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredUnivers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60">Aucun univers trouvé pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Editorial Section - Material Focus */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/product-sofa-detail_ff94bbe4.png"
                alt="Détail matière - Texture bois"
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <p className="text-label text-secondary mb-6">Matière & Artisanat</p>
              <h2 className="text-editorial mb-6">
                Chaque détail compte
              </h2>
              <p className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
                Nos pièces sont le fruit d'un travail minutieux. Nous sélectionnons les meilleurs bois, les matériaux les plus nobles, et travaillons avec des artisans passionnés pour créer du mobilier intemporel.
              </p>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Bois massif certifié et écologiquement responsable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Finitions naturelles et non toxiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Assemblage artisanal selon les techniques traditionnelles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Garantie à vie sur les défauts de fabrication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section - Inspirations & Conseils */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="mb-16">
            <p className="text-label text-secondary mb-4">Inspirations</p>
            <h2 className="text-editorial">Conseils & Tendances</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Article 1 */}
            <article className="group">
              <div className="relative overflow-hidden mb-6 aspect-video">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/ambiance-bedroom-warm-light_84d966b4.png"
                  alt="Chambre minimaliste"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-label text-secondary mb-3">Bien-vivre</p>
              <h3 className="text-editorial text-lg mb-3 group-hover:text-secondary transition-colors">
                L'art de créer une chambre apaisante
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Découvrez comment transformer votre chambre en sanctuaire de calme avec les bonnes pièces de mobilier et une palette de couleurs harmonieuse.
              </p>
            </article>

            {/* Article 2 */}
            <article className="group">
              <div className="relative overflow-hidden mb-6 aspect-video">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/ambiance-living-room-wood-floor_30c2f836.png"
                  alt="Salon contemporain"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-label text-secondary mb-3">Design</p>
              <h3 className="text-editorial text-lg mb-3 group-hover:text-secondary transition-colors">
                Minimalisme et fonctionnalité
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Explorez comment le minimalisme contemporain crée des espaces de vie épurés, fonctionnels et intemporels, sans sacrifier le confort.
              </p>
            </article>

            {/* Article 3 */}
            <article className="group">
              <div className="relative overflow-hidden mb-6 aspect-video">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/product-storage-cabinet-wood_6446dd49.png"
                  alt="Rangement bois"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-label text-secondary mb-3">Matière</p>
              <h3 className="text-editorial text-lg mb-3 group-hover:text-secondary transition-colors">
                Le bois : matériau intemporel
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Comprenez pourquoi le bois massif reste le choix privilégié des designers pour créer un mobilier durable et authentique.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 bg-muted/20 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-serif font-semibold mb-6">Filia</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Mobilier de prestige pour intérieurs contemporains. Chaque pièce est une invitation au bien-vivre.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-4">Collections</h5>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="/canapes" className="hover:text-secondary transition-colors">Canapés</a></li>
                <li><a href="/tables" className="hover:text-secondary transition-colors">Tables</a></li>
                <li><a href="/chaises" className="hover:text-secondary transition-colors">Chaises</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-4">Information</h5>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-secondary transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Livraison</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-4">Légal</h5>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Conditions</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>© 2026 Filia Appartement. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
