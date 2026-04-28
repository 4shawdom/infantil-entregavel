import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function CriarSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function handleEnviar(e: React.FormEvent) {
    e.preventDefault();
    if (!email) { setErro("Informe seu e-mail."); return; }
    setErro("");
    setCarregando(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/criar-senha`,
    });
    setCarregando(false);
    if (error) {
      setErro("Não encontramos esse e-mail. Verifique e tente novamente.");
    } else {
      setEnviado(true);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-3xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-2xl text-foreground">
              {enviado ? "E-mail enviado!" : "Acesso à conta"}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {enviado
                ? "Verifique sua caixa de entrada e siga o link para criar sua senha."
                : "Informe seu e-mail para receber o link de acesso."}
            </p>
          </div>

          <div className="bg-card rounded-3xl p-6 card-shadow border border-border">
            {!enviado ? (
              <form onSubmit={handleEnviar} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">E-mail da compra</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-border rounded-xl px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                {erro && <p className="text-destructive text-sm text-center">{erro}</p>}
                <Button type="submit" className="w-full" disabled={carregando}>
                  {carregando ? "Enviando..." : "Enviar link de acesso"}
                  {!carregando && <ArrowRight className="w-4 h-4" />}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="text-5xl">📧</div>
                <p className="text-sm text-muted-foreground">
                  Se você comprou o produto com este e-mail, o link chegará em instantes.
                  Verifique também a pasta de spam.
                </p>
                <Button variant="outline" onClick={() => setEnviado(false)} className="w-full">
                  Tentar outro e-mail
                </Button>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mx-auto mt-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao login
          </button>
        </motion.div>
      </div>
    </div>
  );
}
