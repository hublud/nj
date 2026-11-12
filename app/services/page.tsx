"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TopLandscapeAd, DualPromoBanners } from "@/components/ads/CustomAdBanners";
import {
  Sparkles,
  GraduationCap,
  Feather,
  Mic,
  Briefcase,
  Megaphone,
  BookOpen,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function ServicesPage() {
  const logionServices = [
    {
      num: "01",
      title: "1-on-1 Productivity & Life Coaching",
      desc: "Personalized mentorship sessions designed to eliminate cognitive clutter, design intentional daily routines, and master time management.",
      icon: GraduationCap,
      badge: "Signature",
      color: "from-blue-900 via-indigo-900 to-purple-900",
      waText: "Hello The Logion Journal, I would like to book a 1-on-1 Productivity & Life Coaching session.",
    },
    {
      num: "02",
      title: "Storytelling & Editorial Writing Consulting",
      desc: "Refine your personal voice, construct persuasive arguments, craft essays that resonate, and publish for global audiences.",
      icon: Feather,
      badge: "Popular",
      color: "from-amber-600 to-yellow-600",
      waText: "Hello The Logion Journal, I want to inquire about Editorial Writing Consulting.",
    },
    {
      num: "03",
      title: "The LOGION Paradox Guest Dialogues",
      desc: "Join our flagship dialogue platform. Ideal for thought leaders, innovators, authors, and founders ready to explore complex ideas.",
      icon: Mic,
      badge: "Exclusive",
      color: "from-purple-700 to-indigo-900",
      waText: "Hello The Logion Journal, I want to apply for a guest feature on The LOGION Paradox.",
    },
    {
      num: "04",
      title: "Personal Branding & Career Strategy",
      desc: "Transform your specialized domain expertise into global reputational capital. Standout portfolios, CVs, and inbound client acquisition.",
      icon: Briefcase,
      badge: "High-ROI",
      color: "from-slate-800 to-blue-950",
      waText: "Hello The Logion Journal, I want to book Personal Branding & Career Strategy consulting.",
    },
    {
      num: "05",
      title: "Sponsored Content & Leaderboard Advertising",
      desc: "Position your brand in front of an engaged, educated audience of ambitious professionals, entrepreneurs, and forward thinkers.",
      icon: Megaphone,
      badge: "Impact",
      color: "from-amber-500 to-orange-600",
      waText: "Hello The Logion Journal, I am interested in Advertising and Sponsored Content placement.",
    },
    {
      num: "06",
      title: "Spoken Word & Creative Commissions",
      desc: "Bespoke spoken word poetry, narrative voiceovers, and conceptual creative pieces for events, campaigns, and creative productions.",
      icon: BookOpen,
      badge: "Creative",
      color: "from-blue-950 to-indigo-950",
      waText: "Hello The Logion Journal, I want to commission Spoken Word / Creative Narrative services.",
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services & Coaching" },
        ]}
      />

      <TopLandscapeAd />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-12 shadow-md border-2 border-amber-400/50 space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Professional &amp; Intellectual Solutions
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-serif tracking-tight">
          The Logion Journal Services
        </h1>
        <p className="text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          From 1-on-1 productivity coaching and editorial writing consulting to guest dialogue features and brand partnerships—empowering you to articulate your ideas and elevate your potential.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded-xl uppercase tracking-wider transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp: {siteConfig.whatsappNumber}</span>
          </a>
          <a
            href={`tel:${siteConfig.contactPhone}`}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call: {siteConfig.contactPhone}</span>
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {logionServices.map((service) => {
          const Icon = service.icon;
          const waHref = `https://wa.me/234${siteConfig.whatsappNumber.slice(1)}?text=${encodeURIComponent(
            service.waText
          )}`;

          return (
            <div
              key={service.num}
              className="bg-white rounded-2xl border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-mono">
                    SERVICE #{service.num}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                    {service.badge}
                  </span>
                </div>

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-amber-300" />
                </div>

                <h3 className="text-base sm:text-lg font-black text-blue-950 font-serif leading-snug group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-600 hover:text-emerald-700 uppercase tracking-wider"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform group-hover:text-amber-500" />
              </div>
            </div>
          );
        })}
      </div>

      <DualPromoBanners placementTitle="THE LOGION JOURNAL HELPDESK" />
    </div>
  );
}
