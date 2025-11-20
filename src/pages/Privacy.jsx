import Navbar from '../components/Navbar'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-16">
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Privacy Policy</h1>
          <p className="mt-4 text-slate-300">We minimize data collection and avoid central servers whenever possible. The app is designed so your messages are encrypted end‑to‑end and relay peer‑to‑peer across a mesh.</p>
          <ul className="mt-6 list-disc list-inside text-slate-300 space-y-2">
            <li>No phone number required</li>
            <li>No analytics or tracking by default</li>
            <li>End‑to‑end encryption for messages</li>
            <li>Local discovery via WiFi Direct and Bluetooth</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
