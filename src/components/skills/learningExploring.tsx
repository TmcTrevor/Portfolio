function LearningExploring({ items }: { items: string[] }) {
  return (
    <div className="h-full">
      <h4 className="text-sm uppercase tracking-wider text-primary font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
        Currently Learning &amp; Exploring
      </h4>

      <div className="p-6 h-[calc(100%-2rem)] rounded-xl border border-dashed border-white/10 bg-white/2 relative overflow-hidden flex flex-col justify-center hover:border-primary/20 transition-colors">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-8xl">school</span>
        </div>

        <div className="flex flex-wrap gap-2 relative z-10">
          {items.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded bg-surface-lighter/50 text-slate-300 text-xs font-mono border border-white/5 hover:border-primary/40 hover:text-white transition-colors cursor-default"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-4 text-slate-500 text-xs italic">
          "Expanding my horizons to understand the full stack of modern
          computing."
        </p>
      </div>
    </div>
  )
}

export default LearningExploring
