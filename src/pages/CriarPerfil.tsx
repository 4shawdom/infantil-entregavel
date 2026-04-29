import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";


export default function CriarPerfil() {
  const navigate = useNavigate();
  const [nomeMae, setNomeMae] = useState("");
  const [nomeCrianca, setNomeCrianca] = useState("");
  const [idadeCrianca, setIdadeCrianca] = useState("");
  const [erro, setErro] = useState("");

  function handleSalvar(e: React.FormEvent) {
    e.preventDefault();
    if (!nomeMae.trim()) { setErro("Informe o seu nome."); return; }
    if (!nomeCrianca.trim()) { setErro("Informe o nome do seu filho(a)."); return; }
    if (!idadeCrianca) { setErro("Selecione a idade do seu filho(a)."); return; }

    localStorage.setItem("pg_perfil", JSON.stringify({
      nomeMae: nomeMae.trim(),
      nomeCrianca: nomeCrianca.trim(),
      idadeCrianca,
    }));

    navigate("/app/dashboard");
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-3xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-2xl text-foreground">Bem-vinda!</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Vamos montar o perfil do seu filho para personalizar tudo
            </p>
          </div>

          <div className="bg-card rounded-3xl p-6 card-shadow border border-border">
            <form onSubmit={handleSalvar} className="space-y-5">

              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">
                  Qual é o seu nome?
                </label>
                <input
                  type="text"
                  placeholder="Ex: Ana Paula"
                  value={nomeMae}
                  onChange={(e) => { setNomeMae(e.target.value); setErro(""); }}
                  autoFocus
                  className="w-full border-2 border-border rounded-xl px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">
                  Nome do seu filho(a):
                </label>
                <input
                  type="text"
                  placeholder="Ex: Miguel"
                  value={nomeCrianca}
                  onChange={(e) => { setNomeCrianca(e.target.value); setErro(""); }}
                  className="w-full border-2 border-border rounded-xl px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">
                  Quantos anos ele(a) tem?
                </label>
                <input
                  type="text"
                  placeholder="Ex: 5 anos, 8 anos, 12 anos..."
                  value={idadeCrianca}
                  onChange={(e) => { setIdadeCrianca(e.target.value); setErro(""); }}
                  className="w-full border-2 border-border rounded-xl px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              {erro && (
                <p className="text-destructive text-sm text-center">{erro}</p>
              )}

              <button
                type="submit"
                className="w-full gradient-bg text-white font-extrabold rounded-2xl py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-base"
              >
                Entrar no meu plano
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
