export default function FAQ() {
  const faqs = [
    { q: 'Does it work without internet?', a: 'Yes. Bitwap forms a mesh using WiFi Direct and Bluetooth so you can message offline.' },
    { q: 'How far can messages travel?', a: 'Unlimited via multi‑hop relays across devices participating in the mesh.' },
    { q: 'Is it really private?', a: 'Yes. Messages are end‑to‑end encrypted with RSA‑2048 + AES‑256. No servers involved.' },
    { q: 'How many devices can connect?', a: 'Unlimited. The mesh topology scales with the number of participants.' },
    { q: 'Does it drain battery?', a: 'Bitwap uses energy‑aware discovery and background services optimized for efficiency.' },
  ]

  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f) => (
            <details key={f.q} className="group open:bg-white/5">
              <summary className="cursor-pointer list-none px-6 py-4 text-white font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-slate-300 group-open:rotate-45 transition-transform">＋</span>
              </summary>
              <div className="px-6 pb-4 text-slate-300">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
