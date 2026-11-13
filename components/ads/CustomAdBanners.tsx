"use client";

import React from "react";
import { MessageCircle, Sparkles, Feather, GraduationCap, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const TopLandscapeAd: React.FC = () => {
  return (
    <div className="w-full my-2.5 sm:my-3.5">
      <div className="flex flex-col items-center max-w-4xl mx-auto px-2">
        <span className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-widest text-slate-400 mb-1 self-center">
          FEATURED JOURNAL PARTNERSHIP &amp; SPONSORSHIP
        </span>
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block group overflow-hidden rounded-xl sm:rounded-2xl border border-amber-400/40 shadow-sm hover:shadow-md transition-all relative bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 text-white p-4 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4 text-center sm:text-left min-w-0 flex-1">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-300 shrink-0">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase tracking-widest font-black text-amber-400">
                  THE LOGION JOURNAL SPONSORSHIP
                </span>
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight break-words">
                  Reach Intellectual Minds, Creators &amp; Professionals Across Africa
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 break-words">
                  Partner with us for brand features, guest thought-leadership, and event spotlights.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 text-xs font-black px-4 py-2 rounded-xl uppercase tracking-wider shadow-sm group-hover:scale-105 transition-transform flex items-center gap-1.5 whitespace-nowrap">
                <MessageCircle className="w-4 h-4" />
                <span>ADVERTISE NOW</span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export const DualPromoBanners: React.FC<{ placementTitle?: string }> = ({
  placementTitle = "FEATURED INITIATIVES & COACHING",
}) => {
  return (
    <section className="my-6">
      <div className="flex items-center justify-between mb-3 border-b border-amber-200/60 pb-1.5">
        <span className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-blue-950">
          ⭐ {placementTitle}
        </span>
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] sm:text-xs font-bold text-slate-500 hover:text-emerald-600 flex items-center gap-1 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
          <span>WhatsApp: {siteConfig.whatsappNumber}</span>
        </a>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-1">
        {/* Banner 1: Logion Coaching */}
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all bg-gradient-to-br from-blue-950 to-indigo-950 p-5 text-white flex flex-col justify-between"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-blue-950 flex items-center justify-center font-bold mb-3 shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
              LOGION COACHING &amp; MENTORSHIP
            </span>
            <h4 className="text-sm sm:text-base font-black text-white mt-1 group-hover:text-amber-300 transition-colors">
              Practical Guides, Productivity &amp; Career Mentorship
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Book customized 1-on-1 coaching sessions designed to unlock your potential, master remote freelancing, and refine your voice.
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs font-bold text-amber-400">
            <span>Book a session on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        {/* Banner 2: Call for Writers */}
        <a
          href="/contact?tab=submit"
          className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 hover:border-purple-500 shadow-xs hover:shadow-md transition-all bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 p-5 text-white flex flex-col justify-between"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center font-bold mb-3 shadow-sm">
              <Feather className="w-5 h-5 text-amber-300" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-purple-300">
              CALL FOR ESSAYS &amp; POETRY
            </span>
            <h4 className="text-sm sm:text-base font-black text-white mt-1 group-hover:text-amber-300 transition-colors">
              Write For The Logion Journal
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Have an unpopular opinion, an essay on African youth culture, or a raw personal reflection? Our pages are open to your voice.
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs font-bold text-purple-300">
            <span>Submit your pitch or draft</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
};
