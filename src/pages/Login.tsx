import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !senha) { setErro("Preencha e-mail e senha."); return; }
    setErro("");
    setCarregando(true);
    const { error } = await signIn(email, senha);
    setCarregando(false);
    if (error) {
      setErro("E-mail ou senha incorretos. Verifique e tente novamente.");
    } else {
      navigate("/app/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-3xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-2xl text-foreground">Método Pequenos Gênios</h1>
            <p className="text-muted-foreground text-sm mt-1">Acesse sua área do aluno</p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-6 card-shadow border border-border">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-border rounded-xl px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Senha</label>
                <div className="relative">
                  <input
                    type={mostrarSenha ? "text" : "password"}
                    placeholder="••••••••"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="w-full border-2 border-border rounded-xl px-4 py-3 pr-12 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {mostrarSenha ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {erro && <p className="text-destructive text-sm text-center">{erro}</p>}

              <Button type="submit" className="w-full" disabled={carregando}>
                {carregando ? "Entrando..." : "Entrar"}
                {!carregando && <ArrowRight className="w-4 h-4" />}
              </Button>
            </form>

            <div className="text-center mt-4">
              <button
                onClick={() => navigate("/criar-senha")}
                className="text-sm text-primary hover:underline font-medium"
              >
                Criar conta ou redefinir senha
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Você recebeu o link de acesso por e-mail após a compra.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
