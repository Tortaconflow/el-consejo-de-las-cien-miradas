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
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">Constitución y Manifiesto</h2>
        <p className="text-sm sm:text-base text-ink-600 font-reading">
          Carta de Autonomía Humana y Principios Mínimos para la salvaguarda del juicio moral en la era algorítmica.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-3 max-w-4xl mx-auto">
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-parchment-200 text-ink-900 border border-parchment-300 text-xs font-semibold hover:bg-parchment-300 transition-all"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? "¡Copiado al portapapeles!" : "Copiar Manifiesto Completo"}</span>
        </button>

        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-terracotta-600 text-white text-xs font-semibold hover:bg-terracotta-700 transition-all shadow"
        >
          <Download className="w-4 h-4" />
          <span>Descargar JSON de Soberanía</span>
        </button>
      </div>

      {/* Main Charter Paper */}
      <div className="pergamino-card p-8 sm:p-12 rounded-3xl border border-parchment-300 shadow-xl max-w-4xl mx-auto space-y-10 animate-fadeIn">
        {/* Section 1: Charter */}
        <section className="space-y-6">
          <div className="text-center space-y-3 border-b border-parchment-300 pb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-terracotta-700">Declaración Solemne</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">
              {manifestoData.carta_de_autonomia.titulo}
            </h3>
            <p className="text-sm sm:text-base font-reading text-ink-700 italic max-w-2xl mx-auto leading-relaxed">
              “{manifestoData.carta_de_autonomia.preambulo}”
            </p>
          </div>

          <div className="space-y-4">
            {manifestoData.carta_de_autonomia.articulos.map((art) => (
              <div key={art.numero} className="p-5 bg-white rounded-xl border border-parchment-300 space-y-1 shadow-sm">
                <span className="text-xs font-serif font-bold text-terracotta-700 uppercase tracking-wider">
                  Artículo {art.numero}: {art.titulo}
                </span>
                <p className="text-xs sm:text-sm text-ink-800 font-reading leading-relaxed">
                  {art.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Minimal Constitution */}
        <section className="space-y-4 pt-6 border-t border-parchment-300">
          <h4 className="text-xl font-serif font-bold text-ink-900 text-center">
            {manifestoData.constitucion_minima.titulo}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {manifestoData.constitucion_minima.principios.map((p, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-parchment-300 space-y-1.5 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-terracotta-600" />
                <h5 className="text-xs font-serif font-bold text-ink-900">{p.nombre}</h5>
                <p className="text-[11px] text-ink-700 font-reading leading-relaxed">{p.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Final Manifesto Closing */}
        <section className="bg-terracotta-500/10 p-6 sm:p-8 rounded-2xl border border-terracotta-500/20 text-center space-y-3">
          <Sparkles className="w-6 h-6 text-terracotta-600 mx-auto" />
          <h4 className="text-xl font-serif font-bold text-ink-900">{manifestoData.manifiesto_final.titulo}</h4>
          <p className="text-sm sm:text-base font-serif italic text-ink-900 max-w-2xl mx-auto leading-relaxed">
            “{manifestoData.manifiesto_final.declaracion}”
          </p>
        </section>
      </div>
    </div>
  );
}