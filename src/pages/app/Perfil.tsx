import { useState } from "react";
import { motion } from "framer-motion";
import { User, LogOut, Save, Brain, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const NIVEL_INFO = [
  { nivel: 1, nome: "Explorador", emoji: "🌱" },
  { nivel: 2, nome: "Aventureiro", emoji: "🌿" },
  { nivel: 3, nome: "Descobridor", emoji: "🌳" },
  { nivel: 4, nome: "Desbravador", emoji: "⭐" },
  { nivel: 5, nome: "Mestre", emoji: "🏆" },
];

export default function Perfil() {
  const { user, profile, crianca, signOut, updateCrianca } = useAuth();
  const navigate = useNavigate();

  const [nomeMaeEdit, setNomeMaeEdit] = useState(profile?.nome_mae ?? "");
  const [nomeCriancaEdit, setNomeCriancaEdit] = useState(crianca?.nome ?? "");
  const [idadeEdit, setIdadeEdit] = useState(crianca?.idade?.toString() ?? "");
  const [salvando, setSalvando] = useState(false);

  const nivelInfo = NIVEL_INFO[(crianca?.nivel ?? 1) - 1];

  async function handleSalvar() {
    if (!nomeCriancaEdit.trim()) { toast.error("Nome da criança obrigatório."); return; }
    setSalvando(true);

    if (user && nomeMaeEdit.trim()) {
      await supabase.from("profiles").upsert({ id: user.id, nome_mae: nomeMaeEdit.trim() });
    }

    await updateCrianca({
      nome: nomeCriancaEdit.trim(),
      idade: parseInt(idadeEdit) || crianca?.idade || 0,
    });

    setSalvando(false);
    toast.success("Perfil atualizado! ✅");
  }

  async function handleSignOut() {
    await signOut();
    navigate("/login");
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="pt-4 mb-6">
        <h1 className="font-display text-2xl text-foreground">Perfil</h1>
      </div>

      {/* Card da criança */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-3xl p-5 card-shadow border border-border mb-4"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-3xl gradient-bg flex items-center justify-center shadow-lg">
            <span className="text-3xl">{nivelInfo?.emoji}</span>
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">{crianca?.nome ?? "—"}</h2>
            <Badge variant="outline" className="text-xs mt-1">
              Nível {crianca?.nivel ?? 1} — {nivelInfo?.nome}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted rounded-2xl p-3 text-center">
            <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
            <p className="font-display text-lg text-foreground">{crianca?.pontos ?? 0}</p>
            <p className="text-xs text-muted-foreground">Pontos</p>
          </div>
          <div className="bg-muted rounded-2xl p-3 text-center">
            <Brain className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="font-display text-lg text-foreground">{crianca?.nivel ?? 1}</p>
            <p className="text-xs text-muted-foreground">Nível Atual</p>
          </div>
        </div>
      </motion.div>

      {/* Editar dados */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-card rounded-3xl p-5 card-shadow border border-border mb-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5 text-primary" />
          <h3 className="font-display text-lg text-foreground">Editar Informações</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-foreground mb-1 block uppercase tracking-wide">Seu nome</label>
            <input
              type="text"
              value={nomeMaeEdit}
              onChange={(e) => setNomeMaeEdit(e.target.value)}
              placeholder="Nome da mãe"
              className="w-full border-2 border-border rounded-xl px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-foreground mb-1 block uppercase tracking-wide">Nome do filho(a)</label>
            <input
              type="text"
              value={nomeCriancaEdit}
              onChange={(e) => setNomeCriancaEdit(e.target.value)}
              placeholder="Nome da criança"
              className="w-full border-2 border-border rounded-xl px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-foreground mb-1 block uppercase tracking-wide">Idade do filho(a)</label>
            <select
              value={idadeEdit}
              onChange={(e) => setIdadeEdit(e.target.value)}
              className="w-full border-2 border-border rounded-xl px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
            >
              {[3, 4, 5, 6, 7, 8].map((i) => (
                <option key={i} value={i}>{i} anos</option>
              ))}
            </select>
          </div>

          <Button onClick={handleSalvar} disabled={salvando} className="w-full">
            {salvando ? "Salvando..." : "Salvar alterações"}
            <Save className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      {/* Conta */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-3xl p-5 card-shadow border border-border mb-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-display text-lg text-foreground">Conta</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-1">E-mail cadastrado:</p>
        <p className="text-sm font-medium text-foreground mb-4">{user?.email ?? "—"}</p>
        <div className="text-xs text-muted-foreground space-y-1">
          <p>✅ Acesso vitalício ao produto</p>
          <p>✅ Atualizações inclusas automaticamente</p>
          <p>🔒 Garantia de segurança e privacidade</p>
        </div>
      </motion.div>

      {/* Sair */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <button
          onClick={handleSignOut}
          className="w-full flex items-center justify-center gap-2 text-destructive border-2 border-destructive/20 rounded-2xl py-3 text-sm font-bold hover:bg-destructive/5 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sair da conta
        </button>
      </motion.div>
    </div>
  );
}
