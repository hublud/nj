import React from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Images, BookOpen } from "lucide-react";
import { Article } from "@/types";
import { BlogImage } from "../ui/BlogImage";

interface ArticleCardProps {
  article: Article;
  className?: string;
  showExcerpt?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  className = "",
}) => {
  const isVideo =
    article.image?.match(/\.(mp4|webm|mov|mkv|avi|3gp)$/i) ||
    article.image?.includes("/videos/") ||
    Boolean(article.videoUrl);

  const hasMultipleMedia = article.mediaList && article.mediaList.length > 1;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-slate-200 hover:border-amber-400/80 bg-slate-950 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[3/4] sm:aspect-[4/5] flex flex-col justify-end ${className}`}
    >
      {/* Full-bleed background media */}
      <Link
        href={`/article/${article.slug}`}
        className="absolute inset-0 w-full h-full block overflow-hidden"
      >
        <BlogImage
          src={article.image}
          alt={article.title}
          fill={true}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark subtle gradient overlay with imperial navy/purple tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 via-45% to-transparent transition-opacity group-hover:via-slate-950/70" />
      </Link>

      {/* Top badges */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none flex flex-wrap items-center gap-1.5 max-w-[90%]">
        <span className="bg-blue-950/90 backdrop-blur-md border border-amber-400/50 text-amber-300 text-[9px] sm:text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
          {article.category}
        </span>

        {article.subcategory && (
          <span className="hidden sm:inline-block bg-purple-950/80 backdrop-blur-md border border-purple-400/30 text-purple-200 text-[9px] font-medium px-2 py-0.5 rounded-full tracking-tight shadow-xs truncate max-w-[120px]">
            {article.subcategory}
          </span>
        )}

        {isVideo && (
          <span className="bg-purple-600/80 backdrop-blur-md border border-purple-400/30 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
            <Play className="w-2.5 h-2.5 fill-current" /> Video
          </span>
        )}

        {hasMultipleMedia && !isVideo && (
          <span className="bg-blue-600/80 backdrop-blur-md border border-blue-400/30 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
            <Images className="w-2.5 h-2.5" /> +{article.mediaList!.length}
          </span>
        )}
      </div>

      {/* Top right quick-link icon */}
      <Link
        href={`/article/${article.slug}`}
        className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-slate-900/60 backdrop-blur-md border border-amber-400/40 flex items-center justify-center text-amber-300 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-500 hover:text-slate-950 shadow-xs"
        aria-label={`Read ${article.title}`}
      >
        <ArrowUpRight className="w-4 h-4" />
      </Link>

      {/* Bottom overlay text content */}
      <div className="relative z-10 p-3 sm:p-4 text-white pointer-events-auto">
        <Link href={`/article/${article.slug}`} className="block">
          <h3 className="text-xs sm:text-sm md:text-base font-black text-white font-serif leading-snug tracking-tight drop-shadow-md line-clamp-2 group-hover:text-amber-300 transition-colors">
            {article.title}
          </h3>
        </Link>

        {/* Action / Read button */}
        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/15">
          <span className="text-[10px] text-slate-300 font-medium truncate max-w-[110px]">
            {article.author?.name || "The Logion Desk"}
          </span>

          <Link
            href={`/article/${article.slug}`}
            className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-white/10 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 text-white hover:text-slate-950 px-2.5 py-0.5 rounded-full border border-white/25 hover:border-amber-400 transition-all shrink-0 flex items-center gap-1"
          >
            <span>READ</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
};
