"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { watches, userVault, Watch } from "@/data/watches";
import { ArrowRightLeft, ShieldCheck, Plus, ChevronRight, Info, HelpCircle } from "lucide-react";
import Link from "next/link";

function TradeContent() {
  const searchParams = useSearchParams();
  const targetId = searchParams.get("target");

  const [targetWatch, setTargetWatch] = useState<Watch | null>(null);
  const [selectedVaultWatch, setSelectedVaultWatch] = useState<Watch | null>(null);
  const [isSelectingVault, setIsSelectingVault] = useState(false);

  useEffect(() => {
    if (targetId) {
      const watch = watches.find((w) => w.id === targetId);
      if (watch) setTargetWatch(watch);
    }
  }, [targetId]);

  const cashDifference =
    targetWatch && selectedVaultWatch ? targetWatch.price - selectedVaultWatch.price : 0;

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-[32px] font-black text-black uppercase tracking-tight mb-2">
          Trade-In Marketplace
        </h1>
        <p className="text-[14px] text-gray-400">Swap your vault assets for new timepieces instantly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-6">
        {/* Your Watch */}
        <div className="md:col-span-5 space-y-3">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">
            Your Vault Asset
          </p>
          {selectedVaultWatch ? (
            <div className="relative bg-white border border-[#70C130] rounded-2xl p-5">
              <button
                onClick={() => setSelectedVaultWatch(null)}
                className="absolute top-3 right-3 text-[11px] text-gray-400 hover:text-black underline"
              >
                Change
              </button>
              <div className="aspect-square mb-3 overflow-hidden rounded-xl">
                <img
                  src={selectedVaultWatch.image}
                  alt={selectedVaultWatch.model}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[16px] font-bold text-black">{selectedVaultWatch.brand}</h3>
              <p className="text-[13px] text-gray-400 mb-3">{selectedVaultWatch.model}</p>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-[10px] text-gray-400 uppercase font-bold">Trade Value</span>
                <span className="text-[18px] font-bold text-black">
                  ${selectedVaultWatch.price.toLocaleString()}
                </span>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsSelectingVault(true)}
              className="w-full aspect-square flex flex-col items-center justify-center gap-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl hover:border-[#70C130] transition-all group"
            >
              <div className="p-4 bg-white rounded-full border border-gray-200 group-hover:border-[#70C130] group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 text-[#70C130]" />
              </div>
              <span className="text-[13px] font-semibold text-gray-400 group-hover:text-black">
                Select from Vault
              </span>
            </button>
          )}
        </div>

        {/* Swap Icon */}
        <div className="md:col-span-1 flex justify-center">
          <div className="p-3 bg-[#70C130] rounded-full shadow-lg">
            <ArrowRightLeft className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Target Watch */}
        <div className="md:col-span-5 space-y-3">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">
            Target Timepiece
          </p>
          {targetWatch ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="aspect-square mb-3 overflow-hidden rounded-xl">
                <img
                  src={targetWatch.image}
                  alt={targetWatch.model}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[16px] font-bold text-black">{targetWatch.brand}</h3>
              <p className="text-[13px] text-gray-400 mb-3">{targetWatch.model}</p>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-[10px] text-gray-400 uppercase font-bold">Market Price</span>
                <span className="text-[18px] font-bold text-black">
                  ${targetWatch.price.toLocaleString()}
                </span>
              </div>
            </div>
          ) : (
            <Link
              href="/"
              className="w-full aspect-square flex flex-col items-center justify-center gap-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl hover:border-[#70C130] transition-all group"
            >
              <div className="p-4 bg-white rounded-full border border-gray-200 group-hover:border-[#70C130] group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 text-[#70C130]" />
              </div>
              <span className="text-[13px] font-semibold text-gray-400 group-hover:text-black">
                Select Target Watch
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Swap Summary */}
      {targetWatch && selectedVaultWatch && (
        <div className="mt-10 p-8 bg-white border border-gray-200 rounded-2xl max-w-[500px] mx-auto">
          <h3 className="text-[18px] font-bold text-black mb-5 text-center">Swap Summary</h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-[13px]">
              <span className="text-gray-400">Target Watch Value</span>
              <span className="text-black font-bold">${targetWatch.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-gray-400">Your Trade-In Credit</span>
              <span className="text-[#70C130] font-bold">
                -${selectedVaultWatch.price.toLocaleString()}
              </span>
            </div>
            <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
              <span className="text-[15px] font-bold text-black">Cash to Add</span>
              <span className="text-[22px] font-bold text-[#70C130]">
                ${cashDifference.toLocaleString()}
              </span>
            </div>
          </div>

          <button className="w-full py-3.5 bg-[#70C130] text-white font-bold rounded-full uppercase tracking-wider hover:bg-[#5fa828] transition-colors">
            Confirm Trade-In
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-[#70C130]" />
            Secure Vault-to-Vault Transfer
          </div>
        </div>
      )}

      {/* Vault Selection Modal */}
      {isSelectingVault && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white border border-gray-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-xl">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-[18px] font-bold text-black">Select from Your Vault</h3>
              <button
                onClick={() => setIsSelectingVault(false)}
                className="text-gray-400 hover:text-black text-[13px] font-semibold"
              >
                Close
              </button>
            </div>
            <div className="p-5 space-y-3 max-h-[60vh] overflow-y-auto">
              {userVault.map((watch) => (
                <button
                  key={watch.id}
                  onClick={() => {
                    setSelectedVaultWatch(watch);
                    setIsSelectingVault(false);
                  }}
                  className="w-full flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#70C130] transition-all text-left group"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={watch.image}
                      alt={watch.model}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-[14px] font-bold text-black group-hover:text-[#70C130] transition-colors">
                      {watch.brand}
                    </h4>
                    <p className="text-[12px] text-gray-400 mb-1">{watch.model}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-black">
                        ${watch.price.toLocaleString()}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-[#70C130]/10 text-[#70C130] rounded border border-[#70C130]/20 font-semibold">
                        MH {watch.movementHealth}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#70C130]" />
                </button>
              ))}
            </div>
            <div className="p-5 bg-gray-50 flex items-start gap-3">
              <Info className="w-4 h-4 text-[#70C130] flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Only watches currently held in the ArenaClub Vault are eligible for instant trade-in.
                To trade an external asset, please ship it to our vault for authentication first.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function TradePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[50vh] text-gray-400">
            Loading Trade-In...
          </div>
        }
      >
        <TradeContent />
      </Suspense>
      <Footer />

      {/* Support Button */}
      <button className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-2.5 bg-[#70C130] text-white text-[13px] font-semibold rounded-full shadow-lg z-[101] hover:bg-[#5fa828] transition-colors">
        <HelpCircle className="w-4 h-4" />
        Support
      </button>
    </div>
  );
}
