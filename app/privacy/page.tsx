import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | THE LOGION JOURNAL",
  description: "Privacy policy and reader data protection practices for The Logion Journal (logionjournal.com).",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-slate-700 text-sm leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-black text-blue-950 font-serif border-b pb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">Last updated: {new Date().getFullYear()}</p>

        <p>
          At <strong>{siteConfig.name}</strong> ({siteConfig.domain}), we respect your intellectual journey and are deeply committed to safeguarding reader privacy. This Privacy Policy outlines the types of personal data we receive when you visit our website, subscribe to our essays, or interact with our coaching desk.
        </p>

        <h2 className="text-lg font-bold text-blue-950 pt-2 font-serif">1. Information Collection</h2>
        <p>
          We collect personal information such as names, phone numbers, and email addresses only when voluntarily submitted through our essay submissions, newsletter sign-ups, coaching requests, or direct WhatsApp desk.
        </p>

        <h2 className="text-lg font-bold text-blue-950 pt-2 font-serif">2. Reader Analytics &amp; Cookies</h2>
        <p>
          We use anonymized cookies and privacy-respecting analytics to understand how readers engage with our essays, evaluate popular categories, and improve reading experience without tracking personal identities across unrelated sites.
        </p>

        <h2 className="text-lg font-bold text-blue-950 pt-2 font-serif">3. Direct Inquiries &amp; Coaching Confidentiality</h2>
        <p>
          All communications submitted to our editorial and coaching desks via email ({siteConfig.contactEmail}) or WhatsApp ({siteConfig.whatsappNumber}) are treated with the highest degree of confidentiality and professional integrity.
        </p>
      </div>
    </div>
  );
}
