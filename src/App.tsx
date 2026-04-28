import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AppLayout } from "@/components/app/AppLayout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import CriarSenha from "./pages/CriarSenha";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/app/Dashboard";
import Rotina from "./pages/app/Rotina";
import Biblioteca from "./pages/app/Biblioteca";
import Diagnostico from "./pages/app/Diagnostico";
import Perfil from "./pages/app/Perfil";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/criar-senha" element={<CriarSenha />} />

            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/app/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="rotina" element={<Rotina />} />
              <Route path="biblioteca" element={<Biblioteca />} />
              <Route path="diagnostico" element={<Diagnostico />} />
              <Route path="perfil" element={<Perfil />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
