import React from "react";
import { X, BookOpen, AlertTriangle, Scale, ShieldAlert, Sparkles, MapPin, Calendar, Compass } from "lucide-react";

export default function ThinkerModal({ thinker, onClose }) {
  if (!thinker) return null;

  const getConcernBadge = (level) => {
    switch (level) {
      case "Existencial": return "bg-red-500/10 text-red-700 border-red-500/30";
      case "Alto": return "bg-amber-500/10 text-amber-700 border-amber-500/30";
      case "Moderado": return "bg-blue-500/10 text-blue-700 border-blue-500/30";
      default: return "bg-emerald-500/10 text-emerald-700 border-emerald-500/30";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="pergamino-card w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto border border-parchment-300 relative" role="dialog" aria-modal="true">
        <div className="sticky top-0 bg-parchment-100/95 backdrop-blur border-b border-parchment-300 p-6 flex items-start justify-between z-10">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getConcernBadge(thinker.nivel_preocupacion)}`}>Preocupación: {thinker.nivel_preocupacion}</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-terracotta-500/10 text-terracotta-700 border border-terracotta-500/20">{thinker.postura_tecnica}</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-parchment-300 text-ink-800">{thinker.tipo_de_afirmacion === "textual_directa" ? "Textual Directa" : "Extrapolación Rigurosa"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 pt-1">{thinker.nombre}</h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-ink-600 font-medium pt-1">
              <span className="flex items-center space-x-1"><Compass className="w-3.5 h-3.5 text-bronze-600" /><span>{thinker.tradicion}</span></span>
              <span className="flex items-center space-x-1"><MapPin className="w-3.5 h-3.5 text-bronze-600" /><span>{thinker.region}</span></span>
              <span className="flex items-center space-x-1"><Calendar className="w-3.5 h-3.5 text-bronze-600" /><span>{thinker.epoca}</span></span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-parchment-200 text-ink-600 hover:text-ink-900 transition-all" aria-label="Cerrar ficha"><X className="w-6 h-6" /></button>
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3 bg-terracotta-500/5 p-6 rounded-xl border border-terracotta-500/20">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-terracotta-700 flex items-center space-x-1.5"><Sparkles className="w-3.5 h-3.5" /><span>Metáfora para comprender la IA</span></span>
              <p className="text-base sm:text-lg font-serif italic text-ink-900 leading-relaxed pt-1">“{thinker.metafora_para_comprender_la_ia}”</p>
            </div>
            <div className="pt-2 border-t border-terracotta-500/20">
              <span className="text-xs uppercase font-bold tracking-wider text-terracotta-700">Pregunta Inicial</span>
              <p className="text-sm font-reading text-ink-800 font-semibold pt-0.5">{thinker.pregunta_inicial}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-bold tracking-wider text-ink-500">Conceptos Centrales</h3>
            <div className="flex flex-wrap gap-2">
              {thinker.conceptos_centrales.map((c, i) => (<span key={i} className="px-3 py-1 bg-white border border-parchment-300 rounded-lg text-xs font-serif font-semibold text-ink-800 shadow-sm">{c}</span>))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-parchment-300 space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-1.5 text-emerald-700 font-serif font-bold text-sm"><Sparkles className="w-4 h-4" /><span>Fascinación / Potencia</span></div>
              <p className="text-xs text-ink-700 font-reading leading-relaxed">{thinker.fascinacion}</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-parchment-300 space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-1.5 text-terracotta-700 font-serif font-bold text-sm"><ShieldAlert className="w-4 h-4" /><span>Preocupación Crítica</span></div>
              <p className="text-xs text-ink-700 font-reading leading-relaxed">{thinker.preocupacion}</p>
            </div>
          </div>
          <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/20 space-y-1.5">
            <div className="flex items-center space-x-1.5 text-amber-800 font-serif font-bold text-xs uppercase tracking-wider"><AlertTriangle className="w-4 h-4 text-amber-600" /><span>Advertencia Hermenéutica y Límite Histórico</span></div>
            <p className="text-xs text-ink-700 font-reading"><strong>Límite Histórico:</strong> {thinker.limite_historico}</p>
            <p className="text-xs text-ink-700 font-reading"><strong>Interpretación Filosófica:</strong> {thinker.interpretacion}</p>
          </div>
          <div className="space-y-1.5 pt-2 border-t border-parchment-300">
            <div className="flex items-center space-x-1.5 text-xs uppercase font-bold tracking-wider text-ink-500"><BookOpen className="w-3.5 h-3.5" /><span>Fuentes Primarias y Tratados</span></div>
            <ul className="list-disc list-inside text-xs text-ink-700 space-y-0.5 font-reading">
              {thinker.fuentes.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
        </div>
        <div className="bg-parchment-200/60 border-t border-parchment-300 px-6 py-4 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 rounded-lg bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-all">Cerrar Dossier</button>
        </div>
      </div>
    </div>
  );
}