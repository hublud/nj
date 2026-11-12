export interface SubCategory {
  name: string;
  slug: string;
  description?: string;
}

export interface JournalCategory {
  id: string;
  number: number;
  name: string;
  shortName: string;
  slug: string;
  icon: string;
  description: string;
  color: string; // Tailwind accent or hex
  subcategories: SubCategory[];
}

export const JOURNAL_CATEGORIES: JournalCategory[] = [
  {
    id: "thinks",
    number: 1,
    name: "LOGION THINKS",
    shortName: "Thinks",
    slug: "thinks",
    icon: "Brain",
    description: "Ideas, opinions and intellectual conversations.",
    color: "from-blue-600 to-indigo-700",
    subcategories: [
      { name: "Thought-provoking articles", slug: "thought-provoking-articles" },
      { name: "Unpopular opinions and social commentary", slug: "unpopular-opinions" },
      { name: "Human behaviour and psychology", slug: "human-behaviour-psychology" },
      { name: "Philosophy and critical thinking", slug: "philosophy-critical-thinking" },
      { name: "Things people think about but rarely discuss", slug: "things-rarely-discussed" },
    ],
  },
  {
    id: "wealth",
    number: 2,
    name: "LOGION WEALTH",
    shortName: "Wealth",
    slug: "wealth",
    icon: "Coins",
    description: "Money, business and financial independence.",
    color: "from-amber-500 to-yellow-600",
    subcategories: [
      { name: "Making money online", slug: "making-money-online" },
      { name: "Freelancing and remote work", slug: "freelancing-remote-work" },
      { name: "Entrepreneurship and business ideas", slug: "entrepreneurship-business-ideas" },
      { name: "Personal finance and wealth building", slug: "personal-finance-wealth" },
      { name: "Digital skills and monetisation", slug: "digital-skills-monetisation" },
    ],
  },
  {
    id: "creative",
    number: 3,
    name: "LOGION CREATIVE",
    shortName: "Creative",
    slug: "creative",
    icon: "Feather",
    description: "Creativity, communication and the art of expression.",
    color: "from-purple-600 to-indigo-700",
    subcategories: [
      { name: "Content writing and storytelling", slug: "content-writing-storytelling" },
      { name: "Copywriting and persuasive communication", slug: "copywriting-persuasion" },
      { name: "Spoken word and poetry", slug: "spoken-word-poetry" },
      { name: "Personal branding", slug: "personal-branding" },
      { name: "Content creation and creative careers", slug: "creative-careers" },
    ],
  },
  {
    id: "living",
    number: 4,
    name: "LOGION LIVING",
    shortName: "Living",
    slug: "living",
    icon: "Compass",
    description: "Life, identity and becoming.",
    color: "from-emerald-600 to-teal-700",
    subcategories: [
      { name: "Self-discovery and personal growth", slug: "self-discovery-growth" },
      { name: "Navigating your twenties", slug: "navigating-twenties" },
      { name: "Confidence and self-awareness", slug: "confidence-self-awareness" },
      { name: "Life lessons and experiences", slug: "life-lessons-experiences" },
      { name: "Discipline, habits and lifestyle", slug: "discipline-habits-lifestyle" },
    ],
  },
  {
    id: "relations",
    number: 5,
    name: "LOGION RELATIONS",
    shortName: "Relations",
    slug: "relations",
    icon: "HeartHandshake",
    description: "People, relationships and human connections.",
    color: "from-rose-500 to-pink-600",
    subcategories: [
      { name: "Dating and modern relationships", slug: "dating-relationships" },
      { name: "Friendship and companionship", slug: "friendship-companionship" },
      { name: "Communication and emotional intelligence", slug: "communication-eq" },
      { name: "Family and social dynamics", slug: "family-social-dynamics" },
      { name: "Love, boundaries and vulnerability", slug: "love-boundaries-vulnerability" },
    ],
  },
  {
    id: "conversations",
    number: 6,
    name: "LOGION CONVERSATIONS",
    shortName: "Conversations",
    slug: "conversations",
    icon: "MessageSquareQuote",
    description: "Discussions, interviews and perspectives.",
    color: "from-blue-700 to-purple-800",
    subcategories: [
      { name: "The LOGION Paradox episodes", slug: "the-logion-paradox" },
      { name: "Guest interviews", slug: "guest-interviews" },
      { name: "Opinion pieces", slug: "opinion-pieces" },
      { name: "Personal experiences", slug: "personal-experiences" },
      { name: "Conversations worth revisiting", slug: "conversations-worth-revisiting" },
    ],
  },
  {
    id: "spirit",
    number: 7,
    name: "LOGION SPIRIT",
    shortName: "Spirit",
    slug: "spirit",
    icon: "Sparkles",
    description: "Faith, spirituality and the inner life.",
    color: "from-amber-600 to-purple-700",
    subcategories: [
      { name: "Christian living", slug: "christian-living" },
      { name: "Understanding biblical principles", slug: "understanding-biblical-principles" },
      { name: "Faith and purpose", slug: "faith-and-purpose" },
      { name: "Spiritual maturity", slug: "spiritual-maturity" },
      { name: "Navigating life's uncertainties with God", slug: "navigating-uncertainties-with-god" },
    ],
  },
  {
    id: "career",
    number: 8,
    name: "LOGION CAREER",
    shortName: "Career",
    slug: "career",
    icon: "Briefcase",
    description: "Work, skills and professional development.",
    color: "from-slate-700 to-blue-800",
    subcategories: [
      { name: "Career growth", slug: "career-growth" },
      { name: "Remote work opportunities", slug: "remote-work-opportunities" },
      { name: "CVs, portfolios and personal branding", slug: "cvs-portfolios-branding" },
      { name: "Professional communication", slug: "professional-communication" },
      { name: "Building a sustainable freelance career", slug: "sustainable-freelance-career" },
    ],
  },
  {
    id: "culture",
    number: 9,
    name: "LOGION CULTURE",
    shortName: "Culture",
    slug: "culture",
    icon: "Globe",
    description: "Society, trends and the world around us.",
    color: "from-violet-700 to-purple-900",
    subcategories: [
      { name: "African youth and society", slug: "african-youth-society" },
      { name: "Pop culture and entertainment commentary", slug: "pop-culture-commentary" },
      { name: "Social media and digital culture", slug: "social-media-digital-culture" },
      { name: "Modern trends and changing values", slug: "modern-trends-values" },
      { name: "Culture, identity and social issues", slug: "culture-identity-issues" },
    ],
  },
  {
    id: "unfiltered",
    number: 10,
    name: "LOGION UNFILTERED",
    shortName: "Unfiltered",
    slug: "unfiltered",
    icon: "Flame",
    description: "Personal essays, raw thoughts and creative expression.",
    color: "from-red-600 to-purple-800",
    subcategories: [
      { name: "Honest opinions", slug: "honest-opinions" },
      { name: "Stories and lessons from real life", slug: "real-life-stories-lessons" },
    ],
  },
  {
    id: "entertainment",
    number: 11,
    name: "LOGION ENTERTAINMENT",
    shortName: "Entertainment",
    slug: "entertainment",
    icon: "Film",
    description: "Music, movies, Nollywood, celebrities, comedy, viral stories and entertainment news.",
    color: "from-amber-600 to-blue-700",
    subcategories: [
      { name: "Music & Afrobeats", slug: "music-afrobeats" },
      { name: "Movies & Nollywood", slug: "movies-nollywood" },
      { name: "Celebrities & Comedy", slug: "celebrities-comedy" },
      { name: "Viral Stories & News", slug: "viral-stories-news" },
    ],
  },
  {
    id: "coaching",
    number: 12,
    name: "LOGION COACHING",
    shortName: "Coaching",
    slug: "coaching",
    icon: "GraduationCap",
    description: "Mentorship, practical guides, skill development, productivity and coaching resources.",
    color: "from-blue-900 via-indigo-800 to-purple-900",
    subcategories: [
      { name: "Personal reflections", slug: "personal-reflections" },
      { name: "Letters to the world", slug: "letters-to-the-world" },
      { name: "Poetry and spoken word", slug: "poetry-and-spoken-word" },
      { name: "Mentorship & Practical guides", slug: "mentorship-practical-guides" },
      { name: "Productivity & Coaching resources", slug: "productivity-coaching" },
    ],
  },
];

// Flat export of subcategories for quick lookup
export const ALL_SUBCATEGORIES = JOURNAL_CATEGORIES.flatMap((c) =>
  c.subcategories.map((sub) => ({
    ...sub,
    parentCategory: c.name,
    parentSlug: c.slug,
  }))
);

// For backwards compatibility and UI components
export const PRIMARY_ICON_CATEGORIES = JOURNAL_CATEGORIES.map((c) => ({
  name: c.name,
  slug: `/${c.slug}`,
  icon: c.icon,
  label: c.shortName,
  description: c.description,
  subcategories: c.subcategories,
}));

export const SECONDARY_CATEGORIES = [
  { name: "THE LOGION PARADOX", slug: "/conversations" },
  { name: "THOUGHT-PROVOKING", slug: "/thinks" },
  { name: "MAKING MONEY ONLINE", slug: "/wealth" },
  { name: "STORYTELLING & POETRY", slug: "/creative" },
  { name: "SELF-DISCOVERY", slug: "/living" },
  { name: "MODERN RELATIONSHIPS", slug: "/relations" },
  { name: "CHRISTIAN LIVING", slug: "/spirit" },
  { name: "REMOTE CAREERS", slug: "/career" },
  { name: "AFRICAN YOUTH & CULTURE", slug: "/culture" },
  { name: "UNFILTERED ESSAYS", slug: "/unfiltered" },
  { name: "NOLLYWOOD & MUSIC", slug: "/entertainment" },
  { name: "COACHING & MENTORSHIP", slug: "/coaching" },
];

export const ALL_CATEGORIES = JOURNAL_CATEGORIES.map((c) => ({
  name: c.name,
  slug: c.slug,
  title: `${c.name} — ${c.description}`,
  description: c.description,
  subcategories: c.subcategories,
}));
