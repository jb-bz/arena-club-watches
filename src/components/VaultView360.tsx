"use client";

import { useState } from "react";
import { RotateCcw, Maximize2, Shield, Box, Scan } from "lucide-react";

interface VaultView360Props {
  image: string;
}

export default function VaultView360({ image }: VaultView360Props) {
  const [rotation, setRotation] = useState(0);

  return (
    <div className="relative bg-white border border-arena-border rounded-2xl overflow-hidden aspect-square flex flex-col items-center justify-center p-12 shadow-sm">
      {/* Vault Branding Overlay */}
      <div className="absolute top-6 left-6 flex items-center gap-2.5 px-4 py-2 bg-white border border-arena-border rounded-xl shadow-sm">
        <Scan className="w-4 h-4 text-arena-gold" />
        <span className="text-[11px] font-black text-black uppercase tracking-widest">Vault Digital Twin</span>
      </div>

      <div className="absolute top-6 right-6 flex gap-3">
        <button className="p-2.5 bg-white border border-arena-border rounded-xl text-arena-textMuted hover:text-black transition-colors shadow-sm">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Simulated 360 Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(179,153,93,0.03)_0%,transparent_70%)]"></div>
        <img 
          src={image} 
          alt="Watch 360 View"
          className="max-w-full max-h-full object-contain transition-transform duration-300 ease-out drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          style={{ transform: `rotateY(${rotation}deg)` }}
        />
      </div>

      {/* Rotation Control */}
      <div className="absolute bottom-10 left-0 right-0 px-16">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2.5 text-[11px] font-black text-arena-textMuted uppercase tracking-widest">
            <RotateCcw className="w-3.5 h-3.5" />
            Drag to Rotate Asset
          </div>
          <input 
            type="range" 
            min="-180" 
            max="180" 
            value={rotation} 
            onChange={(e) => setRotation(parseInt(e.target.value))}
            className="w-full h-1.5 bg-arena-lightGray rounded-full appearance-none cursor-pointer accent-black"
          />
        </div>
      </div>

      {/* Subtle Acrylic Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/30 pointer-events-none"></div>
    </div>
  );
}
