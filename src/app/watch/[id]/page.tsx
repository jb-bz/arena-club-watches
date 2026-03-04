import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovementHealthDashboard from "@/components/MovementHealthDashboard";
import ServiceHistory from "@/components/ServiceHistory";
import WatchCSABadge from "@/components/WatchCSABadge";
import PriceChart from "@/components/PriceChart";
import MoreFromSeller from "@/components/MoreFromSeller";
import { watches } from "@/data/watches";
import { HelpCircle, Camera } from "lucide-react";

export default async function WatchDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const watch = watches.find((w) => w.id === id);

  if (!watch) {
    notFound();
  }

  const lastServiceDate = watch.serviceHistory.length > 0
    ? watch.serviceHistory[0].date
    : "N/A";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-[1100px] mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left Column: Watch Image */}
            <div>
              {/* Main Watch Image */}
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <div className="aspect-square flex items-center justify-center p-8">
                  <img
                    src={watch.image}
                    alt={`${watch.brand} ${watch.model}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* View in Vault Button */}
              <button className="w-full mt-4 py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <Camera className="w-4 h-4" />
                View in Vault
              </button>

              {/* Thumbnail Images */}
              <div className="flex gap-2 mt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex-1 aspect-square bg-gray-100 rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:border-gray-400 transition-colors"
                  >
                    <img
                      src={watch.image}
                      alt={`${watch.brand} ${watch.model} view ${i}`}
                      className="w-full h-full object-cover"
                      style={{ transform: `rotate(${(i - 1) * 72}deg)` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Details */}
            <div>
              {/* Title */}
              <h1 className="text-[28px] font-bold text-black leading-tight mb-3">
                {watch.brand} {watch.model}
              </h1>

              {/* AC Grade + Watch CSA */}
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 border-2 border-teal-400 rounded-lg">
                  <span className="text-[14px] font-bold text-black">
                    AC Grade {watch.movementHealth.toFixed(1)}
                  </span>
                </div>
                <WatchCSABadge />
              </div>

              {/* Price */}
              <p className="text-[32px] font-bold text-black mb-6">
                ${watch.price.toLocaleString()}
              </p>

              {/* Action Buttons */}
              <div className="space-y-3 mb-8">
                <button className="w-full py-3.5 bg-black text-white text-[15px] font-bold rounded-lg hover:bg-gray-800 transition-colors">
                  Buy Now
                </button>
                <button className="w-full py-3.5 bg-white text-black text-[15px] font-bold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Offer
                </button>
                <Link
                  href={`/trade?target=${watch.id}`}
                  className="w-full py-3.5 bg-white text-black text-[15px] font-bold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  Trade
                </Link>
              </div>

              {/* Movement Health Dashboard */}
              <div className="mb-8">
                <MovementHealthDashboard
                  accuracy={watch.metrics.rate}
                  amplitude={watch.metrics.amplitude}
                  beatError={watch.metrics.beatError}
                  waterResistance={watch.specs.waterResistance}
                  lastService={lastServiceDate}
                />
              </div>

              {/* Service History */}
              <ServiceHistory records={watch.serviceHistory} />
            </div>
          </div>
        </div>

        {/* Price Chart Section */}
        <div className="max-w-[1100px] mx-auto px-6 pb-10">
          <PriceChart />
        </div>

        {/* More From Seller */}
        <div className="max-w-[1100px] mx-auto px-6 pb-10">
          <MoreFromSeller seller={watch.seller} watches={watches} currentWatchId={watch.id} />
        </div>
      </main>

      <Footer />

      {/* Support Button */}
      <button className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-2.5 bg-[#70C130] text-white text-[13px] font-semibold rounded-full shadow-lg z-[101] hover:bg-[#5fa828] transition-colors">
        <HelpCircle className="w-4 h-4" />
        Support
      </button>
    </div>
  );
}
