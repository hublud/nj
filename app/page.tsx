"use client";

import React from "react";
import { SearchBar } from "@/components/search/SearchBar";
import { FeaturedSection } from "@/components/blog/FeaturedSection";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { TopLandscapeAd, DualPromoBanners } from "@/components/ads/CustomAdBanners";
import { useStore } from "@/lib/store";
import { Brain, Coins, Feather, ArrowRight, Sparkles, MessageSquareQuote, Compass } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const { articles, isLoaded } = useStore();

  const featuredArticles = articles.filter((a) => a.featured);
  const latestArticles = articles;

  const thinksArticles = articles.filter(
    (a) => a.categorySlug === "thinks" || a.categorySlug === "conversations"
  );

  const wealthArticles = articles.filter(
    (a) => a.categorySlug === "wealth" || a.categorySlug === "career"
  );

  const creativeArticles = articles.filter(
    (a) => a.categorySlug === "creative" || a.categorySlug === "living" || a.categorySlug === "unfiltered"
  );

  return (
    <div className="space-y-8">
      {/* 1. Top Sponsored Advertisement / Partnership Banner */}
      <TopLandscapeAd />

      {/* 2. Prominent Search Bar */}
      <SearchBar />

      {/* 3. Top Promotional Banners (Coaching & Writer Submissions) */}
      <DualPromoBanners placementTitle="FEATURED INITIATIVES & EDITORIAL CALLS" />

      {/* 4. Featured Stories Section */}
      {featuredArticles.length > 0 && (
        <FeaturedSection articles={featuredArticles} />
      )}

      {/* 5. Full-Width Latest Articles Grid */}
      <ArticleGrid
        articles={latestArticles}
        title="LATEST ESSAYS, IDEAS & PERSPECTIVES"
        subtitle="Thought-provoking discussions and reflections across our 12 categories"
        columns={5}
        initialCount={30}
        showLoadMore={true}
        isLoading={!isLoaded}
      />

      {/* 6. Dedicated Spotlight: LOGION THINKS & CONVERSATIONS */}
      {thinksArticles.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-amber-500">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-6 bg-gradient-to-b from-blue-900 to-amber-500 rounded-xs" />
              <h3 className="text-lg sm:text-xl font-black text-blue-950 font-serif tracking-tight flex items-center gap-2">
                <Brain className="w-5 h-5 text-amber-500" />
                LOGION THINKS &amp; CONVERSATIONS
              </h3>
            </div>
            <Link
              href="/thinks"
              className="text-xs font-black text-amber-600 hover:text-amber-800 flex items-center gap-1 uppercase tracking-wider"
            >
              Explore Thinks <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
            {thinksArticles.slice(0, 5).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 7. Dedicated Spotlight: LOGION WEALTH & CAREER */}
      {wealthArticles.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-blue-900">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-6 bg-blue-900 rounded-xs" />
              <h3 className="text-lg sm:text-xl font-black text-blue-950 font-serif tracking-tight flex items-center gap-2">
                <Coins className="w-5 h-5 text-amber-500" />
                LOGION WEALTH &amp; CAREER ADVANCEMENT
              </h3>
            </div>
            <Link
              href="/wealth"
              className="text-xs font-black text-blue-900 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider"
            >
              Explore Wealth <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
            {wealthArticles.slice(0, 5).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 8. Dedicated Spotlight: LOGION CREATIVE, LIVING & UNFILTERED */}
      {creativeArticles.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-purple-600">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-6 bg-purple-600 rounded-xs" />
              <h3 className="text-lg sm:text-xl font-black text-blue-950 font-serif tracking-tight flex items-center gap-2">
                <Feather className="w-5 h-5 text-purple-600" />
                LOGION CREATIVE, LIVING &amp; UNFILTERED
              </h3>
            </div>
            <Link
              href="/creative"
              className="text-xs font-black text-purple-700 hover:text-purple-900 flex items-center gap-1 uppercase tracking-wider"
            >
              Explore Creative <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
            {creativeArticles.slice(0, 5).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 9. Bottom Promotional & Direct Helpdesk Banners */}
      <DualPromoBanners placementTitle="THE LOGION JOURNAL DIRECT HELPDESK" />
    </div>
  );
}
