import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION ENTERTAINMENT | Music, Movies, Nollywood & Culture",
  description: "Music, movies, Nollywood, celebrities, comedy, viral stories, and entertainment news.",
};

export default function EntertainmentPage() {
  return (
    <CategoryPageTemplate
      title="LOGION ENTERTAINMENT: Music, Nollywood & Pop Culture"
      categoryName="LOGION ENTERTAINMENT"
      categorySlug="entertainment"
      description="The pulse of African & global entertainment: Afrobeats, cinema, Nollywood exclusives, comedy, celebrity commentary, and trending viral stories."
    />
  );
}
