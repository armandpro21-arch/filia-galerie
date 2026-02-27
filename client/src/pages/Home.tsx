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
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              src="https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-1_1772014678000_na1fn_aGVyby1saXZpbmctcm9vbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTFfMTc3MjAxNDY3ODAwMF9uYTFmbl9hR1Z5Ynkxc2FYWnBibWN0Y201dmJRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BtJVsqjolFLEKeJcuOgbIiV1MxSWfEEU1BEUFTveeocTitJzx52-9LknPPpLrwoz4YSgAX1cq7wlIJvdru-5eldvjnz~pS273NX9ynHsW4fllvXP8hbHXvGhdCCshWhjovus8wcCnlpBv8Xh7-sctqRstf6A1Id6oIiFxUjAAxJ74GEI-ECpUqc1kOOn8DCpGu10TGLrQRnV-5THS3cEVAyz18HM4DtNaPMnc00MjRPw9kfB381B6jTDHGzba8lbyhp1ELbFCcoX1kEZh35lC1pEikb87pCy-Ztc5LMyH4ZMderP2HcpzkCiKHPkpeSFyG9-IjxH-CU6ethdF-MVTQ__"
              alt="Salon minimaliste luxe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collections Section - Editorial Gallery */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="mb-16">
            <p className="text-label text-secondary mb-4">Collections</p>
            <h2 className="text-editorial mb-12">Nos Univers</h2>
          </div>

          {/* Editorial Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Univers 1: Salon Minimal */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-salon-minimal-sKmQjFnPxLvRhT2wBqNxvD.webp"
                  alt="Salon Minimal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">Salon Minimal</h3>
              <p className="text-foreground/60 text-sm">Canapé crème, table chêne clair, lumière généreuse</p>
            </article>

            {/* Univers 2: Chambre Apaisée */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-chambre-apaisee-KxWqPmLnRsT9vBcDfGhJkL.webp"
                  alt="Chambre Apaisée"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">Chambre Apaisée</h3>
              <p className="text-foreground/60 text-sm">Lit bois, lin blanc, atmosphère sereine</p>
            </article>

            {/* Univers 3: Matières Naturelles */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-matieres-naturelles-WxYzAbCdEfGhIjKlMnOpQr.webp"
                  alt="Matières Naturelles"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">Matières Naturelles</h3>
              <p className="text-foreground/60 text-sm">Bois, lin, céramique, textures tactiles</p>
            </article>

            {/* Univers 4: Bois Clair */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-bois-clair-StUvWxYzAbCdEfGhIjKlMn.webp"
                  alt="Bois Clair"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">Bois Clair</h3>
              <p className="text-foreground/60 text-sm">Salle à manger contemporaine, rangements</p>
            </article>

            {/* Univers 5: Intérieur Lumineux */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-interieur-lumineux-OpQrStUvWxYzAbCdEfGhIj.webp"
                  alt="Intérieur Lumineux"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">Intérieur Lumineux</h3>
              <p className="text-foreground/60 text-sm">Baies vitrées, lumière inondante</p>
            </article>

            {/* Univers 6: Ligne Contemporaine */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-ligne-contemporaine-Tnkx82SJgnW6g5AJXqqqo2.webp"
                  alt="Ligne Contemporaine"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">Ligne Contemporaine</h3>
              <p className="text-foreground/60 text-sm">Art géométrique, formes épurées</p>
            </article>

            {/* Univers 7: Collection Essentielle */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-collection-essentielle-E8VmuTwt9hNqtbpYBhowqG.webp"
                  alt="Collection Essentielle"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">Collection Essentielle</h3>
              <p className="text-foreground/60 text-sm">Pièces curatées, minimalisme intentionnel</p>
            </article>

            {/* Univers 8: Espace Travail */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/univers-espace-travail-iAPa58gT2DSuZjpusGmw5H.webp"
                  alt="Espace Travail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">Espace Travail</h3>
              <p className="text-foreground/60 text-sm">Bureau minimaliste, lumière naturelle</p>
            </article>
          </div>
        </div>
      </section>

      {/* Editorial Section - Material Focus */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-2_1772014683000_na1fn_cHJvZHVjdC1zb2ZhLWRldGFpbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTJfMTc3MjAxNDY4MzAwMF9uYTFmbl9jSEp2WkhWamRDMXpiMjxoTFdSbGRHRnBiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dlvMmDxZKmauC7AR-nlHbgGjORH6k5Sv0FoHKQubjARO~KKM6K1ndwWA1vbR28PQNVi-9B6gDrvLMmewrk3smLZUnyyJiw8bxMsU7VaXWy4NvLKuB1iM3Jf85BiwWEJE1p-UMlzZAm6C8OvAPO-hIliVON3gaeTszJnEjr3g31WNCCLVLfsvd2DLS7b8mhz-14ycMFEJukpDTO2CWkgAe4QJfhz-~yUBmUlWmy~77SboYoETwTSJ~vqJeM5sVUwkmHwbVoVKehtuuTyHv-5S8P~~z7yHETUemWGrug1Qr5ak6R1j24~1znjgyu~B65hFYabUjJudyTvghuGLuQkqUw__"
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/ambiance-bedroom-warm-light-58CnTNvVvwdz2HMx8HdrBT.webp"
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/ambiance-living-room-wood-floor-NTYX3cLi77rLHZbd4QDsuR.webp"
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663379758806/6tqxTVYkRiTYpg4sbwvNVb/product-storage-cabinet-wood-4g8A35XtEfRkdDgTzBmkPB.webp"
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
            {/* Brand */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-4">Filia</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Mobilier de prestige pour intérieurs contemporains. Chaque pièce est une invitation au bien-vivre.
              </p>
            </div>

            {/* Collections */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">Collections</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="/collection/canapes" className="hover:text-foreground transition-colors">Canapés</a></li>
                <li><a href="/collection/tables" className="hover:text-foreground transition-colors">Tables</a></li>
                <li><a href="/collection/chaises" className="hover:text-foreground transition-colors">Chaises</a></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">Information</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Livraison</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">Légal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition-colors">Conditions</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
            <p>&copy; 2026 Filia Appartement. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
