import React from "react";
import steelBg from "../assets/steel-texture.jpg";

export default function IndustrialBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* 1. Imagem local de textura de aço com blend escuro */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen grayscale contrast-125"
        style={{ backgroundImage: `url(${steelBg})` }}
      />

      {/* 2. Vinheta radial: escurece as bordas para manter a legibilidade */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, #060606 90%)"
        }}
      />
    </div>
  );
}