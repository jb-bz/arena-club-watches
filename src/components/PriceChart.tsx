"use client";

import { useState } from "react";
import { Flag } from "lucide-react";

const PERIODS = ["1M", "6M", "12M", "24M"] as const;

const SCATTER_DATA: Record<typeof PERIODS[number], { date: string; price: number }[]> = {
  "1M": [
    { date: "Feb 1", price: 5050 },
    { date: "Feb 3", price: 5200 },
    { date: "Feb 5", price: 4950 },
    { date: "Feb 7", price: 5150 },
    { date: "Feb 8", price: 5300 },
    { date: "Feb 10", price: 5100 },
    { date: "Feb 12", price: 5250 },
    { date: "Feb 14", price: 4900 },
    { date: "Feb 16", price: 5350 },
    { date: "Feb 18", price: 5200 },
    { date: "Feb 20", price: 5400 },
    { date: "Feb 22", price: 5150 },
    { date: "Feb 24", price: 5300 },
    { date: "Feb 26", price: 5100 },
    { date: "Feb 28", price: 5250 },
  ],
  "6M": [
    { date: "Sep", price: 4800 },
    { date: "Sep", price: 4950 },
    { date: "Oct", price: 5100 },
    { date: "Oct", price: 4700 },
    { date: "Oct", price: 5200 },
    { date: "Nov", price: 5050 },
    { date: "Nov", price: 5300 },
    { date: "Nov", price: 4900 },
    { date: "Dec", price: 5150 },
    { date: "Dec", price: 5400 },
    { date: "Dec", price: 5000 },
    { date: "Jan", price: 5250 },
    { date: "Jan", price: 5100 },
    { date: "Feb", price: 5350 },
    { date: "Feb", price: 5200 },
    { date: "Feb", price: 5450 },
  ],
  "12M": [
    { date: "Mar '25", price: 4500 },
    { date: "Apr", price: 4650 },
    { date: "May", price: 4800 },
    { date: "Jun", price: 4550 },
    { date: "Jul", price: 4900 },
    { date: "Aug", price: 4700 },
    { date: "Sep", price: 5050 },
    { date: "Oct", price: 4950 },
    { date: "Oct", price: 5200 },
    { date: "Nov", price: 5100 },
    { date: "Dec", price: 5300 },
    { date: "Dec", price: 4850 },
    { date: "Jan", price: 5150 },
    { date: "Feb", price: 5250 },
    { date: "Feb", price: 5400 },
  ],
  "24M": [
    { date: "Mar '24", price: 4200 },
    { date: "Jun '24", price: 4400 },
    { date: "Aug '24", price: 4100 },
    { date: "Sep '24", price: 4600 },
    { date: "Nov '24", price: 4350 },
    { date: "Dec '24", price: 4800 },
    { date: "Jan '25", price: 4550 },
    { date: "Mar '25", price: 4700 },
    { date: "May '25", price: 4900 },
    { date: "Jul '25", price: 5050 },
    { date: "Sep '25", price: 4850 },
    { date: "Oct '25", price: 5200 },
    { date: "Dec '25", price: 5100 },
    { date: "Jan '26", price: 5300 },
    { date: "Feb '26", price: 5250 },
  ],
};

export default function PriceChart() {
  const [activePeriod, setActivePeriod] = useState<typeof PERIODS[number]>("6M");

  const data = SCATTER_DATA[activePeriod];
  const prices = data.map((d) => d.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const priceRange = maxPrice - minPrice || 1;

  const width = 600;
  const height = 220;
  const padLeft = 60;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 30;
  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  // Y-axis labels
  const yStep = 200;
  const yMin = Math.floor(minPrice / yStep) * yStep;
  const yMax = Math.ceil(maxPrice / yStep) * yStep;
  const yRange = yMax - yMin || 1;
  const yLabels: number[] = [];
  for (let v = yMin; v <= yMax; v += yStep) yLabels.push(v);

  // Map data to SVG coordinates
  const dots = data.map((d, i) => ({
    x: padLeft + (i / (data.length - 1)) * chartW,
    y: padTop + chartH - ((d.price - yMin) / yRange) * chartH,
    price: d.price,
    date: d.date,
  }));

  // Trend line (linear regression)
  const n = dots.length;
  const sumX = dots.reduce((s, d) => s + d.x, 0);
  const sumY = dots.reduce((s, d) => s + d.y, 0);
  const sumXY = dots.reduce((s, d) => s + d.x * d.y, 0);
  const sumXX = dots.reduce((s, d) => s + d.x * d.x, 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  const trendY1 = slope * dots[0].x + intercept;
  const trendY2 = slope * dots[n - 1].x + intercept;

  // Unique x-axis labels (deduplicated)
  const xLabels = data
    .filter((_, i) => i % Math.max(1, Math.floor(data.length / 5)) === 0)
    .map((d, i, arr) => ({
      label: d.date,
      x: padLeft + ((data.indexOf(d)) / (data.length - 1)) * chartW,
    }));

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-[16px] font-bold text-black">Price History</h3>
          <div className="flex items-center gap-1">
            {PERIODS.map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={`px-3 py-1 rounded text-[12px] font-semibold transition-colors ${
                  activePeriod === p
                    ? "bg-black text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <button className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-black transition-colors">
          <Flag className="w-3 h-3" />
          Report Issue
        </button>
      </div>

      {/* Scatterplot */}
      <div className="relative">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid lines */}
          {yLabels.map((val) => {
            const y = padTop + chartH - ((val - yMin) / yRange) * chartH;
            return (
              <g key={val}>
                <line
                  x1={padLeft}
                  y1={y}
                  x2={width - padRight}
                  y2={y}
                  stroke="#F3F4F6"
                  strokeWidth="1"
                />
                <text
                  x={padLeft - 8}
                  y={y + 4}
                  textAnchor="end"
                  className="text-[10px]"
                  fill="#9CA3AF"
                  fontSize="10"
                  fontWeight="600"
                >
                  ${val.toLocaleString()}
                </text>
              </g>
            );
          })}

          {/* Trend line */}
          <line
            x1={dots[0].x}
            y1={trendY1}
            x2={dots[n - 1].x}
            y2={trendY2}
            stroke="#D1D5DB"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />

          {/* Scatter dots */}
          {dots.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r="5"
              fill="#70C130"
              fillOpacity="0.8"
              stroke="white"
              strokeWidth="1.5"
            />
          ))}

          {/* X-axis labels */}
          {xLabels.map((lbl, i) => (
            <text
              key={i}
              x={lbl.x}
              y={height - 6}
              textAnchor="middle"
              fill="#9CA3AF"
              fontSize="10"
              fontWeight="600"
            >
              {lbl.label}
            </text>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-3 text-[11px] text-gray-500 font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#70C130] inline-block" />
          Sale Price
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 border-t-2 border-dashed border-gray-300 inline-block" />
          Trend
        </div>
      </div>
    </div>
  );
}
