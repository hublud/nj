import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

interface InArticleAdProps {
  className?: string;
}

export const InArticleAd: React.FC<InArticleAdProps> = ({ className = "" }) => {
  return (
    <div
      className={`my-8 p-5 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white border-2 border-amber-400/60 rounded-2xl shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase font-black tracking-widest text-amber-400 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> THE LOGION JOURNAL PARTNERSHIPS
        </span>
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          SPONSORED
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-black text-white font-serif leading-snug">
            Amplify Your Message to Thought Leaders &amp; Ambitious Minds
          </h4>
          <p className="text-xs text-slate-300 mt-1">
            Reach engaged readers across Nigeria, Africa, and the global diaspora seeking ideas, growth, and creative excellence.
          </p>
        </div>
        <Link
          href="/contact?tab=advertise"
          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 text-xs font-black px-4 py-2 rounded-xl uppercase tracking-wider shrink-0 transition-transform active:scale-95 shadow-xs"
        >
          <span>PARTNER NOW</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
