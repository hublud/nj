"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MessageCircle } from "lucide-react";
import { useStore } from "@/lib/store";
import { siteConfig } from "@/data/siteConfig";

interface HorizontalAdProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const HorizontalAd: React.FC<HorizontalAdProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  const { getAdBySlot } = useStore();
  const ad = getAdBySlot("horizontal_feed");

  if (ad && !ad.isActive) return null;

  const displayTitle = title || ad?.title || "1-ON-1 LOGION COACHING & MENTORSHIP";
  const displaySubtitle = subtitle || ad?.subtitle || "Practical guides, career growth, freelance strategy & life coaching designed to unlock your potential.";
  const destinationUrl = ad?.destinationUrl || siteConfig.whatsappLink;
  const buttonText = ad?.buttonText || "BOOK A SESSION";

  return (
    <div className={`w-full py-4 ${className}`}>
      <div className="flex flex-col items-center">
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1.5 self-center">
          ADVERTISEMENT · 728 × 90 LEADERBOARD
        </span>
        <div className="w-full bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-4 sm:p-5 border-2 border-amber-400/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
          {ad?.imageUrl && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={ad.imageUrl}
              alt="Ad Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />
          )}

          <div className="flex items-center gap-3 text-center sm:text-left z-10">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400 flex items-center justify-center shrink-0 hidden sm:flex">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black uppercase text-amber-300 font-serif tracking-wide line-clamp-1">
                {displayTitle}
              </h4>
              <p className="text-xs text-slate-300 font-medium line-clamp-1">{displaySubtitle}</p>
            </div>
          </div>
          <Link
            href={destinationUrl}
            target={destinationUrl.startsWith("http") ? "_blank" : undefined}
            rel={destinationUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            className="z-10 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 text-xs font-black px-4 py-2 rounded-xl uppercase tracking-wider transition-transform active:scale-95 shrink-0 shadow-xs flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{buttonText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
