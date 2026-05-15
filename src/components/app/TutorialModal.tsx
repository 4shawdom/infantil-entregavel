import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Heart,
  Lightbulb,
  Clock,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { type Atividade, HABILIDADE_CONFIG } from "@/data/atividades";
import { getTutorial } from "@/data/tutoriais";

interface TutorialModalProps {
  atividade: Atividade | null;
  onClose: () => void;
}

const HEADER_GRADIENTS: Record<string, string> = {
  atencao: "from-blue-500 to-blue-400",
  linguagem: "from-purple-500 to-purple-400",
  coordenacao: "from-green-500 to-emerald-400",
};

const BADGE_COLORS: Record<string, string> = {
  atencao: "bg-blue-100 text-blue-700 border-blue-200",
  linguagem: "bg-purple-100 text-purple-700 border-purple-200",
  coordenacao: "bg-green-100 text-green-700 border-green-200",
};

const PILL_COLORS = [
  "bg-blue-50 text-blue-700 border-blue-100",
  "bg-purple-50 text-purple-700 border-purple-100",
  "bg-green-50 text-green-700 border-green-100",
  "bg-amber-50 text-amber-700 border-amber-100",
  "bg-rose-50 text-rose-700 border-rose-100",
];

function Section({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-card hover:bg-muted/50 transition-colors"
      >
        <span className="font-bold text-sm text-foreground">{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      {open && <div className="px-4 pb-4 pt-2 bg-card">{children}</div>}
    </div>
  );
}

export default function TutorialModal({ atividade, onClose }: TutorialModalProps) {
  const tutorial = atividade ? getTutorial(atividade.id) : null;

  return (
    <AnimatePresence>
      {atividade && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.97 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none"
          >
            <div className="pointer-events-auto w-full sm:max-w-lg sm:mx-4 bg-background rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden">
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${HEADER_GRADIENTS[atividade.habilidade]} px-5 pt-5 pb-4 flex-shrink-0`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-4xl flex-shrink-0">{atividade.emoji}</span>
                    <div className="min-w-0">
                      <h2 className="font-display text-white text-xl font-bold leading-tight">
                        {atividade.nome}
                      </h2>
                      <span
                        className={`inline-block mt-1 text-xs font-semibold px-2.5 py-1 rounded-full border bg-white/20 text-white border-white/30`}
                      >
                        {HABILIDADE_CONFIG[atividade.habilidade].emoji}{" "}
                        {HABILIDADE_CONFIG[atividade.habilidade].label}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="px-4 py-4 space-y-4">
                  {/* Resumo */}
                  {tutorial && (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                      <p className="text-sm text-amber-900 leading-relaxed">{tutorial.resumo}</p>
                    </div>
                  )}

                  {/* Badges */}
                  {tutorial && (
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(tutorial.badges).map(([key, value]) => (
                        <span
                          key={key}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full border ${BADGE_COLORS[atividade.habilidade]}`}
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Objetivos */}
                  {tutorial && (
                    <Section title="O que essa brincadeira desenvolve">
                      <div className="flex flex-wrap gap-2">
                        {tutorial.objetivos.map((obj, i) => (
                          <span
                            key={i}
                            className={`text-xs font-medium px-3 py-1.5 rounded-full border ${PILL_COLORS[i % PILL_COLORS.length]}`}
                          >
                            {obj}
                          </span>
                        ))}
                      </div>
                    </Section>
                  )}

                  {/* Materiais */}
                  {atividade.materiais.length > 0 && atividade.materiais[0] !== "Nenhum" && (
                    <Section title="Materiais necessarios">
                      <ul className="space-y-1.5">
                        {atividade.materiais.map((m, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="text-amber-500 font-bold flex-shrink-0">•</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </Section>
                  )}

                  {/* Passos */}
                  <Section title="Como fazer">
                    <ol className="space-y-3">
                      {atividade.passos.map((passo, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                              atividade.habilidade === "atencao"
                                ? "bg-blue-500"
                                : atividade.habilidade === "linguagem"
                                ? "bg-purple-500"
                                : "bg-green-500"
                            }`}
                          >
                            {i + 1}
                          </span>
                          <span className="text-sm text-foreground leading-relaxed">{passo}</span>
                        </li>
                      ))}
                    </ol>
                  </Section>

                  {/* Adaptacoes */}
                  {tutorial && (
                    <Section title="Como adaptar para o seu filho" defaultOpen={false}>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-green-700 mb-2 flex items-center gap-1">
                            <span>Mais facil</span>
                          </p>
                          <ul className="space-y-1.5">
                            {tutorial.adaptacoes.maisEasy.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                                <span className="text-green-500 font-bold flex-shrink-0 text-base leading-tight">+</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-orange-700 mb-2 flex items-center gap-1">
                            <span>Mais dificil</span>
                          </p>
                          <ul className="space-y-1.5">
                            {tutorial.adaptacoes.maisDificil.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                                <span className="text-orange-500 font-bold flex-shrink-0 text-base leading-tight">*</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Section>
                  )}

                  {/* Beneficios */}
                  {tutorial && (
                    <Section title="Beneficios para seu filho" defaultOpen={false}>
                      <div className="space-y-2">
                        {tutorial.beneficios.map((b, i) => (
                          <div key={i} className="flex items-start gap-3 bg-rose-50 border border-rose-100 rounded-xl p-3">
                            <Heart className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-rose-900 leading-relaxed">{b}</p>
                          </div>
                        ))}
                      </div>
                    </Section>
                  )}

                  {/* Dicas */}
                  {tutorial && (
                    <Section title="Dicas para voce, mae" defaultOpen={false}>
                      <ul className="space-y-3">
                        {tutorial.dicas.map((dica, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-foreground leading-relaxed">{dica}</p>
                          </li>
                        ))}
                      </ul>
                    </Section>
                  )}

                  {/* Tempo ideal */}
                  {tutorial && (
                    <div className="bg-card border border-border rounded-2xl p-4 flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-foreground mb-1">Tempo ideal</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tutorial.tempoIdeal}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Espacamento para o botao fixo */}
                  <div className="h-2" />
                </div>
              </div>

              {/* Botao fixo no bottom */}
              <div className="flex-shrink-0 px-4 py-4 border-t border-border bg-background">
                <button
                  className={`w-full py-3.5 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 bg-gradient-to-r ${HEADER_GRADIENTS[atividade.habilidade]} shadow-lg active:scale-[0.98] transition-transform`}
                >
                  <Plus className="w-4 h-4" />
                  Adicionar a rotina de hoje
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
