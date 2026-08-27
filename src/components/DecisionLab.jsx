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
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">Laboratorio de Decisiones y Calibración</h2>
        <p className="text-sm sm:text-base text-ink-600 font-reading">
          Simulador de delegación de tareas y confianza calibrada. Experimenta la diferencia entre respuestas directas y andamiaje socrático.
        </p>
      </div>

      {/* Ethical Disclaimer Warning */}
      <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl max-w-4xl mx-auto flex items-center space-x-3 text-xs text-amber-900 font-reading">
        <AlertOctagon className="w-5 h-5 text-amber-700 shrink-0" />
        <span>
          <strong>Aviso Ético y Evidencia:</strong> Respuestas directas sin esfuerzo reducen un 17% la retención posterior (Bastani et al.). Este laboratorio prioriza el autoexamen (Mayéutica) para cultivar confianza calibrada.
        </span>
      </div>

      {/* Mode Selector Toggle: Socratic Tutor vs Direct Machine */}
      <div className="flex justify-center items-center space-x-3 max-w-md mx-auto p-2 bg-parchment-200/80 rounded-xl border border-parchment-300">
        <button
          onClick={() => setTutorMode("socratic")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            tutorMode === "socratic"
              ? "bg-terracotta-600 text-white shadow"
              : "text-ink-700 hover:bg-parchment-300"
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Modo Tutor Socrático (Pistas y Andamiaje)</span>
        </button>

        <button
          onClick={() => setTutorMode("direct")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            tutorMode === "direct"
              ? "bg-ink-900 text-white shadow"
              : "text-ink-700 hover:bg-parchment-300"
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Modo Respuesta Directa (Riesgo Atrofia)</span>
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
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isSelected
                  ? "bg-terracotta-600 text-white shadow-md scale-105"
                  : "pergamino-card text-ink-800 hover:border-terracotta-500"
              }`}
            >
              {s.titulo}
            </button>
          );
        })}
      </div>

      {/* Scenario Stage */}
      <div className="pergamino-card p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-md max-w-4xl mx-auto space-y-6 animate-fadeIn">
        <div className="space-y-2 border-b border-parchment-300 pb-4">
          <div className="flex items-center justify-between">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
              selectedScenario.nivel_riesgo === "Existencial" ? "bg-red-500/10 text-red-700 border-red-500/30" :
              selectedScenario.nivel_riesgo === "Alto" ? "bg-amber-500/10 text-amber-700 border-amber-500/30" :
              "bg-blue-500/10 text-blue-700 border-blue-500/30"
            }`}>Riesgo de Pérdida: {selectedScenario.nivel_riesgo}</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-ink-900">{selectedScenario.titulo}</h3>
          <p className="text-sm sm:text-base text-ink-700 font-reading">{selectedScenario.descripcion}</p>
          <p className="text-xs text-terracotta-800 font-semibold">
            <strong>Capacidad Humana en Juego:</strong> {selectedScenario.capacidad_comprometida}
          </p>
        </div>

        {/* Socratic Questions */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase font-bold tracking-wider text-ink-500 flex items-center space-x-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Examen Socrático (Reflexión Personal)</span>
          </h4>

          {selectedScenario.preguntas_socraticas.map((q, i) => (
            <div key={i} className="p-4 bg-white rounded-xl border border-parchment-300 space-y-2">
              <p className="text-xs sm:text-sm font-reading font-semibold text-ink-900">{q}</p>
              <textarea
                rows={2}
                value={answers[i] || ""}
                onChange={(e) => handleAnswerChange(i, e.target.value)}
                placeholder="Escribe tu reflexión o postura..."
                className="w-full p-2.5 text-xs rounded-lg bg-parchment-50 border border-parchment-200 focus:outline-none focus:border-terracotta-500 font-reading"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-3 pt-2">
          <button
            onClick={handleReset}
            className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-parchment-200 text-ink-800 text-xs font-medium hover:bg-parchment-300 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reiniciar</span>
          </button>
          <button
            onClick={() => setEvaluated(true)}
            className="px-5 py-2 rounded-lg bg-terracotta-600 text-white text-xs font-medium hover:bg-terracotta-700 transition-all shadow"
          >
            Consultar al Consejo de Voces
          </button>
        </div>

        {/* Evaluated Philosophical Verdict */}
        {evaluated && (
          <div className="space-y-6 pt-6 border-t border-parchment-300 animate-fadeIn">
            {tutorMode === "direct" && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl space-y-1">
                <span className="text-xs font-bold text-red-800 uppercase tracking-wider block">Alerta de Modo Directo</span>
                <p className="text-xs text-red-900 font-reading">
                  Has consumido el dictamen como un resultado prefabricado sin andamiaje formativo. En tareas complejas, esto reduce la transferencia cognitiva posterior.
                </p>
              </div>
            )}

            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-terracotta-700 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dictamen y Perspectivas Filosóficas</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedScenario.voces_relevantes.map((v, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-parchment-300 space-y-1">
                    <span className="text-xs font-serif font-bold text-terracotta-700 block capitalize">{v.id.replace("-", " ")}</span>
                    <p className="text-xs text-ink-700 font-reading leading-relaxed">“{v.postura}”</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/20 space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-800 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Contramedidas Prácticas de Resguardo</span>
              </h4>
              <ul className="list-disc list-inside text-xs sm:text-sm text-ink-800 space-y-1 font-reading">
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