import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Brain } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) navigate("/app/dashboard", { replace: true });
      else navigate("/login", { replace: true });
    }
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center animate-bounce-soft">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <p className="text-muted-foreground text-sm font-medium">Carregando...</p>
      </div>
    </div>
  );
}
