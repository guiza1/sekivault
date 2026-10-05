import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { ARCHIVE_ITEMS } from "./data/archiveData";
import TacticalCursor from "./components/TacticalCursor";
import ViewportFrame from "./components/ViewportFrame";
import IndustrialBackdrop from "./components/IndustrialBackdrop";
import VaultIntro from "./components/VaultIntro";

// Componente de Ruído Analógico Subtil
function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 opacity-[0.035] z-50"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}
    />
  );
}

// Cabeçalho Tático com Tipografia Japonesa (Terminal Tokyo/Lisbon)
function Header() {
  return (
    <header className="border-b border-emerald-950/80 pb-6 md:pb-8 mb-6 md:mb-8 space-y-4 md:space-y-6">
      {/* Barra de Status e Telemetria em Verde Fósforo */}
      <div className="flex flex-wrap justify-between items-center text-[9px] md:text-[10px] text-emerald-600/90 tracking-widest uppercase border-b border-emerald-950/60 pb-2.5 font-mono">
        <div className="flex items-center gap-3">
          <span>SYS_CORE: <span className="text-emerald-400 font-medium">ONLINE</span></span>
          <span className="text-emerald-900 hidden sm:inline">|</span>
          <span className="text-emerald-500/80">機密指定 // LV-04</span>
          <span className="text-emerald-900 hidden sm:inline">|</span>
          <span className="hidden sm:inline">VER: <span className="text-emerald-400 font-medium">09.EXP</span></span>
        </div>
        <div className="flex items-center gap-4">
          <div>LOC: <span className="text-emerald-400">TOKYO [東京] // LISBON</span></div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 font-semibold text-[8px] md:text-[10px]">ACCESS OPEN [開]</span>
          </div>
        </div>
      </div>

      {/* Bloco do Logo ASCII com Caracteres Japoneses Integrados */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 overflow-x-auto pb-2">
        <Link to="/" className="group block focus:outline-none">
          <div className="flex items-start gap-4">
            
            {/* Bloco ASCII Principal */}
            <pre 
              className="font-mono text-[7px] sm:text-[9.5px] md:text-[11px] leading-[1.08] text-emerald-500 group-hover:text-emerald-300 transition-colors select-none font-bold"
              style={{ textShadow: "0 0 12px rgba(16, 185, 129, 0.35)" }}
            >
{`  ███████╗███████╗██╗  ██╗██╗    ██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
  ██╔════╝██╔════╝██║ ██╔╝██║    ██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
  ███████╗█████╗  █████═╝ ██║    ██║   ██║███████║██║   ██║██║     ██║   
  ╚════██║██╔══╝  ██╔═██╗ ██║    ╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║   
  ███████║███████╗██║ ╚██╗██║     ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║   
  ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝      ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   .v1`}
            </pre>

            {/* Selo Vertical em Kanji (Estilo Carimbo Militar Japonês) */}
            <div className="hidden sm:flex flex-col text-[9px] text-emerald-600/80 border-l border-emerald-950/80 pl-3 leading-tight select-none">
              <span className="text-emerald-400 font-bold tracking-widest">関</span>
              <span className="text-emerald-400 font-bold tracking-widest">保</span>
              <span className="text-emerald-400 font-bold tracking-widest">管</span>
              <span className="text-emerald-400 font-bold tracking-widest">庫</span>
              <span className="text-emerald-900 my-0.5">•</span>
              <span className="text-[7.5px] tracking-tighter text-emerald-700">分類標本</span>
            </div>
          </div>

          {/* Subtítulo Técnico Bilíngue */}
          <div className="mt-2.5 flex flex-wrap items-center gap-2 md:gap-3 text-[9px] md:text-[10px] text-emerald-600/90 tracking-[0.18em] md:tracking-[0.25em] uppercase font-mono">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:bg-emerald-300 transition-colors shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="group-hover:text-emerald-400 transition-colors">ARCHIVAL & TACTICAL [アーカイブ / 戦術]</span>
            <span className="text-emerald-900">|</span>
            <span className="text-emerald-400 font-medium">SV-AT-001</span>[cite: 5]
            <span className="text-emerald-900 hidden md:inline">|</span>
            <span className="text-emerald-600 hidden md:inline text-[8.5px]">非公開記録管理室</span>
          </div>
        </Link>

        {/* Telemetria Lateral Direita */}
        <div className="text-right text-[9px] md:text-[10px] text-emerald-800 uppercase tracking-widest hidden lg:block space-y-1 font-mono">
          <p>INDEX REPOSITORY // 機械式時計 & 構造服飾</p>
          <p className="text-emerald-600/80">CURATION LEVEL: RAW PATINA [経年変化]</p>
        </div>
      </div>
    </header>
  );
}

// PÁGINA 1: Home (Accordion no Mobile + Split-View no Desktop)
// DEPOIS
function HomePage() {
  const [selectedItem, setSelectedItem] = useState(ARCHIVE_ITEMS[0]);
  const [mobileExpandedId, setMobileExpandedId] = useState(null);
  const navigate = useNavigate();
  // ...

  const handleMobileToggle = (item) => {
    setSelectedItem(item);
    setMobileExpandedId(mobileExpandedId === item.id ? null : item.id);
  };

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-180px)] font-mono">
      
      {/* ─── VISTA MOBILE (< lg): ACCORDION TÁTICO EXPANSÍVEL ─── */}
      <div className="lg:hidden space-y-3 pb-8">
        <div className="text-[10px] uppercase text-neutral-600 tracking-[0.25em] pb-2 border-b border-neutral-900 flex justify-between">
          <span>INDEX REGISTRY</span>
          <span>SELECT TO INSPECT</span>
        </div>

        {ARCHIVE_ITEMS.map((item) => {
          const isExpanded = mobileExpandedId === item.id;
          return (
            <div
              key={item.id}
              className={`border transition-colors duration-200 ${
                isExpanded ? "border-neutral-700 bg-neutral-950/90" : "border-neutral-900 bg-black/40"
              }`}
            >
              {/* Cabeçalho do Bloco */}
              <button
                type="button"
                onClick={() => handleMobileToggle(item)}
                className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] tracking-wider ${isExpanded ? "text-emerald-400 font-bold" : "text-neutral-600"}`}>
                    {item.id}
                  </span>
                  <div>
                    <h3 className={`text-xs uppercase font-medium tracking-tight ${isExpanded ? "text-white" : "text-neutral-400"}`}>
                      {item.title}
                    </h3>
                    <span className="text-[9px] text-neutral-600 tracking-wider">
                      {item.year} // {item.category}
                    </span>
                  </div>
                </div>

                <span className="text-[8px] tracking-widest text-neutral-500 uppercase">
                  {isExpanded ? "[- COLLAPSE]" : "[+ INSPECT]"}
                </span>
              </button>

              {/* Viewport Injetado Diretamente no Bloco */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-neutral-900 px-3 pb-4 pt-3 space-y-3"
                  >
                    <ViewportFrame selectedItem={item} />

                    <div className="flex justify-between items-center pt-2 gap-2">
                      <span className="text-[9px] text-neutral-500 tracking-tight truncate">
                        {item.spec}
                      </span>
                      <button
                        type="button"
                        onClick={() => navigate(`/archive/${item.slug}`)}
                        className="shrink-0 text-[9px] uppercase tracking-widest bg-emerald-950/60 text-emerald-400 border border-emerald-800/80 px-3 py-1.5 active:bg-emerald-900 flex items-center gap-1.5 font-bold"
                      >
                        [OPEN DOSSIER] <ExternalLink size={10} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ─── VISTA DESKTOP (>= lg): SPLIT-VIEW TRADICIONAL ─── */}
      <main className="hidden lg:grid lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* Coluna Esquerda: Lista de Seleção */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-2">
          <div className="text-[10px] uppercase text-neutral-600 tracking-[0.25em] mb-4 pb-2 border-b border-neutral-900 flex justify-between">
            <span>INDEX NO. // ARTIFACT</span>
            <span>SPECIFICATION</span>
          </div>

          {ARCHIVE_ITEMS.map((item) => {
            const isSelected = selectedItem.id === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedItem(item)}
                onClick={() => navigate(`/archive/${item.slug}`)}
                className={`group cursor-pointer p-4 border transition-all duration-300 flex items-center justify-between ${
                  isSelected
                    ? "bg-neutral-900/50 border-neutral-700 text-white"
                    : "border-transparent hover:border-neutral-900 text-neutral-500 hover:text-neutral-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] tracking-widest ${isSelected ? "text-emerald-400 font-bold" : "text-neutral-700"}`}>
                    {item.id}
                  </span>
                  <div>
                    <h2 className="text-sm tracking-tight uppercase font-medium">
                      {item.title}
                    </h2>
                    <span className="text-[10px] text-neutral-500 tracking-wider block">
                      {item.year} — {item.category}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-neutral-400 block tracking-tight">
                    {item.spec}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-600 flex items-center justify-end gap-1 mt-0.5">
                    {isSelected ? (
                      <>
                        [OPEN DOSSIER] <ExternalLink size={10} />
                      </>
                    ) : (
                      "IN VAULT"
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coluna Direita: Viewport Industrial Fixo com Hover */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <ViewportFrame selectedItem={selectedItem} />
        </div>

      </main>

      {/* ─── RODAPÉ TÁTICO ─── */}
      <footer className="mt-8 pt-6 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 gap-4">
        <div>SEKI VAULT INVENTORY REGISTRY © 2026 // ALL RECORDS PRIVATE[cite: 5]</div>
        <div className="flex gap-6 tracking-widest uppercase">
          <span className="hover:text-neutral-300 cursor-pointer">[MANIFESTO]</span>
          <span className="hover:text-neutral-300 cursor-pointer">[RESEARCH]</span>
          <span className="hover:text-neutral-300 cursor-pointer">[WABI-SABI]</span>
        </div>
      </footer>
    </div>
  );
}

// PÁGINA 2: Product Dossier (Ficha Completa)
function DossierPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = ARCHIVE_ITEMS.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="py-24 text-center">
        <p className="text-xs text-neutral-500 mb-4">[RECORD_NOT_FOUND]</p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-xs uppercase border border-neutral-800 px-4 py-2 hover:bg-neutral-900 text-neutral-300"
        >
          Return to Index
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl mx-auto space-y-12 pb-16 font-mono"
    >
      <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-xs uppercase text-neutral-500 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} /> [BACK TO INDEX]
        </button>
        <span className="text-[10px] tracking-widest text-neutral-600 uppercase">
          DOSSIER RECORD // {item.id}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 space-y-4">
          <div className="aspect-[4/5] bg-neutral-950 border border-neutral-800 p-2 relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover contrast-125 brightness-90"
            />
          </div>
          <div className="p-3 border border-neutral-900 bg-neutral-950 flex justify-between text-[10px] text-neutral-500">
            <span>ORIGIN: {item.metrics.origin}</span>
            <span>SPEC: {item.metrics.dimensions}</span>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] text-neutral-500 tracking-[0.25em] uppercase block mb-1">
                {item.category} // {item.year}
              </span>
              <h1 className="text-3xl font-semibold uppercase text-neutral-100 tracking-tight">
                {item.title}
              </h1>
              <p className="text-xs text-neutral-400 mt-1">{item.spec}</p>
            </div>

            <div>
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-2">
                CURATORIAL ESSAY
              </span>
              <p className="text-sm text-neutral-300 font-sans font-light leading-relaxed">
                {item.essay}
              </p>
            </div>

            <div>
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-2">
                TECHNICAL METRICS & INSPECTION
              </span>
              <ul className="space-y-2">
                {item.notes.map((note, idx) => (
                  <li key={idx} className="text-xs text-neutral-400 flex items-start gap-2">
                    <span className="text-neutral-600">↳</span> {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-900 flex justify-between items-center text-[10px]">
            <div className="flex items-center gap-1.5 text-neutral-500">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>AUTHENTICITY VERIFIED</span>
            </div>
            <span className="text-neutral-300 uppercase tracking-widest font-medium border border-neutral-800 px-3 py-1.5 bg-neutral-900/40">
              STATUS: {item.status}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Router Principal Único

export default function App() {
  // Executa a intro apenas na primeira vez que abre o site nesta sessão
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("seki_vault_unlocked");
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem("seki_vault_unlocked", "true");
    setShowIntro(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#060606] text-neutral-300 p-4 sm:p-6 md:p-12 relative overflow-hidden">
        {/* Animação do Cofre */}
        <AnimatePresence mode="wait">
          {showIntro && <VaultIntro onComplete={handleIntroComplete} />}
        </AnimatePresence>

        <IndustrialBackdrop />
        <NoiseOverlay />
        <div className="scanlines fixed inset-0 z-40 pointer-events-none opacity-30" />
        <TacticalCursor />

        <div className="max-w-7xl mx-auto relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive/:slug" element={<DossierPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}