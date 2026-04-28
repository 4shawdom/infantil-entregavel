import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase, Profile, Crianca } from "@/lib/supabase";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  crianca: Crianca | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  refreshCrianca: () => Promise<void>;
  updateCrianca: (data: Partial<Crianca>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [crianca, setCrianca] = useState<Crianca | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchProfile(userId: string) {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    setProfile(data);
  }

  async function fetchCrianca(userId: string) {
    const { data } = await supabase
      .from("criancas")
      .select("*")
      .eq("user_id", userId)
      .single();
    setCrianca(data);
  }

  async function refreshCrianca() {
    if (user) await fetchCrianca(user.id);
  }

  async function updateCrianca(dadosNovos: Partial<Crianca>) {
    if (!crianca) return;
    const { data } = await supabase
      .from("criancas")
      .update(dadosNovos)
      .eq("id", crianca.id)
      .select()
      .single();
    if (data) setCrianca(data);
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
        fetchCrianca(session.user.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
        fetchCrianca(session.user.id);
      } else {
        setProfile(null);
        setCrianca(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return { error: null };
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, session, profile, crianca, loading, signIn, signOut, refreshCrianca, updateCrianca }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
