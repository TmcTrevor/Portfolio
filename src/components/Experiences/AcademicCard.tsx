import type { Academic } from '@/tools/types/Academic'

function AcademicCard({ item }: { item: Academic }) {
  const is1337 = item.school === '1337 School (42 Network)'

  return (
    <div className="flex flex-col gap-4">
      <div className="timeline-glass p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-colors relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-6xl">{item.icon}</span>
        </div>

        <div
          className={`relative z-10 ${is1337 ? 'grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center' : 'flex flex-col h-full'}`}
        >
          {/* Left / main content */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                {item.dateLabel}
              </span>

              {item.badge ? (
                <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                  {item.badge}
                </span>
              ) : null}
            </div>

            <h4 className="text-lg font-bold text-white mb-1">{item.degree}</h4>
            <p className="text-slate-400 text-sm mb-4">{item.school}</p>

            {!is1337 && item.note ? (
              <div className="mt-auto">
                <p className="text-xs text-slate-500 font-mono flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  {item.note}
                </p>
              </div>
            ) : null}
          </div>

          {/* Right: 42 badge */}
          {is1337 ? (
            <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 hover:border-primary/30 rounded-lg p-4 shrink-0 transition-all duration-300">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-2">
                42 Network
              </p>
              <img
                src="https://badge.mediaplus.ma/kettlebells/mokhames"
                alt="mokhames's 42 stats"
                className="h-40 object-contain hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* Transcript download button — 1337 only */}
      {is1337 ? (
        <a
          href="/documents/1337_transcript.pdf"
          download="mokhames_1337_transcript.pdf"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-medium text-sm hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          <span className="material-symbols-outlined text-sm">file_download</span>
          Download Transcript
        </a>
      ) : null}
    </div>
  )
}
export default AcademicCard
