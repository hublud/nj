import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION LIVING | Life, Identity & Becoming",
  description: "Self-discovery, navigating your twenties, confidence, self-awareness, life lessons, discipline, habits, and lifestyle.",
};

export default function LivingPage() {
  return (
    <CategoryPageTemplate
      title="LOGION LIVING: Life, Identity & Becoming"
      categoryName="LOGION LIVING"
      categorySlug="living"
      description="Reflections on the human journey: self-discovery, personal growth, navigating your twenties, building confidence, life lessons, discipline, and intentional lifestyle design."
    />
  );
}
