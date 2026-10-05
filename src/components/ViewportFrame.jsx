import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ViewportFrame({ selectedItem }) {
  return (
    <div className="w-full max-w-md relative select-none font-mono">
      {/* 1. Barra de Telemetria Superior da Carcaça */}
      <div className="flex justify-between items-center text-[9px] text-neutral-500 border border-neutral-800 border-b-0 bg-[#0d0d0d] px-3 py-1.5 tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-none inline-block shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          <span className="text-emerald-400 font-medium">OPTICAL_LENS // 01</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-600">
          <span>MAG: 1.0X</span>
          <span>GRID: ACTIVE</span>
          <span className="text-neutral-400">REC-ID: {selectedItem.id}</span>
        </div>
      </div>

      {/* 2. Container Central: Régua + Imagem */}
      <div className="relative flex border border-neutral-800 bg-[#050505]">
        
        {/* Régua Milimétrica Esquerda */}
        <div className="w-6 border-r border-neutral-900 flex flex-col justify-between py-4 text-[7px] text-neutral-600 tracking-tighter items-center bg-[#080808]">
          <span>000</span>
          <span className="text-neutral-800">·</span>
          <span>150</span>
          <span className="text-neutral-800">·</span>
          <span>300</span>
          <span className="text-neutral-800">·</span>
          <span>450</span>
        </div>

        {/* Viewport da Imagem */}
        <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-black group">
          
          {/* Mira / Linhas de Mira Óticas Sutis */}
          <div className="pointer-events-none absolute inset-0 z-10">
            {/* Marcadores nos 4 Cantos */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-500/70" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-500/70" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-500/70" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-500/70" />
            
            {/* Marcador Central de Foco */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-dashed border-neutral-700/50 rounded-full" />
          </div>

          {/* Imagem com Transição Suave */}
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedItem.id}
              src={selectedItem.image}
              alt={selectedItem.title}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700"
            />
          </AnimatePresence>

          {/* Tag de Condição Físico-Química */}
          <div className="absolute bottom-3 left-3 z-20 bg-black/85 backdrop-blur-md border border-neutral-800 px-2.5 py-1 text-[9px] tracking-widest text-neutral-300 uppercase">
            STATE: <span className="text-emerald-400">{selectedItem.condition}</span>
          </div>

          {/* Carimbo Discreto no Canto Superior Direito */}
          <div className="absolute top-3 right-3 z-20 bg-black/70 border border-neutral-900 px-2 py-0.5 text-[8px] tracking-widest text-neutral-500 uppercase">
            CAL. INSPECTION // OK
          </div>
        </div>

        {/* Régua Milimétrica Direita */}
        <div className="w-4 border-l border-neutral-900 flex flex-col justify-between py-4 text-[7px] text-neutral-700 items-center bg-[#080808]">
          <span className="w-1.5 h-[1px] bg-neutral-700" />
          <span className="w-1 h-[1px] bg-neutral-800" />
          <span className="w-1.5 h-[1px] bg-neutral-700" />
          <span className="w-1 h-[1px] bg-neutral-800" />
          <span className="w-1.5 h-[1px] bg-neutral-700" />
        </div>
      </div>

      {/* 3. Rodapé Técnico da Moldura */}
      <div className="flex justify-between items-center text-[9px] text-neutral-500 border border-neutral-800 border-t-0 bg-[#0d0d0d] px-3 py-1.5 tracking-wider uppercase">
        <span className="text-neutral-600">ASPECT: 4:5 ANALOG</span>
        <span className="text-neutral-400 font-mono">SPEC: {selectedItem.spec}</span>
      </div>
    </div>
  );
}