export default function Features() {
  const features = [
    { icon: '🔗', title: 'Mesh Networking', desc: 'Reach anyone through multi‑hop relays. Your message finds the optimal path across nearby devices.' },
    { icon: '📱', title: 'Hybrid Connectivity', desc: 'Seamlessly uses WiFi Direct, Bluetooth, and Internet together for the fastest route.' },
    { icon: '🌍', title: 'Offline‑First', desc: 'Send and receive messages even without internet. Works in remote areas and crowded events.' },
    { icon: '🔒', title: 'End‑to‑End Encryption', desc: 'RSA‑2048 + AES‑256 keeps your conversations private. No servers, no snooping.' },
    { icon: '⚡', title: 'Real‑Time', desc: 'Instant delivery, typing indicators, presence, and sub‑100ms performance when possible.' },
    { icon: '📍', title: 'GPS Distance', desc: 'See how far contacts are in kilometers to understand proximity across the mesh.' },
  ]

  return (
    <section id="features" className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for resilient, private communication</h2>
          <p className="mt-3 text-slate-400">Everything you need to stay connected when it matters most.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:from-white/10 transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#download" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-green-500 hover:bg-green-600 text-white transition-colors">Get Started Free</a>
        </div>
      </div>
    </section>
  )
}
