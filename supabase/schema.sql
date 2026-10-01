-- Run once in the Supabase SQL editor
create table if not exists public.sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 100),
  transcript text not null,
  duration_sec integer not null check (duration_sec between 5 and 1800),
  wpm integer,
  filler_count integer,
  pause_count integer,
  score integer check (score between 0 and 100),
  feedback_json jsonb,
  created_at timestamptz not null default now()
);

create index if not exists sessions_user_created_idx
  on public.sessions (user_id, created_at desc);

alter table public.sessions enable row level security;

create policy "own sessions - select" on public.sessions for select using (auth.uid() = user_id);
create policy "own sessions - insert" on public.sessions for insert with check (auth.uid() = user_id);
create policy "own sessions - delete" on public.sessions for delete using (auth.uid() = user_id);
