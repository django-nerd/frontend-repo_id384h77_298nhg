import Navbar from '../components/Navbar'

export default function Download() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-16">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Download Bitwap</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">Get the app for your device. Android is available first; iOS waitlist is open.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <a href="https://play.google.com/store/apps/details?id=com.bitwap.app" className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold text-white">Android</h3>
              <p className="mt-2 text-slate-300">Google Play (coming soon) • APK soon</p>
            </a>
            <a href="mailto:team@bitwap.org?subject=Bitwap%20iOS%20Waitlist" className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold text-white">iOS</h3>
              <p className="mt-2 text-slate-300">Join the TestFlight waitlist</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
