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
          <a href="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity" style={{marginLeft: '-119px', fontFamily: 'Bodoni'}}>
            Filia appartement furnitures
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
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
              src="https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-1_1772014678000_na1fn_aGVyby1saXZpbmctcm9vbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTFfMTc3MjAxNDY3ODAwMF9uYTFmbl9hR1Z5Ynkxc2FYWnBibWN0Y205dmJRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BtJVsqjolFLEKeJcuOgbIiV1MxSWfEEU1BEUFTveeocTitJzx52-9LknPPpLrwoz4YSgAX1cq7wlIJvdru-5eldvjnz~pS273NX9ynHsW4fllvXP8hbHXvGhdCCshWhjovus8wcCnlpBv8Xh7-sctqRstf6A1Id6oIiFxUjAAxJ74GEI-ECpUqc1kOOn8DCpGu10TGLrQRnV-5THS3cEVAyz18HM4DtNaPMnc00MjRPw9kfB381B6jTDHGzba8lbyhp1ELbFCcoX1kEZh35lC1pEikb87pCy-Ztc5LMyH4ZMderP2HcpzkCiKHPkpeSFyG9-IjxH-CU6ethdF-MVTQ__"
              alt="Salon minimaliste luxe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="mb-16">
            <p className="text-label text-secondary mb-4">Collections</p>
            <h2 className="text-editorial">Nos Univers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Collection Card 1 */}
            <a href="/collection/canapes" className="group cursor-pointer block">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-3_1772014671000_na1fn_Z2FsbGVyeS1jb2xsZWN0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTNfMTc3MjAxNDY3MTAwMF9uYTFmbl9aMkZzYkdWeWVTMWpiMjxzWldOMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ujLIHLyd-0ke0vI0kvAo1B4YulX0utL9GEK-h28biDb9BkTT4L3pgbF5qD1gHeAwWAWUJq7SY0QyiDxyW1FoCsJ1gbF1OcM1cSFqofXJ88Q48hvLqN-PmxS6qzlF-knmMqM5KilYDoGWBLl-yF6-o49FXzGlend4JGS3IVe6o4JyQ47szNFZMjDugb-AYrCjo9yTV77FnByT5aAfVMYZPgqigPJqj2e-Z3-oHYFHu9FHMeK0oEYuSOofesHKGtnAaUOp59lN9kkHVjUEpf-aJ5Qw10RDyTVo~65cGMvaupsqH3H3CYBhOSe2NqiJQW5le7NMIi2JyipPvVlkg1scYQ__"
                  alt="Collection Canapés"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-editorial text-xl mb-2 group-hover:text-secondary transition-colors">
                Canapés
              </h3>
              <p className="text-foreground/60 text-sm">
                Sièges de prestige pour vos espaces de vie
              </p>
            </a>

            {/* Collection Card 2 */}
            <a href="/collection/tables" className="group cursor-pointer block">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-4_1772014679000_na1fn_d29vZC10ZXh0dXJlLWRldGFpbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTRfMTc3MjAxNDY3OTAwMF9uYTFmbl9kMjl2WkMxMFpYaDBkWEpsTFdSbGRHRnBiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WDd8qmQAnJRDrJujzlWxswHHtRNexWkFRx8iFOQ9HQpP43d7IT6zxS3kGItgWY2oxICGVVdL0CXLkSVNpTEDYYjaeFkORuZsQL~Iyi5TGaA7CZ5Viz8yL130bObpbyNP~D~0tKB3C2npocxpTD1AXBuaEZHkkS0uuEeshw9CJAqPWqnIslyG8Toq75plgez7hBKsi3T-ewXodZBEOFNPqK2ZlQpRuIBNkrysst9-nqUzSMNOPrQ1lMG83aUMHOM2HaoVd2vKTwVYh9avEPXr9rpg-dO9hGnhJCZ7EMxmto5~9H5ArsKb1wF0kDExtK33BmrlulRvTui~8WF1hUjxgA__"
                  alt="Collection Tables"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-editorial text-xl mb-2 group-hover:text-secondary transition-colors">
                Tables
              </h3>
              <p className="text-foreground/60 text-sm">
                Pièces centrales en bois massif et matériaux nobles
              </p>
            </a>

            {/* Collection Card 3 */}
            <a href="/collection/chaises" className="group cursor-pointer block">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-5_1772014683000_na1fn_bWluaW1hbGlzdC1iZWRyb29t.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTVfMTc3MjAxNDY4MzAwMF9uYTFmbl9iV2x1YVcxaGJHbHpkQzFpWldSeWIyOXQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QItGMT41XdeeOyb9dv2Sc-ZddaudTa5bTjRbCRGWA6xjb1hXtv8cyPfVnbDu4aKtoQ1GtwysN5pTTdw9UHfZ79tS-IlD62DPDRpCeyGPXaKg1wJzV~AfRTnszfxvsPdzlwS5g~~X4lCClv3HQc~oltfxYV5mw57EuZjcXKIujsbzQCQTtYHLUjI5fKhzivbQ5lJr15XtGti~M2qvcr6THpxcESpOn~0YYRe8U6DgQxOMer5~VndUxy8o387eSdZ2DzoRo8ZJDk2MmrXsmpinwuRHxm4XdD3M7BUakWGurFq1ourd~nb7FG1OT4NDu-Gmq-DRqj2lMRCokoPGWM9GVA__"
                  alt="Collection Chaises"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-editorial text-xl mb-2 group-hover:text-secondary transition-colors">
                Chaises
              </h3>
              <p className="text-foreground/60 text-sm">
                Sièges de design contemporain pour tous les espaces
              </p>
            </a>
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
                alt="Détail de matière - Lin et bois"
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <p className="text-label text-secondary mb-6">Matière & Artisanat</p>
              <h2 className="text-editorial mb-8">
                La Qualité des Détails
              </h2>
              <p className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
                Chaque pièce Filia est conçue avec une attention extrême aux détails. Nous sélectionnons les meilleurs matériaux : bois massif de qualité supérieure, lin naturel, cuir premium.
              </p>
              <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
                Notre engagement envers l'artisanat traditionnel se reflète dans chaque couture, chaque finition, chaque grain de bois visible.
              </p>
              <a href="/collection" className="btn-premium inline-block">
                Découvrir nos Matériaux
                <ChevronRight className="inline ml-2" size={16} />
              </a>
            </div>
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
                Galerie de mobilier contemporain pour les intérieurs de prestige.
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
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Mentions Légales
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-label mb-6">Suivez-nous</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Pinterest
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
