export default function Privacy() {
  const points = [
    'Your conversations, truly private',
    'No central servers',
    'No data collection',
    'No phone number required',
    'Messages encrypted end‑to‑end',
    'Open architecture (future open‑source)'
  ]

  return (
    <section className="bg-slate-900 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Privacy First</h2>
        <p className="mt-3 text-slate-300 text-center">We designed Bitwap to keep your data off servers and in your control.</p>

        <ul className="mt-8 grid sm:grid-cols-2 gap-4">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="text-2xl">🔒</span>
              <span className="text-slate-200">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
