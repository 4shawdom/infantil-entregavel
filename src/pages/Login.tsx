import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  function handleEntrar(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setErro("Informe um e-mail válido.");
      return;
    }
    localStorage.setItem("pg_email", email.trim().toLowerCase());
    const perfil = localStorage.getItem("pg_perfil");
    navigate(perfil ? "/app/dashboard" : "/criar-perfil");
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-3xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-2xl text-foreground">Método Pequenos Gênios</h1>
            <p className="text-muted-foreground text-sm mt-1">Informe o e-mail usado na compra para acessar</p>
          </div>

          <div className="bg-card rounded-3xl p-6 card-shadow border border-border">
            <form onSubmit={handleEntrar} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">E-mail da compra</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErro(""); }}
                  autoFocus
                  className="w-full border-2 border-border rounded-xl px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              {erro && <p className="text-destructive text-sm text-center">{erro}</p>}

              <button
                type="submit"
                className="w-full gradient-bg text-white font-extrabold rounded-2xl py-3.5 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Acessar meu plano
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
