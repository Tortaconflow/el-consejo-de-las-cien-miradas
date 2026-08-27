import React, { useState, useMemo } from "react";
import { Search, Filter, Sparkles, MapPin, Calendar, ShieldAlert, Compass, Eye, ArrowRightLeft, Check } from "lucide-react";
import thinkersData from "../../data/thinkers.json";
import ThinkerModal from "./ThinkerModal.jsx";
import ThinkerCompareModal from "./ThinkerCompareModal.jsx";

export default function Atlas() {
  const [search, setSearch] = useState("");
  const [selectedTradition, setSelectedTradition] = useState("all");
  const [selectedStance, setSelectedStance] = useState("all");
  const [selectedConcern, setSelectedConcern] = useState("all");
  const [activeThinker, setActiveThinker] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const traditions = useMemo(() => {
    const set = new Set(thinkersData.map((t) => t.tradicion));
    return ["all", ...Array.from(set)];
  }, []);

  const stances = ["all", "Trascendental / Humanista", "Crítico / Escéptico", "Instrumentalista", "Tecnófilo / Integrado", "Descolonial / Comunitario"];
  const concerns = ["all", "Bajo", "Moderado", "Alto", "Existencial"];

  const filteredThinkers = useMemo(() => {
    return thinkersData.filter((t) => {
      const matchesSearch =
        t.nombre.toLowerCase().includes(search.toLowerCase()) ||
        t.conceptos_centrales.some((c) => c.toLowerCase().includes(search.toLowerCase())) ||
        t.metafora_para_comprender_la_ia.toLowerCase().includes(search.toLowerCase()) ||
        t.region.toLowerCase().includes(search.toLowerCase());

      const matchesTradition = selectedTradition === "all" || t.tradicion === selectedTradition;
      const matchesStance = selectedStance === "all" || t.postura_tecnica === selectedStance;
      const matchesConcern = selectedConcern === "all" || t.nivel_preocupacion === selectedConcern;

      return matchesSearch && matchesTradition && matchesStance && matchesConcern;
    });
  }, [search, selectedTradition, selectedStance, selectedConcern]);

  const toggleCompare = (e, thinker) => {
    e.stopPropagation();
    if (compareList.some((x) => x.id === thinker.id)) {
      setCompareList((prev) => prev.filter((x) => x.id !== thinker.id));
    } else {
      if (compareList.length >= 2) {
        setCompareList([compareList[1], thinker]);
      } else {
        setCompareList((prev) => [...prev, thinker]);
      }
    }
  };

  return (
    <div className="space-y-8 py-6">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 dark:text-white transition-colors">Atlas de Pensadores</h2>
        <p className="text-sm sm:text-base text-ink-600 dark:text-ink-400 font-reading">
          Explora la polifonía de exactamente 100 voces ante la técnica, filtrando por tradición o comparándolas cara a cara.
        </p>
      </div>

      {/* Comparison Floating Action Bar */}
      {compareList.length > 0 && (
        <div className="sticky top-24 z-30 max-w-2xl mx-auto bg-ink-900/95 dark:bg-stone-900/95 text-white p-4 rounded-2xl shadow-2xl border border-terracotta-500/40 backdrop-blur-2xl flex items-center justify-between animate-fadeIn">
          <div className="flex items-center space-x-2 text-xs">
            <ArrowRightLeft className="w-4 h-4 text-terracotta-400" />
            <span>Confrontar: <strong>{compareList.map((t) => t.nombre).join(" vs. ")}</strong> ({compareList.length}/2)</span>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => setCompareList([])} className="text-xs text-ink-300 hover:text-white px-2 py-1">Limpiar</button>
            {compareList.length === 2 && (
              <button onClick={() => setShowCompareModal(true)} className="px-3.5 py-1.5 rounded-xl bg-terracotta-600 text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
                Abrir Comparador
              </button>
            )}
          </div>
        </div>
      )}

      {/* Search & Filter Controls */}
      <div className="apple-card p-6 sm:p-8 rounded-3xl space-y-5 max-w-6xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400 dark:text-ink-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por pensador, concepto clave, región o metáfora..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-parchment-300/80 dark:border-white/10 text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 font-reading text-sm shadow-inner transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium">
          <div>
            <label className="block text-ink-500 dark:text-ink-400 uppercase tracking-widest mb-1.5 font-bold">Tradición Filosófica</label>
            <select
              value={selectedTradition}
              onChange={(e) => setSelectedTradition(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/80 dark:bg-stone-900 border border-parchment-300/80 dark:border-white/10 text-ink-900 dark:text-white focus:outline-none focus:border-terracotta-500 transition-colors"
            >
              <option value="all">Todas las tradiciones ({thinkersData.length})</option>
              {traditions.filter((x) => x !== "all").map((trad) => (
                <option key={trad} value={trad}>{trad}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-ink-500 dark:text-ink-400 uppercase tracking-widest mb-1.5 font-bold">Postura ante la Técnica</label>
            <select
              value={selectedStance}
              onChange={(e) => setSelectedStance(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/80 dark:bg-stone-900 border border-parchment-300/80 dark:border-white/10 text-ink-900 dark:text-white focus:outline-none focus:border-terracotta-500 transition-colors"
            >
              <option value="all">Todas las posturas</option>
              {stances.filter((x) => x !== "all").map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-ink-500 dark:text-ink-400 uppercase tracking-widest mb-1.5 font-bold">Nivel de Preocupación</label>
            <select
              value={selectedConcern}
              onChange={(e) => setSelectedConcern(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/80 dark:bg-stone-900 border border-parchment-300/80 dark:border-white/10 text-ink-900 dark:text-white focus:outline-none focus:border-terracotta-500 transition-colors"
            >
              <option value="all">Todos los niveles</option>
              {concerns.filter((x) => x !== "all").map((lvl) => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-parchment-300/60 dark:border-white/10 text-xs text-ink-600 dark:text-ink-400">
          <span>Mostrando <strong>{filteredThinkers.length}</strong> de <strong>{thinkersData.length}</strong> pensadores</span>
          {(search || selectedTradition !== "all" || selectedStance !== "all" || selectedConcern !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedTradition("all");
                setSelectedStance("all");
                setSelectedConcern("all");
              }}
              className="text-terracotta-600 dark:text-terracotta-400 hover:underline font-semibold"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* Thinkers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredThinkers.map((t) => {
          const isCompared = compareList.some((x) => x.id === t.id);
          return (
            <div
              key={t.id}
              onClick={() => setActiveThinker(t)}
              className={`apple-card p-6 rounded-3xl cursor-pointer flex flex-col justify-between space-y-4 group ${
                isCompared ? "ring-2 ring-terracotta-600 bg-terracotta-500/10 dark:bg-terracotta-500/15" : ""
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold text-terracotta-700 dark:text-terracotta-400 bg-terracotta-500/10 dark:bg-terracotta-500/20 px-2.5 py-0.5 rounded-full border border-terracotta-500/20">
                      {t.tradicion}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-ink-900 dark:text-white group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors pt-1.5">
                      {t.nombre}
                    </h3>
                  </div>
                  <button
                    onClick={(e) => toggleCompare(e, t)}
                    title={isCompared ? "Quitar de comparación" : "Añadir para comparar"}
                    className={`p-2 rounded-xl border text-xs flex items-center space-x-1 transition-all apple-pill ${
                      isCompared
                        ? "bg-terracotta-600 text-white border-terracotta-700 shadow-md"
                        : "bg-white/80 dark:bg-white/10 border-parchment-300/80 dark:border-white/15 text-ink-600 dark:text-ink-300 hover:border-terracotta-500"
                    }`}
                  >
                    {isCompared ? <Check className="w-3.5 h-3.5" /> : <ArrowRightLeft className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="text-xs text-ink-500 dark:text-ink-400 space-y-1">
                  <div className="flex items-center space-x-1.5"><MapPin className="w-3.5 h-3.5 text-bronze-600 dark:text-amber-400" /><span>{t.region}</span></div>
                  <div className="flex items-center space-x-1.5"><Calendar className="w-3.5 h-3.5 text-bronze-600 dark:text-amber-400" /><span>{t.epoca}</span></div>
                </div>

                <p className="text-xs sm:text-sm font-serif italic text-ink-800 dark:text-ink-200 line-clamp-2 bg-parchment-200/50 dark:bg-white/5 p-3 rounded-2xl border border-parchment-300/60 dark:border-white/5">
                  “{t.metafora_para_comprender_la_ia}”
                </p>
              </div>

              <div className="pt-3 border-t border-parchment-300/60 dark:border-white/10 flex items-center justify-between text-xs text-ink-500 dark:text-ink-400">
                <div className="flex flex-wrap gap-1">
                  {t.conceptos_centrales.slice(0, 2).map((c, i) => (
                    <span key={i} className="px-2.5 py-0.5 bg-white/80 dark:bg-white/10 border border-parchment-300/80 dark:border-white/10 rounded-lg text-[11px] font-medium text-ink-700 dark:text-ink-300">{c}</span>
                  ))}
                </div>
                <span className="flex items-center space-x-1 text-terracotta-600 dark:text-terracotta-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Dossier</span>
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Thinker Modal */}
      {activeThinker && (
        <ThinkerModal thinker={activeThinker} onClose={() => setActiveThinker(null)} />
      )}

      {/* Compare Modal */}
      {showCompareModal && compareList.length === 2 && (
        <ThinkerCompareModal
          thinkerA={compareList[0]}
          thinkerB={compareList[1]}
          onClose={() => setShowCompareModal(false)}
        />
      )}
    </div>
  );
}