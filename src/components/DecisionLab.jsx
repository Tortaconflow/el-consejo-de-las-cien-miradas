import React, { useState } from "react";
import { Lightbulb, HelpCircle, ShieldAlert, Sparkles, CheckCircle2, AlertOctagon, RefreshCw, Zap, Compass } from "lucide-react";
import labData from "../../data/decision_lab.json";

export default function DecisionLab() {
  const [selectedScenario, setSelectedScenario] = useState(labData[0]);
  const [answers, setAnswers] = useState({});
  const [evaluated, setEvaluated] = useState(false);
  const [tutorMode, setTutorMode] = useState("socratic"); // "direct" or "socratic"

  const handleAnswerChange = (qIndex, val) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: val }));
  };

  const handleReset = () => {
    setAnswers({});
    setEvaluated(false);
  };

  return (
    <div className="space-y-8 py-6">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 dark:text-white transition-colors">Laboratorio de Decisiones y Calibración</h2>
        <p className="text-sm sm:text-base text-ink-600 dark:text-ink-400 font-reading">
          Simulador de delegación de tareas y confianza calibrada. Experimenta la diferencia entre respuestas directas y andamiaje socrático.
        </p>
      </div>

      {/* Ethical Disclaimer Warning */}
      <div className="apple-card bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 p-5 rounded-3xl max-w-4xl mx-auto flex items-center space-x-3 text-xs text-amber-950 dark:text-amber-200 font-reading">
        <AlertOctagon className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0" />
        <span>
          <strong>Aviso Ético y Evidencia:</strong> Respuestas directas sin esfuerzo reducen un 17% la retención posterior (Bastani et al.). Este laboratorio prioriza el autoexamen (Mayéutica) para cultivar confianza calibrada.
        </span>
      </div>

      {/* Mode Selector Toggle: Socratic Tutor vs Direct Machine */}
      <div className="flex justify-center items-center space-x-3 max-w-md mx-auto p-1.5 bg-parchment-200/80 dark:bg-white/5 rounded-2xl border border-parchment-300/80 dark:border-white/10 backdrop-blur-md">
        <button
          onClick={() => setTutorMode("socratic")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold apple-pill ${
            tutorMode === "socratic"
              ? "bg-terracotta-600 text-white shadow-md shadow-terracotta-600/30"
              : "text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white"
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Modo Tutor Socrático</span>
        </button>

        <button
          onClick={() => setTutorMode("direct")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold apple-pill ${
            tutorMode === "direct"
              ? "bg-ink-900 dark:bg-white text-white dark:text-ink-900 shadow-md"
              : "text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white"
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Modo Respuesta Directa</span>
        </button>
      </div>

      {/* Scenarios Carousel/Buttons */}
      <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
        {labData.map((s) => {
          const isSelected = selectedScenario.id === s.id;
          return (
            <button
              key={s.id}
              onClick={() => {
                setSelectedScenario(s);
                handleReset();
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-semibold apple-pill ${
                isSelected
                  ? "bg-terracotta-600 text-white shadow-lg shadow-terracotta-600/30 scale-105"
                  : "apple-card text-ink-800 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white"
              }`}
            >
              {s.titulo}
            </button>
          );
        })}
      </div>

      {/* Scenario Stage */}
      <div className="apple-card p-6 sm:p-10 rounded-4xl max-w-4xl mx-auto space-y-6 animate-fadeIn shadow-2xl">
        <div className="space-y-2 border-b border-parchment-300/80 dark:border-white/10 pb-6">
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              selectedScenario.nivel_riesgo === "Existencial" ? "bg-red-500/10 dark:bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30" :
              selectedScenario.nivel_riesgo === "Alto" ? "bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-500/30" :
              "bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30"
            }`}>Riesgo de Pérdida: {selectedScenario.nivel_riesgo}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 dark:text-white">{selectedScenario.titulo}</h3>
          <p className="text-sm sm:text-base text-ink-700 dark:text-ink-300 font-reading">{selectedScenario.descripcion}</p>
          <p className="text-xs text-terracotta-800 dark:text-terracotta-400 font-semibold">
            <strong>Capacidad Humana en Juego:</strong> {selectedScenario.capacidad_comprometida}
          </p>
        </div>

        {/* Socratic Questions */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase font-bold tracking-widest text-ink-500 dark:text-ink-400 flex items-center space-x-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Examen Socrático (Reflexión Personal)</span>
          </h4>

          {selectedScenario.preguntas_socraticas.map((q, i) => (
            <div key={i} className="p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-parchment-300/80 dark:border-white/10 space-y-2 shadow-sm">
              <p className="text-xs sm:text-sm font-reading font-semibold text-ink-900 dark:text-white">{q}</p>
              <textarea
                rows={2}
                value={answers[i] || ""}
                onChange={(e) => handleAnswerChange(i, e.target.value)}
                placeholder="Escribe tu reflexión o postura..."
                className="w-full p-3 text-xs rounded-xl bg-parchment-100/80 dark:bg-white/5 border border-parchment-300/80 dark:border-white/10 text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 focus:outline-none focus:border-terracotta-500 font-reading transition-colors"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-3 pt-2">
          <button
            onClick={handleReset}
            className="flex items-center space-x-1 px-4 py-2.5 rounded-xl bg-parchment-200/80 dark:bg-white/10 text-ink-800 dark:text-ink-300 text-xs font-semibold hover:bg-parchment-300/80 dark:hover:bg-white/20 transition-all apple-pill"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reiniciar</span>
          </button>
          <button
            onClick={() => setEvaluated(true)}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-terracotta-600/30 apple-pill"
          >
            Consultar al Consejo de Voces
          </button>
        </div>

        {/* Evaluated Philosophical Verdict */}
        {evaluated && (
          <div className="space-y-6 pt-6 border-t border-parchment-300/80 dark:border-white/10 animate-fadeIn">
            {tutorMode === "direct" && (
              <div className="p-5 bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 rounded-2xl space-y-1">
                <span className="text-xs font-bold text-red-800 dark:text-red-300 uppercase tracking-widest block">Alerta de Modo Directo</span>
                <p className="text-xs text-red-900 dark:text-red-200 font-reading">
                  Has consumido el dictamen como un resultado prefabricado sin andamiaje formativo. En tareas complejas, esto reduce la transferencia cognitiva posterior.
                </p>
              </div>
            )}

            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-terracotta-700 dark:text-terracotta-400 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dictamen y Perspectivas Filosóficas</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedScenario.voces_relevantes.map((v, i) => (
                  <div key={i} className="p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-parchment-300/80 dark:border-white/10 space-y-1.5 shadow-sm">
                    <span className="text-xs font-serif font-bold text-terracotta-700 dark:text-terracotta-400 block capitalize">{v.id.replace("-", " ")}</span>
                    <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">“{v.postura}”</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-2xl border border-emerald-500/20 space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-widest text-emerald-800 dark:text-emerald-300 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Contramedidas Prácticas de Resguardo</span>
              </h4>
              <ul className="list-disc list-inside text-xs sm:text-sm text-ink-800 dark:text-ink-200 space-y-1 font-reading">
                {selectedScenario.contramedidas.map((cm, i) => (
                  <li key={i}>{cm}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}