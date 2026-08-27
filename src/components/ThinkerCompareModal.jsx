import React from "react";
import { X, ArrowRightLeft, Sparkles, ShieldAlert, BookOpen, AlertTriangle, Compass } from "lucide-react";

export default function ThinkerCompareModal({ thinkerA, thinkerB, onClose }) {
  if (!thinkerA || !thinkerB) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      <div className="apple-card w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-y-auto border border-white/20 dark:border-white/10 relative shadow-2xl" role="dialog">
        {/* Header */}
        <div className="sticky top-0 bg-parchment-100/90 dark:bg-ink-950/90 backdrop-blur-2xl border-b border-parchment-300/80 dark:border-white/10 p-6 sm:p-8 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-terracotta-500/10 dark:bg-terracotta-500/20 flex items-center justify-center text-terracotta-600 dark:text-terracotta-400">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink-900 dark:text-white">Ágora de Confrontación Dialéctica</h3>
              <span className="text-xs text-ink-500 dark:text-ink-400">Comparación conceptual lado a lado</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white transition-all"><X className="w-6 h-6" /></button>
        </div>

        {/* Compare Grid */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Thinker A */}
            <div className="p-6 sm:p-8 bg-white/70 dark:bg-white/5 rounded-3xl border border-parchment-300/80 dark:border-white/10 shadow-sm space-y-5">
              <div className="space-y-1.5 border-b border-parchment-200 dark:border-white/10 pb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-terracotta-500/10 dark:bg-terracotta-500/20 text-terracotta-700 dark:text-terracotta-400 border border-terracotta-500/20">{thinkerA.tradicion}</span>
                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 dark:text-white pt-2">{thinkerA.nombre}</h4>
                <span className="text-xs text-ink-500 dark:text-ink-400 block">{thinkerA.region} · {thinkerA.epoca}</span>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs uppercase font-bold tracking-widest text-terracotta-700 dark:text-terracotta-400">Metáfora para comprender la IA</span>
                <p className="text-sm sm:text-base font-serif italic text-ink-800 dark:text-ink-200 bg-parchment-200/50 dark:bg-white/5 p-4 rounded-2xl border border-parchment-300/60 dark:border-white/5">“{thinkerA.metafora_para_comprender_la_ia}”</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-ink-500 dark:text-ink-400">Postura & Preocupación</span>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-3 py-1 bg-parchment-300/60 dark:bg-white/10 text-ink-800 dark:text-ink-200 rounded-xl">{thinkerA.postura_tecnica}</span>
                  <span className="px-3 py-1 bg-red-500/10 dark:bg-red-500/20 text-red-700 dark:text-red-400 rounded-xl border border-red-500/20">Preocupación: {thinkerA.nivel_preocupacion}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs uppercase font-bold tracking-widest text-terracotta-700 dark:text-terracotta-400">Preocupación Crítica</span>
                <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">{thinkerA.preocupacion}</p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-parchment-200 dark:border-white/10">
                <span className="text-xs uppercase font-bold tracking-widest text-ink-500 dark:text-ink-400">Fuentes Canónicas</span>
                <ul className="text-xs text-ink-600 dark:text-ink-400 list-disc list-inside space-y-0.5">{thinkerA.fuentes.map((f, i) => <li key={i}>{f}</li>)}</ul>
              </div>
            </div>

            {/* Thinker B */}
            <div className="p-6 sm:p-8 bg-white/70 dark:bg-white/5 rounded-3xl border border-parchment-300/80 dark:border-white/10 shadow-sm space-y-5">
              <div className="space-y-1.5 border-b border-parchment-200 dark:border-white/10 pb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bronze-500/10 dark:bg-amber-500/20 text-bronze-700 dark:text-amber-400 border border-bronze-500/20">{thinkerB.tradicion}</span>
                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 dark:text-white pt-2">{thinkerB.nombre}</h4>
                <span className="text-xs text-ink-500 dark:text-ink-400 block">{thinkerB.region} · {thinkerB.epoca}</span>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs uppercase font-bold tracking-widest text-bronze-700 dark:text-amber-400">Metáfora para comprender la IA</span>
                <p className="text-sm sm:text-base font-serif italic text-ink-800 dark:text-ink-200 bg-parchment-200/50 dark:bg-white/5 p-4 rounded-2xl border border-parchment-300/60 dark:border-white/5">“{thinkerB.metafora_para_comprender_la_ia}”</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-ink-500 dark:text-ink-400">Postura & Preocupación</span>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-3 py-1 bg-parchment-300/60 dark:bg-white/10 text-ink-800 dark:text-ink-200 rounded-xl">{thinkerB.postura_tecnica}</span>
                  <span className="px-3 py-1 bg-red-500/10 dark:bg-red-500/20 text-red-700 dark:text-red-400 rounded-xl border border-red-500/20">Preocupación: {thinkerB.nivel_preocupacion}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs uppercase font-bold tracking-widest text-bronze-700 dark:text-amber-400">Preocupación Crítica</span>
                <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-reading leading-relaxed">{thinkerB.preocupacion}</p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-parchment-200 dark:border-white/10">
                <span className="text-xs uppercase font-bold tracking-widest text-ink-500 dark:text-ink-400">Fuentes Canónicas</span>
                <ul className="text-xs text-ink-600 dark:text-ink-400 list-disc list-inside space-y-0.5">{thinkerB.fuentes.map((f, i) => <li key={i}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-parchment-200/60 dark:bg-white/5 border-t border-parchment-300/80 dark:border-white/10 px-6 py-4 flex justify-end">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow">Cerrar Confrontación</button>
        </div>
      </div>
    </div>
  );
}