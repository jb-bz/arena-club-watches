import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111114] text-white">
      {/* Top Section: Stay in Touch, Follow, Get the App */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800">
        {/* Stay in Touch */}
        <div>
          <h3 className="text-[16px] font-black uppercase tracking-tight mb-3">Stay in Touch</h3>
          <p className="text-[12px] text-gray-400 leading-relaxed mb-4">
            Sign-up to hear about the latest card drops and showrooms, and get exclusive access to promotions and new feature releases.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2.5 bg-transparent border border-gray-700 rounded-lg text-[13px] text-white placeholder:text-gray-500 w-40 outline-none focus:border-[#70C130]"
            />
            <button className="flex items-center gap-1 px-4 py-2.5 bg-[#70C130] text-black text-[13px] font-bold rounded-lg hover:bg-[#5fa828] transition-colors">
              Go <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Follow Us On */}
        <div>
          <h3 className="text-[16px] font-black uppercase tracking-tight mb-4">Follow Us On</h3>
          <div className="flex items-center gap-4">
            {["Facebook", "Twitter", "TikTok", "Instagram", "Discord"].map((social) => (
              <Link key={social} href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors text-[11px] font-bold">
                {social[0]}
              </Link>
            ))}
          </div>
        </div>

        {/* Get the App */}
        <div>
          <h3 className="text-[16px] font-black uppercase tracking-tight mb-4">Get the App</h3>
          <div className="flex flex-col gap-2">
            <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-[11px] text-white font-semibold hover:bg-gray-700 transition-colors w-fit">
              <span className="text-[8px] text-gray-400 leading-none">Download on the</span>
              <span>App Store</span>
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-[11px] text-white font-semibold hover:bg-gray-700 transition-colors w-fit">
              <span className="text-[8px] text-gray-400 leading-none">GET IT ON</span>
              <span>Google Play</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1">
          <div className="w-[52px] h-[52px] border-2 border-[#70C130] rounded-lg flex flex-col items-center justify-center mb-4">
            <span className="text-white font-black text-[13px] tracking-tight leading-none">ARENA</span>
            <span className="text-white font-black text-[10px] tracking-[0.12em] leading-none mt-[1px]">CLUB</span>
          </div>
          <p className="text-[11px] text-gray-500">© 2026 ArenaClub.com, Inc.</p>
        </div>

        {/* Buying */}
        <div>
          <h4 className="text-[13px] font-bold text-[#70C130] uppercase mb-4">Buying</h4>
          <ul className="space-y-2.5">
            {["MARKETPLACE", "SLAB PACKS", "SHOWROOMS", "POP REPORT", "RETRIEVE CARDS", "HOW IT WORKS", "BENEFITS", "FEATURED PLAYERS"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[11px] text-gray-400 hover:text-white transition-colors uppercase tracking-wide">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Selling */}
        <div>
          <h4 className="text-[13px] font-bold text-[#70C130] uppercase mb-4">Selling</h4>
          <ul className="space-y-2.5">
            {["SUBMIT CARDS", "GRADING", "HIGHLIGHTED SALES", "SELLING ON AC", "HOW IT WORKS", "BENEFITS", "PRICING", "COLLECTORS", "DEALERS"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[11px] text-gray-400 hover:text-white transition-colors uppercase tracking-wide">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-[13px] font-bold text-[#70C130] uppercase mb-4">My Account</h4>
          <ul className="space-y-2.5">
            {["MY SHOWROOM", "OFFERS & TRADES", "WATCHLIST", "ORDER HISTORY", "SETTINGS"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[11px] text-gray-400 hover:text-white transition-colors uppercase tracking-wide">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-[13px] font-bold text-[#70C130] uppercase mb-4">About</h4>
          <ul className="space-y-2.5">
            {["ABOUT ARENA CLUB", "BLOG", "CAREERS", "FAQS", "PRIVACY POLICY", "TERMS & CONDITIONS"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[11px] text-gray-400 hover:text-white transition-colors uppercase tracking-wide">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
