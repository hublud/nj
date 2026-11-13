"use client";

import React from "react";
import {
  MessageCircle,
  Sparkles,
  Feather,
  GraduationCap,
  ArrowRight,
  Phone,
  Mail,
  Camera,
  Lightbulb,
  BookOpen,
} from "lucide-react";
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

/**
 * Responsive Header Banner Ad placed directly below the Search Bar.
 * Compact, sleek, and well-proportioned so it doesn't dominate the viewport.
 */
export const LogionHeaderBannerAd: React.FC = () => {
  return (
    <section className="w-full my-2 sm:my-3" aria-label="Official Logion Journal Header Banner">
      <div className="max-w-md sm:max-w-lg mx-auto px-3 sm:px-4">
        {/* Subtle Micro-Label Bar */}
        <div className="flex items-center justify-between mb-1 px-1">
          <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>OFFICIAL ANNOUNCEMENT</span>
          </span>
          <a
            href="https://wa.me/2349157892212?text=Hello%20Logion%20Journal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5 transition-colors"
          >
            <MessageCircle className="w-3 h-3 text-emerald-500" />
            <span>09157892212</span>
          </a>
        </div>

        {/* Compact Responsive Banner Card */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-amber-400/60 shadow-sm hover:shadow-md transition-all duration-300 bg-white group">
          <a
            href="https://wa.me/2349157892212?text=Hello%20Logion%20Journal,%20I%20am%20inquiring%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
            title="Connect with Logion Journal on WhatsApp"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ads/logion_header_banner.jpg"
              alt="Logion Journal - Where Ideas Find Expression. Think. Create. Become. Talent is not enough. We transform your dreams to reality."
              className="w-full h-auto max-h-[180px] sm:max-h-[220px] object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-300 block"
            />
          </a>

          {/* Sleek Compact Action Ribbon */}
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white px-3 py-1.5 sm:py-2 flex items-center justify-between gap-2 text-xs border-t border-amber-400/30">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider truncate">
              Think • Create • Become
            </span>

            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href="https://wa.me/2349157892212?text=Hello%20Logion%20Journal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2.5 py-1 rounded text-[11px] transition-all active:scale-95 shadow-2xs"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:07044918098"
                className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold px-2 py-1 rounded text-[11px] border border-slate-700 transition-all active:scale-95"
              >
                <Phone className="w-3 h-3 text-amber-400" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Responsive Footer Banner Ad placed directly above the Logion Journal Direct Helpdesk card.
 * Renders the rich purple 3D Logion Journal flyer with lady in lilac dress, books, and service pillars.
 */
export const LogionFooterBannerAd: React.FC = () => {
  return (
    <section className="w-full my-6 sm:my-8" aria-label="Official Logion Journal Footer Advertisement">
      <div className="max-w-5xl mx-auto px-1 sm:px-2">
        {/* Subtle Label Bar */}
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-blue-950 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
            <span>THE LOGION JOURNAL • EDITORIAL &amp; SERVICES SHOWCASE</span>
          </span>
          <a
            href="https://wa.me/2349157892212?text=Hello%20Logion%20Journal,%20I%20am%20inquiring%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>WhatsApp: 09157892212</span>
          </a>
        </div>

        {/* Responsive Showcase Card */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-400/50 shadow-xl bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white p-3.5 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: The Flyer Image */}
            <div className="md:col-span-6 lg:col-span-5 flex justify-center">
              <a
                href="https://wa.me/2349157892212?text=Hello%20Logion%20Journal,%20I%20am%20inquiring%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/50 group w-full max-w-[280px] sm:max-w-[320px]"
                title="Open Logion Journal in WhatsApp"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ads/logion_footer_banner.jpg"
                  alt="Logion Journal - Where Ideas Find Expression. Think. Create. Become. Talent is not enough. We transform your dreams to reality."
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 block"
                />
              </a>
            </div>

            {/* Right: Editorial & Service Highlights */}
            <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Think • Create • Become</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-serif tracking-tight leading-tight">
                  Talent is not enough. <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200">
                    We transform your dreams to reality.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Logion Journal is your home for thought leadership, intellectual discourse, professional writing, and creative expression. Connect with us for personal essays, media content, and bespoke guidance.
                </p>
              </div>

              {/* 4 Feature Highlights matching the flyer */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-xs">
                    <Feather className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">Writing &amp; Blogging</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center shrink-0 font-bold shadow-xs">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">Media &amp; Content</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-xs">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">Creative Ideas</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center shrink-0 font-bold shadow-xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">Knowledge &amp; Inspiration</span>
                </div>
              </div>

              {/* Direct Reach Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href="https://wa.me/2349157892212?text=Hello%20Logion%20Journal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs px-5 py-3 rounded-xl uppercase tracking-wider transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp (09157892212)</span>
                </a>
                <a
                  href="tel:07044918098"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-xs px-5 py-3 rounded-xl uppercase tracking-wider transition-all shadow-lg active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 07044918098</span>
                </a>
                <a
                  href="mailto:logionjournal@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-3 rounded-xl transition-all"
                >
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
