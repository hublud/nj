import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BookOpen, ShieldCheck, Award, Users, Sparkles, Feather, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { JOURNAL_CATEGORIES } from "@/data/categories";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | THE LOGION JOURNAL",
  description: "Learn more about The Logion Journal — A World of Ideas, Expression & Perspectives.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About The Journal" },
        ]}
      />

      {/* Hero Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-sm space-y-6">
        <div className="flex items-center space-x-3.5 pb-6 border-b border-slate-100">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border-2 border-amber-400 flex items-center justify-center text-white shadow-md shrink-0">
            <BookOpen className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-blue-950 font-serif tracking-tight">
              About The Logion Journal
            </h1>
            <p className="text-xs sm:text-sm font-extrabold tracking-widest uppercase bg-gradient-to-r from-amber-600 via-purple-700 to-blue-800 bg-clip-text text-transparent mt-0.5">
              A WORLD OF IDEAS, EXPRESSION &amp; PERSPECTIVES
            </p>
          </div>
        </div>

        <div className="prose max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
          <p>
            <strong>The Logion Journal</strong> (logionjournal.com) was established as an intellectual sanctuary and creative forum dedicated to exploring the profound ideas, questions, and perspectives that define human existence in the modern era.
          </p>
          <p>
            In a digital landscape often dominated by sensationalism, superficial takes, and relentless algorithmic noise, The Logion Journal stands as a beacon for intentional reading, deep thought, and actionable wisdom. We bridge the timeless inquiries of philosophy with the practical realities of financial freedom, creative expression, relationships, and spiritual maturity.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-center">
            <Sparkles className="w-6 h-6 text-amber-600 mx-auto mb-2" />
            <h3 className="font-serif font-black text-blue-950 text-base">Rigorous Inquiry</h3>
            <p className="text-xs text-slate-600 mt-1">
              Challenging conventional consensus through philosophy, psychology, and critical thinking.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 text-center">
            <Feather className="w-6 h-6 text-blue-900 mx-auto mb-2" />
            <h3 className="font-serif font-black text-blue-950 text-base">Creative Expression</h3>
            <p className="text-xs text-slate-600 mt-1">
              Celebrating storytelling, copywriting, spoken word, poetry, and authentic personal essays.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200/80 text-center">
            <GraduationCap className="w-6 h-6 text-purple-700 mx-auto mb-2" />
            <h3 className="font-serif font-black text-blue-950 text-base">Mentorship &amp; Growth</h3>
            <p className="text-xs text-slate-600 mt-1">
              Practical coaching frameworks on productivity, remote careers, and lifelong mastery.
            </p>
          </div>
        </div>

        {/* The 12 Pillars Grid */}
        <div className="pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-black text-blue-950 font-serif mb-2">
            Our 12 Editorial Categories
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            Explore the diverse domains of thought, creativity, and life design curated within our pages:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {JOURNAL_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 bg-slate-50/70 hover:bg-white transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-blue-950 group-hover:text-amber-600 transition-colors">
                    #{cat.number}. {cat.name}
                  </span>
                  <span className="text-[10px] text-amber-700 font-bold bg-amber-100/70 px-1.5 py-0.5 rounded">
                    {cat.subcategories.length} subcategories
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic line-clamp-2">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact info bar */}
        <div className="pt-8 border-t border-slate-100 bg-slate-50 rounded-2xl p-6 mt-6">
          <h3 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-3">
            Editorial Desk Contact
          </h3>
          <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-700">
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-purple-600" />
              <span>Email: {siteConfig.contactEmail}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Phone: {siteConfig.contactPhone}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {siteConfig.whatsappNumber}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
