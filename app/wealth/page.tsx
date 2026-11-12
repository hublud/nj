import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION WEALTH | Money, Business & Financial Independence",
  description: "Making money online, freelancing, remote work, entrepreneurship, personal finance, wealth building, and digital skills.",
};

export default function WealthPage() {
  return (
    <CategoryPageTemplate
      title="LOGION WEALTH: Money, Business & Financial Independence"
      categoryName="LOGION WEALTH"
      categorySlug="wealth"
      description="Practical playbooks for making money online, mastering freelancing & remote work, building business ideas, personal finance, and high-income digital skills."
    />
  );
}
