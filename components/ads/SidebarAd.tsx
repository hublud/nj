import React from "react";
import Link from "next/link";
import { Megaphone, ExternalLink } from "lucide-react";

interface SidebarAdProps {
  className?: string;
}

export const SidebarAd: React.FC<SidebarAdProps> = ({ className = "" }) => {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1.5 self-start">
        ADVERTISEMENT · 300 × 250
      </span>
      <div className="w-full max-w-[320px] sm:max-w-none h-[250px] bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-5 border-2 border-amber-400/50 shadow-sm flex flex-col justify-between relative overflow-hidden group">
        <div className="flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full">
            <Megaphone className="w-3 h-3 text-amber-300" /> SPONSORED
          </span>
          <span className="text-[10px] text-slate-400 font-mono">300x250</span>
        </div>

        <div className="z-10 text-center my-auto">
          <h4 className="text-base font-black text-white font-serif leading-tight uppercase mb-1">
            The Logion Journal Network
          </h4>
          <p className="text-xs text-slate-300 line-clamp-2 mb-3">
            Targeted thought leadership, editorial spotlights, and brand showcases.
          </p>
          <Link
            href="/contact?tab=advertise"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 text-xs font-black px-4 py-2 rounded-xl uppercase tracking-wider transition-all shadow-xs"
          >
            <span>BOOK THIS SLOT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="z-10 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800 pt-2">
          <span>The Logion Journal Media</span>
          <Link href="/contact?tab=advertise" className="hover:text-amber-300 transition-colors">
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
};
