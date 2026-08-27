import React from "react";
import { BookOpen, Compass, Users, GitBranch, Lightbulb, FileText, Sparkles, Sun, Moon } from "lucide-react";

export default function Header({ activeTab, setActiveTab, isDark, setIsDark }) {
  const tabs = [
    { id: "intro", label: "Prólogo", icon: BookOpen },
    { id: "atlas", label: "Atlas (100)", icon: Users },
    { id: "councils", label: "Salas de Debate (10)", icon: Compass },
    { id: "dependency", label: "Mapa de Dependencia", icon: GitBranch },
    { id: "lab", label: "Laboratorio Socrático", icon: Lightbulb },
    { id: "manifesto", label: "Manifiesto", icon: FileText }
  ];

  return (
    <header className="sticky top-0 z-40 bg-parchment-100/80 dark:bg-ink-950/80 backdrop-blur-2xl border-b border-parchment-300/80 dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setActiveTab("intro")}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-terracotta-500 to-terracotta-700 flex items-center justify-center text-white shadow-lg shadow-terracotta-600/30 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl text-ink-900 dark:text-white tracking-wide block transition-colors">
                El Consejo de las Cien Miradas
              </span>
              <span className="text-[11px] text-bronze-600 dark:text-terracotta-500 tracking-widest uppercase font-semibold block transition-colors">
                Humanismo Digital & Soberanía Noética
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 bg-parchment-200/60 dark:bg-white/5 p-1.5 rounded-2xl border border-parchment-300/60 dark:border-white/10 backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold apple-pill ${
                    isActive
                      ? "bg-terracotta-600 text-white shadow-md shadow-terracotta-600/30"
                      : "text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              title={isDark ? "Cambiar a Modo Porcelana (Día)" : "Cambiar a Modo Noche de Lujo (Dark)"}
              className="p-2.5 rounded-2xl bg-parchment-200/80 dark:bg-white/10 border border-parchment-300/80 dark:border-white/15 text-ink-700 dark:text-amber-400 hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-ink-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex overflow-x-auto py-2 space-x-2 border-t border-parchment-200 dark:border-white/10 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap font-medium apple-pill ${
                  isActive
                    ? "bg-terracotta-600 text-white shadow"
                    : "bg-parchment-200/80 dark:bg-white/10 text-ink-800 dark:text-ink-300"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}