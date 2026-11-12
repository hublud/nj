import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION CULTURE | Society, Trends & The World Around Us",
  description: "African youth and society, pop culture commentary, social media, modern trends, changing values, culture, identity, and social issues.",
};

export default function CulturePage() {
  return (
    <CategoryPageTemplate
      title="LOGION CULTURE: Society, Trends & The World Around Us"
      categoryName="LOGION CULTURE"
      categorySlug="culture"
      description="Decoding the contemporary zeitgeist: African youth and society, pop culture commentary, digital trends, changing values, and cultural identity."
    />
  );
}
