/**
 * Helpers for simple, seamless copy-paste article content editing and formatting.
 * Handles single Enter, double Enter (\n\n), and multi-paragraph copy/pasting.
 */

export function textToParagraphs(raw: string): string[] {
  if (!raw) return [];
  const normalized = raw.replace(/\r\n/g, "\n").trim();
  if (!normalized) return [];

  // If text contains double line breaks (paragraphs separated by blank lines)
  if (/\n\s*\n/.test(normalized)) {
    return normalized
      .split(/\n\s*\n+/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
  }

  // If text only contains single line breaks (each Enter key is a new paragraph)
  return normalized
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

export function paragraphsToText(paragraphs: string[] | undefined | null): string {
  if (!paragraphs || !Array.isArray(paragraphs)) return "";
  return paragraphs.filter((p) => typeof p === "string" && p.trim().length > 0).join("\n\n");
}

export function calculateReadingTime(text: string): string {
  if (!text.trim()) return "1 min read";
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function getArticleStats(text: string): {
  words: number;
  characters: number;
  paragraphsCount: number;
  readingTime: string;
} {
  const paragraphs = textToParagraphs(text);
  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const characters = text.length;
  const readingTime = calculateReadingTime(text);

  return {
    words,
    characters,
    paragraphsCount: paragraphs.length,
    readingTime,
  };
}
