-- SQL migration for Users and Events tables (Postgres)
-- Run in Supabase SQL editor or via psql using a service account

-- Create users table
CREATE TABLE IF NOT EXISTS public."Users" (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  phone varchar(50),
  password_hash varchar(255) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create enum for status
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'event_status') THEN
    CREATE TYPE event_status AS ENUM ('pendente', 'confirmed', 'cancelled');
  END IF;
END$$;

-- Create events table
CREATE TABLE IF NOT EXISTS public."Events" (
  id serial PRIMARY KEY,
  title varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  location varchar(255),
  status event_status NOT NULL DEFAULT 'pendente',
  user_id integer NOT NULL REFERENCES public."Users"(id) ON DELETE CASCADE
);

-- Add basic check constraints
ALTER TABLE public."Events" ADD CONSTRAINT title_length CHECK (char_length(title) <= 255) ;
ALTER TABLE public."Events" ADD CONSTRAINT description_length CHECK (char_length(description) <= 255) ;

-- Row Level Security (RLS) example for Supabase
-- Note: enable RLS after creating policies in Supabase or SQL editor

-- Enable RLS on Events (uncomment to activate in migration once policies exist)
-- ALTER TABLE public."Events" ENABLE ROW LEVEL SECURITY;

-- Example policy to allow authenticated users to manage their own events
-- Replace auth.uid() usage if you rely on Supabase auth; shown here as example
-- CREATE POLICY "Events owner policy" ON public."Events"
--   USING (user_id = current_setting('request.jwt.claims.user_id')::int)
--   WITH CHECK (user_id = current_setting('request.jwt.claims.user_id')::int);

-- If using Supabase's builtin auth, adapt policies to use auth.uid() and ensure token contains user id mapping

-- Index for faster queries by user
CREATE INDEX IF NOT EXISTS idx_events_user_id ON public."Events" (user_id);
