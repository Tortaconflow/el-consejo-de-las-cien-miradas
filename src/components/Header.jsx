import React from "react";
import { BookOpen, Compass, Users, GitBranch, Lightbulb, FileText, Sparkles } from "lucide-react";

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "intro", label: "Prólogo", icon: BookOpen },
    { id: "atlas", label: "Atlas de Pensadores (100)", icon: Users },
    { id: "councils", label: "Salas de Consejo (10)", icon: Compass },
    { id: "dependency", label: "Mapa de Dependencia", icon: GitBranch },
    { id: "lab", label: "Laboratorio de Decisiones", icon: Lightbulb },
    { id: "manifesto", label: "Constitución y Manifiesto", icon: FileText }
  ];

  return (
    <header className="sticky top-0 z-40 bg-parchment-100/95 backdrop-blur border-b border-parchment-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab("intro")}>
            <div className="w-10 h-10 rounded-full bg-terracotta-600 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl text-ink-900 tracking-wide block">
                El Consejo de las Cien Miradas
              </span>
              <span className="text-xs text-bronze-700 tracking-wider uppercase font-semibold">
                Diálogo Filosófico ante la Técnica y la IA
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "bg-terracotta-600 text-white shadow"
                      : "text-ink-800 hover:bg-parchment-200 hover:text-terracotta-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        <div className="md:hidden flex overflow-x-auto py-2 space-x-2 border-t border-parchment-200 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs whitespace-nowrap font-medium transition-all ${
                  isActive
                    ? "bg-terracotta-600 text-white shadow"
                    : "bg-parchment-200 text-ink-800"
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