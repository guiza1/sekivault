import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TacticalCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Efeito de física suave
  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block overflow-hidden">
      {/* Mira Central */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        {/* Ponto e eixos da mira */}
        <div className="relative w-7 h-7 flex items-center justify-center">
          {/* Eixo Vertical */}
          <div className="absolute w-[1px] h-full bg-neutral-500/60" />
          {/* Eixo Horizontal */}
          <div className="absolute h-[1px] w-full bg-neutral-500/60" />
          
          {/* Círculo central oco */}
          <div className="w-2.5 h-2.5 border border-neutral-400 rounded-full" />
        </div>

        {/* Leitura de Coordenadas Tácticas */}
        <div className="absolute left-5 top-5 text-[8px] font-mono tracking-tighter text-neutral-500 whitespace-nowrap bg-black/60 px-1 border border-neutral-900">
          X:{coords.x} Y:{coords.y}
        </div>
      </motion.div>
    </div>
  );
}