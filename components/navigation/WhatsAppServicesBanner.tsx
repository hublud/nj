"use client";

import React from "react";
import { MessageCircle, Sparkles, GraduationCap, ArrowRight, Mic, Feather } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const WhatsAppServicesBanner: React.FC = () => {
  const whatsappNumber = "2349157892212";

  const services = [
    {
      id: "coaching",
      icon: GraduationCap,
      badge: "⭐ LOGION COACHING & MENTORSHIP",
      badgeColor: "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-black shadow-xs",
      title: "1-on-1 Productivity & Career Mentorship",
      subtitle: "Practical guides, personal development, freelance strategy & life coaching.",
      waText:
        "Hello The Logion Journal, I would like to inquire about booking 1-on-1 Coaching & Mentorship.",
      isFeatured: true,
    },
    {
      id: "paradox",
      icon: Mic,
      badge: "THE LOGION PARADOX",
      badgeColor: "bg-purple-600 text-white font-bold",
      title: "Guest Interviews & Perspective Dialogues",
      subtitle: "Join the conversation. Intellectual debates, podcasts & opinion features.",
      waText:
        "Hello The Logion Journal, I want to pitch a guest interview / feature for The LOGION Paradox.",
      isFeatured: false,
    },
    {
      id: "submissions",
      icon: Feather,
      badge: "CALL FOR WRITERS",
      badgeColor: "bg-amber-400 text-slate-950 font-bold",
      title: "Submit Your Essays, Poetry & Stories",
      subtitle: "Publish your thoughts, poetry, spoken word & personal essays on Logion Journal.",
      waText:
        "Hello The Logion Journal, I have an essay / poem / article I would like to submit for publication.",
      isFeatured: false,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-950 via-slate-950 to-indigo-950 border-b border-amber-500/20 py-2.5 sm:py-3.5 shadow-inner">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {services.map((item) => {
            const Icon = item.icon;
            const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              item.waText
            )}`;

            return (
              <a
                key={item.id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-3 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                  item.isFeatured
                    ? "bg-gradient-to-br from-blue-900/80 to-purple-950/80 border-amber-400/80 shadow-md hover:border-amber-300 hover:scale-[1.01]"
                    : "bg-slate-900/70 border-slate-700/60 hover:border-amber-400/60 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-start space-x-3 z-10 min-w-0 flex-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-slate-950 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-blue-950" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className={`inline-block text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 pl-2 z-10 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
