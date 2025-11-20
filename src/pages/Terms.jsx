import Navbar from '../components/Navbar'

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-16">
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Terms of Service</h1>
          <p className="mt-4 text-slate-300">By using Bitwap, you agree to our terms. This is a placeholder summary — please provide your legal copy to replace it.</p>
          <ol className="mt-6 list-decimal list-inside text-slate-300 space-y-2">
            <li>Use responsibly and comply with local laws.</li>
            <li>No misuse, harassment, or illegal activity.</li>
            <li>We may update these terms; continued use means acceptance.</li>
          </ol>
        </section>
      </main>
    </div>
  )
}
