import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION COACHING | Mentorship, Practical Guides & Productivity",
  description: "Mentorship, practical guides, skill development, productivity, coaching resources, personal reflections, letters to the world, and spoken word.",
};

export default function CoachingPage() {
  return (
    <CategoryPageTemplate
      title="LOGION COACHING: Mentorship, Guides & Productivity"
      categoryName="LOGION COACHING"
      categorySlug="coaching"
      description="Practical wisdom and guidance: 1-on-1 mentorship, actionable productivity guides, skill acquisition, letters to the world, personal reflections, and spoken word."
    />
  );
}
