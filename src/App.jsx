import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Atlas from "./components/Atlas.jsx";
import Councils from "./components/Councils.jsx";
import DependencyMap from "./components/DependencyMap.jsx";
import DecisionLab from "./components/DecisionLab.jsx";
import Manifesto from "./components/Manifesto.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="min-h-screen bg-parchment-100 flex flex-col font-reading text-ink-900 selection:bg-terracotta-500/20 selection:text-terracotta-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {activeTab === "intro" && <Intro setActiveTab={setActiveTab} />}
        {activeTab === "atlas" && <Atlas />}
        {activeTab === "councils" && <Councils />}
        {activeTab === "dependency" && <DependencyMap />}
        {activeTab === "lab" && <DecisionLab />}
        {activeTab === "manifesto" && <Manifesto />}
      </main>

      <footer className="border-t border-parchment-300 bg-parchment-200/60 py-8 text-center text-xs text-ink-600 space-y-2">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-serif font-semibold text-ink-800">El Consejo de las Cien Miradas &copy; 2026</p>
          <p className="font-reading">Sistema de Investigación y Deliberación Filosófica ante la Técnica y la Inteligencia Artificial.</p>
          <p className="text-[11px] text-ink-500 pt-1">100 voces universales | 10 salas de consejo | 0 citas apócrifas | Ética y Soberanía Humana.</p>
        </div>
      </footer>
    </div>
  );
}