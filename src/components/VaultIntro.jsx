import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function VaultIntro({ onComplete }) {
  const [phase, setPhase] = useState("calibrating"); // calibrating -> aligned -> opening
  const [degrees, setDegrees] = useState(0);
  const [statusLog, setStatusLog] = useState("機構同期中 // ROTATIONAL BEARING SYNC");

  useEffect(() => {
    // 1. Rotação mais lenta e deliberada com estágios de leitura
    const interval = setInterval(() => {
      setDegrees((prev) => {
        if (prev >= 360) {
          clearInterval(interval);
          setPhase("aligned");
          setStatusLog("気圧同調完了 // PRESSURE EQUALIZED");

          // 2. Segura o selo destrancado por 1.4s para o utilizador absorver os kanjis e o pulso
          setTimeout(() => {
            setPhase("opening");
            setStatusLog("隔壁開放 // RELEASE HYDRAULIC LOCKS");

            // 3. Completa após as portas de correr abrirem completamente
            setTimeout(onComplete, 1200);
          }, 1400);

          return 360;
        }

        // Atualização de telemetria baseada no ângulo
        const nextDeg = prev + 3;
        if (nextDeg > 270) {
          setStatusLog("シリンダー減圧 // PNEUMATIC VENTING");
        } else if (nextDeg > 180) {
          setStatusLog("暗号鍵認証 // CRYPTOGRAPHIC PIN ALIGNMENT");
        } else if (nextDeg > 90) {
          setStatusLog("保安隔壁解析 // DECRYPTING VAULT RING");
        }

        return nextDeg;
      });
    }, 45); // Cadência mais pesada e cinematográfica

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto overflow-hidden font-mono select-none">
      
      {/* ─── PORTA ESQUERDA (Desliza para a esquerda com peso mecânico) ─── */}
      <motion.div
        initial={{ x: 0 }}
        animate={phase === "opening" ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#050505] border-r border-emerald-950/80 z-20 flex flex-col justify-between p-6 items-end"
      >
        <div className="text-right text-[8px] text-emerald-900 tracking-[0.3em] uppercase">
          SECTOR-09A // 機密室左翼
        </div>
        <div className="mr-3 text-right">
          <span className="text-[8px] text-emerald-800 tracking-[0.3em] uppercase block">
            HYDRAULIC_SEAL [密閉]
          </span>
          <span className="text-xs text-emerald-500/80 font-bold tracking-widest">
            GATE-09 // 左
          </span>
        </div>
        <div className="text-[8px] text-emerald-950 tracking-widest">
          SYS_BLOCK: 0x7F9B
        </div>
      </motion.div>

      {/* ─── PORTA DIREITA (Desliza para a direita com peso mecânico) ─── */}
      <motion.div
        initial={{ x: 0 }}
        animate={phase === "opening" ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#050505] border-l border-emerald-950/80 z-20 flex flex-col justify-between p-6 items-start"
      >
        <div className="text-left text-[8px] text-emerald-900 tracking-[0.3em] uppercase">
          SECTOR-09B // 機密室右翼
        </div>
        <div className="ml-3 text-left">
          <span className="text-[8px] text-emerald-800 tracking-[0.3em] uppercase block">
            PNEUMATIC_VALVE [弁]
          </span>
          <span className="text-xs text-emerald-500/80 font-bold tracking-widest">
            GATE-09 // 右
          </span>
        </div>
        <div className="text-[8px] text-emerald-950 tracking-widest">
          RELAY: TOKYO // LISBON
        </div>
      </motion.div>

      {/* ─── NÚCLEO CENTRAL TÁTICO & ESCRITAS JAPONESAS ─── */}
      <motion.div 
        animate={phase === "opening" ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 pointer-events-none"
      >
        {/* Carimbo Superior em Kanji */}
        <div className="mb-6 text-center space-y-1">
          <div className="text-xs md:text-sm tracking-[0.4em] font-bold text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">
            関 保 管 庫
          </div>
          <div className="text-[8px] tracking-[0.25em] text-emerald-700 uppercase">
            SEKI VAULT ARCHIVE // CLASSIFIED ACCESS [非公開]
          </div>
        </div>

        {/* HUD Ótico Circular */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
          
          {/* Anel Externo Estilizado (Giro Horário Lento) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-emerald-950 border-t-emerald-500/60 border-b-emerald-500/60"
          />

          {/* Anel Secundário com Divisões de Escala */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-5 rounded-full border border-dashed border-emerald-900/60"
          />

          {/* Anel Principal Reativo */}
          <div 
            className={`absolute inset-12 rounded-full border transition-all duration-700 flex items-center justify-center ${
              phase === "aligned" 
                ? "border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.6)] bg-emerald-950/20" 
                : "border-emerald-800/60 bg-black/80"
            }`}
          >
            {/* Eixos Óticos Cruzados */}
            <div className="absolute w-full h-[1px] bg-emerald-900/40" />
            <div className="absolute h-full w-[1px] bg-emerald-900/40" />

            {/* Núcleo de Combinação Central */}
            <div className="relative z-10 text-center bg-[#050505] px-4 py-2 border border-emerald-900/80 shadow-inner">
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-emerald-400 block font-mono">
                {String(degrees).padStart(3, "0")}°
              </span>
              <span className="text-[8px] tracking-[0.25em] text-emerald-500 block uppercase mt-0.5">
                {phase === "aligned" ? "開 錠 // UNLOCKED" : "位 相 調 整 中"}
              </span>
            </div>
          </div>

          {/* Coordenadas e Marcadores Radiais */}
          <span className="absolute top-1 text-[7px] text-emerald-700 tracking-tighter">北 [000°]</span>
          <span className="absolute bottom-1 text-[7px] text-emerald-700 tracking-tighter">南 [180°]</span>
          <span className="absolute left-1 text-[7px] text-emerald-700 tracking-tighter">西 [270°]</span>
          <span className="absolute right-1 text-[7px] text-emerald-700 tracking-tighter">東 [090°]</span>
        </div>

        {/* Telemetria e Logs em Tempo Real */}
        <div className="mt-8 text-center space-y-1.5 max-w-xs sm:max-w-md">
          <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-medium">
            {statusLog}
          </div>
          <div className="text-[8px] text-emerald-700/80 tracking-widest uppercase">
            標本照合 // AUTHENTICATION PROTOCOL SV-AT-001
          </div>
        </div>

        {/* Botão de Bypass */}
        <button
          onClick={onComplete}
          className="mt-6 pointer-events-auto text-[8px] uppercase tracking-[0.2em] text-emerald-800 hover:text-emerald-400 border border-transparent hover:border-emerald-900/60 px-3 py-1 transition-all"
        >
          [BYPASS // 通過]
        </button>
      </motion.div>
    </div>
  );
}