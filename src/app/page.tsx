import Navbar from "@/components/Navbar";
import WatchCard from "@/components/WatchCard";
import Footer from "@/components/Footer";
import { watches } from "@/data/watches";
import { Search, SlidersHorizontal, ChevronDown, Zap, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-[1400px] w-full mx-auto px-6">
        {/* Marketplace Title */}
        <div className="text-center pt-12 pb-8">
          <h1 className="text-[42px] font-black text-black uppercase tracking-tight leading-none">
            MARKETPLACE
          </h1>
        </div>

        {/* Tabs - Full Width */}
        <div className="grid grid-cols-3 border-b border-gray-200 mb-8">
          <button className="pb-3 text-[15px] font-semibold text-black border-b-[3px] border-[#70C130] text-center">
            All
          </button>
          <button className="pb-3 text-[15px] font-normal text-gray-400 hover:text-black transition-colors text-center">
            Auctions
          </button>
          <button className="pb-3 text-[15px] font-normal text-gray-400 hover:text-black transition-colors text-center">
            Fixed Price
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-3 mb-10">
          <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-lg text-[14px] font-semibold text-black hover:bg-gray-50 transition-colors flex-shrink-0">
            <Zap className="w-4 h-4" />
            Win Feed
          </button>

          <div className="flex-grow flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-[14px] text-black placeholder:text-gray-400 w-full"
            />
          </div>

          <button className="p-3 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex-shrink-0">
            <SlidersHorizontal className="w-5 h-5" />
          </button>

          <button className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-lg text-[14px] font-semibold text-black min-w-[160px] hover:bg-gray-50 transition-colors flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            Featured
            <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
          </button>
        </div>

        {/* Watch Grid - 5 columns like ArenaClub */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-16">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
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
