"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { MediaUploader } from "@/components/admin/MediaUploader";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  Save,
  Sparkles,
  Eye,
  PenLine,
  Clock,
  FileText,
  Layers,
  HelpCircle,
  Wand2,
} from "lucide-react";
import Link from "next/link";
import {
  textToParagraphs,
  getArticleStats,
  calculateReadingTime,
} from "@/lib/articleContent";

export default function CreatePostPage() {
  const router = useRouter();
  const { categories, addArticle } = useStore();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [categorySlug, setCategorySlug] = useState("thinks");
  const [location, setLocation] = useState("Global");
  const [authorName, setAuthorName] = useState("The Logion Journal Editorial");
  const [readTime, setReadTime] = useState("3 min read");
  const [featured, setFeatured] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [mediaList, setMediaList] = useState<{ url: string; type: "image" | "video" }[]>([]);
  const [bodyText, setBodyText] = useState("");
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stats = getArticleStats(bodyText);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    const autoSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setSlug(autoSlug);
  };

  const handleAutoCalculateReadTime = () => {
    if (bodyText.trim()) {
      setReadTime(calculateReadingTime(bodyText));
    }
  };

  const handleAutoGenerateExcerpt = () => {
    const paragraphs = textToParagraphs(bodyText);
    if (paragraphs.length > 0) {
      const first = paragraphs[0];
      setExcerpt(first.length > 180 ? `${first.slice(0, 177)}...` : first);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const primaryMedia = imageUrl || (mediaList[0] ? mediaList[0].url : "");
    if (!title.trim()) {
      alert("Please provide an article title.");
      return;
    }
    if (!primaryMedia) {
      alert("Please upload at least one feature photo/video or provide an image URL.");
      return;
    }

    const paragraphs = textToParagraphs(bodyText);
    if (paragraphs.length === 0) {
      alert("Please write or paste the article content before publishing.");
      return;
    }

    setIsSubmitting(true);

    const selectedCatObj = categories.find((c) => c.slug === categorySlug);
    const catName = selectedCatObj ? selectedCatObj.name : "News";

    const allMediaItems = mediaList.length > 0 ? mediaList : [{
      url: primaryMedia,
      type: primaryMedia.match(/\.(mp4|webm|mov|mkv|avi)$/i) || primaryMedia.includes("/videos/") ? ("video" as const) : ("image" as const)
    }];

    // Auto-fallback excerpt to first 160 characters if empty
    const finalExcerpt = excerpt.trim() || (paragraphs[0] ? paragraphs[0].slice(0, 160) : "");

    try {
      await addArticle({
        title: title.trim(),
        slug: slug.trim() || `story-${Date.now()}`,
        excerpt: finalExcerpt,
        content: paragraphs,
        image: primaryMedia,
        mediaList: allMediaItems,
        category: catName,
        categorySlug: categorySlug,
        location: location.trim() || "Global",
        author: {
          name: authorName.trim() || "The Logion Journal Editorial",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          role: "Contributing Essayist",
        },
        readTime: readTime || stats.readingTime || "3 min read",
        featured: featured,
      });

      setIsSubmitting(false);
      router.push("/admin/posts");
    } catch (err: any) {
      setIsSubmitting(false);
      alert(`Could not save story: ${err?.message || "Database connection error"}. Please try again.`);
    }
  };

  const previewParagraphs = textToParagraphs(bodyText);

  return (
    <div className="flex-1 flex flex-col pb-20 md:pb-12">
      <AdminHeader
        title="Create New Story"
        subtitle="Write naturally or paste full articles with seamless paragraph formatting"
      />

      <div className="p-3 sm:p-6 max-w-5xl space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/admin/posts"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Posts</span>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Section 1: Story Details */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs space-y-4 sm:space-y-5">
            <h2 className="text-sm sm:text-base font-bold text-slate-900 border-b pb-2 sm:pb-3 flex items-center gap-2">
              <span>1. Story Details</span>
            </h2>

            {/* Title & Slug */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. The Architecture of Critical Thought: Why Unpopular Ideas Shape Tomorrow"
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase mb-1">
                  URL Slug (Auto-generated)
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-100 border border-slate-200 rounded-lg font-mono text-slate-600"
                />
              </div>
            </div>

            {/* Category & Read Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Category *
                </label>
                <select
                  value={categorySlug}
                  onChange={(e) => setCategorySlug(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg font-bold text-slate-800 focus:outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase">
                    Reading Time
                  </label>
                  {bodyText.trim() && (
                    <button
                      type="button"
                      onClick={handleAutoCalculateReadTime}
                      className="text-[10px] text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <Wand2 className="w-3 h-3" /> Auto
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="e.g. 4 min read"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Author Name
                </label>
                <input
                  type="text"
                  placeholder="The Logion Journal Editorial"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  Short Excerpt / Lead Summary
                </label>
                {bodyText.trim() && (
                  <button
                    type="button"
                    onClick={handleAutoGenerateExcerpt}
                    className="text-[10px] text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-0.5 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" /> Auto from body
                  </button>
                )}
              </div>
              <textarea
                rows={2}
                placeholder="A compelling 1-2 sentence overview for the card (or leave empty to auto-extract from body)..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
              />
            </div>

            {/* Featured toggle */}
            <div className="flex items-center gap-3 pt-1">
              <input
                type="checkbox"
                id="featuredToggle"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded shrink-0 cursor-pointer"
              />
              <label htmlFor="featuredToggle" className="text-xs font-bold text-slate-800 cursor-pointer">
                Spotlight this story in the Homepage <strong className="text-blue-600">Featured Section</strong>
              </label>
            </div>
          </div>

          {/* Section 2: Feature Media */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between border-b pb-2 sm:pb-3">
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                2. Feature Media (Photos / Video)
              </h2>
              <span className="text-[11px] sm:text-xs text-blue-600 font-bold">Photos & Videos</span>
            </div>

            <MediaUploader
              folder="posts"
              initialUrl={imageUrl}
              allowMultiple={true}
              onUploadSuccess={(url, type, allUrls) => {
                setImageUrl(url);
                if (allUrls && allUrls.length > 0) {
                  setMediaList(
                    allUrls.map((u) => ({
                      url: u,
                      type:
                        u.match(/\.(mp4|webm|mov|mkv|avi)$/i) ||
                        u.includes("/videos/")
                          ? "video"
                          : "image",
                    }))
                  );
                } else if (url) {
                  setMediaList([{ url, type }]);
                }
              }}
            />

            {/* Direct URL input fallback */}
            <div className="pt-1">
              <label className="block text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase mb-1">
                Or enter image / video direct URL:
              </label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/... or https://res.cloudinary.com/..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg font-mono text-slate-700"
              />
            </div>
          </div>

          {/* Section 3: Simple & Seamless Story Content Editor */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            {/* Header + Tabs + Metrics */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3">
              <div className="space-y-0.5">
                <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>3. Story Content</span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    Simple Editor
                  </span>
                </h2>
                <p className="text-xs text-slate-500">
                  Write freely or paste entire articles from Word or Google Docs.
                </p>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveTab("write")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "write"
                      ? "bg-white text-blue-700 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <PenLine className="w-3.5 h-3.5" />
                  <span>Write / Paste</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "preview"
                      ? "bg-white text-blue-700 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Live Reader Preview ({stats.paragraphsCount})</span>
                </button>
              </div>
            </div>

            {/* Helpful Formatting Tip */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong>Effortless Paragraphs:</strong> Copy and paste your entire article text here. Pressing <kbd className="bg-amber-100 px-1 py-0.5 rounded border border-amber-300 font-mono text-[10px]">Enter</kbd> creates new paragraphs automatically. Click the <strong>Live Reader Preview</strong> tab above anytime to verify exactly how it will appear to readers.
              </div>
            </div>

            {/* Tab 1: Write / Paste Single Textarea */}
            {activeTab === "write" && (
              <div className="space-y-3">
                <textarea
                  rows={16}
                  value={bodyText}
                  onChange={(e) => setBodyText(e.target.value)}
                  placeholder={`Write your story here or paste from Microsoft Word, Google Docs, Substack, or notes...\n\nEvery time you press Enter, a new paragraph is created naturally.\n\nYou can also include YouTube links on their own line to embed HD videos inside the article.`}
                  className="w-full px-4 py-3.5 text-sm sm:text-base leading-relaxed bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-inner font-sans text-slate-800 placeholder:text-slate-400 min-h-[380px]"
                />

                {/* Live Stats Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1 text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
                      <Layers className="w-3 h-3 text-blue-600" />
                      {stats.paragraphsCount} {stats.paragraphsCount === 1 ? "paragraph" : "paragraphs"}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
                      <FileText className="w-3 h-3 text-slate-600" />
                      {stats.words.toLocaleString()} words
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
                      <Clock className="w-3 h-3 text-amber-600" />
                      ~{stats.readingTime}
                    </span>
                  </div>

                  {bodyText.trim() && (
                    <button
                      type="button"
                      onClick={() => setBodyText("")}
                      className="text-slate-400 hover:text-rose-600 font-bold text-[11px] transition-colors"
                    >
                      Clear Content
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Tab 2: Live Reader Preview */}
            {activeTab === "preview" && (
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Article Layout Preview
                    </span>
                    <span className="text-xs text-blue-600 font-bold">
                      {previewParagraphs.length} formatted {previewParagraphs.length === 1 ? "paragraph" : "paragraphs"}
                    </span>
                  </div>

                  {previewParagraphs.length > 0 ? (
                    <div className="space-y-4 max-w-3xl">
                      {previewParagraphs.map((para, idx) => (
                        <div
                          key={idx}
                          className="relative pl-6 sm:pl-8 border-l-2 border-blue-400 group"
                        >
                          <span className="absolute left-1 top-0 text-[10px] font-mono text-slate-400 font-bold select-none">
                            {idx + 1}
                          </span>
                          <p className="text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line font-serif">
                            {para}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center text-slate-400 space-y-2">
                      <PenLine className="w-8 h-8 mx-auto text-slate-300" />
                      <p className="text-xs font-medium">
                        No content written yet. Switch to the <strong>Write / Paste</strong> tab to add text.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Submit Actions */}
          <div className="flex items-center justify-end gap-3 pt-2 sm:pt-4">
            <Link href="/admin/posts">
              <Button type="button" variant="outline" size="md" className="font-bold text-xs">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              className="font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-2.5 sm:py-3 shadow-md w-full sm:w-auto"
            >
              <Save className="w-4 h-4 mr-1.5" />
              {isSubmitting ? "Publishing..." : "PUBLISH STORY NOW"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
