"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  X,
  Search,
  ChevronDown,
  BookOpen,
  Sparkles,
  Mail,
  Phone,
  MessageCircle,
  Brain,
  Coins,
  Feather,
  Compass,
  HeartHandshake,
  MessageSquareQuote,
  Briefcase,
  Globe,
  Flame,
  Film,
  GraduationCap,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { JOURNAL_CATEGORIES } from "@/data/categories";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [mobileQuery, setMobileQuery] = useState("");
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const router = useRouter();

  if (!isOpen) return null;

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(mobileQuery.trim())}`);
      onClose();
    }
  };

  const toggleCategory = (slug: string) => {
    setExpandedCat(expandedCat === slug ? null : slug);
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 border-b border-amber-900/20 flex items-center justify-between bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-blue-900 border border-amber-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-sm tracking-wide text-white">
                THE LOGION JOURNAL
              </span>
              <span className="text-[9px] text-amber-300 font-bold uppercase tracking-wider">
                A WORLD OF IDEAS &amp; PERSPECTIVES
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="p-3 bg-slate-50 border-b border-slate-200">
          <form onSubmit={handleMobileSearch} className="relative flex items-center">
            <input
              type="text"
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              placeholder="Search ideas, wealth, faith..."
              className="w-full pl-3 pr-10 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
            />
            <button
              type="submit"
              className="absolute right-2 p-1 text-slate-500 hover:text-amber-600"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Categories list with accordion dropdowns */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-black text-blue-950 hover:bg-amber-50 transition-colors uppercase tracking-wider border-b border-slate-100"
          >
            <span>Home</span>
          </Link>

          <div className="pt-2 pb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 px-3">
              12 Categories (Tap to expand subcategories)
            </span>
          </div>

          {JOURNAL_CATEGORIES.map((cat) => {
            const CatIcon = iconMap[cat.icon] || Sparkles;
            const isExpanded = expandedCat === cat.slug;

            return (
              <div
                key={cat.id}
                className="rounded-xl border border-slate-100 bg-slate-50/50 overflow-hidden mb-1"
              >
                <div className="flex items-center justify-between p-2">
                  <Link
                    href={`/${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center space-x-2.5 flex-1 py-1"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-950 text-amber-300 flex items-center justify-center shrink-0">
                      <CatIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-extrabold text-blue-950">
                        {cat.name}
                      </span>
                      <span className="text-[9px] text-slate-500 line-clamp-1 italic">
                        {cat.description}
                      </span>
                    </div>
                  </Link>

                  <button
                    onClick={() => toggleCategory(cat.slug)}
                    className="p-1.5 rounded-md hover:bg-slate-200 text-slate-600 transition-colors ml-1"
                    aria-label={`Toggle ${cat.name} subcategories`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-amber-600 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Subcategories dropdown */}
                {isExpanded && (
                  <div className="bg-white border-t border-slate-200/70 p-2 space-y-1 pl-4 animate-in fade-in duration-150">
                    <Link
                      href={`/${cat.slug}`}
                      onClick={onClose}
                      className="block py-1 text-[11px] font-bold text-amber-700 hover:text-amber-800"
                    >
                      → View All in {cat.shortName}
                    </Link>
                    {cat.subcategories.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/${cat.slug}?sub=${sub.slug}`}
                        onClick={onClose}
                        className="block py-1 text-[11px] font-medium text-slate-600 hover:text-purple-700 pl-2 border-l border-amber-300"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-3 border-t border-slate-100 space-y-1">
            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <span>About The Logion Journal</span>
            </Link>
            <Link
              href="/contact?tab=submit"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <span>Write For Us / Submissions</span>
            </Link>
            <Link
              href="/contact?tab=advertise"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <span>Advertise &amp; Partnerships</span>
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <span>Contact Editorial Team</span>
            </Link>
          </div>
        </div>

        {/* Footer Contact bar in mobile drawer */}
        <div className="p-3 bg-slate-950 text-white text-xs border-t border-amber-900/30">
          <div className="space-y-1.5">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 font-bold"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp: {siteConfig.whatsappNumber}</span>
            </a>
            <a
              href={`tel:${siteConfig.contactPhone}`}
              className="flex items-center gap-2 text-slate-300"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Phone: {siteConfig.contactPhoneFormatted}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="flex items-center gap-2 text-slate-300 text-[11px] font-mono"
            >
              <Mail className="w-4 h-4 text-purple-400 shrink-0" />
              <span>{siteConfig.contactEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
