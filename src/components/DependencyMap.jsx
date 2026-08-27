import React, { useState } from "react";
import { GitBranch, Brain, Heart, GraduationCap, TrendingDown, Scale, Palette, Globe, AlertTriangle, ShieldCheck, ArrowRight, BookOpen, Layers, ShieldAlert } from "lucide-react";
import matrixData from "../../data/dependency_matrix.json";

export default function DependencyMap() {
  const [selectedDim, setSelectedDim] = useState(matrixData.dimensiones[0]);

  const getIcon = (id) => {
    switch (id) {
      case "cognitiva": return Brain;
      case "emocional": return Heart;
      case "educativa": return GraduationCap;
      case "economica": return TrendingDown;
      case "politica": return Scale;
      case "creativa": return Palette;
      default: return Globe;
    }
  };

  return (
    <div className="space-y-12 py-6">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 dark:text-white transition-colors">Mapa de Dependencia y Evidencia Empírica</h2>
        <p className="text-sm sm:text-base text-ink-600 dark:text-ink-400 font-reading">
          Visualización del tránsito sociotécnico: de la asistencia útil a la pérdida de capacidad o subordinación institucional.
        </p>
      </div>

      {/* 2-Axis Conceptual Distinction: Capacidad vs Subordinacion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="apple-card p-6 sm:p-8 rounded-3xl bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/30 space-y-2.5">
          <div className="flex items-center space-x-2 text-amber-900 dark:text-amber-400 font-serif font-bold text-base">
            <Brain className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            <span>Eje de Competencia: Dependencia de Capacidad</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">
            Ocurre cuando la persona pierde la habilidad intrínseca para resolver una tarea sin asistencia (atrofia noética por falta de práctica autónoma). Se remedia mediante <strong>reentrenamiento, pruebas sin IA y andamiaje gradual</strong>.
          </p>
        </div>

        <div className="apple-card p-6 sm:p-8 rounded-3xl bg-red-500/10 dark:bg-red-500/15 border-red-500/30 space-y-2.5">
          <div className="flex items-center space-x-2 text-red-900 dark:text-red-400 font-serif font-bold text-base">
            <Layers className="w-5 h-5 text-red-700 dark:text-red-400" />
            <span>Eje de Poder: Dependencia Infraestructural y Subordinación</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">
            Ocurre cuando una persona o institución retiene la capacidad técnica, pero el encierro contractual o la falta de alternativas viables impone el uso del sistema. Se remedia mediante <strong>portabilidad, derechos de apelación, código abierto y soberanía de datos</strong>.
          </p>
        </div>
      </div>

      {/* The 6 Phases Escalation Bar */}
      <div className="apple-card p-6 sm:p-8 rounded-3xl space-y-4 max-w-6xl mx-auto">
        <h3 className="text-xs uppercase font-bold tracking-widest text-terracotta-700 dark:text-terracotta-400">
          Escalera de Degradación de la Autonomía (6 Fases)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
          {matrixData.fases.map((f, i) => (
            <div
              key={f.nivel}
              className={`p-4 rounded-2xl border flex flex-col justify-between space-y-2 ${
                i === 0 ? "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/30 text-emerald-900 dark:text-emerald-300" :
                i === 1 ? "bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/30 text-blue-900 dark:text-blue-300" :
                i === 2 ? "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/30 text-amber-900 dark:text-amber-300" :
                i === 3 ? "bg-orange-500/10 dark:bg-orange-500/15 border-orange-500/30 text-orange-900 dark:text-orange-300" :
                i === 4 ? "bg-rose-500/10 dark:bg-rose-500/15 border-rose-500/30 text-rose-900 dark:text-rose-300" :
                "bg-red-500/10 dark:bg-red-500/15 border-red-500/30 text-red-900 dark:text-red-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold">Fase {f.nivel}</span>
                {i < 5 && <ArrowRight className="w-3.5 h-3.5 opacity-60 hidden md:block" />}
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm">{f.nombre}</h4>
                <p className="text-[11px] opacity-90 leading-tight pt-1 font-reading">{f.definicion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empirical Evidence Ledger Section */}
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-terracotta-600 dark:text-terracotta-400" />
          <h3 className="text-xl font-serif font-bold text-ink-900 dark:text-white">Evidencia Empírica de Referencia (Metanálisis y Ensayos)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matrixData.evidencia_empirica && matrixData.evidencia_empirica.map((ev, i) => (
            <div key={i} className="apple-card p-6 rounded-3xl space-y-2.5">
              <span className="text-xs font-serif font-bold text-terracotta-700 dark:text-terracotta-400 block uppercase tracking-widest">{ev.estudio}</span>
              <p className="text-xs sm:text-sm text-ink-900 dark:text-ink-100 font-reading font-medium">{ev.hallazgo}</p>
              <p className="text-xs text-ink-600 dark:text-ink-400 italic bg-parchment-200/50 dark:bg-white/5 p-3 rounded-xl border border-parchment-300/60 dark:border-white/5">
                <strong>Implicación:</strong> {ev.implicacion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7 Dimensions Explorer */}
      <div className="max-w-6xl mx-auto space-y-6 pt-4 border-t border-parchment-300/80 dark:border-white/10">
        <h3 className="text-2xl font-serif font-bold text-ink-900 dark:text-white text-center">
          Explorador de las 7 Dimensiones de Autonomía
        </h3>

        <div className="flex flex-wrap justify-center gap-2">
          {matrixData.dimensiones.map((d) => {
            const Icon = getIcon(d.id);
            const isSelected = selectedDim.id === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDim(d)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-semibold apple-pill ${
                  isSelected
                    ? "bg-terracotta-600 text-white shadow-lg shadow-terracotta-600/30 scale-105"
                    : "apple-card text-ink-800 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{d.nombre}</span>
              </button>
            );
          })}
        </div>

        {/* Dimension Dossier */}
        <div className="apple-card p-6 sm:p-10 rounded-4xl max-w-4xl mx-auto space-y-6 animate-fadeIn">
          <div className="flex items-center space-x-4 border-b border-parchment-300/80 dark:border-white/10 pb-6">
            {(() => {
              const Icon = getIcon(selectedDim.id);
              return (
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-terracotta-500 to-terracotta-700 flex items-center justify-center text-white shadow-lg shadow-terracotta-600/30">
                  <Icon className="w-7 h-7" />
                </div>
              );
            })()}
            <div>
              <h4 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 dark:text-white">{selectedDim.nombre}</h4>
              <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-400 font-reading">{selectedDim.descripcion}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-parchment-300/80 dark:border-white/10 space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-ink-500 dark:text-ink-400 block">Manifestación Cotidiana</span>
              <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">{selectedDim.ejemplo}</p>
            </div>

            <div className="p-5 bg-red-500/10 dark:bg-red-500/15 rounded-2xl border border-red-500/20 space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-red-700 dark:text-red-400 flex items-center space-x-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>Riesgo Crítico</span>
              </span>
              <p className="text-xs sm:text-sm text-ink-900 dark:text-ink-100 font-reading font-semibold leading-relaxed">{selectedDim.riesgo_critico}</p>
            </div>
          </div>

          <div className="p-6 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-2xl border border-emerald-500/20 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 dark:text-emerald-300 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Contramedida de Preservación de Autonomía</span>
            </span>
            <p className="text-xs sm:text-sm text-ink-800 dark:text-ink-200 font-reading leading-relaxed">
              {selectedDim.contramedida}
            </p>
          </div>
        </div>
      </div>

      {/* Cadena de Responsabilidad Noética */}
      <div className="max-w-6xl mx-auto space-y-4 pt-4 border-t border-parchment-300/80 dark:border-white/10">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="w-5 h-5 text-terracotta-600 dark:text-terracotta-400" />
          <h3 className="text-xl font-serif font-bold text-ink-900 dark:text-white">Cadena Formal de Responsabilidad Noética</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
          {matrixData.cadena_responsabilidad && matrixData.cadena_responsabilidad.map((c, i) => (
            <div key={i} className="apple-card p-4 rounded-2xl space-y-1">
              <span className="text-xs font-serif font-bold text-terracotta-700 dark:text-terracotta-400 block">{c.paso}</span>
              <p className="text-[11px] text-ink-600 dark:text-ink-400 font-reading leading-tight">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}