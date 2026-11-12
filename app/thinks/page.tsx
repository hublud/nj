import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION THINKS | Ideas, Opinions & Intellectual Conversations",
  description: "Thought-provoking articles, unpopular opinions, human behaviour, psychology, philosophy, and critical thinking.",
};

export default function ThinksPage() {
  return (
    <CategoryPageTemplate
      title="LOGION THINKS: Ideas, Opinions & Intellectual Conversations"
      categoryName="LOGION THINKS"
      categorySlug="thinks"
      description="Dive into thought-provoking articles, unpopular opinions, social commentary, human behaviour, psychology, and the things people think about but rarely discuss."
    />
  );
}
