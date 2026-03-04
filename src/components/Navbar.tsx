import Link from "next/link";
import { Search, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black">
      <div className="max-w-[1400px] mx-auto flex h-[56px] items-center justify-between px-6">
        {/* Logo & Main Nav */}
        <div className="flex items-center gap-8">
          {/* ArenaClub Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-[44px] h-[44px] border-2 border-[#70C130] rounded-lg flex flex-col items-center justify-center leading-none">
              <span className="text-white font-black text-[11px] tracking-tight leading-none">ARENA</span>
              <span className="text-white font-black text-[9px] tracking-[0.12em] leading-none mt-[1px]">CLUB</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-white">
            <Link href="#" className="flex items-center gap-2 hover:text-[#70C130] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
              Slab Packs®
            </Link>
            <Link href="/" className="flex items-center gap-2 text-[#70C130]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Watches
            </Link>
            <Link href="/" className="flex items-center gap-2 hover:text-[#70C130] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Marketplace
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-[#70C130] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              Showrooms
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-[#70C130] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>
              Grading
            </Link>
          </div>
        </div>

        {/* Search & Auth */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-2.5 px-4 py-2 bg-[#2D3748] rounded-lg w-[260px]">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search players, sets and more"
              className="bg-transparent border-none outline-none text-[13px] text-white placeholder:text-gray-500 w-full"
            />
          </div>

          <button className="flex items-center gap-2 text-white text-[13px] font-semibold hover:text-[#70C130] transition-colors">
            <LogIn className="w-4 h-4" />
            Log in
          </button>
          <button className="flex items-center gap-2 px-5 py-2 bg-[#70C130] text-black text-[13px] font-bold rounded-lg hover:bg-[#5fa828] transition-colors">
            <UserPlus className="w-4 h-4" />
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
