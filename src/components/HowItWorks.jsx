import { Wifi, Users2, MessageSquare } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Wifi, title: 'Turn On WiFi/Bluetooth', desc: 'Bitwap automatically discovers nearby devices to form a local mesh.' },
    { icon: Users2, title: 'Select Contact', desc: 'See who is online and how far they are in kilometers.' },
    { icon: MessageSquare, title: 'Start Chatting', desc: 'Your messages route through the mesh using the fastest available path.' },
  ]

  return (
    <section className="bg-slate-900 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">How It Works</h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl mx-auto">Hybrid connectivity plus smart routing keeps you connected — even offline.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <s.icon className="w-10 h-10 text-white mb-4" aria-hidden />
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
