import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-16">
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">About Bitwap</h1>
          <p className="mt-4 text-slate-300">Bitwap is a decentralized, peer‑to‑peer messenger built for resilience and privacy. It uses a hybrid mesh of WiFi Direct, Bluetooth, and the internet to route messages efficiently — without relying on central servers.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Mission</h3>
              <p className="mt-2 text-slate-300">Empower people everywhere to communicate freely, even when networks are unreliable or monitored.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Values</h3>
              <p className="mt-2 text-slate-300">Privacy by default, open collaboration, and community‑driven networks.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
