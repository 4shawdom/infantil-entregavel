import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  nome_mae: string | null;
  email: string | null;
  created_at: string;
};

export type Crianca = {
  id: string;
  user_id: string;
  nome: string;
  idade: number;
  nivel: number;
  pontos: number;
  diagnostico?: DiagnosticoResultado | null;
  created_at: string;
};

export type DiagnosticoResultado = {
  principalDificuldade: string;
  nivel: "critico" | "moderado" | "leve";
  scores: Record<string, number>;
};

export type AtividadeConcluida = {
  id: string;
  crianca_id: string;
  atividade_id: string;
  data: string;
  created_at: string;
};
