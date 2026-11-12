-- ==============================================================================
-- THE LOGION JOURNAL (logionjournal.com) - Supabase Database Schema
-- Project Reference: gdwbajzlffpurfflzgja
-- Run this in your Supabase SQL Editor to set up all 12 categories, articles,
-- ad slots, and security policies.
-- ==============================================================================

-- 1. Enable UUID generation extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    number INTEGER NOT NULL,
    name TEXT NOT NULL,
    short_name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    icon TEXT,
    description TEXT,
    color TEXT,
    subcategories JSONB DEFAULT '[]'::jsonb,
    is_primary BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Articles Table
CREATE TABLE IF NOT EXISTS public.articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content JSONB DEFAULT '[]'::jsonb,
    image TEXT NOT NULL,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    category_name TEXT NOT NULL,
    category_slug TEXT NOT NULL,
    subcategory TEXT,
    subcategory_slug TEXT,
    author_name TEXT DEFAULT 'The Logion Journal Editorial',
    author_avatar TEXT DEFAULT 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    author_role TEXT DEFAULT 'Contributing Essayist',
    read_time TEXT DEFAULT '5 min read',
    views INTEGER DEFAULT 0,
    featured BOOLEAN DEFAULT false,
    trending_rank INTEGER,
    tags TEXT[] DEFAULT '{}',
    published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Advertisements & Banners Table
CREATE TABLE IF NOT EXISTS public.advertisements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slot_type TEXT NOT NULL, -- 'top_banner', 'horizontal_feed', 'in_article', 'sidebar'
    title TEXT NOT NULL,
    subtitle TEXT,
    image_url TEXT,
    destination_url TEXT DEFAULT '/contact?tab=advertise',
    button_text TEXT DEFAULT 'GET STARTED',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Indexes for Fast Queries
CREATE INDEX IF NOT EXISTS idx_articles_slug ON public.articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON public.articles(category_slug);
CREATE INDEX IF NOT EXISTS idx_articles_subcategory ON public.articles(subcategory_slug);
CREATE INDEX IF NOT EXISTS idx_articles_featured ON public.articles(featured);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON public.articles(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_number ON public.categories(number);
CREATE INDEX IF NOT EXISTS idx_advertisements_slot ON public.advertisements(slot_type);

-- 6. Row Level Security (RLS) Policies
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.advertisements ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Public can view categories" ON public.categories;
DROP POLICY IF EXISTS "Public can view articles" ON public.articles;
DROP POLICY IF EXISTS "Public can view active advertisements" ON public.advertisements;
DROP POLICY IF EXISTS "Admins can manage categories" ON public.categories;
DROP POLICY IF EXISTS "Admins can manage articles" ON public.articles;
DROP POLICY IF EXISTS "Admins can manage advertisements" ON public.advertisements;

-- Public read policies
CREATE POLICY "Public can view categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public can view articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Public can view active advertisements" ON public.advertisements FOR SELECT USING (true);

-- Manage policies (allow write operations with publishable / anon / service key)
CREATE POLICY "Admins can manage categories" ON public.categories FOR ALL USING (true);
CREATE POLICY "Admins can manage articles" ON public.articles FOR ALL USING (true);
CREATE POLICY "Admins can manage advertisements" ON public.advertisements FOR ALL USING (true);

-- 7. Seed The 12 Categories with Subcategories
INSERT INTO public.categories (number, name, short_name, slug, icon, description, color, subcategories, is_primary)
VALUES
(1, 'LOGION THINKS', 'Thinks', 'thinks', 'Brain', 'Ideas, opinions and intellectual conversations.', 'from-blue-600 to-indigo-700', '[
  {"name": "Thought-provoking articles", "slug": "thought-provoking-articles"},
  {"name": "Unpopular opinions and social commentary", "slug": "unpopular-opinions"},
  {"name": "Human behaviour and psychology", "slug": "human-behaviour-psychology"},
  {"name": "Philosophy and critical thinking", "slug": "philosophy-critical-thinking"},
  {"name": "Things people think about but rarely discuss", "slug": "things-rarely-discussed"}
]'::jsonb, true),

(2, 'LOGION WEALTH', 'Wealth', 'wealth', 'Coins', 'Money, business and financial independence.', 'from-amber-500 to-yellow-600', '[
  {"name": "Making money online", "slug": "making-money-online"},
  {"name": "Freelancing and remote work", "slug": "freelancing-remote-work"},
  {"name": "Entrepreneurship and business ideas", "slug": "entrepreneurship-business-ideas"},
  {"name": "Personal finance and wealth building", "slug": "personal-finance-wealth"},
  {"name": "Digital skills and monetisation", "slug": "digital-skills-monetisation"}
]'::jsonb, true),

(3, 'LOGION CREATIVE', 'Creative', 'creative', 'Feather', 'Creativity, communication and the art of expression.', 'from-purple-600 to-indigo-700', '[
  {"name": "Content writing and storytelling", "slug": "content-writing-storytelling"},
  {"name": "Copywriting and persuasive communication", "slug": "copywriting-persuasion"},
  {"name": "Spoken word and poetry", "slug": "spoken-word-poetry"},
  {"name": "Personal branding", "slug": "personal-branding"},
  {"name": "Content creation and creative careers", "slug": "creative-careers"}
]'::jsonb, true),

(4, 'LOGION LIVING', 'Living', 'living', 'Compass', 'Life, identity and becoming.', 'from-emerald-600 to-teal-700', '[
  {"name": "Self-discovery and personal growth", "slug": "self-discovery-growth"},
  {"name": "Navigating your twenties", "slug": "navigating-twenties"},
  {"name": "Confidence and self-awareness", "slug": "confidence-self-awareness"},
  {"name": "Life lessons and experiences", "slug": "life-lessons-experiences"},
  {"name": "Discipline, habits and lifestyle", "slug": "discipline-habits-lifestyle"}
]'::jsonb, true),

(5, 'LOGION RELATIONS', 'Relations', 'relations', 'HeartHandshake', 'People, relationships and human connections.', 'from-rose-500 to-pink-600', '[
  {"name": "Dating and modern relationships", "slug": "dating-relationships"},
  {"name": "Friendship and companionship", "slug": "friendship-companionship"},
  {"name": "Communication and emotional intelligence", "slug": "communication-eq"},
  {"name": "Family and social dynamics", "slug": "family-social-dynamics"},
  {"name": "Love, boundaries and vulnerability", "slug": "love-boundaries-vulnerability"}
]'::jsonb, true),

(6, 'LOGION CONVERSATIONS', 'Conversations', 'conversations', 'MessageSquareQuote', 'Discussions, interviews and perspectives.', 'from-blue-700 to-purple-800', '[
  {"name": "The LOGION Paradox episodes", "slug": "the-logion-paradox"},
  {"name": "Guest interviews", "slug": "guest-interviews"},
  {"name": "Opinion pieces", "slug": "opinion-pieces"},
  {"name": "Personal experiences", "slug": "personal-experiences"},
  {"name": "Conversations worth revisiting", "slug": "conversations-worth-revisiting"}
]'::jsonb, true),

(7, 'LOGION SPIRIT', 'Spirit', 'spirit', 'Sparkles', 'Faith, spirituality and the inner life.', 'from-amber-600 to-purple-700', '[
  {"name": "Christian living", "slug": "christian-living"},
  {"name": "Understanding biblical principles", "slug": "understanding-biblical-principles"},
  {"name": "Faith and purpose", "slug": "faith-and-purpose"},
  {"name": "Spiritual maturity", "slug": "spiritual-maturity"},
  {"name": "Navigating life''s uncertainties with God", "slug": "navigating-uncertainties-with-god"}
]'::jsonb, true),

(8, 'LOGION CAREER', 'Career', 'career', 'Briefcase', 'Work, skills and professional development.', 'from-slate-700 to-blue-800', '[
  {"name": "Career growth", "slug": "career-growth"},
  {"name": "Remote work opportunities", "slug": "remote-work-opportunities"},
  {"name": "CVs, portfolios and personal branding", "slug": "cvs-portfolios-branding"},
  {"name": "Professional communication", "slug": "professional-communication"},
  {"name": "Building a sustainable freelance career", "slug": "sustainable-freelance-career"}
]'::jsonb, true),

(9, 'LOGION CULTURE', 'Culture', 'culture', 'Globe', 'Society, trends and the world around us.', 'from-violet-700 to-purple-900', '[
  {"name": "African youth and society", "slug": "african-youth-society"},
  {"name": "Pop culture and entertainment commentary", "slug": "pop-culture-commentary"},
  {"name": "Social media and digital culture", "slug": "social-media-digital-culture"},
  {"name": "Modern trends and changing values", "slug": "modern-trends-values"},
  {"name": "Culture, identity and social issues", "slug": "culture-identity-issues"}
]'::jsonb, true),

(10, 'LOGION UNFILTERED', 'Unfiltered', 'unfiltered', 'Flame', 'Personal essays, raw thoughts and creative expression.', 'from-red-600 to-purple-800', '[
  {"name": "Honest opinions", "slug": "honest-opinions"},
  {"name": "Stories and lessons from real life", "slug": "real-life-stories-lessons"}
]'::jsonb, true),

(11, 'LOGION ENTERTAINMENT', 'Entertainment', 'entertainment', 'Film', 'Music, movies, Nollywood, celebrities, comedy, viral stories and entertainment news.', 'from-amber-600 to-blue-700', '[
  {"name": "Music & Afrobeats", "slug": "music-afrobeats"},
  {"name": "Movies & Nollywood", "slug": "movies-nollywood"},
  {"name": "Celebrities & Comedy", "slug": "celebrities-comedy"},
  {"name": "Viral Stories & News", "slug": "viral-stories-news"}
]'::jsonb, true),

(12, 'LOGION COACHING', 'Coaching', 'coaching', 'GraduationCap', 'Mentorship, practical guides, skill development, productivity and coaching resources.', 'from-blue-900 via-indigo-800 to-purple-900', '[
  {"name": "Personal reflections", "slug": "personal-reflections"},
  {"name": "Letters to the world", "slug": "letters-to-the-world"},
  {"name": "Poetry and spoken word", "slug": "poetry-and-spoken-word"},
  {"name": "Mentorship & Practical guides", "slug": "mentorship-practical-guides"},
  {"name": "Productivity & Coaching resources", "slug": "productivity-coaching"}
]'::jsonb, true)
ON CONFLICT (slug) DO UPDATE SET
  number = EXCLUDED.number,
  name = EXCLUDED.name,
  short_name = EXCLUDED.short_name,
  icon = EXCLUDED.icon,
  description = EXCLUDED.description,
  subcategories = EXCLUDED.subcategories;

-- 8. Seed Default Advertisements
INSERT INTO public.advertisements (slot_type, title, subtitle, destination_url, button_text, is_active)
VALUES
('top_banner', 'THE LOGION JOURNAL PARTNERSHIPS', 'Reach Intellectual Minds, Creators & Professionals Across Africa & Globally', '/contact?tab=advertise', 'PARTNER WITH US', true),
('horizontal_feed', '1-ON-1 LOGION COACHING & MENTORSHIP', 'Practical guides, career growth, freelance strategy & life coaching designed to unlock your potential.', 'https://wa.me/2349157892212', 'BOOK A SESSION', true),
('in_article', 'Have an Essay, Spoken Word or Story to Tell? Write For Us', 'Publish your perspectives and creative expression on The Logion Journal today.', '/contact?tab=submit', 'SUBMIT PITCH', true)
ON CONFLICT DO NOTHING;
