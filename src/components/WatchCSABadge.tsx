"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function WatchCSABadge() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <a
        href="https://watchcsa.com/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
      >
        <ShieldCheck className="w-4 h-4 text-blue-600" />
        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
          Watch CSA
        </span>
      </a>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 px-3 py-2 bg-gray-900 text-white text-[11px] leading-relaxed rounded-lg shadow-lg z-50 pointer-events-none">
          <p>Certified by Watch CSA</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900" />
        </div>
      )}
    </div>
  );
}
