import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Activity, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const PERGUNTAS = [
  {
    id: 1,
    texto: "Seu filho(a) consegue manter o foco em uma atividade por mais de 5 minutos?",
    opcoes: [
      { label: "🚫 Raramente — desiste muito rápido", valor: "muito_dificil", peso: { atencao: 3 } },
      { label: "😕 Às vezes", valor: "moderado", peso: { atencao: 1 } },
      { label: "✅ Sim, normalmente consegue", valor: "ok", peso: { atencao: 0 } },
    ],
  },
  {
    id: 2,
    texto: "Como está a comunicação verbal do seu filho(a) para a idade?",
    opcoes: [
      { label: "😟 Abaixo do esperado", valor: "abaixo", peso: { linguagem: 3 } },
      { label: "😐 Na média", valor: "media", peso: { linguagem: 1 } },
      { label: "🗣️ Comunica-se bem", valor: "ok", peso: { linguagem: 0 } },
    ],
  },
  {
    id: 3,
    texto: "Como é a coordenação motora do seu filho(a)? (pintar, recortar, segurar lápis)",
    opcoes: [
      { label: "✂️ Tem muita dificuldade", valor: "muito_dificil", peso: { coordenacao: 3 } },
      { label: "🖌️ Alguma dificuldade", valor: "moderado", peso: { coordenacao: 1 } },
      { label: "👌 Coordenação adequada", valor: "ok", peso: { coordenacao: 0 } },
    ],
  },
  {
    id: 4,
    texto: "Seu filho(a) tem diagnóstico ou suspeita de TDAH, TEA ou dificuldade de aprendizado?",
    opcoes: [
      { label: "✅ Sim, diagnóstico confirmado", valor: "sim" },
      { label: "🔍 Em investigação", valor: "investigando" },
      { label: "❌ Não", valor: "nao" },
    ],
  },
  {
    id: 5,
    texto: "O que você quer priorizar no desenvolvimento do seu filho(a)?",
    opcoes: [
      { label: "🎯 Foco e atenção", valor: "atencao" },
      { label: "🗣️ Linguagem e comunicação", valor: "linguagem" },
      { label: "✋ Coordenação motora", valor: "coordenacao" },
      { label: "🌟 Desenvolvimento completo", valor: "atencao" },
    ],
  },
];

export default function Diagnostico() {
  const { crianca, updateCrianca } = useAuth();
  const navigate = useNavigate();
  const [atual, setAtual] = useState(0);
  const [respostas, setRespostas] = useState<string[]>([]);
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const [concluido, setConcluido] = useState(false);

  const temDiagnostico = !!crianca?.diagnostico;

  function handleProximo() {
    if (!selecionado) return;
    const novasRespostas = [...respostas, selecionado];

    if (atual < PERGUNTAS.length - 1) {
      setRespostas(novasRespostas);
      setAtual(atual + 1);
      setSelecionado(null);
    } else {
      salvarDiagnostico(novasRespostas);
    }
  }

  async function salvarDiagnostico(resp: string[]) {
    const dificuldades: Record<string, number> = { atencao: 0, linguagem: 0, coordenacao: 0 };

    PERGUNTAS.forEach((p, i) => {
      const opcao = p.opcoes.find((o) => o.valor === resp[i]);
      if (opcao && "peso" in opcao && opcao.peso) {
        Object.entries(opcao.peso as Record<string, number>).forEach(([k, v]) => {
          if (k in dificuldades) dificuldades[k] += v;
        });
      }
    });

    const prioridade = resp[4] as "atencao" | "linguagem" | "coordenacao";
    const max = Object.entries(dificuldades).sort(([, a], [, b]) => b - a)[0][0] as "atencao" | "linguagem" | "coordenacao";
    const totalScore = Object.values(dificuldades).reduce((a, b) => a + b, 0);
    const nivel: "critico" | "moderado" | "leve" = totalScore >= 6 ? "critico" : totalScore >= 3 ? "moderado" : "leve";

    const diagnostico = {
      principalDificuldade: prioridade ?? max,
      nivel,
      scores: dificuldades,
    };

    await updateCrianca({ diagnostico });
    setConcluido(true);
    toast.success("Diagnóstico salvo! Sua rotina foi personalizada. 🎉");
  }

  const progresso = ((atual) / PERGUNTAS.length) * 100;

  if (concluido || temDiagnostico) {
    const diag = crianca?.diagnostico;
    const mapa = { atencao: "Atenção e Foco 🎯", linguagem: "Linguagem 🗣️", coordenacao: "Coordenação ✋" };
    const foco = diag?.principalDificuldade ? mapa[diag.principalDificuldade as keyof typeof mapa] : "Desenvolvimento Completo";

    return (
      <div className="p-4 max-w-2xl mx-auto">
        <div className="pt-4 mb-6">
          <h1 className="font-display text-2xl text-foreground">Diagnóstico</h1>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <div className="w-20 h-20 rounded-3xl gradient-bg flex items-center justify-center mx-auto mb-5 shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display text-2xl text-foreground mb-2">Diagnóstico Concluído!</h2>
          <p className="text-muted-foreground text-sm mb-6">
            A rotina de <strong className="text-foreground">{crianca?.nome}</strong> foi personalizada para focar em{" "}
            <strong className="text-foreground">{foco}</strong>.
          </p>

          {diag && (
            <div className="bg-card rounded-3xl p-5 card-shadow border border-border mb-5 text-left space-y-3">
              <h3 className="font-bold text-foreground">Resultado:</h3>
              {Object.entries(diag.scores).map(([habilidade, score]) => (
                <div key={habilidade}>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span className="font-semibold capitalize">{habilidade}</span>
                    <span>{score > 2 ? "Alta prioridade" : score > 0 ? "Média prioridade" : "Desenvolvida"}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full gradient-bg"
                      style={{ width: `${Math.min((score / 6) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={() => navigate("/app/rotina")} className="flex-1">
              Ver rotina personalizada <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {temDiagnostico && !concluido && (
            <button
              onClick={() => { setAtual(0); setRespostas([]); setSelecionado(null); setConcluido(false); }}
              className="text-sm text-muted-foreground hover:text-foreground mt-4 block mx-auto"
            >
              Refazer diagnóstico
            </button>
          )}
        </motion.div>
      </div>
    );
  }

  const pergunta = PERGUNTAS[atual];

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="pt-4 mb-5">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="w-5 h-5 text-primary" />
          <h1 className="font-display text-2xl text-foreground">Diagnóstico</h1>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Pergunta {atual + 1} de {PERGUNTAS.length}</span>
          <span>{Math.round(progresso)}%</span>
        </div>
        <Progress value={progresso} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={atual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
        >
          <div className="bg-card rounded-3xl p-5 card-shadow border border-border mb-4">
            <h2 className="font-display text-xl text-foreground leading-snug">
              {pergunta.texto}
            </h2>
          </div>

          <div className="space-y-3">
            {pergunta.opcoes.map((opcao) => (
              <button
                key={opcao.valor + opcao.label}
                onClick={() => setSelecionado(opcao.valor)}
                className={`w-full text-left border-2 rounded-2xl p-4 transition-all duration-200 ${
                  selecionado === opcao.valor
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <span className="font-semibold text-foreground text-sm">{opcao.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3 mt-5">
        {atual > 0 && (
          <Button variant="outline" onClick={() => { setAtual(atual - 1); setRespostas(respostas.slice(0, -1)); setSelecionado(null); }}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
        )}
        <Button className="flex-1" onClick={handleProximo} disabled={!selecionado}>
          {atual < PERGUNTAS.length - 1 ? "Próxima" : "Salvar diagnóstico"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
