import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ATIVIDADES, HABILIDADE_CONFIG, type Habilidade, type Atividade } from "@/data/atividades";
import { useAuth } from "@/contexts/AuthContext";

type FiltroHabilidade = Habilidade | "todas";
type FiltroNivel = number | "todos";

function AtividadeItem({ atividade }: { atividade: Atividade }) {
  const [expandida, setExpandida] = useState(false);
  const habConfig = HABILIDADE_CONFIG[atividade.habilidade];

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <button
        onClick={() => setExpandida(!expandida)}
        className="w-full text-left p-4 flex items-start gap-3"
      >
        <span className="text-2xl flex-shrink-0">{atividade.emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground text-sm">{atividade.nome}</p>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <Badge variant="outline" className={`text-xs ${habConfig.cor} border-current`}>
              {habConfig.emoji} {habConfig.label}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />{atividade.duracao} min
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="w-3 h-3 text-yellow-500" />Nível {atividade.nivel_min}–{atividade.nivel_max}
            </span>
          </div>
          <p className="text-muted-foreground text-xs mt-1 leading-relaxed line-clamp-2">{atividade.descricao}</p>
        </div>
        <div className="text-muted-foreground flex-shrink-0">
          {expandida ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {expandida && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 pb-4 border-t border-border pt-3 space-y-3"
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
            <p className="text-xs font-bold text-foreground mb-1">📋 Como fazer:</p>
            <ol className="space-y-1">
              {atividade.passos.map((p, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
                  <span className="font-bold text-primary flex-shrink-0">{i + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function Biblioteca() {
  const { crianca } = useAuth();
  const [busca, setBusca] = useState("");
  const [filtroHabilidade, setFiltroHabilidade] = useState<FiltroHabilidade>("todas");
  const [filtroNivel, setFiltroNivel] = useState<FiltroNivel>("todos");

  const nivelCrianca = crianca?.nivel ?? 1;

  const atividadesFiltradas = ATIVIDADES.filter((a) => {
    const matchBusca = a.nome.toLowerCase().includes(busca.toLowerCase()) ||
      a.descricao.toLowerCase().includes(busca.toLowerCase());
    const matchHabilidade = filtroHabilidade === "todas" || a.habilidade === filtroHabilidade;
    const matchNivel = filtroNivel === "todos" ||
      (a.nivel_min <= (filtroNivel as number) && a.nivel_max >= (filtroNivel as number));
    return matchBusca && matchHabilidade && matchNivel;
  });

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="pt-4 mb-5">
        <h1 className="font-display text-2xl text-foreground">Biblioteca</h1>
        <p className="text-muted-foreground text-sm">{ATIVIDADES.length} atividades disponíveis</p>
      </div>

      {/* Busca */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar atividade..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full border-2 border-border rounded-2xl pl-10 pr-4 py-3 text-foreground bg-card focus:outline-none focus:border-primary transition-colors text-sm"
        />
      </div>

      {/* Filtros habilidade */}
      <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
        {(["todas", "atencao", "linguagem", "coordenacao"] as const).map((h) => (
          <button
            key={h}
            onClick={() => setFiltroHabilidade(h)}
            className={`flex-shrink-0 text-xs font-bold px-3 py-2 rounded-xl border-2 transition-all ${
              filtroHabilidade === h
                ? "gradient-bg text-white border-transparent"
                : "border-border bg-card text-muted-foreground hover:border-primary/40"
            }`}
          >
            {h === "todas" ? "📚 Todas" : `${HABILIDADE_CONFIG[h].emoji} ${HABILIDADE_CONFIG[h].label}`}
          </button>
        ))}
      </div>

      {/* Filtros nível */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {(["todos", 1, 2, 3, 4, 5] as const).map((n) => (
          <button
            key={n}
            onClick={() => setFiltroNivel(n)}
            className={`flex-shrink-0 text-xs font-bold px-3 py-2 rounded-xl border-2 transition-all ${
              filtroNivel === n
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground hover:border-primary/40"
            } ${n !== "todos" && n === nivelCrianca ? "ring-2 ring-primary/30" : ""}`}
          >
            {n === "todos" ? "Todos os Níveis" : `Nível ${n}${n === nivelCrianca ? " ⭐" : ""}`}
          </button>
        ))}
      </div>

      {/* Lista */}
      {atividadesFiltradas.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-3xl mb-2">🔍</p>
          <p className="font-semibold">Nenhuma atividade encontrada</p>
          <p className="text-sm">Tente outros filtros</p>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground font-medium">
            {atividadesFiltradas.length} resultado{atividadesFiltradas.length !== 1 ? "s" : ""}
          </p>
          {atividadesFiltradas.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <AtividadeItem atividade={a} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
