import { Navigate } from "react-router-dom";
import { Brain } from "lucide-react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const email = localStorage.getItem("pg_email");

  if (!email) return <Navigate to="/login" replace />;

  return <>{children}</>;
}
