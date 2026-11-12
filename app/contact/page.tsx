"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  MessageCircle,
  Mail,
  Phone,
  Feather,
  GraduationCap,
  Mic,
  Megaphone,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function ContactPage() {
  const contactTopics = [
    {
      title: "Submit Essays & Articles",
      desc: "Pitch thought pieces, philosophical essays, poetry, and creative reflections for publication.",
      icon: Feather,
      color: "bg-amber-600",
      phone: siteConfig.whatsappNumber,
      waLink: `https://wa.me/234${siteConfig.whatsappNumber.slice(1)}?text=Hello%20The%20Logion%20Journal%2C%20I%20would%20like%20to%20submit%20an%20article%20%2F%20essay%20for%20publication.`,
    },
    {
      title: "1-on-1 Coaching & Mentorship",
      desc: "Book practical coaching on productivity, freelancing, writing, and personal development.",
      icon: GraduationCap,
      color: "bg-purple-700",
      phone: siteConfig.whatsappNumber,
      waLink: `https://wa.me/234${siteConfig.whatsappNumber.slice(1)}?text=Hello%20The%20Logion%20Journal%2C%20I%20am%20interested%20in%20booking%20a%20Coaching%20%26%20Mentorship%20session.`,
    },
    {
      title: "The LOGION Paradox & Guest Features",
      desc: "Inquire about guest interviews, podcast episodes, and intellectual perspective dialogues.",
      icon: Mic,
      color: "bg-blue-800",
      phone: siteConfig.whatsappNumber,
      waLink: `https://wa.me/234${siteConfig.whatsappNumber.slice(1)}?text=Hello%20The%20Logion%20Journal%2C%20I%20want%20to%20pitch%20a%20guest%20interview%20%2F%20dialogue%20for%20The%20LOGION%20Paradox.`,
    },
    {
      title: "Advertise & Partner With Us",
      desc: "Sponsored articles, leaderboard banners, brand spotlights, and corporate partnerships.",
      icon: Megaphone,
      color: "bg-amber-500",
      phone: siteConfig.whatsappNumber,
      waLink: `https://wa.me/234${siteConfig.whatsappNumber.slice(1)}?text=Hello%20The%20Logion%20Journal%2C%20I%20want%20to%20inquire%20about%20advertising%20%2F%20sponsoring%20content.`,
    },
    {
      title: "General Inquiries & Letters",
      desc: "Letters to the editorial desk, questions, and reader feedback.",
      icon: BookOpen,
      color: "bg-slate-800",
      phone: siteConfig.contactPhone,
      waLink: `https://wa.me/234${siteConfig.whatsappNumber.slice(1)}?text=Hello%20The%20Logion%20Journal%2C%20I%20have%20a%20general%20question%20for%20the%20editorial%20team.`,
    },
    {
      title: "Copyright & Intellectual Property",
      desc: "Formal copyright inquiries, permissions, and syndication requests.",
      icon: ShieldAlert,
      color: "bg-rose-700",
      phone: siteConfig.whatsappNumber,
      waLink: `https://wa.me/234${siteConfig.whatsappNumber.slice(1)}?text=Hello%20The%20Logion%20Journal%2C%20I%20am%20inquiring%20about%20copyright%20%2F%20syndication%20permissions.`,
    },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact & Editorial Desk" },
        ]}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 rounded-3xl shadow-sm space-y-3 relative overflow-hidden border-2 border-amber-400/40">
        <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Editorial Communication Desk
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white font-serif tracking-tight">
          Connect With The Logion Journal
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          We welcome pitches, reader perspectives, coaching inquiries, and corporate partnerships. Reach out directly via <strong>WhatsApp</strong> or email our desk.
        </p>
      </div>

      {/* Main Direct WhatsApp & Phone Callouts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* WhatsApp Callout */}
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-br from-emerald-600 to-teal-800 hover:from-emerald-500 hover:to-teal-700 text-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-4 border border-emerald-400/30"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-200">
                Official WhatsApp Desk
              </span>
              <div className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
                {siteConfig.whatsappNumber}
              </div>
              <p className="text-xs text-emerald-100 mt-1">
                Direct chat with editorial &amp; coaching desk
              </p>
            </div>
          </div>
          <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1.5 transition-transform shrink-0" />
        </a>

        {/* Phone Callout */}
        <a
          href={`tel:${siteConfig.contactPhone}`}
          className="group bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 hover:from-blue-900 hover:to-indigo-900 text-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-4 border-2 border-amber-400/60"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400 flex items-center justify-center shrink-0">
              <Phone className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-amber-300">
                Phone Support
              </span>
              <div className="text-xl sm:text-2xl font-black tracking-tight mt-0.5 font-mono text-white">
                {siteConfig.contactPhone}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Mon - Sat: 9:00 AM - 6:00 PM (WAT)
              </p>
            </div>
          </div>
          <ArrowRight className="w-6 h-6 text-amber-300 group-hover:translate-x-1.5 transition-transform shrink-0" />
        </a>
      </div>

      {/* Official Email Callout */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider">
              Official Editorial &amp; Submission Email
            </h4>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-base sm:text-lg font-bold text-blue-900 hover:text-amber-600 transition-colors font-mono"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="bg-blue-950 hover:bg-blue-900 text-amber-300 font-black text-xs px-5 py-2.5 rounded-xl border border-amber-400/50 shadow-xs"
        >
          Send an Email
        </a>
      </div>

      {/* Specific Topic Routing */}
      <div>
        <h3 className="text-lg font-black text-blue-950 font-serif mb-4 flex items-center gap-2">
          <span>What Would You Like to Connect Regarding?</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {contactTopics.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center mb-3 shadow-xs`}
                  >
                    <Icon className="w-5 h-5 text-amber-200" />
                  </div>
                  <h4 className="text-sm font-black text-blue-950 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
