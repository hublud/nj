import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION RELATIONS | People, Relationships & Human Connections",
  description: "Dating, modern relationships, friendship, communication, emotional intelligence, family dynamics, love, boundaries, and vulnerability.",
};

export default function RelationsPage() {
  return (
    <CategoryPageTemplate
      title="LOGION RELATIONS: People, Relationships & Connections"
      categoryName="LOGION RELATIONS"
      categorySlug="relations"
      description="Navigating human bonds: modern dating, friendship and companionship, emotional intelligence, family dynamics, healthy boundaries, and radical vulnerability."
    />
  );
}
