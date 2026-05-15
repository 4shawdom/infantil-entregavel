import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, Star, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ATIVIDADES, HABILIDADE_CONFIG, type Habilidade, type Atividade } from "@/data/atividades";
import { useAuth } from "@/contexts/AuthContext";
import TutorialModal from "@/components/app/TutorialModal";

type FiltroHabilidade = Habilidade | "todas";
type FiltroNivel = number | "todos";

function AtividadeItem({
  atividade,
  onClick,
}: {
  atividade: Atividade;
  onClick: (a: Atividade) => void;
}) {
  const habConfig = HABILIDADE_CONFIG[atividade.habilidade];

  return (
    <button
      onClick={() => onClick(atividade)}
      className="w-full text-left bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-md transition-all active:scale-[0.99]"
    >
      <div className="p-4 flex items-start gap-3">
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
              <Star className="w-3 h-3 text-yellow-500" />Nivel {atividade.nivel_min} a {atividade.nivel_max}
            </span>
          </div>
          <p className="text-muted-foreground text-xs mt-1 leading-relaxed line-clamp-2">
            {atividade.descricao}
          </p>
        </div>
        <div className="text-muted-foreground flex-shrink-0 mt-1">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </button>
  );
}

export default function Biblioteca() {
  const { crianca } = useAuth();
  const [busca, setBusca] = useState("");
  const [filtroHabilidade, setFiltroHabilidade] = useState<FiltroHabilidade>("todas");
  const [filtroNivel, setFiltroNivel] = useState<FiltroNivel>("todos");
  const [atividadeSelecionada, setAtividadeSelecionada] = useState<Atividade | null>(null);

  const nivelCrianca = crianca?.nivel ?? 1;

  const atividadesFiltradas = ATIVIDADES.filter((a) => {
    const matchBusca =
      a.nome.toLowerCase().includes(busca.toLowerCase()) ||
      a.descricao.toLowerCase().includes(busca.toLowerCase());
    const matchHabilidade = filtroHabilidade === "todas" || a.habilidade === filtroHabilidade;
    const matchNivel =
      filtroNivel === "todos" ||
      (a.nivel_min <= (filtroNivel as number) && a.nivel_max >= (filtroNivel as number));
    return matchBusca && matchHabilidade && matchNivel;
  });

  return (
    <>
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
              {h === "todas" ? "Todas" : `${HABILIDADE_CONFIG[h].emoji} ${HABILIDADE_CONFIG[h].label}`}
            </button>
          ))}
        </div>

        {/* Filtros nivel */}
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
              {n === "todos" ? "Todos os Niveis" : `Nivel ${n}${n === nivelCrianca ? " " : ""}`}
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
                <AtividadeItem atividade={a} onClick={setAtividadeSelecionada} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <TutorialModal
        atividade={atividadeSelecionada}
        onClose={() => setAtividadeSelecionada(null)}
      />
    </>
  );
}
