import React from "react";
import { X, ArrowRightLeft, Sparkles, ShieldAlert, BookOpen, AlertTriangle, Compass } from "lucide-react";

export default function ThinkerCompareModal({ thinkerA, thinkerB, onClose }) {
  if (!thinkerA || !thinkerB) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="pergamino-card w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto border border-parchment-300 relative" role="dialog">
        {/* Header */}
        <div className="sticky top-0 bg-parchment-100/95 backdrop-blur border-b border-parchment-300 p-6 flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <ArrowRightLeft className="w-5 h-5 text-terracotta-600" />
            <h3 className="text-xl font-serif font-bold text-ink-900">Ágora de Confrontación Dialéctica</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-parchment-200 text-ink-600 hover:text-ink-900 transition-all"><X className="w-6 h-6" /></button>
        </div>

        {/* Compare Grid */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Thinker A */}
            <div className="p-6 bg-white rounded-2xl border border-parchment-300 shadow-sm space-y-4">
              <div className="space-y-1 border-b border-parchment-200 pb-3">
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-terracotta-500/10 text-terracotta-700">{thinkerA.tradicion}</span>
                <h4 className="text-2xl font-serif font-bold text-ink-900 pt-1">{thinkerA.nombre}</h4>
                <span className="text-xs text-ink-500 block">{thinkerA.region} · {thinkerA.epoca}</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-terracotta-700">Metáfora para comprender la IA</span>
                <p className="text-sm font-serif italic text-ink-800 bg-parchment-100 p-3 rounded-lg border border-parchment-200">“{thinkerA.metafora_para_comprender_la_ia}”</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-ink-500">Postura & Preocupación</span>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-2 py-0.5 bg-parchment-200 rounded">{thinkerA.postura_tecnica}</span>
                  <span className="px-2 py-0.5 bg-red-500/10 text-red-700 rounded border border-red-500/20">Preocupación: {thinkerA.nivel_preocupacion}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-terracotta-700">Preocupación Crítica</span>
                <p className="text-xs text-ink-700 font-reading leading-relaxed">{thinkerA.preocupacion}</p>
              </div>

              <div className="space-y-1 pt-2 border-t border-parchment-200">
                <span className="text-xs uppercase font-bold tracking-wider text-ink-500">Fuentes Canónicas</span>
                <ul className="text-xs text-ink-600 list-disc list-inside">{thinkerA.fuentes.map((f, i) => <li key={i}>{f}</li>)}</ul>
              </div>
            </div>

            {/* Thinker B */}
            <div className="p-6 bg-white rounded-2xl border border-parchment-300 shadow-sm space-y-4">
              <div className="space-y-1 border-b border-parchment-200 pb-3">
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-bronze-500/10 text-bronze-700">{thinkerB.tradicion}</span>
                <h4 className="text-2xl font-serif font-bold text-ink-900 pt-1">{thinkerB.nombre}</h4>
                <span className="text-xs text-ink-500 block">{thinkerB.region} · {thinkerB.epoca}</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-bronze-700">Metáfora para comprender la IA</span>
                <p className="text-sm font-serif italic text-ink-800 bg-parchment-100 p-3 rounded-lg border border-parchment-200">“{thinkerB.metafora_para_comprender_la_ia}”</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-ink-500">Postura & Preocupación</span>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-2 py-0.5 bg-parchment-200 rounded">{thinkerB.postura_tecnica}</span>
                  <span className="px-2 py-0.5 bg-red-500/10 text-red-700 rounded border border-red-500/20">Preocupación: {thinkerB.nivel_preocupacion}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-bronze-700">Preocupación Crítica</span>
                <p className="text-xs text-ink-700 font-reading leading-relaxed">{thinkerB.preocupacion}</p>
              </div>

              <div className="space-y-1 pt-2 border-t border-parchment-200">
                <span className="text-xs uppercase font-bold tracking-wider text-ink-500">Fuentes Canónicas</span>
                <ul className="text-xs text-ink-600 list-disc list-inside">{thinkerB.fuentes.map((f, i) => <li key={i}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-parchment-200/60 border-t border-parchment-300 px-6 py-4 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 rounded-lg bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-all">Cerrar Confrontación</button>
        </div>
      </div>
    </div>
  );
}