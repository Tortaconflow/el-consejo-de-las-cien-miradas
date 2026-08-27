import React, { useState } from "react";
import { Compass, Users, MessageSquare, ShieldAlert, ArrowRight, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import councilsData from "../../data/councils.json";
import thinkersData from "../../data/thinkers.json";
import ThinkerModal from "./ThinkerModal.jsx";

export default function Councils() {
  const [selectedCouncil, setSelectedCouncil] = useState(councilsData[0]);
  const [activeThinker, setActiveThinker] = useState(null);

  const getThinkerById = (id) => thinkersData.find((t) => t.id === id);

  return (
    <div className="space-y-8 py-6">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 dark:text-white transition-colors">Salas de Consejo</h2>
        <p className="text-sm sm:text-base text-ink-600 dark:text-ink-400 font-reading">
          Diez grandes debates interactivos donde las voces se confrontan en tesis, antítesis, objeciones y síntesis de autonomía.
        </p>
      </div>

      {/* Council Rooms Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-6xl mx-auto">
        {councilsData.map((c) => {
          const isSelected = selectedCouncil.id === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedCouncil(c)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 apple-pill ${
                isSelected
                  ? "bg-terracotta-600 text-white border-terracotta-700 shadow-xl shadow-terracotta-600/30 scale-105"
                  : "apple-card text-ink-900 dark:text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-serif font-bold uppercase tracking-wider ${
                  isSelected ? "text-terracotta-200" : "text-terracotta-700 dark:text-terracotta-400"
                }`}>Sala {c.numero}</span>
                <Compass className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-bronze-600 dark:text-amber-400"}`} />
              </div>
              <h4 className="text-xs font-serif font-bold line-clamp-2 leading-tight">
                {c.titulo}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Active Council Room Stage */}
      <div className="apple-card rounded-3xl p-6 sm:p-10 max-w-6xl mx-auto shadow-2xl space-y-8 animate-fadeIn">
        {/* Room Header */}
        <div className="space-y-3 border-b border-parchment-300/80 dark:border-white/10 pb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-terracotta-500/10 dark:bg-terracotta-500/20 text-terracotta-700 dark:text-terracotta-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Sala de Debate {selectedCouncil.numero}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 dark:text-white">
            {selectedCouncil.titulo}
          </h3>
          <p className="text-base sm:text-lg font-reading text-terracotta-800 dark:text-terracotta-400 font-semibold italic">
            “{selectedCouncil.dilema_central}”
          </p>
        </div>

        {/* Dialectical Layout: Affirmation vs Critique vs Synthesis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/70 dark:bg-white/5 rounded-2xl border border-blue-200 dark:border-blue-500/20 space-y-2 shadow-sm">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700 dark:text-blue-400 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tesis / Potencial</span>
            </span>
            <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">
              {selectedCouncil.posiciones.afirmacion}
            </p>
          </div>

          <div className="p-6 bg-white/70 dark:bg-white/5 rounded-2xl border border-red-200 dark:border-red-500/20 space-y-2 shadow-sm">
            <span className="text-xs uppercase font-bold tracking-wider text-red-700 dark:text-red-400 flex items-center space-x-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Antítesis / Objeción Crítica</span>
            </span>
            <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">
              {selectedCouncil.posiciones.critica}
            </p>
          </div>

          <div className="p-6 bg-white/70 dark:bg-white/5 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 space-y-2 shadow-sm">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Síntesis de Autonomía</span>
            </span>
            <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">
              {selectedCouncil.posiciones.sintesis}
            </p>
          </div>
        </div>

        {/* Alliances and Disagreements */}
        <div className="bg-bronze-500/5 dark:bg-amber-500/10 p-6 rounded-2xl border border-bronze-500/20 dark:border-amber-500/20 space-y-2">
          <h4 className="text-xs uppercase font-bold tracking-wider text-bronze-800 dark:text-amber-400 flex items-center space-x-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Tensiones y Alianzas Conceptuales</span>
          </h4>
          <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">
            {selectedCouncil.alianzas_y_desacuerdos}
          </p>
        </div>

        {/* Voices in this chamber */}
        <div className="space-y-3 pt-4 border-t border-parchment-300/80 dark:border-white/10">
          <h4 className="text-xs uppercase font-bold tracking-wider text-ink-500 dark:text-ink-400 flex items-center space-x-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>Voces Convocadas a este Debate ({selectedCouncil.voces_participantes.length})</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {selectedCouncil.voces_participantes.map((vid) => {
              const thinker = getThinkerById(vid);
              if (!thinker) return null;
              return (
                <div
                  key={thinker.id}
                  onClick={() => setActiveThinker(thinker)}
                  className="p-4 bg-white/70 dark:bg-white/5 rounded-2xl border border-parchment-300/80 dark:border-white/10 hover:border-terracotta-500 dark:hover:border-terracotta-500 hover:shadow-lg cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <h5 className="text-sm font-serif font-bold text-ink-900 dark:text-white group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                      {thinker.nombre}
                    </h5>
                    <span className="text-[11px] text-ink-500 dark:text-ink-400 block">{thinker.tradicion}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-ink-400 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 group-hover:translate-x-1 transition-transform" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {activeThinker && (
        <ThinkerModal thinker={activeThinker} onClose={() => setActiveThinker(null)} />
      )}
    </div>
  );
}