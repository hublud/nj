import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION UNFILTERED | Personal Essays & Raw Thoughts",
  description: "Personal essays, raw thoughts, creative expression, honest opinions, stories, and lessons from real life.",
};

export default function UnfilteredPage() {
  return (
    <CategoryPageTemplate
      title="LOGION UNFILTERED: Personal Essays & Raw Thoughts"
      categoryName="LOGION UNFILTERED"
      categorySlug="unfiltered"
      description="Raw, honest, and unpolished reflections: personal essays, vulnerable lessons from real life, creative expression, and authentic opinions."
    />
  );
}
