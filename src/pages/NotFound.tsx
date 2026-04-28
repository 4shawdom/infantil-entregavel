import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 rounded-3xl gradient-bg flex items-center justify-center mx-auto mb-6">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <h1 className="font-display text-4xl text-foreground mb-2">404</h1>
        <p className="text-muted-foreground mb-6">Página não encontrada.</p>
        <Button onClick={() => navigate("/app/dashboard")}>Ir para o Dashboard</Button>
      </div>
    </div>
  );
}
