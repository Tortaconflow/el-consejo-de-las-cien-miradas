import React from "react";
import { X, BookOpen, AlertTriangle, Scale, ShieldAlert, Sparkles, MapPin, Calendar, Compass } from "lucide-react";

export default function ThinkerModal({ thinker, onClose }) {
  if (!thinker) return null;

  const getConcernBadge = (level) => {
    switch (level) {
      case "Existencial": return "bg-red-500/10 dark:bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30";
      case "Alto": return "bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-500/30";
      case "Moderado": return "bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30";
      default: return "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/30";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      <div className="apple-card w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-y-auto relative border border-white/20 dark:border-white/10" role="dialog" aria-modal="true">
        {/* Modal Header */}
        <div className="sticky top-0 bg-parchment-100/90 dark:bg-ink-950/90 backdrop-blur-2xl border-b border-parchment-300/80 dark:border-white/10 p-6 sm:p-8 flex items-start justify-between z-10">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getConcernBadge(thinker.nivel_preocupacion)}`}>Preocupación: {thinker.nivel_preocupacion}</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-terracotta-500/10 dark:bg-terracotta-500/20 text-terracotta-700 dark:text-terracotta-400 border border-terracotta-500/20">{thinker.postura_tecnica}</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-parchment-300/60 dark:bg-white/10 text-ink-800 dark:text-ink-300">{thinker.tipo_de_afirmacion === "textual_directa" ? "Textual Directa" : "Extrapolación Rigurosa"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 dark:text-white pt-1">{thinker.nombre}</h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-ink-500 dark:text-ink-400 font-medium pt-1">
              <span className="flex items-center space-x-1"><Compass className="w-3.5 h-3.5 text-bronze-600 dark:text-amber-400" /><span>{thinker.tradicion}</span></span>
              <span className="flex items-center space-x-1"><MapPin className="w-3.5 h-3.5 text-bronze-600 dark:text-amber-400" /><span>{thinker.region}</span></span>
              <span className="flex items-center space-x-1"><Calendar className="w-3.5 h-3.5 text-bronze-600 dark:text-amber-400" /><span>{thinker.epoca}</span></span>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white transition-all"><X className="w-6 h-6" /></button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3 bg-terracotta-500/5 dark:bg-terracotta-500/10 p-6 rounded-2xl border border-terracotta-500/20">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-terracotta-700 dark:text-terracotta-400 flex items-center space-x-1.5"><Sparkles className="w-3.5 h-3.5" /><span>Metáfora para comprender la IA</span></span>
              <p className="text-lg sm:text-xl font-serif italic text-ink-900 dark:text-ink-100 leading-relaxed pt-1.5">“{thinker.metafora_para_comprender_la_ia}”</p>
            </div>
            <div className="pt-3 border-t border-terracotta-500/20">
              <span className="text-xs uppercase font-bold tracking-widest text-terracotta-700 dark:text-terracotta-400">Pregunta Inicial</span>
              <p className="text-sm sm:text-base font-reading text-ink-800 dark:text-ink-200 font-semibold pt-1">{thinker.pregunta_inicial}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs uppercase font-bold tracking-widest text-ink-500 dark:text-ink-400">Conceptos Centrales</h3>
            <div className="flex flex-wrap gap-2">
              {thinker.conceptos_centrales.map((c, i) => (<span key={i} className="px-3.5 py-1 bg-white/70 dark:bg-white/10 border border-parchment-300 dark:border-white/15 rounded-xl text-xs font-serif font-semibold text-ink-800 dark:text-ink-200 shadow-sm">{c}</span>))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-parchment-300/80 dark:border-white/10 space-y-2 shadow-sm">
              <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-serif font-bold text-sm"><Sparkles className="w-4 h-4" /><span>Fascinación / Potencia</span></div>
              <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">{thinker.fascinacion}</p>
            </div>
            <div className="p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-parchment-300/80 dark:border-white/10 space-y-2 shadow-sm">
              <div className="flex items-center space-x-2 text-terracotta-700 dark:text-terracotta-400 font-serif font-bold text-sm"><ShieldAlert className="w-4 h-4" /><span>Preocupación Crítica</span></div>
              <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">{thinker.preocupacion}</p>
            </div>
          </div>

          <div className="p-5 bg-amber-500/5 dark:bg-amber-500/10 rounded-2xl border border-amber-500/20 space-y-2">
            <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-400 font-serif font-bold text-xs uppercase tracking-widest"><AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" /><span>Advertencia Hermenéutica y Límite Histórico</span></div>
            <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading"><strong>Límite Histórico:</strong> {thinker.limite_historico}</p>
            <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading pt-1"><strong>Interpretación Filosófica:</strong> {thinker.interpretacion}</p>
          </div>

          <div className="space-y-2 pt-2 border-t border-parchment-300 dark:border-white/10">
            <div className="flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-ink-500 dark:text-ink-400"><BookOpen className="w-3.5 h-3.5" /><span>Fuentes Primarias y Tratados Canónicos</span></div>
            <ul className="list-disc list-inside text-xs sm:text-sm text-ink-700 dark:text-ink-400 space-y-1 font-reading">
              {thinker.fuentes.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-parchment-200/60 dark:bg-white/5 border-t border-parchment-300/80 dark:border-white/10 px-6 py-4 flex justify-end">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow">Cerrar Dossier</button>
        </div>
      </div>
    </div>
  );
}