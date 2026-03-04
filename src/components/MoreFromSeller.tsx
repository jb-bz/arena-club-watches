import Link from "next/link";
import { Watch } from "@/data/watches";
import { Eye, ChevronRight } from "lucide-react";

interface MoreFromSellerProps {
  seller: string;
  watches: Watch[];
  currentWatchId: string;
}

export default function MoreFromSeller({ seller, watches, currentWatchId }: MoreFromSellerProps) {
  const sellerWatches = watches.filter((w) => w.seller === seller && w.id !== currentWatchId);

  if (sellerWatches.length === 0) return null;

  return (
    <div className="py-12">
      <h2 className="text-[20px] font-black text-black uppercase tracking-tight text-center mb-8">
        More of {seller}&apos;s Watches
      </h2>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sellerWatches.slice(0, 3).map((watch) => (
            <div key={watch.id} className="flex flex-col">
              {/* Slab */}
              <Link href={`/watch/${watch.id}`} className="relative block mb-3">
                {/* View count */}
                <div className="absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-0.5 bg-white rounded-full border border-gray-200 shadow-sm">
                  <Eye className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[11px] font-semibold text-gray-600">{watch.views}</span>
                </div>

                <div className="bg-[#F0F1F3] rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="bg-[#1a1a1a] px-3 py-2 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-white uppercase leading-tight tracking-wide">
                        {watch.brand}
                      </span>
                      <span className="text-[7px] text-gray-400 uppercase leading-tight">
                        {watch.year} {watch.model}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black text-white leading-none">
                        {watch.movementHealth.toFixed(1)}
                      </span>
                      <div className="flex flex-col items-center">
                        <span className="text-[7px] font-bold text-gray-400 uppercase leading-none">ARENA</span>
                        <span className="text-[6px] font-bold text-gray-400 uppercase leading-none">CLUB</span>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-[3/4] bg-white flex items-center justify-center p-8">
                    <img
                      src={watch.image}
                      alt={`${watch.brand} ${watch.model}`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="bg-[#1a1a1a] px-3 py-1.5 flex items-center justify-center">
                    <span className="text-[7px] font-bold text-gray-500 uppercase tracking-wider">
                      ArenaClub Vault
                    </span>
                  </div>
                </div>
              </Link>

              {/* Info */}
              <div className="px-1">
                <h3 className="text-[14px] font-bold text-black leading-snug">{watch.brand}</h3>
                <p className="text-[12px] text-gray-500 leading-snug">{watch.year} {watch.model}</p>
                <p className="text-[12px] text-gray-400 leading-snug mb-2">#{watch.reference.slice(-4)}</p>

                {watch.listingType === "auction" || watch.listingType === "fixed" ? (
                  <>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-[16px] font-bold text-black">${watch.price.toLocaleString()}</span>
                      {watch.noReserve && (
                        <span className="text-[11px] font-semibold text-gray-400">No Reserve</span>
                      )}
                    </div>
                    <p className="text-[12px] text-gray-400 mb-2">
                      {watch.bids} bids · {watch.timeRemaining}
                    </p>
                    <Link
                      href={`/watch/${watch.id}`}
                      className="block w-full py-2.5 bg-[#70C130] text-white text-[13px] font-bold rounded-full text-center hover:bg-[#5fa828] transition-colors"
                    >
                      Bid
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="text-[14px] font-semibold text-gray-500 mb-2">Not listed</p>
                    <button className="w-full py-2.5 border border-gray-300 text-[13px] font-semibold text-gray-400 rounded-full text-center cursor-default">
                      Transfer Pending
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Arrow */}
        {sellerWatches.length > 3 && (
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-[#70C130]" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
    </div>
  );
}
