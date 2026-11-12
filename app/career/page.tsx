import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION CAREER | Work, Skills & Professional Development",
  description: "Career growth, remote work opportunities, CVs, portfolios, personal branding, professional communication, and sustainable freelance careers.",
};

export default function CareerPage() {
  return (
    <CategoryPageTemplate
      title="LOGION CAREER: Work, Skills & Professional Growth"
      categoryName="LOGION CAREER"
      categorySlug="career"
      description="Leveling up professionally: career acceleration, landing high-paying global remote roles, crafting standout CVs & portfolios, personal branding, and sustainable freelancing."
    />
  );
}
