import React from "react";
import { Compass, Users, GitBranch, Lightbulb, FileText, ArrowRight, ShieldCheck, Sparkles, Layers } from "lucide-react";

export default function Intro({ setActiveTab }) {
  return (
    <div className="space-y-20 py-8">
      {/* Apple-grade Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-8 pt-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-terracotta-500/10 dark:bg-terracotta-500/20 text-terracotta-700 dark:text-terracotta-400 text-xs font-semibold uppercase tracking-widest border border-terracotta-500/20 backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-terracotta-600 dark:text-terracotta-400" />
          <span>Ágora Filosófica Universal ante la Inteligencia Artificial</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-ink-900 dark:text-white tracking-tight leading-none transition-colors">
          El Consejo de las <span className="bg-gradient-to-r from-terracotta-600 via-amber-600 to-terracotta-500 bg-clip-text text-transparent italic">Cien Miradas</span>
        </h1>

        <p className="text-lg sm:text-2xl text-ink-700 dark:text-ink-300 font-reading leading-relaxed max-w-3xl mx-auto font-light transition-colors">
          Cien pensadores de todas las épocas y tradiciones dialogan para examinar el mayor dilema de nuestro tiempo: la delegación cognitiva, la técnica y la preservación de la autonomía humana.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button
            onClick={() => setActiveTab("atlas")}
            className="flex items-center space-x-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white font-semibold shadow-xl shadow-terracotta-600/30 hover:scale-105 active:scale-95 transition-all"
          >
            <Users className="w-5 h-5" />
            <span>Explorar las 100 Voces</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveTab("councils")}
            className="flex items-center space-x-2 px-7 py-3.5 rounded-2xl apple-card text-ink-900 dark:text-white font-semibold hover:scale-105 active:scale-95 transition-all"
          >
            <Compass className="w-5 h-5 text-bronze-600 dark:text-amber-400" />
            <span>10 Salas de Debate</span>
          </button>
        </div>
      </section>

      {/* 3 Pillars Bento */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="apple-card p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-terracotta-500/10 dark:bg-terracotta-500/20 flex items-center justify-center text-terracotta-600 dark:text-terracotta-400 font-serif font-bold text-xl shadow-inner">
            I
          </div>
          <h3 className="text-xl font-serif font-bold text-ink-900 dark:text-white">Rigor Epistemológico</h3>
          <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed font-reading">
            Distinción transparente entre citas textuales directas, extrapolaciones hermenéuticas rigurosas y límites históricos ineludibles. Cero citas apócrifas.
          </p>
        </div>

        <div className="apple-card p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-bronze-500/10 dark:bg-amber-500/20 flex items-center justify-center text-bronze-600 dark:text-amber-400 font-serif font-bold text-xl shadow-inner">
            II
          </div>
          <h3 className="text-xl font-serif font-bold text-ink-900 dark:text-white">Polifonía Civilizatoria</h3>
          <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed font-reading">
            Convergencia simétrica de tradiciones: presocráticos, clásicos griegos, filosofías asiáticas (daoísmo, vedanta, zen), pensamiento islámico, africano y descolonial.
          </p>
        </div>

        <div className="apple-card p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-serif font-bold text-xl shadow-inner">
            III
          </div>
          <h3 className="text-xl font-serif font-bold text-ink-900 dark:text-white">Autonomía Noética</h3>
          <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed font-reading">
            Laboratorio de discernimiento socrático para evaluar qué facultades delegamos a las máquinas y cómo defender la soberanía del juicio moral.
          </p>
        </div>
      </section>

      {/* Modules Bento Navigation */}
      <section className="max-w-6xl mx-auto space-y-8 apple-card p-8 sm:p-12 rounded-4xl">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-serif font-bold text-ink-900 dark:text-white">Arquitectura de la Experiencia</h2>
          <p className="text-sm text-ink-600 dark:text-ink-400 font-reading">Seis estancias interactivas de indagación filosófica viva</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div onClick={() => setActiveTab("atlas")} className="cursor-pointer p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-parchment-300/60 dark:border-white/10 hover:border-terracotta-500 dark:hover:border-terracotta-500 transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 dark:text-white font-serif font-semibold">
              <span className="flex items-center space-x-2"><Users className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" /><span>Atlas de Pensadores</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-terracotta-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">Filtros facetados y comparador cara a cara sobre 100 fichas detalladas.</p>
          </div>

          <div onClick={() => setActiveTab("councils")} className="cursor-pointer p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-parchment-300/60 dark:border-white/10 hover:border-terracotta-500 dark:hover:border-terracotta-500 transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 dark:text-white font-serif font-semibold">
              <span className="flex items-center space-x-2"><Compass className="w-4 h-4 text-bronze-600 dark:text-amber-400" /><span>10 Salas de Consejo</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">Diez grandes debates cruzados con tesis, antítesis, objeciones y alianzas.</p>
          </div>

          <div onClick={() => setActiveTab("dependency")} className="cursor-pointer p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-parchment-300/60 dark:border-white/10 hover:border-terracotta-500 dark:hover:border-terracotta-500 transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 dark:text-white font-serif font-semibold">
              <span className="flex items-center space-x-2"><GitBranch className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" /><span>Mapa de Dependencia</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-terracotta-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">Modelo de doble eje (Capacidad vs. Poder) y evidencia empírica.</p>
          </div>

          <div onClick={() => setActiveTab("lab")} className="cursor-pointer p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-parchment-300/60 dark:border-white/10 hover:border-terracotta-500 dark:hover:border-terracotta-500 transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 dark:text-white font-serif font-semibold">
              <span className="flex items-center space-x-2"><Lightbulb className="w-4 h-4 text-amber-500" /><span>Laboratorio Socrático</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">Simulador con selector de Modo Tutor Socrático y examen de calibración.</p>
          </div>

          <div onClick={() => setActiveTab("manifesto")} className="cursor-pointer p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-parchment-300/60 dark:border-white/10 hover:border-terracotta-500 dark:hover:border-terracotta-500 transition-all space-y-2 group">
            <div className="flex items-center justify-between text-ink-900 dark:text-white font-serif font-semibold">
              <span className="flex items-center space-x-2"><FileText className="w-4 h-4 text-emerald-500" /><span>Constitución y Manifiesto</span></span>
              <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">Carta de autonomía con exportación a portapapeles y JSON de gobernanza.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/30 dark:bg-white/5 border border-parchment-300/40 dark:border-white/5 space-y-2">
            <div className="flex items-center space-x-2 text-ink-900 dark:text-white font-serif font-semibold text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Garantía de Calidad</span>
            </div>
            <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">100/100 registros verificados por CI/CD automatizado en GitHub Actions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}