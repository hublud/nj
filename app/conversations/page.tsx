import React from "react";
import { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/blog/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "LOGION CONVERSATIONS | The LOGION Paradox & Perspectives",
  description: "The LOGION Paradox episodes, guest interviews, opinion pieces, personal experiences, and conversations worth revisiting.",
};

export default function ConversationsPage() {
  return (
    <CategoryPageTemplate
      title="LOGION CONVERSATIONS: Discussions & Perspectives"
      categoryName="LOGION CONVERSATIONS"
      categorySlug="conversations"
      description="Dialogues that matter: The LOGION Paradox episodes, high-impact guest interviews, opinion pieces, and conversations worth revisiting."
    />
  );
}
