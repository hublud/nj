import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION CREATIVE | Creativity, Communication & Expression",
  description: "Content writing, storytelling, copywriting, spoken word, poetry, personal branding, and creative careers.",
};

export default function CreativePage() {
  return (
    <CategoryPageTemplate
      title="LOGION CREATIVE: Creativity, Communication & Expression"
      categoryName="LOGION CREATIVE"
      categorySlug="creative"
      description="Exploring the art of expression: content writing, powerful storytelling, persuasive communication, spoken word, poetry, and thriving creative careers."
    />
  );
}
