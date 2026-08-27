import React, { useState } from "react";
import { Sparkles, Compass, Send, BookOpen, ShieldAlert, ArrowRight, RefreshCw, Lightbulb, Users, Copy, Check } from "lucide-react";
import thinkersData from "../../data/thinkers.json";
import ThinkerModal from "./ThinkerModal.jsx";

export default function Oracle() {
  const [dilemma, setDilemma] = useState("");
  const [consulting, setConsulting] = useState(false);
  const [verdict, setVerdict] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeThinker, setActiveThinker] = useState(null);

  const sampleDilemmas = [
    "¿Debo usar IA para escribir mensajes íntimos o votos matrimoniales?",
    "¿Es ético delegar la evaluación diagnóstica de pacientes a un algoritmo clínico?",
    "¿Cómo evitar perder mi voz y estilo literario si uso modelos de lenguaje para redactar?",
    "¿Puede un sistema autónomo decidir la distribución de justicia o subsidios sociales?",
    "¿Debemos permitir que los niños aprendan matemáticas exclusivamente con tutores de IA?"
  ];

  const handleConsult = (queryText) => {
    const text = queryText || dilemma;
    if (!text.trim()) return;

    setConsulting(true);
    setVerdict(null);

    setTimeout(() => {
      const q = text.toLowerCase();
      const scored = thinkersData.map((t) => {
        let score = 0;
        const words = q.split(/\s+/);
        words.forEach((w) => {
          if (w.length > 3) {
            if (t.preocupacion.toLowerCase().includes(w)) score += 4;
            if (t.fascinacion.toLowerCase().includes(w)) score += 3;
            if (t.metafora_para_comprender_la_ia.toLowerCase().includes(w)) score += 5;
            if (t.conceptos_centrales.some((c) => c.toLowerCase().includes(w))) score += 4;
            if (t.tradicion.toLowerCase().includes(w)) score += 2;
          }
        });
        return { thinker: t, score };
      });

      scored.sort((a, b) => b.score - a.score);

      const topVoices = [];
      for (const item of scored) {
        if (!topVoices.some((v) => v.id === item.thinker.id)) {
          topVoices.push(item.thinker);
        }
        if (topVoices.length >= 3) break;
      }

      if (topVoices.length < 3) {
        const fallbackIds = ["socrates", "laozi", "heidegger"];
        fallbackIds.forEach((id) => {
          const f = thinkersData.find((t) => t.id === id);
          if (f && !topVoices.some((v) => v.id === f.id) && topVoices.length < 3) {
            topVoices.push(f);
          }
        });
      }

      setVerdict({
        query: text,
        voices: topVoices,
        synthesizedInsight:
          "El discernimiento ético no radica en prohibir la herramienta técnica, sino en jamás delegar la deliberación del fin último ni la autoría del juicio humano."
      });
      setConsulting(false);
    }, 450);
  };

  const handleCopyVerdict = () => {
    if (!verdict) return;
    const textToCopy = `🏛️ El Consejo de las Cien Miradas\n\nDilema: “${verdict.query}”\n\nSíntesis del Consejo: ${verdict.synthesizedInsight}\n\nVoces Convocadas:\n${verdict.voices.map(v => `• ${v.nombre} (${v.tradicion}): “${v.metafora_para_comprender_la_ia}”`).join("\n")}\n\nExplora más en: https://paleturquoise-ape-474432.hostingersite.com/`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-terracotta-500/10 dark:bg-terracotta-500/20 text-terracotta-700 dark:text-terracotta-400 text-xs font-semibold uppercase tracking-widest border border-terracotta-500/20 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Motor de Consulta y Deliberación Ética</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink-900 dark:text-white transition-colors">
          El Oráculo del Consejo
        </h2>
        <p className="text-sm sm:text-base text-ink-600 dark:text-ink-400 font-reading max-w-2xl mx-auto">
          Plantea un dilema cotidiano, profesional o íntimo sobre el uso de la IA. El sistema convocará a tres voces filosóficas complementarias para orientar tu juicio sin sustituirlo.
        </p>
      </div>

      {/* Input Stage */}
      <div className="apple-card p-6 sm:p-10 rounded-4xl max-w-4xl mx-auto shadow-2xl space-y-6">
        <div className="space-y-3">
          <label htmlFor="oracle-query-input" className="block text-xs uppercase font-bold tracking-widest text-ink-500 dark:text-ink-400">
            ¿Qué dilema o pregunta te inquieta?
          </label>
          <div className="relative">
            <textarea
              id="oracle-query-input"
              rows={3}
              value={dilemma}
              onChange={(e) => setDilemma(e.target.value)}
              placeholder="Ejemplo: ¿Es correcto usar IA para redactar evaluaciones de desempeño laboral o cartas personales?..."
              className="w-full p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-parchment-300/80 dark:border-white/10 text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 focus:outline-none focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 font-reading text-sm sm:text-base transition-all"
            />
          </div>
        </div>

        {/* Sample Dilemmas Chips */}
        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-wider font-bold text-ink-400 dark:text-ink-500 block">
            O selecciona un dilema canónico:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleDilemmas.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDilemma(sample);
                  handleConsult(sample);
                }}
                className="text-left text-xs px-3.5 py-2 rounded-xl bg-parchment-200/60 dark:bg-white/5 border border-parchment-300/60 dark:border-white/10 text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white hover:border-terracotta-500 dark:hover:border-terracotta-500 transition-all apple-pill leading-snug"
              >
                “{sample}”
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end pt-2">
          <button
            onClick={() => handleConsult()}
            disabled={consulting || !dilemma.trim()}
            className="flex items-center space-x-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white font-semibold shadow-xl shadow-terracotta-600/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all apple-pill"
          >
            {consulting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Convocando al Consejo...</span>
              </>
            ) : (
              <>
                <Compass className="w-4 h-4" />
                <span>Consultar las Miradas</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Verdict & Voices Result */}
      {verdict && (
        <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
          {/* Synthesized Advice Card */}
          <div className="apple-card p-8 sm:p-10 rounded-4xl space-y-4 border-terracotta-500/30 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-terracotta-700 dark:text-terracotta-400 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Síntesis de Discernimiento del Consejo</span>
              </div>
              <button
                onClick={handleCopyVerdict}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-parchment-200/80 dark:bg-white/10 text-ink-800 dark:text-ink-200 text-xs font-semibold hover:bg-parchment-300 dark:hover:bg-white/20 transition-all apple-pill"
                title="Copiar veredicto y fuentes"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copiado" : "Compartir Veredicto"}</span>
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink-900 dark:text-white leading-relaxed">
              Frente al dilema: <span className="italic text-terracotta-600 dark:text-terracotta-400">“{verdict.query}”</span>
            </h3>
            <p className="text-sm sm:text-base font-reading text-ink-800 dark:text-ink-200 leading-relaxed bg-terracotta-500/5 dark:bg-terracotta-500/10 p-5 rounded-2xl border border-terracotta-500/20">
              {verdict.synthesizedInsight}
            </p>
          </div>

          {/* 3 Convocated Voices */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-terracotta-600 dark:text-terracotta-400" />
              <h3 className="text-xl font-serif font-bold text-ink-900 dark:text-white">
                Las Tres Miradas Convocadas para este Examen
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {verdict.voices.map((thinker, idx) => (
                <div
                  key={thinker.id}
                  onClick={() => setActiveThinker(thinker)}
                  className="apple-card p-6 sm:p-7 rounded-3xl cursor-pointer flex flex-col justify-between space-y-4 hover:border-terracotta-500 dark:hover:border-terracotta-500 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-terracotta-700 dark:text-terracotta-400 bg-terracotta-500/10 dark:bg-terracotta-500/20 px-2.5 py-0.5 rounded-full border border-terracotta-500/20">
                        Voz {idx + 1} · {thinker.tradicion}
                      </span>
                      <span className="text-[11px] text-ink-400">{thinker.epoca}</span>
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-ink-900 dark:text-white group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                      {thinker.nombre}
                    </h4>
                    <p className="text-xs sm:text-sm font-serif italic text-ink-800 dark:text-ink-200 bg-parchment-200/50 dark:bg-white/5 p-3 rounded-xl border border-parchment-300/60 dark:border-white/5">
                      “{thinker.metafora_para_comprender_la_ia}”
                    </p>
                    <p className="text-xs text-ink-600 dark:text-ink-400 font-reading leading-relaxed">
                      <strong>Perspectiva crítica:</strong> {thinker.preocupacion}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-parchment-300/60 dark:border-white/10 flex items-center justify-between text-xs text-terracotta-600 dark:text-terracotta-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Ver Dossier Completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Thinker Modal */}
      {activeThinker && (
        <ThinkerModal thinker={activeThinker} onClose={() => setActiveThinker(null)} />
      )}
    </div>
  );
}