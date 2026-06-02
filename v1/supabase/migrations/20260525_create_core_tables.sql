-- Moannas Salem — core tables
-- Applied: 2026-05-25

-- ── support_requests ─────────────────────────────────────────────────────────
CREATE TABLE support_requests (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  pseudonym       text        NOT NULL,
  contact_method  text        NOT NULL CHECK (contact_method IN ('whatsapp','email','signal','form_only')),
  contact_value   text,
  support_types   text[]      NOT NULL DEFAULT '{}',
  description     text,
  is_urgent       boolean     NOT NULL DEFAULT false,
  preferred_times text[],
  form_type       text        NOT NULL CHECK (form_type IN ('mental-health','legal')),
  status          text        NOT NULL DEFAULT 'new' CHECK (status IN ('new','read','responded')),
  created_at      timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE support_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_support_requests"
  ON support_requests FOR INSERT TO anon
  WITH CHECK (true);

-- ── testimonies ───────────────────────────────────────────────────────────────
CREATE TABLE testimonies (
  id                  uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  pseudonym           text        NOT NULL,
  publication_consent text        NOT NULL DEFAULT 'pending' CHECK (publication_consent IN ('yes','no','pending')),
  violation_types     text[]      NOT NULL DEFAULT '{}',
  sector              text,
  approximate_date    text,
  testimony_text      text        NOT NULL,
  needs_support       boolean     NOT NULL DEFAULT false,
  contact_method      text,
  contact_value       text,
  status              text        NOT NULL DEFAULT 'new' CHECK (status IN ('new','under-review','published','rejected')),
  published_quote     text,
  published_role      text,
  created_at          timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE testimonies ENABLE ROW LEVEL SECURITY;

-- Anon can submit testimonies
CREATE POLICY "anon_insert_testimonies"
  ON testimonies FOR INSERT TO anon
  WITH CHECK (true);

-- Anon can read only published+consented rows (for /stories via view)
CREATE POLICY "anon_select_published_testimonies"
  ON testimonies FOR SELECT TO anon
  USING (status = 'published' AND publication_consent = 'yes');

-- ── contact_messages ──────────────────────────────────────────────────────────
CREATE TABLE contact_messages (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name         text        NOT NULL,
  topic        text,
  message      text        NOT NULL,
  contact_info text,
  status       text        NOT NULL DEFAULT 'new' CHECK (status IN ('new','read','responded')),
  created_at   timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_contact_messages"
  ON contact_messages FOR INSERT TO anon
  WITH CHECK (true);

-- ── public_testimonies view ───────────────────────────────────────────────────
-- Read-only view for /stories: only published+consented rows, no sensitive columns.
CREATE VIEW public_testimonies AS
  SELECT
    id,
    published_quote,
    published_role,
    approximate_date,
    violation_types
  FROM testimonies
  WHERE status = 'published'
    AND publication_consent = 'yes';
