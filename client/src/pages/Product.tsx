import { useState } from "react";
import { Link, useRoute } from "wouter";
import { ChevronLeft, Heart, Share2, ShoppingBag } from "lucide-react";

/**
 * Direction Artistique: Page Produit Premium
 * - Narration complète du produit et de son histoire
 * - Images plein écran avec détails macro
 * - Spécifications techniques détaillées\n * - Interactions luxe et micro-animations
 */

const PRODUCT_DETAILS: Record<
  string,
  {
    name: string;
    price: string;
    image: string;
    description: string;
    story: string;
    materials: string[];
    dimensions: string;
    weight: string;
    colors: string[];
    care: string[];
    features: string[];
  }
> = {
  "1": {
    name: "Sofa Minimaliste",
    price: "€3,200 - investissement pour une décennie de confort",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/hero-living-room_5971783a.png",
    description: "Canapé 3 places en lin naturel avec structure en chêne massif. Une invitation au repos, une ode au minimalisme chaleureux.",
    story:
      "Le Sofa Minimaliste incarne la philosophie Filia : l'harmonie entre confort et épuration. Inspiré par les principes du design scandinave, cette pièce maîtresse a été développée en collaboration avec des artisans français reconnus. Chaque détail, du grain du bois à la couture de la toile, reflète un engagement inébranlable envers la qualité. Le lin naturel, cultivé en Normandie, offre une patine unique qui s'enrichit avec le temps, transformant votre canapé en compagnon de vie intemporel.",
    materials: [
      "Lin 100% naturel (Normandie) - tissage dense et respirant",
      "Chêne massif sélectionné - grain fin et régulier",
      "Ressorts ensachés individuels pour un soutien optimal",
      "Mousse haute densité (35 kg/m³) pour durabilité exceptionnelle",
    ],
    dimensions: "220 × 90 × 85 cm - proportions harmonieuses pour salons de 20-30 m²",
    weight: "85 kg (poids optimal pour stabilité et confort)",
    colors: ["Beige naturel - chaleur minérale", "Taupe doux - élégance intemporelle", "Gris perle - subtilité contemporaine"],
    care: [
      "Aspirer régulièrement avec brosse douce pour préserver la texture du lin",
      "Nettoyer les taches fraîches immédiatement avec eau tiède et savon doux",
      "Éviter l'exposition directe au soleil prolongée pour préserver la couleur",
      "Faire nettoyer professionnellement tous les 2-3 ans pour rajeunir le tissu",
      "Laisser le lin développer sa patine naturelle - c'est le signe d'une belle vie",
    ],
    features: [
      "Pieds en bois massif amovibles pour faciliter le nettoyage",
      "Coussins déhoussables et lavables - design modulaire",
      "Structure garantie 10 ans contre les défauts de fabrication",
      "Livraison et installation incluses en France métropolitaine",
      "Possibilité de commander des coussins supplémentaires",
    ],
  },
};

export default function Product() {
  const [, params] = useRoute("/product/:id");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const productId = params?.id || "1";
  const product = PRODUCT_DETAILS[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Produit non trouvé</h1>
          <a href="/" className="btn-premium">Retour à l'accueil</a>
        </div>
      </div>
    );
  }

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

      {/* Hero Section */}
      <section className="pt-32 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-96 md:h-screen overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-32 bg-background">
            <div className="max-w-md">
              <p className="text-label text-secondary mb-4">Pièce Maîtresse</p>
              <h1 className="text-editorial mb-4">{product.name}</h1>

              <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-border">
                <p className="text-4xl font-serif text-foreground">
                  {product.price}
                </p>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <label className="text-label">Quantité</label>
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-2">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full btn-premium flex items-center justify-center gap-2">
                  <ShoppingBag size={18} />
                  Ajouter au Panier
                </button>

                <div className="flex gap-4">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="flex-1 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-background transition-all flex items-center justify-center gap-2"
                  >
                    <Heart
                      size={18}
                      className={isWishlisted ? "fill-secondary" : ""}
                    />
                    {isWishlisted ? "Sauvegardé" : "Sauvegarder"}
                  </button>
                  <button className="flex-1 py-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    Partager
                  </button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-3 text-sm text-foreground/70">
                <p>✓ Livraison et installation gratuites en France</p>
                <p>✓ Garantie 10 ans sur la structure</p>
                <p>✓ Retour gratuit sous 30 jours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-label text-secondary mb-6">L'Histoire</p>
            <h2 className="text-editorial mb-8">Une Pièce Pensée</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {product.story}
            </p>
          </div>
        </div>
      </section>

      {/* Material Detail Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div>
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-2_1772014683000_na1fn_cHJvZHVjdC1zb2ZhLWRldGFpbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTJfMTc3MjAxNDY4MzAwMF9uYTFmbl9jSEp2WkhWamRDMXpiMjxoTFdSbGRHRnBiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dlvMmDxZKmauC7AR-nlHbgGjORH6k5Sv0FoHKQubjARO~KKM6K1ndwWA1vbR28PQNVi-9B6gDrvLMmewrk3smLZUnyyJiw8bxMsU7VaXWy4NvLKuB1iM3Jf85BiwWEJE1p-UMlzZAm6C8OvAPO-hIliVON3gaeTszJnEjr3g31WNCCLVLfsvd2DLS7b8mhz-14ycMFEJukpDTO2CWkgAe4QJfhz-~yUBmUlWmy~77SboYoETwTSJ~vqJeM5sVUwkmHwbVoVKehtuuTyHv-5S8P~~z7yHETUemWGrug1Qr5ak6R1j24~1znjgyu~B65hFYabUjJudyTvghuGLuQkqUw__"
                alt="Détail matière"
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-label text-secondary mb-6">Matériaux</p>
              <h2 className="text-editorial mb-8">Qualité Intemporelle</h2>

              <div className="space-y-6">
                {product.materials.map((material, index) => (
                  <div key={index} className="pb-6 border-b border-border last:border-0">
                    <p className="text-base text-foreground/80">{material}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <p className="text-label text-secondary mb-6">Spécifications</p>
          <h2 className="text-editorial mb-12">Caractéristiques Techniques</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <p className="text-label text-secondary mb-2">Dimensions</p>
                <p className="text-base text-foreground/80">
                  {product.dimensions}
                </p>
              </div>
              <div>
                <p className="text-label text-secondary mb-2">Poids</p>
                <p className="text-base text-foreground/80">{product.weight}</p>
              </div>
              <div>
                <p className="text-label text-secondary mb-4">Coloris</p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <div className="w-4 h-4 rounded-full border border-border" />
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <p className="text-label text-secondary mb-4">Caractéristiques</p>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-base text-foreground/80 flex gap-3"
                    >
                      <span className="text-secondary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-20 md:py-32">
        <div className="container">
          <p className="text-label text-secondary mb-6">Entretien</p>
          <h2 className="text-editorial mb-12">Conseils de Maintenance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.care.map((instruction, index) => (
              <div
                key={index}
                className="p-8 bg-muted/30 rounded-sm border border-border"
              >
                <p className="text-base text-foreground/80 leading-relaxed">
                  {instruction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-editorial text-4xl md:text-5xl mb-8">
            Prêt à Transformer Votre Intérieur?
          </h2>
          <p className="text-base md:text-lg text-background/80 mb-12 max-w-2xl mx-auto">
            Rejoignez les propriétaires qui ont choisi Filia pour créer des
            espaces de vie intemporels et élégants.
          </p>
          <button className="btn-premium bg-background text-foreground border-background hover:bg-background/90">
            Ajouter au Panier
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16 md:py-24">
        <div className="container text-center text-sm text-foreground/60">
          <p>&copy; 2026 Filia Appartement. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
