import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ATIVIDADES, HABILIDADE_CONFIG, type Atividade } from "@/data/atividades";
import { toast } from "sonner";

const PONTOS_POR_ATIVIDADE = 25;

function getStats(): { pontos: number; nivel: number } {
  try { return JSON.parse(localStorage.getItem("pg_stats") || "{}"); } catch { return {}; }
}

function saveStats(stats: { pontos: number; nivel: number }) {
  localStorage.setItem("pg_stats", JSON.stringify(stats));
}

function calcularNivel(pontos: number): number {
  if (pontos >= 900) return 5;
  if (pontos >= 500) return 4;
  if (pontos >= 250) return 3;
  if (pontos >= 100) return 2;
  return 1;
}

function getAtividadesHoje(nivel: number): Atividade[] {
  const pool = ATIVIDADES.filter((a) => a.nivel_min <= nivel && a.nivel_max >= nivel);
  const hoje = new Date().getDay();
  const inicio = (hoje * 3) % pool.length;
  const selecionadas: Atividade[] = [];
  for (let i = 0; i < 3; i++) {
    selecionadas.push(pool[(inicio + i) % pool.length]);
  }
  return selecionadas;
}

function AtividadeCard({
  atividade,
  concluida,
  onConcluir,
}: {
  atividade: Atividade;
  concluida: boolean;
  onConcluir: (id: string) => void;
}) {
  const [expandida, setExpandida] = useState(false);
  const habConfig = HABILIDADE_CONFIG[atividade.habilidade];

  return (
    <motion.div
      layout
      className={`rounded-3xl border-2 overflow-hidden transition-all duration-300 ${
        concluida ? "border-accent/30 bg-accent/5" : "border-border bg-card card-shadow"
      }`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <button
            onClick={() => !concluida && onConcluir(atividade.id)}
            className={`flex-shrink-0 mt-0.5 transition-all ${concluida ? "text-accent" : "text-muted-foreground hover:text-accent"}`}
          >
            {concluida ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-lg">{atividade.emoji}</span>
              <h3 className={`font-display text-base leading-tight ${concluida ? "line-through text-muted-foreground" : "text-foreground"}`}>
                {atividade.nome}
              </h3>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className={`text-xs ${habConfig.cor} border-current`}>
                {habConfig.emoji} {habConfig.label}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />{atividade.duracao} min
              </span>
              <span className="flex items-center gap-1 text-xs text-yellow-600">
                <Star className="w-3 h-3" />+{PONTOS_POR_ATIVIDADE} pts
              </span>
            </div>
            <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{atividade.descricao}</p>
          </div>

          <button
            onClick={() => setExpandida(!expandida)}
            className="text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            {expandida ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {expandida && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 space-y-3 border-t border-border pt-3"
          >
            {atividade.materiais.length > 0 && (
              <div>
                <p className="text-xs font-bold text-foreground mb-1">📦 Materiais:</p>
                <ul className="space-y-0.5">
                  {atividade.materiais.map((m) => (
                    <li key={m} className="text-xs text-muted-foreground">• {m}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p className="text-xs font-bold text-foreground mb-1">📋 Passo a passo:</p>
              <ol className="space-y-1">
                {atividade.passos.map((p, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex gap-2">
                    <span className="font-bold text-primary flex-shrink-0">{i + 1}.</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </div>
            {!concluida && (
              <button
                onClick={() => onConcluir(atividade.id)}
                className="w-full gradient-bg text-white rounded-2xl py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Marcar como concluída (+{PONTOS_POR_ATIVIDADE} pts)
              </button>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Rotina() {
  const hoje = new Date().toISOString().split("T")[0];
  const chaveHoje = `pg_rotina_${hoje}`;

  const [stats, setStats] = useState(() => {
    const s = getStats();
    return { pontos: s.pontos ?? 0, nivel: s.nivel ?? 1 };
  });

  const [concluidasHoje, setConcluidasHoje] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(chaveHoje) || "[]"); } catch { return []; }
  });

  const atividadesHoje = getAtividadesHoje(stats.nivel);

  function handleConcluir(atividadeId: string) {
    if (concluidasHoje.includes(atividadeId)) return;

    const novasCoincluidas = [...concluidasHoje, atividadeId];
    localStorage.setItem(chaveHoje, JSON.stringify(novasCoincluidas));
    setConcluidasHoje(novasCoincluidas);

    const novosPontos = stats.pontos + PONTOS_POR_ATIVIDADE;
    const novoNivel = calcularNivel(novosPontos);
    const novosStats = { pontos: novosPontos, nivel: novoNivel };
    saveStats(novosStats);
    setStats(novosStats);

    if (novoNivel > stats.nivel) {
      toast.success(`🎉 Subiu para o Nível ${novoNivel}!`, { duration: 4000 });
    } else {
      toast.success(`Atividade concluída! +${PONTOS_POR_ATIVIDADE} pontos`);
    }
  }

  const totalHoje = atividadesHoje.length;
  const concluidasCount = atividadesHoje.filter((a) => concluidasHoje.includes(a.id)).length;
  const progressoHoje = totalHoje > 0 ? (concluidasCount / totalHoje) * 100 : 0;

  const dataFormatada = new Date().toLocaleDateString("pt-BR", {
    weekday: "long", day: "numeric", month: "long",
  });

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="pt-4 mb-6">
        <h1 className="font-display text-2xl text-foreground">Rotina do Dia</h1>
        <p className="text-muted-foreground text-sm capitalize">{dataFormatada}</p>
      </div>

      {/* Progresso do dia */}
      <div className="bg-card rounded-3xl p-5 card-shadow border border-border mb-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-bold text-foreground">Progresso de hoje</p>
            <p className="text-muted-foreground text-xs">{concluidasCount} de {totalHoje} atividades</p>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl text-primary">{Math.round(progressoHoje)}%</p>
          </div>
        </div>

        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full rounded-full gradient-bg"
            animate={{ width: `${progressoHoje}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {concluidasCount === totalHoje && totalHoje > 0 && (
          <div className="mt-3 text-center">
            <p className="text-accent font-bold text-sm">🎉 Rotina completa! Incrível!</p>
          </div>
        )}
      </div>

      {/* Lista de atividades */}
      <div className="space-y-3">
        {atividadesHoje.map((atividade, i) => (
          <motion.div
            key={atividade.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <AtividadeCard
              atividade={atividade}
              concluida={concluidasHoje.includes(atividade.id)}
              onConcluir={handleConcluir}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
