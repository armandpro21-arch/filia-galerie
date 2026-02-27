import { useState } from "react";
import { Link, useRoute } from "wouter";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

/**
 * Direction Artistique: Page Catégorie Éditoriale
 * - Grille asymétriques pour éviter la monotonie
 * - Images plein écran avec détails produit
 * - Narration et contextualisation de chaque pièce
 * - Interactions fluides au survol
 */

const PRODUCTS = {
  canapes: [
    {
      id: 1,
      name: "Sofa Minimaliste",
      description: "Canapé 3 places en lin naturel avec structure en chêne massif",
      price: "€3,200",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/hero-living-room_5971783a.png",
      materials: "Lin 100%, Chêne massif",
      dimensions: "220 × 90 × 85 cm",
    },
    {
      id: 2,
      name: "Sectional Contemporain",
      description: "Composition modulable avec accoudoirs en bois",
      price: "€4,500",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/minimalist-bedroom_2dfe9d97.png",
      materials: "Lin 100%, Chêne massif",
      dimensions: "280 × 120 × 85 cm",
    },
  ],
  tables: [
    {
      id: 3,
      name: "Table Basse Architecte",
      description: "Table basse en chêne clair avec plateau minimaliste",
      price: "€1,800",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/wood-texture-detail_ae5828ff.png",
      materials: "Chêne massif",
      dimensions: "120 × 60 × 40 cm",
    },
    {
      id: 5,
      name: "Table Salle à Manger Oak",
      description: "Table de salle à manger en chêne clair avec structure épurée",
      price: "€2,400",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/product-table-oak-minimal_e3ba5910.png",
      materials: "Chêne massif, Finition naturelle",
      dimensions: "180 × 90 × 75 cm",
    },
  ],
  chaises: [
    {
      id: 4,
      name: "Chaise Scandinave",
      description: "Chaise de salle à manger en bois avec assise en lin",
      price: "€680",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/gallery-collection_946ffda0.png",
      materials: "Chêne, Lin 100%",
      dimensions: "50 × 50 × 85 cm",
    },
    {
      id: 6,
      name: "Chaise Contemporaine Bois",
      description: "Chaise design avec backrest organique et structure épurée",
      price: "€850",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/product-chair-natural-wood_5c15543e.png",
      materials: "Chêne massif, Finition naturelle",
      dimensions: "55 × 52 × 82 cm",
    },
  ],
};

export default function Category() {
  const [, params] = useRoute("/collection/:category");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const category = (params?.category as keyof typeof PRODUCTS) || "canapes";
  const products = PRODUCTS[category] || [];

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-6">
          <a href="/" className="text-2xl font-serif font-semibold tracking-tight">
            Filia
          </a>
          <a href="/" className="text-label hover:text-secondary transition-colors">
            <ChevronLeft className="inline mr-2" size={16} />
            Retour
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container">
          <div className="mb-8">
            <p className="text-label text-secondary mb-4">Collection</p>
            <h1 className="text-editorial capitalize">
              {category === "canapes"
                ? "Canapés"
                : category === "tables"
                  ? "Tables"
                  : "Chaises"}
            </h1>
          </div>

          <p className="max-w-2xl text-base md:text-lg text-foreground/80 leading-relaxed mb-12">
            Découvrez notre sélection exclusive de{" "}
            {category === "canapes"
              ? "canapés"
              : category === "tables"
                ? "tables"
                : "chaises"}{" "}
            haut de gamme. Chaque pièce est pensée pour créer des espaces de vie
            intemporels et confortables.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 items-center">
            <a href="/collection/canapes" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${category === "canapes" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-foreground hover:bg-muted/80 border border-border"}`}>
              Tous
            </a>
            <a href="/collection/canapes" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${category === "canapes" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-foreground hover:bg-muted/80 border border-border"}`}>
              Canapés
            </a>
            <a href="/collection/tables" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${category === "tables" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-foreground hover:bg-muted/80 border border-border"}`}>
              Télévisions
            </a>
            <a href="/collection/tables" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${category === "tables" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-foreground hover:bg-muted/80 border border-border"}`}>
              Tables
            </a>
            <a href="/collection/chaises" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${category === "chaises" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-foreground hover:bg-muted/80 border border-border"}`}>
              Chaises
            </a>
            <button className="px-5 py-2.5 rounded-full text-sm font-medium bg-muted text-foreground hover:bg-muted/80 border border-border transition-all duration-300">
              Lits
            </button>
            <button className="px-5 py-2.5 rounded-full text-sm font-medium bg-muted text-foreground hover:bg-muted/80 border border-border transition-all duration-300">
              Rangements
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid - Asymmetric */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {products.map((product, index) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <a
                  className={`group cursor-pointer ${
                    index === 0 ? "md:col-span-1" : "md:col-span-1"
                  }`}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden mb-8 aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-6 right-6 p-3 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    >
                      <Heart
                        size={20}
                        className={
                          wishlist.includes(product.id)
                            ? "fill-secondary text-secondary"
                            : "text-foreground"
                        }
                      />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-editorial text-2xl mb-2 group-hover:text-secondary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <p className="text-label text-secondary mb-1">
                          Matériaux
                        </p>
                        <p className="text-sm text-foreground/80">
                          {product.materials}
                        </p>
                      </div>
                      <div>
                        <p className="text-label text-secondary mb-1">
                          Dimensions
                        </p>
                        <p className="text-sm text-foreground/80">
                          {product.dimensions}
                        </p>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-2xl font-serif text-foreground">
                        {product.price}
                      </span>
                      <div className="flex items-center gap-2 text-label text-secondary group-hover:gap-3 transition-all">
                        Voir
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-label mb-6">Filia</h4>
              <p className="text-sm text-background/80 leading-relaxed">
                Galerie de mobilier contemporain pour les intérieurs de
                prestige.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-6">Collections</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/collection/canapes" className="hover:text-secondary transition-colors">
                    Canapés
                  </a>
                </li>
                <li>
                  <a href="/collection/tables" className="hover:text-secondary transition-colors">
                    Tables
                  </a>
                </li>
                <li>
                  <a href="/collection/chaises" className="hover:text-secondary transition-colors">
                    Chaises
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-label mb-6">Infos</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    À Propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2026 Filia Appartement. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
