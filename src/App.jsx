import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Atlas from "./components/Atlas.jsx";
import Councils from "./components/Councils.jsx";
import DependencyMap from "./components/DependencyMap.jsx";
import DecisionLab from "./components/DecisionLab.jsx";
import Manifesto from "./components/Manifesto.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("intro");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-parchment-100 dark:bg-ink-950 flex flex-col font-sans text-ink-900 dark:text-ink-300 transition-colors duration-400 selection:bg-terracotta-500 selection:text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} isDark={isDark} setIsDark={setIsDark} />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
        {activeTab === "intro" && <Intro setActiveTab={setActiveTab} />}
        {activeTab === "atlas" && <Atlas />}
        {activeTab === "councils" && <Councils />}
        {activeTab === "dependency" && <DependencyMap />}
        {activeTab === "lab" && <DecisionLab />}
        {activeTab === "manifesto" && <Manifesto />}
      </main>

      <footer className="border-t border-parchment-300/80 dark:border-white/10 bg-parchment-200/50 dark:bg-ink-950/90 py-10 text-center text-xs text-ink-600 dark:text-ink-400 space-y-2 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-serif font-semibold text-ink-900 dark:text-ink-100 text-sm">El Consejo de las Cien Miradas &copy; 2026</p>
          <p className="font-reading pt-1">Sistema Digital de Deliberación Ética y Filosofía ante la Técnica y la Inteligencia Artificial.</p>
          <p className="text-[11px] text-ink-500 dark:text-ink-500 pt-1">Diseño con estándares Apple Design · 100 voces · 10 salas dialécticas · Cero citas apócrifas.</p>
        </div>
      </footer>
    </div>
  );
}