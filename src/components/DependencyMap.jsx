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
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">Mapa de Dependencia y Evidencia Empírica</h2>
        <p className="text-sm sm:text-base text-ink-600 font-reading">
          Visualización del tránsito sociotécnico: de la asistencia útil a la pérdida de capacidad o subordinación institucional.
        </p>
      </div>

      {/* 2-Axis Conceptual Distinction: Capacidad vs Subordinacion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
          <div className="flex items-center space-x-2 text-amber-900 font-serif font-bold text-sm">
            <Brain className="w-4 h-4 text-amber-700" />
            <span>Eje de Competencia: Dependencia de Capacidad</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-700 font-reading leading-relaxed">
            Ocurre cuando la persona pierde la habilidad intrínseca para resolver una tarea sin asistencia (atrofia noética por falta de práctica autónoma). Se remedia mediante <strong>reentrenamiento, pruebas sin IA y andamiaje gradual</strong>.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 space-y-2">
          <div className="flex items-center space-x-2 text-red-900 font-serif font-bold text-sm">
            <Layers className="w-4 h-4 text-red-700" />
            <span>Eje de Poder: Dependencia Infraestructural y Subordinación</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-700 font-reading leading-relaxed">
            Ocurre cuando una persona o institución retiene la capacidad técnica, pero el encierro contractual o la falta de alternativas viables impone el uso del sistema. Se remedia mediante <strong>portabilidad, derechos de apelación, código abierto y soberanía de datos</strong>.
          </p>
        </div>
      </div>

      {/* The 6 Phases Escalation Bar */}
      <div className="pergamino-card p-6 rounded-2xl shadow-sm border border-parchment-300 max-w-6xl mx-auto space-y-4">
        <h3 className="text-xs uppercase font-bold tracking-wider text-terracotta-700">
          Escalera de Degradación de la Autonomía (6 Fases)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
          {matrixData.fases.map((f, i) => (
            <div
              key={f.nivel}
              className={`p-4 rounded-xl border flex flex-col justify-between space-y-2 ${
                i === 0 ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-900" :
                i === 1 ? "bg-blue-500/10 border-blue-500/30 text-blue-900" :
                i === 2 ? "bg-amber-500/10 border-amber-500/30 text-amber-900" :
                i === 3 ? "bg-orange-500/10 border-orange-500/30 text-orange-900" :
                i === 4 ? "bg-rose-500/10 border-rose-500/30 text-rose-900" :
                "bg-red-500/10 border-red-500/30 text-red-900"
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
          <BookOpen className="w-5 h-5 text-terracotta-600" />
          <h3 className="text-xl font-serif font-bold text-ink-900">Evidencia Empírica de Referencia (Metanálisis y Ensayos)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matrixData.evidencia_empirica && matrixData.evidencia_empirica.map((ev, i) => (
            <div key={i} className="p-5 bg-white rounded-xl border border-parchment-300 shadow-sm space-y-2">
              <span className="text-xs font-serif font-bold text-terracotta-700 block uppercase tracking-wider">{ev.estudio}</span>
              <p className="text-xs sm:text-sm text-ink-800 font-reading font-medium">{ev.hallazgo}</p>
              <p className="text-xs text-ink-600 italic bg-parchment-100 p-2 rounded border border-parchment-200">
                <strong>Implicación:</strong> {ev.implicacion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7 Dimensions Explorer */}
      <div className="max-w-6xl mx-auto space-y-6 pt-4 border-t border-parchment-300">
        <h3 className="text-xl font-serif font-bold text-ink-900 text-center">
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
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-terracotta-600 text-white shadow-md scale-105"
                    : "pergamino-card text-ink-800 hover:border-terracotta-500"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{d.nombre}</span>
              </button>
            );
          })}
        </div>

        {/* Dimension Dossier */}
        <div className="pergamino-card p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-md max-w-4xl mx-auto space-y-6 animate-fadeIn">
          <div className="flex items-center space-x-3 border-b border-parchment-300 pb-4">
            {(() => {
              const Icon = getIcon(selectedDim.id);
              return (
                <div className="w-12 h-12 rounded-xl bg-terracotta-600 flex items-center justify-center text-white shadow">
                  <Icon className="w-6 h-6" />
                </div>
              );
            })()}
            <div>
              <h4 className="text-2xl font-serif font-bold text-ink-900">{selectedDim.nombre}</h4>
              <p className="text-xs text-ink-600 font-reading">{selectedDim.descripcion}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-parchment-300 space-y-1.5">
              <span className="text-xs uppercase font-bold tracking-wider text-ink-500 block">Manifestación Cotidiana</span>
              <p className="text-xs sm:text-sm text-ink-700 font-reading leading-relaxed">{selectedDim.ejemplo}</p>
            </div>

            <div className="p-4 bg-red-500/5 rounded-xl border border-red-500/20 space-y-1.5">
              <span className="text-xs uppercase font-bold tracking-wider text-red-700 flex items-center space-x-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Riesgo Crítico</span>
              </span>
              <p className="text-xs sm:text-sm text-ink-800 font-reading font-semibold leading-relaxed">{selectedDim.riesgo_critico}</p>
            </div>
          </div>

          <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/20 space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-800 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Contramedida de Preservación de Autonomía</span>
            </span>
            <p className="text-xs sm:text-sm text-ink-800 font-reading leading-relaxed">
              {selectedDim.contramedida}
            </p>
          </div>
        </div>
      </div>

      {/* Cadena de Responsabilidad Noética */}
      <div className="max-w-6xl mx-auto space-y-4 pt-4 border-t border-parchment-300">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="w-5 h-5 text-terracotta-600" />
          <h3 className="text-xl font-serif font-bold text-ink-900">Cadena Formal de Responsabilidad Noética</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
          {matrixData.cadena_responsabilidad && matrixData.cadena_responsabilidad.map((c, i) => (
            <div key={i} className="p-4 bg-white rounded-xl border border-parchment-300 shadow-sm space-y-1">
              <span className="text-xs font-serif font-bold text-terracotta-700 block">{c.paso}</span>
              <p className="text-[11px] text-ink-600 font-reading leading-tight">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}