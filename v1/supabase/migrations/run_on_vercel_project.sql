-- Run this in Supabase Dashboard → project qkkktguyzqhcusbnnces → SQL Editor → New query
-- Safe to run even if tables/policies already exist.

CREATE TABLE IF NOT EXISTS campaigns (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  title         text        NOT NULL,
  slug          text        NOT NULL UNIQUE,
  status        text        NOT NULL DEFAULT 'draft' CHECK (status IN ('active','ended','draft')),
  summary       text        NOT NULL DEFAULT '',
  body          text        NOT NULL DEFAULT '',
  tagline       text,
  issue_ref     text,
  accent_color  text        NOT NULL DEFAULT '#4B245E',
  display_order int         NOT NULL DEFAULT 0,
  created_at    timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "anon_select_campaigns" ON campaigns FOR SELECT TO anon USING (status IN ('active','ended'));
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS observatory_stats (
  id            uuid  PRIMARY KEY DEFAULT gen_random_uuid(),
  number_text   text  NOT NULL,
  label         text  NOT NULL,
  source_label  text,
  accent_color  text  NOT NULL DEFAULT '#4B245E',
  display_order int   NOT NULL DEFAULT 0
);
ALTER TABLE observatory_stats ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "anon_select_observatory_stats" ON observatory_stats FOR SELECT TO anon USING (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS observatory_statements (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  date_label  text        NOT NULL,
  title       text        NOT NULL,
  summary     text        NOT NULL,
  status      text        NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  created_at  timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE observatory_statements ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "anon_select_published_statements" ON observatory_statements FOR SELECT TO anon USING (status = 'published');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS guide_articles (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  title       text        NOT NULL,
  slug        text        NOT NULL UNIQUE,
  summary     text        NOT NULL DEFAULT '',
  body        text        NOT NULL DEFAULT '',
  category    text        NOT NULL DEFAULT 'general'
              CHECK (category IN ('journalists','working-women','digital-safety','general')),
  status      text        NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE guide_articles ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "anon_select_published_guide_articles" ON guide_articles FOR SELECT TO anon USING (status = 'published');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS announcements (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  date_label  text        NOT NULL,
  title       text        NOT NULL,
  summary     text        NOT NULL,
  status      text        NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  created_at  timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "anon_select_published_announcements" ON announcements FOR SELECT TO anon USING (status = 'published');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Seed initial data (only if campaigns table is empty)
INSERT INTO campaigns (title, slug, status, summary, tagline, issue_ref, accent_color, display_order)
SELECT * FROM (VALUES
  ('مش ذنبي إني أم', 'not-my-fault-im-a-mother', 'active',
   'حملة ضد الفصل والتمييز في العمل بسبب الأمومة — نوثّق الانتهاكات ونطالب بتطبيق قانون الأمومة.',
   'الأمومة حق إنساني — وليست جريمة يُعاقَب عليها في بيئة العمل.',
   'الأمومة والعمل', '#C66B7D', 1),
  ('أمان قلمي', 'aman-qalami', 'active',
   'لأن قلم الصحفية لا يجب أن يُكلّفها أمانها — حملة لحماية الصحفيات من العنف الرقمي والمضايقات الميدانية.',
   'قلم الصحفية أمانة — لا يجب أن يكون ثمنها أمانها الشخصي.',
   'العنف الرقمي', '#4B245E', 2),
  ('الأجر العادل حق', 'fair-pay-is-a-right', 'active',
   'حملة لكشف فجوة الأجور والمطالبة بسياسات أجر شفافة وعادلة في بيئات العمل المصرية.',
   'الأجر العادل ليس منّة — هو حق مكفول قانونًا.',
   'الأجر العادل', '#D9963D', 3)
) AS v(title, slug, status, summary, tagline, issue_ref, accent_color, display_order)
WHERE NOT EXISTS (SELECT 1 FROM campaigns LIMIT 1);

INSERT INTO observatory_stats (number_text, label, source_label, accent_color, display_order)
SELECT * FROM (VALUES
  ('٣٠٪', 'فجوة الأجور بين الجنسين في قطاعات العمل المصرية', 'تقديرات أولية، ٢٠٢٥', '#D9963D', 1),
  ('٦٧٪', 'من النساء العاملات اللواتي استُطلعن تعرّضن لضغط مهني بسبب الجنس', 'استطلاع مؤنث سالم، ٢٠٢٥', '#C66B7D', 2),
  ('٤٠+', 'شهادة موثّقة لانتهاكات بيئة العمل — جُمعت خلال أول ٦ أشهر', 'مؤنث سالم، ٢٠٢٥–٢٠٢٦', '#4B245E', 3)
) AS v(number_text, label, source_label, accent_color, display_order)
WHERE NOT EXISTS (SELECT 1 FROM observatory_stats LIMIT 1);

INSERT INTO observatory_statements (date_label, title, summary, status)
SELECT * FROM (VALUES
  ('مايو ٢٠٢٦', 'بيان: نطالب بتطبيق قانون الأمومة في بيئات الإعلام',
   'دعوة لوزارة العمل لتكثيف التفتيش على امتثال المؤسسات الإعلامية لحقوق الأمومة.', 'published'),
  ('مارس ٢٠٢٦', 'موقف: شفافية الرواتب شرط لبيئة عمل عادلة',
   'مطالبة بإلزام الشركات الكبرى بنشر تقارير المساواة في الأجر.', 'published')
) AS v(date_label, title, summary, status)
WHERE NOT EXISTS (SELECT 1 FROM observatory_statements LIMIT 1);
