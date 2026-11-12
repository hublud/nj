"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Brain,
  Coins,
  Feather,
  Compass,
  HeartHandshake,
  MessageSquareQuote,
  Sparkles,
  Briefcase,
  Globe,
  Flame,
  Film,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { JOURNAL_CATEGORIES } from "@/data/categories";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Coins,
  Feather,
  Compass,
  HeartHandshake,
  MessageSquareQuote,
  Sparkles,
  Briefcase,
  Globe,
  Flame,
  Film,
  GraduationCap,
};

export const IconCategoryNav: React.FC = () => {
  const pathname = usePathname();
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white border-b border-slate-200 shadow-xs py-2.5 sm:py-3 relative z-30">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Desktop / Tablet: Responsive flex row */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-1.5 lg:gap-2">
          {JOURNAL_CATEGORIES.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            const itemHref = `/${item.slug}`;
            const isActive = pathname === itemHref;
            const isHovered = hoveredCat === item.slug;

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredCat(item.slug)}
                onMouseLeave={() => setHoveredCat(null)}
              >
                <Link
                  href={itemHref}
                  className={`group flex flex-col items-center justify-center py-1.5 px-2.5 sm:px-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-blue-950 bg-amber-50/90 font-black border border-amber-300 shadow-xs"
                      : "text-slate-700 hover:text-blue-950 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-1 transition-all duration-300 group-hover:scale-105 ${
                      isActive
                        ? "bg-gradient-to-br from-blue-950 to-indigo-900 text-amber-300 shadow border border-amber-400"
                        : "bg-blue-50/80 text-blue-900 group-hover:bg-blue-950 group-hover:text-amber-300 group-hover:border group-hover:border-amber-400/60"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                  </div>
                  <div className="flex items-center gap-0.5">
                    <span className="text-[10px] sm:text-[11px] font-extrabold tracking-tight uppercase whitespace-nowrap">
                      {item.shortName}
                    </span>
                    <ChevronDown className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 group-hover:text-amber-600 transition-opacity" />
                  </div>
                </Link>

                {/* Hover Dropdown showing subcategories */}
                {isHovered && (
                  <div
                    className={`absolute top-full ${
                      idx <= 1
                        ? "left-0 translate-x-0"
                        : idx >= 10
                        ? "right-0 left-auto translate-x-0"
                        : "left-1/2 -translate-x-1/2"
                    } mt-1 w-64 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-amber-200/80 p-3.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150`}
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <span className="text-[11px] font-black text-blue-950 uppercase tracking-wide">
                        {item.name}
                      </span>
                      <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                        #{item.number}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 italic mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="space-y-1">
                      {item.subcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/${item.slug}?sub=${sub.slug}`}
                          className="block text-[11px] font-medium text-slate-700 hover:text-purple-800 hover:bg-amber-50/60 px-2 py-1 rounded transition-colors"
                        >
                          • {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: 4-column grid with smooth badges */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:hidden gap-1.5">
          {JOURNAL_CATEGORIES.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            const itemHref = `/${item.slug}`;
            const isActive = pathname === itemHref;

            return (
              <Link
                key={item.id}
                href={itemHref}
                className={`flex flex-col items-center justify-center p-2 rounded-xl text-center transition-all ${
                  isActive
                    ? "bg-amber-50 text-blue-950 font-black border border-amber-300"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1 ${
                    isActive
                      ? "bg-blue-950 text-amber-400"
                      : "bg-blue-50 text-blue-900"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-black tracking-tight uppercase truncate w-full">
                  {item.shortName}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
