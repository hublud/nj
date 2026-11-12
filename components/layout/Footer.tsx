import React from "react";
import Link from "next/link";
import {
  BookOpen,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { JOURNAL_CATEGORIES } from "@/data/categories";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-12 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: About & Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 border border-amber-400 flex items-center justify-center text-white shadow-sm">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-lg font-black text-white font-serif tracking-tight">
                THE LOGION JOURNAL
              </span>
            </Link>
            <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
              A WORLD OF IDEAS, EXPRESSION &amp; PERSPECTIVES
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              An intellectual sanctuary exploring profound questions, financial freedom, creative communication, personal growth, relationships, Christian spirituality, modern culture, and life mastery.
            </p>
            <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent Digital Publication &amp; Platform</span>
            </div>
          </div>

          {/* Col 2: The 12 Categories */}
          <div>
            <h4 className="text-xs font-black text-amber-300 uppercase tracking-widest mb-4 border-l-2 border-amber-500 pl-2">
              The 12 Categories
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {JOURNAL_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/${cat.slug}`}
                  className="flex items-center text-slate-400 hover:text-amber-300 transition-colors py-0.5 truncate"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/70 mr-1 shrink-0" />
                  <span className="truncate">{cat.shortName}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Editorial Links */}
          <div>
            <h4 className="text-xs font-black text-amber-300 uppercase tracking-widest mb-4 border-l-2 border-purple-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center text-slate-400 hover:text-white transition-colors py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-purple-400 mr-1.5" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact & Helpdesk */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-amber-300 uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-2">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Reach our editorial team, pitch an essay, or inquire about coaching and adverts:
            </p>

            <div className="space-y-2.5">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 hover:bg-emerald-950/80 border border-slate-800 hover:border-emerald-500 transition-all text-xs font-bold text-emerald-400"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {siteConfig.whatsappNumber}</span>
              </a>

              <a
                href={`tel:${siteConfig.contactPhone}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 hover:bg-amber-950/50 border border-slate-800 hover:border-amber-500 transition-all text-xs font-bold text-amber-300"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Phone: {siteConfig.contactPhone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all text-xs font-bold text-slate-300 font-mono"
              >
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="truncate">{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} THE LOGION JOURNAL (logionjournal.com). All Rights Reserved.</p>
          <div className="flex items-center space-x-4 text-[11px]">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Submissions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
