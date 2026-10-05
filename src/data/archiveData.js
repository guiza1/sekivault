import cartierImg from "../assets/cartier.jpg";
import omegaImg from "../assets/omega.jpg";
import slacksImg from "../assets/slacks.webp";
import margielaBagImg from "../assets/margielabag.jpg";

export const ARCHIVE_ITEMS = [
  {
    id: "SV-AT-001",
    slug: "cartier-must-tank-1978",
    title: "Must de Cartier Tank",
    year: "1978",
    category: "HOROLOGY",
    spec: "Cal. 78-1 Manual / Vermeil 925",
    condition: "Spider Dial / Pristine Patina",
    image: cartierImg,
    metrics: {
      origin: "Paris / La Chaux-de-Fonds",
      dimensions: "23mm x 30mm (LM)",
      lugWidth: "17mm",
      movement: "Calibre 78-1 (ETA 2512)"
    },
    essay: "A pureza geométrica da caixa Tank em contraste com o craquelado acidental do mostrador laqueado. Um objeto de precisão austera que ancora o peso fluido da alfaiataria contemporânea.",
    notes: [
      "Caixa em prata 925 com banho de ouro 18k (Vermeil)",
      "Coroa facetada com cabochão de safira azul natural intacto",
      "Mostrador original preto laqueado sem restauração"
    ],
    status: "PRIVATE ARCHIVE"
  },
  {
    id: "SV-AT-002",
    slug: "omega-seamaster-crosshair-1966",
    title: "Omega Seamaster 'Crosshair'",
    year: "1966",
    category: "HOROLOGY",
    spec: "Calibre 565 Automático / 35mm Steel",
    condition: "Unpolished Facets / Sunburst Silver",
    image: omegaImg,
    metrics: {
      origin: "Bienne, Suíça",
      dimensions: "35mm sem coroa",
      lugWidth: "18mm",
      movement: "Calibre 565 Automático"
    },
    essay: "A robustez mecânica suíça dos anos 60. As linhas de mira do mostrador cruzam com a precisão dos cortes desconstruídos, criando o contraponto perfeito entre desgaste e exatidão.",
    notes: [
      "Calibre manufaturado em Bienne com câmbio rápido de data",
      "Garras chanfradas originais preservadas sem polimento agressivo",
      "Montado em tira de couro cru envelhecido"
    ],
    status: "IN RESEARCH"
  },
  {
    id: "SV-AT-003",
    slug: "flared-wool-slacks-2004",
    title: "High-Waist Flared Slacks",
    year: "2004",
    category: "GARMENT",
    spec: "Deep Black Wool / Slight Bootcut Flare",
    condition: "Unworn Archive Stock",
    image: slacksImg,
    metrics: {
      origin: "Tóquio, Japão",
      dimensions: "Tamanho 2 (46 EU)",
      lugWidth: "Barra 24cm (Flat)",
      movement: "100% Lã Fria Japonesa"
    },
    essay: "Corte cirúrgico que molda a silhueta clássica com atitude pós-punk. Projetada para repousar com quebra sutil sobre o bico de botas chelsea de sola rasteira.",
    notes: [
      "Tecido de toque seco e caimento pesado que preserva o vinco frontal",
      "Cintura alta sem passantes visíveis para perfil limpo",
      "Abertura calculada para calçado de salto baixo"
    ],
    status: "PRIVATE ARCHIVE"
  },
  {
    id: "SV-AT-004",
    slug: "margiela-line-11-calf-shoulder-bag",
    title: "Maison Martin Margiela // Line 11 Bag",
    year: "c. 2009",
    category: "LEATHER GOODS [革製品]",
    spec: "Vera Pelle Calf / Design Team Era",
    condition: "Archive Vintage (Patina B+)",
    image: margielaBagImg,
    metrics: {
      origin: "Itália // Staff Int. Co.",
      dimensions: "36cm x 37cm x 14cm",
      lugWidth: "Strap: 53cm - 65cm",
      movement: "100% Calf Leather (Vera Pelle)"
    },
    essay: "A transitional, post-Martin Margiela archival piece (c. 2009–2010), conceived by the anonymous design team that included Matthieu Blazy. Crafted from Italian *Vera Pelle* vegetable-tanned cowhide, the bag features a reinforced base and sides, accented by four exposed stitches on the back.",
    notes: [
      "Staff International Co., Ltd. label verified",
      "Vera Pelle vegetable-tanned calfskin with a raw, natural patina",
      "Softening of corners and hardware wear documented (consistent with 15-year-old archival condition)"
    ],
    status: "ARCHIVED"
  }
];