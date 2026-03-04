import Link from "next/link";
import { Watch } from "@/data/watches";

interface WatchCardProps {
  watch: Watch;
}

function getMovementHealthLabel(score: number): string {
  if (score >= 9.5) return "Excellent";
  if (score >= 9.0) return "Very Good";
  if (score >= 8.0) return "Good";
  return "Fair";
}

export default function WatchCard({ watch }: WatchCardProps) {
  const mhLabel = getMovementHealthLabel(watch.movementHealth);

  return (
    <div className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Watch Image */}
      <Link href={`/watch/${watch.id}`} className="block">
        <div className="aspect-square bg-[#F3F4F6] flex items-center justify-center p-6">
          <img
            src={watch.image}
            alt={`${watch.brand} ${watch.model}`}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      {/* Card Info */}
      <div className="p-4">
        {/* Name + Grade */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[16px] font-bold text-black leading-snug">
            {watch.brand} {watch.model}
          </h3>
          <span className="flex-shrink-0 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-[12px] font-bold text-black">
            {watch.movementHealth % 1 === 0 ? watch.movementHealth.toFixed(0) : watch.movementHealth.toFixed(1)}
          </span>
        </div>

        {/* Movement Health Badge */}
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-[#D1FAE5] text-[#065F46] text-[11px] font-semibold rounded-full">
            Movement Health: {mhLabel}
          </span>
        </div>

        {/* Price */}
        <p className="text-[20px] font-bold text-black mb-3">
          ${watch.price.toLocaleString()}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Link
            href={`/watch/${watch.id}`}
            className="flex-1 py-2 bg-[#0D7C66] text-white text-[12px] font-bold rounded-lg text-center hover:bg-[#0a6654] transition-colors"
          >
            Buy Now
          </Link>
          <Link
            href={`/watch/${watch.id}`}
            className="flex-1 py-2 border border-gray-300 text-[12px] font-semibold text-black rounded-lg text-center hover:bg-gray-50 transition-colors"
          >
            Offer
          </Link>
          <Link
            href={`/trade?target=${watch.id}`}
            className="flex-1 py-2 border border-gray-300 text-[12px] font-semibold text-black rounded-lg text-center hover:bg-gray-50 transition-colors"
          >
            Trade
          </Link>
        </div>
      </div>
    </div>
  );
}
