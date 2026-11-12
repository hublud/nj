"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  BookOpen,
  ChevronDown,
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
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { JOURNAL_CATEGORIES } from "@/data/categories";
import { MobileMenu } from "./MobileMenu";

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

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchModalQuery, setSearchModalQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on page change
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  const handleModalSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchModalQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchModalQuery.trim())}`;
    }
  };

  const primaryNavItems = [
    { label: "Home", href: "/" },
    { label: "Thinks", slug: "thinks", href: "/thinks" },
    { label: "Wealth", slug: "wealth", href: "/wealth" },
    { label: "Creative", slug: "creative", href: "/creative" },
    { label: "Living", slug: "living", href: "/living" },
    { label: "Relations", slug: "relations", href: "/relations" },
    { label: "Conversations", slug: "conversations", href: "/conversations" },
    { label: "Spirit", slug: "spirit", href: "/spirit" },
    { label: "Career", slug: "career", href: "/career" },
  ];

  const moreCategories = JOURNAL_CATEGORIES.slice(8); // Culture, Unfiltered, Entertainment, Coaching

  return (
    <>
      {/* Top Editorial Ribbon */}
      <div className="bg-slate-950 text-slate-300 text-[11px] font-medium border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              THE LOGION JOURNAL
            </span>
            <span className="hidden sm:inline text-slate-400 font-serif italic">
              &quot;A WORLD OF IDEAS, EXPRESSION &amp; PERSPECTIVES&quot;
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-slate-300">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span className="hidden md:inline">{siteConfig.contactEmail}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {siteConfig.whatsappNumber}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group shrink-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 flex items-center justify-center text-white shadow-md border-2 border-amber-400 group-hover:border-amber-300 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-purple-600/20 blur-xs" />
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 relative z-10 transition-transform group-hover:scale-110 duration-300" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-blue-950 font-serif leading-none group-hover:text-blue-900 transition-colors">
                    THE LOGION JOURNAL
                  </span>
                  <span className="w-2 h-2 rounded-full bg-amber-500 hidden sm:inline-block" />
                </div>
                <span className="text-[9px] sm:text-[11px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-amber-600 via-purple-700 to-blue-800 bg-clip-text text-transparent mt-0.5">
                  A WORLD OF IDEAS, EXPRESSION &amp; PERSPECTIVES
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Dropdowns */}
            <nav ref={dropdownRef} className="hidden xl:flex items-center space-x-1 font-bold text-xs">
              {/* All Categories Dropdown (Mega Menu Trigger) */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "all-categories" ? null : "all-categories")
                  }
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all ${
                    activeDropdown === "all-categories"
                      ? "bg-blue-950 text-amber-300 shadow-sm"
                      : "text-blue-950 hover:bg-slate-100 hover:text-blue-800"
                  }`}
                >
                  <span className="font-extrabold uppercase tracking-wide">12 Categories</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-amber-500 transition-transform duration-200 ${
                      activeDropdown === "all-categories" ? "rotate-180 text-amber-300" : ""
                    }`}
                  />
                </button>

              {/* Mega Dropdown for All 12 Categories */}
              {activeDropdown === "all-categories" && (
                <div className="absolute top-full left-0 mt-2 w-[850px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-black text-blue-950 font-serif tracking-tight">
                          EXPLORE ALL 12 JOURNAL CATEGORIES
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Thought-provoking ideas, personal finance, arts, faith, culture, and coaching.
                        </p>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        Select a category or subcategory
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-5 max-h-[65vh] overflow-y-auto pr-1">
                      {JOURNAL_CATEGORIES.map((cat) => {
                        const CatIcon = iconMap[cat.icon] || Sparkles;
                        return (
                          <div
                            key={cat.id}
                            className="p-3 rounded-xl bg-slate-50/80 hover:bg-amber-50/40 border border-slate-100 hover:border-amber-300/80 transition-all group/item"
                          >
                            <Link
                              href={`/${cat.slug}`}
                              className="flex items-center gap-2 mb-1.5 text-blue-950 font-black text-xs group-hover/item:text-blue-800"
                            >
                              <div className="w-6 h-6 rounded-md bg-blue-900 text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                                <CatIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="font-bold tracking-tight">{cat.name}</span>
                            </Link>
                            <p className="text-[10px] text-slate-500 mb-2 line-clamp-1 italic">
                              {cat.description}
                            </p>
                            <div className="space-y-1 pl-2 border-l border-amber-300/60">
                              {cat.subcategories.map((sub) => (
                                <Link
                                  key={sub.slug}
                                  href={`/${cat.slug}?sub=${sub.slug}`}
                                  className="block text-[11px] font-medium text-slate-600 hover:text-purple-700 hover:translate-x-1 transition-all py-0.5 line-clamp-1"
                                >
                                  • {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Individual Top Category Links with Individual Dropdowns */}
              {primaryNavItems.map((item, idx) => {
                const isActive = pathname === item.href;
                const journalCat = item.slug
                  ? JOURNAL_CATEGORIES.find((c) => c.slug === item.slug)
                  : null;

                if (!journalCat) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "text-blue-950 bg-amber-50/80 font-black border border-amber-200"
                          : "text-slate-700 hover:text-blue-950 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isCatDropdownOpen = activeDropdown === journalCat.slug;
                const alignRight = idx >= 4;

                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() =>
                        setActiveDropdown(isCatDropdownOpen ? null : journalCat.slug)
                      }
                      className={`flex items-center gap-1 px-2.5 py-2 rounded-lg transition-colors ${
                        isActive || isCatDropdownOpen
                          ? "text-blue-950 bg-slate-100 font-extrabold"
                          : "text-slate-700 hover:text-blue-950 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3 h-3 text-slate-400 transition-transform ${
                          isCatDropdownOpen ? "rotate-180 text-blue-950" : ""
                        }`}
                      />
                    </button>

                    {/* Category Subcategory Dropdown */}
                    {isCatDropdownOpen && (
                      <div
                        className={`absolute top-full ${
                          alignRight ? "right-0" : "left-0"
                        } mt-2 w-72 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-slate-200 p-3.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150`}
                      >
                        <div className="pb-2 mb-2 border-b border-slate-100">
                          <Link
                            href={`/${journalCat.slug}`}
                            className="text-xs font-black text-blue-950 hover:text-amber-600 flex items-center justify-between"
                          >
                            <span>View All {journalCat.shortName}</span>
                            <ArrowRight className="w-3 h-3 text-amber-500" />
                          </Link>
                          <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                            {journalCat.description}
                          </p>
                        </div>
                        <div className="space-y-1">
                          {journalCat.subcategories.map((sub) => (
                            <Link
                              key={sub.slug}
                              href={`/${journalCat.slug}?sub=${sub.slug}`}
                              className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-purple-800 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* More Categories Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "more" ? null : "more")
                  }
                  className={`flex items-center gap-1 px-2.5 py-2 rounded-lg transition-colors ${
                    activeDropdown === "more"
                      ? "text-blue-950 bg-slate-100 font-black"
                      : "text-slate-700 hover:text-blue-950 hover:bg-slate-50"
                  }`}
                >
                  <span>More ▾</span>
                </button>

                {activeDropdown === "more" && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in duration-150">
                    <div className="space-y-2">
                      {moreCategories.map((m) => (
                        <div key={m.slug} className="p-2 rounded-lg hover:bg-slate-50">
                          <Link
                            href={`/${m.slug}`}
                            className="text-xs font-black text-blue-950 hover:text-amber-600 block"
                          >
                            {m.name}
                          </Link>
                          <div className="mt-1 space-y-0.5 pl-2 border-l border-slate-200">
                            {m.subcategories.slice(0, 3).map((sub) => (
                              <Link
                                key={sub.slug}
                                href={`/${m.slug}?sub=${sub.slug}`}
                                className="block text-[11px] text-slate-600 hover:text-purple-700 line-clamp-1"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Actions: Write For Us + Search + Mobile Button */}
            <div className="flex items-center space-x-2 shrink-0">
              <Link
                href="/contact?tab=submit"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 shadow-xs hover:shadow-md hover:from-amber-400 hover:to-yellow-400 transition-all border border-amber-300"
              >
                <Feather className="w-3.5 h-3.5 text-blue-950" />
                <span>WRITE FOR US</span>
              </Link>

              <button
                onClick={() => setShowSearchModal(true)}
                className="p-2 rounded-lg text-slate-700 hover:text-blue-950 hover:bg-slate-100 transition-colors"
                aria-label="Open search dialog"
              >
                <Search className="w-5 h-5 text-blue-900" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg xl:hidden text-slate-800 hover:text-blue-950 hover:bg-slate-100 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 text-blue-950" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 border-2 border-amber-400 relative">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-black text-blue-950 font-serif">
                Search The Logion Journal
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Explore essays, intellectual discussions, wealth tips, creative stories &amp; perspectives.
            </p>
            <form onSubmit={handleModalSearch} className="flex gap-2">
              <input
                type="text"
                value={searchModalQuery}
                onChange={(e) => setSearchModalQuery(e.target.value)}
                placeholder="Search ideas, philosophy, wealth, relations..."
                autoFocus
                className="flex-1 px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900"
              />
              <button
                type="submit"
                className="bg-blue-950 hover:bg-blue-900 text-amber-300 font-black text-sm px-5 py-2.5 rounded-xl border border-amber-400/50 shadow-sm"
              >
                Search
              </button>
            </form>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>Popular: The Logion Paradox • Making Money Online • Self-Discovery</span>
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-slate-400 hover:text-slate-700 underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
