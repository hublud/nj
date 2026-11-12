import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION SPIRIT | Faith, Spirituality & The Inner Life",
  description: "Christian living, understanding biblical principles, faith and purpose, spiritual maturity, and navigating life's uncertainties with God.",
};

export default function SpiritPage() {
  return (
    <CategoryPageTemplate
      title="LOGION SPIRIT: Faith, Spirituality & The Inner Life"
      categoryName="LOGION SPIRIT"
      categorySlug="spirit"
      description="Grounding the soul: Christian living, biblical principles, discovering your divine purpose, spiritual maturity, and navigating life's storms with unshakable faith."
    />
  );
}
