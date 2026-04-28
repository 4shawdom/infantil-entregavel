-- ============================================================
-- Método Mente Ativa — Setup Supabase
-- Execute no SQL Editor do Supabase
-- ============================================================

-- Extensão para UUID
create extension if not exists "uuid-ossp";

-- ============================================================
-- TABELA: profiles (mães)
-- ============================================================
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  nome_mae text,
  email text,
  created_at timestamp with time zone default now()
);

alter table public.profiles enable row level security;

create policy "Usuário vê e edita próprio perfil"
  on public.profiles for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Trigger: cria perfil automaticamente ao cadastrar usuário
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- TABELA: criancas
-- ============================================================
create table if not exists public.criancas (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  nome text not null,
  idade integer default 5,
  nivel integer default 1 check (nivel between 1 and 5),
  pontos integer default 0,
  diagnostico jsonb,
  created_at timestamp with time zone default now()
);

alter table public.criancas enable row level security;

create policy "Usuário gerencia próprias crianças"
  on public.criancas for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================
-- TABELA: atividades_concluidas
-- ============================================================
create table if not exists public.atividades_concluidas (
  id uuid default uuid_generate_v4() primary key,
  crianca_id uuid references public.criancas(id) on delete cascade not null,
  atividade_id text not null,
  data date not null default current_date,
  created_at timestamp with time zone default now(),
  unique(crianca_id, atividade_id, data)
);

alter table public.atividades_concluidas enable row level security;

create policy "Usuário gerencia atividades das próprias crianças"
  on public.atividades_concluidas for all
  using (
    exists (
      select 1 from public.criancas
      where criancas.id = atividades_concluidas.crianca_id
      and criancas.user_id = auth.uid()
    )
  );

-- ============================================================
-- ÍNDICES
-- ============================================================
create index if not exists idx_criancas_user_id on public.criancas(user_id);
create index if not exists idx_atividades_concluidas_crianca_data
  on public.atividades_concluidas(crianca_id, data);
