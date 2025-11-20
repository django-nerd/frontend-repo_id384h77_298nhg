export default function UseCases() {
  const cases = [
    { title: 'Remote Areas', desc: 'Stay connected without cell towers or internet.' },
    { title: 'Protests & Events', desc: 'Communicate when networks are congested or shut down.' },
    { title: 'Privacy Advocates', desc: 'Opt‑out of surveillance capitalism and reclaim your privacy.' },
    { title: 'Travel', desc: 'Connect with locals and groups without roaming charges.' },
    { title: 'Communities', desc: 'Build local mesh networks for neighborhoods and campuses.' },
  ]

  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Where Bitwap Shines</h2>
        <p className="mt-3 text-slate-400 text-center max-w-2xl mx-auto">Real‑world scenarios where decentralized messaging makes a difference.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/download" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors">Join the Mesh Network</a>
        </div>
      </div>
    </section>
  )
}
