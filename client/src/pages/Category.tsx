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
        "https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-1_1772014678000_na1fn_aGVyby1saXZpbmctcm9vbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTFfMTc3MjAxNDY3ODAwMF9uYTFmbl9hR1Z5Ynkxc2FYWnBibWN0Y205dmJRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BtJVsqjolFLEKeJcuOgbIiV1MxSWfEEU1BEUFTveeocTitJzx52-9LknPPpLrwoz4YSgAX1cq7wlIJvdru-5eldvjnz~pS273NX9ynHsW4fllvXP8hbHXvGhdCCshWhjovus8wcCnlpBv8Xh7-sctqRstf6A1Id6oIiFxUjAAxJ74GEI-ECpUqc1kOOn8DCpGu10TGLrQRnV-5THS3cEVAyz18HM4DtNaPMnc00MjRPw9kfB381B6jTDHGzba8lbyhp1ELbFCcoX1kEZh35lC1pEikb87pCy-Ztc5LMyH4ZMderP2HcpzkCiKHPkpeSFyG9-IjxH-CU6ethdF-MVTQ__",
      materials: "Lin 100%, Chêne massif",
      dimensions: "220 × 90 × 85 cm",
    },
    {
      id: 2,
      name: "Sectional Contemporain",
      description: "Composition modulable avec accoudoirs en bois",
      price: "€4,500",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-5_1772014683000_na1fn_bWluaW1hbGlzdC1iZWRyb29t.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTVfMTc3MjAxNDY4MzAwMF9uYTFmbl9iV2x1YVcxaGJHbHpkQzFpWldSeWIyOXQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QItGMT41XdeeOyb9dv2Sc-ZddaudTa5bTjRbCRGWA6xjb1hXtv8cyPfVnbDu4aKtoQ1GtwysN5pTTdw9UHfZ79tS-IlD62DPDRpCeyGPXaKg1wJzV~AfRTnszfxvsPdzlwS5g~~X4lCClv3HQc~oltfxYV5mw57EuZjcXKIujsbzQCQTtYHLUjI5fKhzivbQ5lJr15XtGti~M2qvcr6THpxcESpOn~0YYRe8U6DgQxOMer5~VndUxy8o387eSdZ2DzoRo8ZJDk2MmrXsmpinwuRHxm4XdD3M7BUakWGurFq1ourd~nb7FG1OT4NDu-Gmq-DRqj2lMRCokoPGWM9GVA__",
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
        "https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-4_1772014679000_na1fn_d29vZC10ZXh0dXJlLWRldGFpbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTRfMTc3MjAxNDY3OTAwMF9uYTFmbl9kMjl2WkMxMFpYaDBkWEpsTFdSbGRHRnBiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WDd8qmQAnJRDrJujzlWxswHHtRNexWkFRx8iFOQ9HQpP43d7IT6zxS3kGItgWY2oxICGVVdL0CXLkSVNpTEDYYjaeFkORuZsQL~Iyi5TGaA7CZ5Viz8yL130bObpbyNP~D~0tKB3C2npocxpTD1AXBuaEZHkkS0uuEeshw9CJAqPWqnIslyG8Toq75plgez7hBKsi3T-ewXodZBEOFNPqK2ZlQpRuIBNkrysst9-nqUzSMNOPrQ1lMG83aUMHOM2HaoVd2vKTwVYh9avEPXr9rpg-dO9hGnhJCZ7EMxmto5~9H5ArsKb1wF0kDExtK33BmrlulRvTui~8WF1hUjxgA__",
      materials: "Chêne massif",
      dimensions: "120 × 60 × 40 cm",
    },
  ],
  chaises: [
    {
      id: 4,
      name: "Chaise Scandinave",
      description: "Chaise de salle à manger en bois avec assise en lin",
      price: "€680",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/kipTDJQqissckqbzLIMUU1/sandbox/OS1WirmdDyjqb8kJ9JryT1-img-3_1772014671000_na1fn_Z2FsbGVyeS1jb2xsZWN0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2lwVERKUXFpc3Nja3FiekxJTVVVMS9zYW5kYm94L09TMVdpcm1kRHlqcWI4a0o5SnJ5VDEtaW1nLTNfMTc3MjAxNDY3MTAwMF9uYTFmbl9aMkZzYkdWeWVTMWpiMjxzWldOMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ujLIHLyd-0ke0vI0kvAo1B4YulX0utL9GEK-h28biDb9BkTT4L3pgbF5qD1gHeAwWAWUJq7SY0QyiDxyW1FoCsJ1gbF1OcM1cSFqofXJ88Q48hvLqN-PmxS6qzlF-knmMqM5KilYDoGWBLl-yF6-o49FXzGlend4JGS3IVe6o4JyQ47szNFZMjDugb-AYrCjo9yTV77FnByT5aAfVMYZPgqigPJqj2e-Z3-oHYFHu9FHMeK0oEYuSOofesHKGtnAaUOp59lN9kkHVjUEpf-aJ5Qw10RDyTVo~65cGMvaupsqH3H3CYBhOSe2NqiJQW5le7NMIi2JyipPvVlkg1scYQ__",
      materials: "Chêne, Lin 100%",
      dimensions: "50 × 50 × 85 cm",
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

          <p className="max-w-2xl text-base md:text-lg text-foreground/80 leading-relaxed">
            Découvrez notre sélection exclusive de{" "}
            {category === "canapes"
              ? "canapés"
              : category === "tables"
                ? "tables"
                : "chaises"}{" "}
            haut de gamme. Chaque pièce est pensée pour créer des espaces de vie
            intemporels et confortables.
          </p>
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
