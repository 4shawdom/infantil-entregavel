import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, BookOpen, Star, TrendingUp, Brain, ArrowRight, Activity } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { HABILIDADE_CONFIG } from "@/data/atividades";

const NIVEL_INFO = [
  { nivel: 1, nome: "Explorador", pontos_max: 100, emoji: "🌱" },
  { nivel: 2, nome: "Aventureiro", pontos_max: 250, emoji: "🌿" },
  { nivel: 3, nome: "Descobridor", pontos_max: 500, emoji: "🌳" },
  { nivel: 4, nome: "Desbravador", pontos_max: 900, emoji: "⭐" },
  { nivel: 5, nome: "Mestre", pontos_max: 9999, emoji: "🏆" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { profile, crianca } = useAuth();

  const nomeMae = profile?.nome_mae?.split(" ")[0] ?? "Mamãe";
  const nomeCrianca = crianca?.nome ?? "seu filho(a)";
  const nivel = crianca?.nivel ?? 1;
  const pontos = crianca?.pontos ?? 0;
  const nivelInfo = NIVEL_INFO[nivel - 1] ?? NIVEL_INFO[0];
  const proximoNivel = NIVEL_INFO[nivel] ?? null;
  const pontosParaProximo = proximoNivel ? proximoNivel.pontos_max : nivelInfo.pontos_max;
  const progresso = Math.min((pontos / pontosParaProximo) * 100, 100);
  const habilidadeFoco = crianca?.diagnostico?.principalDificuldade as string | null;
  const habilidadeConfig = habilidadeFoco ? HABILIDADE_CONFIG[habilidadeFoco as keyof typeof HABILIDADE_CONFIG] : null;

  const agora = new Date();
  const hora = agora.getHours();
  const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Saudação */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-6 pt-4">
        <p className="text-muted-foreground text-sm">{saudacao},</p>
        <h1 className="font-display text-2xl text-foreground">{nomeMae}! 👋</h1>
      </motion.div>

      {/* Card da Criança */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-card rounded-3xl p-5 card-shadow border border-border mb-4"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{nivelInfo.emoji}</span>
              <h2 className="font-display text-xl text-foreground">{nomeCrianca}</h2>
            </div>
            <Badge variant="outline" className="text-xs">
              Nível {nivel} — {nivelInfo.nome}
            </Badge>
          </div>
          <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground font-medium">Progresso para o Nível {nivel + 1}</span>
            <span className="font-bold text-foreground">{pontos} / {pontosParaProximo} pts</span>
          </div>
          <Progress value={progresso} className="h-3" />
          {proximoNivel && (
            <p className="text-xs text-muted-foreground">
              Faltam <strong className="text-primary">{pontosParaProximo - pontos} pontos</strong> para ser {proximoNivel.nome} {proximoNivel.emoji}
            </p>
          )}
        </div>

        {habilidadeConfig && (
          <div className={`mt-4 rounded-2xl p-3 border flex items-center gap-2 ${habilidadeConfig.bg}`}>
            <span className="text-lg">{habilidadeConfig.emoji}</span>
            <div>
              <p className="text-xs font-bold">Foco principal</p>
              <p className={`text-xs font-semibold ${habilidadeConfig.cor}`}>{habilidadeConfig.label}</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Ações rápidas */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-3 mb-4"
      >
        <button
          onClick={() => navigate("/app/rotina")}
          className="bg-primary text-white rounded-3xl p-5 text-left shadow-lg hover:opacity-90 transition-opacity"
        >
          <CalendarDays className="w-6 h-6 mb-3" />
          <p className="font-display text-base leading-tight">Rotina de Hoje</p>
          <p className="text-primary-foreground/80 text-xs mt-1">Ver atividades do dia</p>
        </button>

        <button
          onClick={() => navigate("/app/biblioteca")}
          className="bg-card rounded-3xl p-5 text-left card-shadow border border-border hover:border-primary/30 transition-colors"
        >
          <BookOpen className="w-6 h-6 text-secondary mb-3" />
          <p className="font-display text-base text-foreground leading-tight">Biblioteca</p>
          <p className="text-muted-foreground text-xs mt-1">Todas as atividades</p>
        </button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-3 gap-3 mb-4"
      >
        {[
          { icon: Star, label: "Pontos", valor: pontos, cor: "text-yellow-500" },
          { icon: TrendingUp, label: "Nível", valor: nivel, cor: "text-primary" },
          { icon: Activity, label: "Fase", valor: nivelInfo.nome.split("")[0], cor: "text-secondary" },
        ].map(({ icon: Icon, label, valor, cor }) => (
          <div key={label} className="bg-card rounded-2xl p-4 card-shadow border border-border text-center">
            <Icon className={`w-5 h-5 mx-auto mb-1 ${cor}`} />
            <p className="font-display text-xl text-foreground">{valor}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* CTA diagnóstico se não tiver */}
      {!crianca?.diagnostico && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-secondary/10 border-2 border-secondary/30 rounded-3xl p-5"
        >
          <div className="flex items-start gap-3">
            <Activity className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-display text-base text-foreground mb-1">Complete o Diagnóstico</h3>
              <p className="text-muted-foreground text-xs mb-3">
                Responda o diagnóstico inicial para personalizar as atividades do seu filho.
              </p>
              <Button
                size="sm"
                className="bg-secondary hover:bg-secondary/90"
                onClick={() => navigate("/app/diagnostico")}
              >
                Fazer diagnóstico <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
