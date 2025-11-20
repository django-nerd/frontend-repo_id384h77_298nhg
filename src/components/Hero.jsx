import { useEffect, useMemo } from 'react'
import { Share2, ShieldCheck, Smartphone, Zap, Globe2, LocateFixed } from 'lucide-react'

function useDownloadCta() {
  const info = useMemo(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent || '' : ''
    const isAndroid = /Android/i.test(ua)
    const isIOS = /iPhone|iPad|iPod/i.test(ua)

    if (isAndroid) {
      return {
        label: 'Download for Android',
        href: 'https://play.google.com/store/apps/details?id=com.bitwap.app',
        color: 'bg-green-500 hover:bg-green-600',
        note: 'Free • No ads',
      }
    }
    if (isIOS) {
      return {
        label: 'Join iOS Waitlist',
        href: 'mailto:team@bitwap.org?subject=Bitwap%20iOS%20Waitlist',
        color: 'bg-blue-600 hover:bg-blue-700',
        note: 'TestFlight coming soon',
      }
    }
    return {
      label: 'Download for Android',
      href: 'https://play.google.com/store/apps/details?id=com.bitwap.app',
      color: 'bg-green-500 hover:bg-green-600',
      note: 'APK also available soon',
    }
  }, [])

  return info
}

export default function Hero() {
  const cta = useDownloadCta()

  useEffect(() => {
    document.title = 'Bitwap — Connect Without Limits'
  }, [])

  const scrollToLearn = () => {
    const el = document.getElementById('features')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <header className="max-w-7xl mx-auto px-6 pt-20 pb-10 lg:pt-28">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Offline-first • Mesh networking
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Connect Without Limits — Private Messaging That Works Everywhere
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Peer‑to‑peer messaging with mesh networking. No servers, no internet required, complete privacy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={cta.href}
                className={`inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white transition-colors ${cta.color}`}
              >
                <Smartphone className="w-5 h-5 mr-2" aria-hidden />
                {cta.label}
              </a>
              <button
                onClick={scrollToLearn}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white/90 border border-white/20 hover:bg-white/10 transition-colors"
              >
                Learn More
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-400">{cta.note}</p>

            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Share2 className="w-4 h-4 text-green-400" aria-hidden /> Mesh networking</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-purple-400" aria-hidden /> End‑to‑end encrypted</li>
              <li className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-blue-400" aria-hidden /> Hybrid connectivity</li>
              <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-400" aria-hidden /> Real‑time</li>
              <li className="flex items-center gap-2"><Globe2 className="w-4 h-4 text-emerald-400" aria-hidden /> Offline‑first</li>
              <li className="flex items-center gap-2"><LocateFixed className="w-4 h-4 text-pink-400" aria-hidden /> GPS distance</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-green-500/20 via-blue-500/20 to-purple-500/20 blur-2xl rounded-[2rem]" aria-hidden />
            <div className="relative mx-auto w-full max-w-sm rounded-[2rem] bg-slate-900 border border-white/10 shadow-2xl p-4">
              <div className="rounded-[1.5rem] bg-slate-800 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-slate-200 font-semibold">People Nearby</div>
                  <div className="text-xs text-slate-400">Auto‑discovery</div>
                </div>
                <ul className="divide-y divide-white/5">
                  {[
                    { name: 'Alex', distance: '0.2 km', online: true },
                    { name: 'Riya', distance: '1.1 km', online: true },
                    { name: 'Sam', distance: '3.6 km', online: false },
                    { name: 'Chen', distance: '5.2 km', online: true },
                    { name: 'Maya', distance: '8.9 km', online: false },
                  ].map((p) => (
                    <li key={p.name} className="py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-slate-200 font-semibold">
                          {p.name[0]}
                        </span>
                        <div>
                          <p className="text-slate-200 font-medium">{p.name}</p>
                          <p className="text-xs text-slate-400">{p.distance} away</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full border ${p.online ? 'text-green-300 border-green-500/30 bg-green-500/10' : 'text-slate-300 border-slate-500/30 bg-slate-500/10'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${p.online ? 'bg-green-400 animate-pulse' : 'bg-slate-400'}`} />
                        {p.online ? 'Online' : 'Offline'}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Smart routing: WiFi • BT • Internet</span>
                  <span>Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}
