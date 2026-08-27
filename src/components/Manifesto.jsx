import React, { useState } from "react";
import { FileText, ShieldCheck, Download, Copy, Check, Sparkles, BookOpen } from "lucide-react";
import manifestoData from "../../data/manifesto.json";

export default function Manifesto() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = `${manifestoData.carta_de_autonomia.titulo}\n\n${manifestoData.carta_de_autonomia.preambulo}\n\n` +
      manifestoData.carta_de_autonomia.articulos.map((a) => `Artículo ${a.numero}: ${a.titulo}\n${a.texto}`).join("\n\n") +
      `\n\n${manifestoData.constitucion_minima.titulo}\n\n` +
      manifestoData.constitucion_minima.principios.map((p) => `* ${p.nombre}: ${p.descripcion}`).join("\n") +
      `\n\n${manifestoData.manifiesto_final.titulo}\n\n${manifestoData.manifiesto_final.declaracion}`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(manifestoData, null, 2)], { type: "application/json" });
    element.href = URL.createObjectURL(file);
    element.download = "manifiesto_consejo_cien_miradas.json";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-8 py-6">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 dark:text-white transition-colors">Constitución y Manifiesto</h2>
        <p className="text-sm sm:text-base text-ink-600 dark:text-ink-400 font-reading">
          Carta de Autonomía Humana y Principios Mínimos para la salvaguarda del juicio moral en la era algorítmica.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-3 max-w-4xl mx-auto">
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-5 py-3 rounded-2xl apple-card text-ink-900 dark:text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? "¡Copiado al portapapeles!" : "Copiar Manifiesto Completo"}</span>
        </button>

        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-terracotta-600/30"
        >
          <Download className="w-4 h-4" />
          <span>Descargar JSON de Soberanía</span>
        </button>
      </div>

      {/* Main Charter Paper */}
      <div className="apple-card p-8 sm:p-14 rounded-4xl max-w-4xl mx-auto space-y-12 animate-fadeIn shadow-2xl">
        {/* Section 1: Charter */}
        <section className="space-y-6">
          <div className="text-center space-y-3 border-b border-parchment-300/80 dark:border-white/10 pb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-terracotta-700 dark:text-terracotta-400">Declaración Solemne</span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 dark:text-white">
              {manifestoData.carta_de_autonomia.titulo}
            </h3>
            <p className="text-base sm:text-lg font-reading text-ink-700 dark:text-ink-300 italic max-w-2xl mx-auto leading-relaxed">
              “{manifestoData.carta_de_autonomia.preambulo}”
            </p>
          </div>

          <div className="space-y-4">
            {manifestoData.carta_de_autonomia.articulos.map((art) => (
              <div key={art.numero} className="p-6 bg-white/70 dark:bg-white/5 rounded-2xl border border-parchment-300/80 dark:border-white/10 space-y-1.5 shadow-sm">
                <span className="text-xs font-serif font-bold text-terracotta-700 dark:text-terracotta-400 uppercase tracking-wider">
                  Artículo {art.numero}: {art.titulo}
                </span>
                <p className="text-xs sm:text-sm text-ink-800 dark:text-ink-200 font-reading leading-relaxed">
                  {art.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Minimal Constitution */}
        <section className="space-y-6 pt-6 border-t border-parchment-300/80 dark:border-white/10">
          <h4 className="text-2xl font-serif font-bold text-ink-900 dark:text-white text-center">
            {manifestoData.constitucion_minima.titulo}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {manifestoData.constitucion_minima.principios.map((p, i) => (
              <div key={i} className="p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-parchment-300/80 dark:border-white/10 space-y-2 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-terracotta-600 dark:text-terracotta-400" />
                <h5 className="text-xs font-serif font-bold text-ink-900 dark:text-white">{p.nombre}</h5>
                <p className="text-[11px] text-ink-700 dark:text-ink-400 font-reading leading-relaxed">{p.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Final Manifesto Closing */}
        <section className="bg-gradient-to-br from-terracotta-500/10 to-amber-500/10 p-8 sm:p-10 rounded-3xl border border-terracotta-500/20 text-center space-y-3 shadow-inner">
          <Sparkles className="w-7 h-7 text-terracotta-600 dark:text-terracotta-400 mx-auto" />
          <h4 className="text-2xl font-serif font-bold text-ink-900 dark:text-white">{manifestoData.manifiesto_final.titulo}</h4>
          <p className="text-base sm:text-lg font-serif italic text-ink-900 dark:text-ink-100 max-w-2xl mx-auto leading-relaxed">
            “{manifestoData.manifiesto_final.declaracion}”
          </p>
        </section>
      </div>
    </div>
  );
}