import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms & Conditions | THE LOGION JOURNAL",
  description: "Terms and conditions of publication, reading, and coaching for The Logion Journal (logionjournal.com).",
};

export default function TermsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-slate-700 text-sm leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-black text-blue-950 font-serif border-b pb-4">
          Terms &amp; Conditions of Service
        </h1>
        <p className="text-xs text-slate-400">Effective: {new Date().getFullYear()}</p>

        <p>
          Welcome to <strong>{siteConfig.name}</strong> ({siteConfig.domain}). By accessing or engaging with our platform, essays, podcasts, or coaching services, you agree to comply with and be bound by the following terms.
        </p>

        <h2 className="text-lg font-bold text-blue-950 pt-2 font-serif">1. Editorial Philosophy &amp; Intellectual Property</h2>
        <p>
          Original essays, spoken word performances, poetry, and analytical articles published on {siteConfig.domain} are the intellectual property of The Logion Journal and our contributing authors. Reproduction or syndication without explicit attribution or written consent is strictly prohibited.
        </p>

        <h2 className="text-lg font-bold text-blue-950 pt-2 font-serif">2. Submissions &amp; Guest Contributions</h2>
        <p>
          Writers and creators submitting materials for publication represent that their submissions are original and do not infringe upon any third-party copyright. The Logion Journal reserves editorial discretion over edits, headlines, and scheduling.
        </p>

        <h2 className="text-lg font-bold text-blue-950 pt-2 font-serif">3. Coaching &amp; Mentorship Disclaimers</h2>
        <p>
          Mentorship and productivity coaching programs offered through our platform are for educational and self-development purposes and do not constitute formal legal, medical, or registered financial investment advice.
        </p>
      </div>
    </div>
  );
}
