export default function Technology() {
  const items = [
    { title: 'WiFi Direct', desc: 'High‑speed local connections for rapid file and message transfer.' },
    { title: 'Bluetooth', desc: 'Energy‑efficient pairing and discovery when WiFi is unavailable.' },
    { title: 'BFS Routing', desc: 'Breadth‑First Search to find optimal multi‑hop paths across the mesh.' },
    { title: 'RSA‑2048 + AES‑256', desc: 'Modern cryptography to secure content end‑to‑end.' },
    { title: 'Store‑and‑Forward', desc: 'Epidemic routing keeps messages moving even when peers go offline.' },
    { title: 'Background Service', desc: 'Automatic connectivity while the app is in the background.' },
  ]

  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Under the Hood</h2>
        <p className="mt-3 text-slate-400 text-center max-w-2xl mx-auto">A modern, resilient stack designed for privacy and reliability.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
