import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Brain } from "lucide-react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center animate-bounce-soft">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <p className="text-muted-foreground text-sm font-medium">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return <>{children}</>;
}
