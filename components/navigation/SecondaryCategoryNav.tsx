"use client";

import React from "react";
import Link from "next/link";
import { SECONDARY_CATEGORIES } from "@/data/categories";

export const SecondaryCategoryNav: React.FC = () => {
  return (
    <div className="w-full bg-slate-100/95 border-b border-amber-900/10 py-2 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center flex-wrap gap-y-1.5 gap-x-2 sm:gap-x-3 text-center py-0.5">
          {SECONDARY_CATEGORIES.map((cat, idx) => (
            <React.Fragment key={cat.name}>
              <Link
                href={cat.slug}
                className="whitespace-nowrap text-[11px] sm:text-xs font-black text-blue-950 hover:text-amber-600 transition-colors tracking-wide py-0.5 px-1 hover:underline underline-offset-4"
              >
                {cat.name}
              </Link>
              {idx < SECONDARY_CATEGORIES.length - 1 && (
                <span className="text-amber-500/50 font-bold select-none text-[10px]">
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
