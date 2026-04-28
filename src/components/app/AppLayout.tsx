import { useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, CalendarDays, BookOpen, Activity, User,
  LogOut, Menu, X, Brain
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/app/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/app/rotina", icon: CalendarDays, label: "Rotina do Dia" },
  { to: "/app/biblioteca", icon: BookOpen, label: "Atividades" },
  { to: "/app/diagnostico", icon: Activity, label: "Diagnóstico" },
  { to: "/app/perfil", icon: User, label: "Perfil" },
];

export function AppLayout() {
  const { profile, crianca, signOut } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  async function handleSignOut() {
    await signOut();
    navigate("/login");
  }

  const nomeMae = profile?.nome_mae?.split(" ")[0] ?? "Mamãe";
  const nomeCrianca = crianca?.nome ?? "seu filho(a)";

  return (
    <div className="min-h-screen bg-background flex">
      {/* Overlay mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-64 z-50 bg-card border-r border-border flex flex-col transition-transform duration-300 shadow-xl",
        "lg:translate-x-0 lg:static lg:z-auto lg:shadow-none",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl gradient-bg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-extrabold text-foreground text-base leading-none">Pequenos</p>
              <p className="font-display font-extrabold gradient-text text-lg leading-none">Gênios ✨</p>
            </div>
          </div>
        </div>

        {/* Saudação */}
        <div className="px-5 py-4 border-b border-border">
          <p className="text-xs text-muted-foreground">Olá,</p>
          <p className="font-bold text-foreground">{nomeMae} 👋</p>
          <p className="text-xs text-muted-foreground mt-0.5">Plano de: <strong className="text-primary">{nomeCrianca}</strong></p>
        </div>

        {/* Navegação */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200",
                isActive
                  ? "gradient-bg text-white shadow-md"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Sign out */}
        <div className="p-4 border-t border-border">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-all w-full"
          >
            <LogOut className="w-5 h-5" />
            Sair
          </button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header mobile */}
        <header className="lg:hidden sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-display font-extrabold gradient-text">Pequenos Gênios</span>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="p-2 text-muted-foreground hover:bg-muted rounded-xl">
            <Menu className="w-5 h-5" />
          </button>
        </header>

        {/* Conteúdo da rota */}
        <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
          <Outlet />
        </main>

        {/* Bottom nav mobile */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border z-30">
          <div className="grid grid-cols-5 py-1">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => cn(
                  "flex flex-col items-center gap-1 py-2 px-1 text-xs transition-all",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="truncate text-[10px]">{label.split(" ")[0]}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
