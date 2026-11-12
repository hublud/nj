"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { HorizontalAd } from "@/components/ads/HorizontalAd";
import { useStore } from "@/lib/store";
import { PlusCircle, Filter, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { JOURNAL_CATEGORIES } from "@/data/categories";

interface CategoryPageTemplateProps {
  title: string;
  categoryName: string;
  categorySlug: string;
  description: string;
}

function CategoryPageContent({
  title,
  categoryName,
  categorySlug,
  description,
}: CategoryPageTemplateProps) {
  const { articles: storeArticles, isLoaded } = useStore();
  const searchParams = useSearchParams();
  const querySub = searchParams.get("sub");
  const [selectedSub, setSelectedSub] = useState<string | null>(querySub);

  // Sync state if query param changes
  React.useEffect(() => {
    setSelectedSub(querySub);
  }, [querySub]);

  // Find category metadata and subcategories
  const currentCategory = useMemo(() => {
    return JOURNAL_CATEGORIES.find(
      (c) =>
        c.slug.toLowerCase() === categorySlug.toLowerCase() ||
        c.name.toLowerCase() === categoryName.toLowerCase()
    );
  }, [categorySlug, categoryName]);

  const targetSlug = (categorySlug || categoryName)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const activeArticles = useMemo(() => {
    return storeArticles.filter((a) => {
      const artSlug = (a.categorySlug || "")
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

      const artCat = (a.category || "")
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();

      const matchesCat =
        artSlug === targetSlug ||
        artCat.includes(targetSlug) ||
        targetSlug.includes(artSlug);

      if (!matchesCat) return false;

      // Filter by subcategory if selected
      if (selectedSub) {
        const subSlug = (a.subcategorySlug || a.subcategory || "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-");
        const normSelected = selectedSub.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return subSlug.includes(normSelected) || normSelected.includes(subSlug);
      }

      return true;
    });
  }, [storeArticles, targetSlug, selectedSub]);

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "The Journal", href: "/" },
          { label: categoryName },
        ]}
      />

      {/* Category Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border-2 border-amber-400/50 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-purple-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
              LOGION CATEGORY #{currentCategory?.number || ""}
            </span>
            <span className="text-xs text-slate-400 font-serif italic">The Logion Journal</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-serif tracking-tight mt-1 mb-2">
            {title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Interactive Subcategory Pills / Filter */}
      {currentCategory && currentCategory.subcategories.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-700">
            <Filter className="w-3.5 h-3.5 text-amber-600" />
            <span className="uppercase tracking-wider text-[11px] text-blue-950 font-black">
              Subcategories in {currentCategory.shortName}:
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <button
              onClick={() => setSelectedSub(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedSub === null
                  ? "bg-blue-950 text-amber-300 shadow-xs border border-amber-400"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All {currentCategory.shortName}
            </button>
            {currentCategory.subcategories.map((sub) => {
              const isSelected = selectedSub === sub.slug;
              return (
                <button
                  key={sub.slug}
                  onClick={() => setSelectedSub(isSelected ? null : sub.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-xs border border-amber-300"
                      : "bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-amber-50 hover:text-blue-950 hover:border-amber-300"
                  }`}
                >
                  {sub.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* In-feed Ad Banner */}
      <HorizontalAd />

      {/* Category Content Grid or Clean Empty State */}
      {isLoaded && activeArticles.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
            <BookOpen className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-blue-950 font-serif">
            {selectedSub ? "No Articles Found in this Subcategory" : `No Articles Published in ${categoryName} Yet`}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            {selectedSub
              ? "Try resetting the subcategory filter to browse all articles in this section."
              : "Fresh essays, thought leadership pieces, and discussions for this category will appear right here."}
          </p>
          <div className="pt-2 flex justify-center gap-3">
            {selectedSub && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedSub(null)}
                className="border-amber-400 text-blue-950 hover:bg-amber-50"
              >
                Reset Filter
              </Button>
            )}
            <Link href="/">
              <Button variant="outline" size="sm">
                Explore All Journal Stories
              </Button>
            </Link>
            <Link href="/admin/posts/new">
              <Button variant="primary" size="sm" className="flex items-center gap-1 bg-blue-950 hover:bg-blue-900 text-amber-300 border border-amber-400">
                <PlusCircle className="w-4 h-4" /> Add Story to {categoryName}
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <ArticleGrid
          articles={activeArticles}
          title={`${categoryName.toUpperCase()} ${selectedSub ? "• FILTERED" : ""}`}
          columns={5}
          showLoadMore={true}
          isLoading={!isLoaded}
        />
      )}
    </div>
  );
}

export const CategoryPageTemplate: React.FC<CategoryPageTemplateProps> = (props) => {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400 font-serif text-sm">Loading category stories...</div>}>
      <CategoryPageContent {...props} />
    </Suspense>
  );
};
