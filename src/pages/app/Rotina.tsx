import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { ATIVIDADES, HABILIDADE_CONFIG, getAtividadesParaRotina, type Atividade, type Habilidade } from "@/data/atividades";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const PONTOS_POR_ATIVIDADE = 25;

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
            {concluida
              ? <CheckCircle2 className="w-6 h-6" />
              : <Circle className="w-6 h-6" />
            }
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

        {/* Detalhes expandidos */}
        {expandida && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
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
                ✅ Marcar como concluída (+{PONTOS_POR_ATIVIDADE} pts)
              </button>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Rotina() {
  const { crianca, updateCrianca } = useAuth();
  const [concluidasHoje, setConcluidasHoje] = useState<string[]>([]);
  const [carregando, setCarregando] = useState(true);

  const nivel = crianca?.nivel ?? 1;
  const habilidadeFoco = (crianca?.diagnostico?.principalDificuldade ?? null) as Habilidade | null;
  const atividadesHoje = getAtividadesParaRotina(nivel, habilidadeFoco).slice(0, 3);

  const hoje = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!crianca) { setCarregando(false); return; }
    supabase
      .from("atividades_concluidas")
      .select("atividade_id")
      .eq("crianca_id", crianca.id)
      .eq("data", hoje)
      .then(({ data }) => {
        setConcluidasHoje(data?.map((r) => r.atividade_id) ?? []);
        setCarregando(false);
      });
  }, [crianca, hoje]);

  async function handleConcluir(atividadeId: string) {
    if (!crianca || concluidasHoje.includes(atividadeId)) return;

    const { error } = await supabase.from("atividades_concluidas").insert({
      crianca_id: crianca.id,
      atividade_id: atividadeId,
      data: hoje,
    });

    if (error) { toast.error("Erro ao salvar. Tente novamente."); return; }

    const novosPontos = (crianca.pontos ?? 0) + PONTOS_POR_ATIVIDADE;
    const novoNivel = calcularNivel(novosPontos);

    await updateCrianca({ pontos: novosPontos, nivel: novoNivel });
    setConcluidasHoje([...concluidasHoje, atividadeId]);

    if (novoNivel > nivel) {
      toast.success(`🎉 ${crianca.nome} subiu para o Nível ${novoNivel}!`, { duration: 4000 });
    } else {
      toast.success(`✅ Atividade concluída! +${PONTOS_POR_ATIVIDADE} pontos`);
    }
  }

  function calcularNivel(pontos: number): number {
    if (pontos >= 900) return 5;
    if (pontos >= 500) return 4;
    if (pontos >= 250) return 3;
    if (pontos >= 100) return 2;
    return 1;
  }

  const totalHoje = atividadesHoje.length;
  const concluidasCount = atividadesHoje.filter((a) => concluidasHoje.includes(a.id)).length;
  const progressoHoje = totalHoje > 0 ? (concluidasCount / totalHoje) * 100 : 0;

  const dataFormatada = new Date().toLocaleDateString("pt-BR", {
    weekday: "long", day: "numeric", month: "long",
  });

  if (carregando) {
    return (
      <div className="p-4 flex items-center justify-center h-40">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

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
            initial={{ width: 0 }}
            animate={{ width: `${progressoHoje}%` }}
            transition={{ duration: 0.8, delay: 0.2 }}
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

      {!crianca?.diagnostico && (
        <div className="mt-4 bg-muted rounded-2xl p-4 text-center">
          <p className="text-muted-foreground text-sm">
            Complete o <strong className="text-foreground">diagnóstico</strong> para personalizar sua rotina!
          </p>
        </div>
      )}
    </div>
  );
}
