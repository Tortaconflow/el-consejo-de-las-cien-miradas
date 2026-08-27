import React from "react";
import { Compass, Users, GitBranch, Lightbulb, FileText, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Intro({ setActiveTab }) {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bronze-500/10 text-bronze-700 text-xs font-semibold uppercase tracking-wider border border-bronze-500/20">
          <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
          <span>Ágora Filosófica Universal ante la Inteligencia Artificial</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink-900 leading-tight">
          El Consejo de las <span className="text-terracotta-600 italic">Cien Miradas</span>
        </h1>

        <p className="text-lg sm:text-xl text-ink-700 font-reading leading-relaxed max-w-3xl mx-auto">
          Cien pensadores de todas las épocas, tradiciones y geografías son convocados en un diálogo riguroso para examinar el mayor dilema de nuestro tiempo: la delegación cognitiva, la técnica desbocada y la preservación de la autonomía humana.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button
            onClick={() => setActiveTab("atlas")}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-terracotta-600 text-white font-medium shadow-md hover:bg-terracotta-700 transition-all hover:scale-105"
          >
            <Users className="w-5 h-5" />
            <span>Explorar las 100 Voces</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveTab("councils")}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-parchment-200 text-ink-900 border border-parchment-300 font-medium hover:bg-parchment-300 transition-all"
          >
            <Compass className="w-5 h-5" />
            <span>Entrar a las 10 Salas de Debate</span>
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="pergamino-card p-6 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-terracotta-500/10 flex items-center justify-center text-terracotta-600 font-serif font-bold text-lg">
            I
          </div>
          <h3 className="text-lg font-serif font-bold text-ink-900">Rigor Epistemológico</h3>
          <p className="text-sm text-ink-700 leading-relaxed font-reading">
            Distinción transparente entre citas textuales directas, extrapolaciones hermenéuticas rigurosas y límites históricos ineludibles. Sin citas apócrifas.
          </p>
        </div>

        <div className="pergamino-card p-6 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-bronze-500/10 flex items-center justify-center text-bronze-600 font-serif font-bold text-lg">
            II
          </div>
          <h3 className="text-lg font-serif font-bold text-ink-900">Polifonía Civilizatoria</h3>
          <p className="text-sm text-ink-700 leading-relaxed font-reading">
            Convergencia simétrica de tradiciones: presocráticos, clásicos griegos, filosofías asiáticas (daoísmo, vedanta, zen), pensamiento islámico, africano, judío y crítica contemporánea.
          </p>
        </div>

        <div className="pergamino-card p-6 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-sage-600/10 flex items-center justify-center text-sage-700 font-serif font-bold text-lg">
            III
          </div>
          <h3 className="text-lg font-serif font-bold text-ink-900">Autonomía Noética</h3>
          <p className="text-sm text-ink-700 leading-relaxed font-reading">
            Laboratorio de discernimiento práctico para evaluar qué facultades delegamos a las máquinas y cómo defender la dignidad y el juicio propio.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto space-y-8 bg-parchment-50 p-8 rounded-2xl border border-parchment-300 shadow-sm">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">Arquitectura de la Experiencia</h2>
          <p className="text-sm text-ink-600 font-reading">Seis estancias interactivas de indagación filosófica viva</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div onClick={() => setActiveTab("atlas")} className="cursor-pointer p-5 rounded-xl border border-parchment-200 hover:border-terracotta-500 hover:bg-white transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 font-serif font-semibold">
              <span className="flex items-center space-x-2"><Users className="w-4 h-4 text-terracotta-600" /><span>Atlas de Pensadores</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-terracotta-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 leading-relaxed">Filtros por época, tradición, postura y nivel de preocupación sobre 100 fichas detalladas.</p>
          </div>

          <div onClick={() => setActiveTab("councils")} className="cursor-pointer p-5 rounded-xl border border-parchment-200 hover:border-terracotta-500 hover:bg-white transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 font-serif font-semibold">
              <span className="flex items-center space-x-2"><Compass className="w-4 h-4 text-bronze-600" /><span>10 Salas de Consejo</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-bronze-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 leading-relaxed">Diez grandes debates cruzados con tesis, antítesis, objeciones y alianzas conceptuales.</p>
          </div>

          <div onClick={() => setActiveTab("dependency")} className="cursor-pointer p-5 rounded-xl border border-parchment-200 hover:border-terracotta-500 hover:bg-white transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 font-serif font-semibold">
              <span className="flex items-center space-x-2"><GitBranch className="w-4 h-4 text-terracotta-600" /><span>Mapa de Dependencia</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-terracotta-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 leading-relaxed">Visualización de la escalera de degradación (6 fases) en 7 dimensiones vitales.</p>
          </div>

          <div onClick={() => setActiveTab("lab")} className="cursor-pointer p-5 rounded-xl border border-parchment-200 hover:border-terracotta-500 hover:bg-white transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 font-serif font-semibold">
              <span className="flex items-center space-x-2"><Lightbulb className="w-4 h-4 text-amber-600" /><span>Laboratorio de Decisiones</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 leading-relaxed">Simulador socrático de delegación de tareas con contramedidas y examen ético.</p>
          </div>

          <div onClick={() => setActiveTab("manifesto")} className="cursor-pointer p-5 rounded-xl border border-parchment-200 hover:border-terracotta-500 hover:bg-white transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 font-serif font-semibold">
              <span className="flex items-center space-x-2"><FileText className="w-4 h-4 text-sage-700" /><span>Constitución y Manifiesto</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-sage-700 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 leading-relaxed">Carta de autonomía y principios normativos con opción de descarga y lectura.</p>
          </div>

          <div className="p-5 rounded-xl bg-parchment-200/50 border border-parchment-300 space-y-2">
            <div className="flex items-center space-x-2 text-ink-900 font-serif font-semibold text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantía de Calidad</span>
            </div>
            <p className="text-xs text-ink-600 leading-relaxed">100/100 registros estructurados y validados por suite de pruebas automatizada.</p>
          </div>
        </div>
      </section>
    </div>
  );
}