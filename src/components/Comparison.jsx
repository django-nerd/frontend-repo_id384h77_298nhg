export default function Comparison() {
  const rows = [
    { feature: 'Requires Internet', bitwap: 'No', trad: 'Yes' },
    { feature: 'Central Servers', bitwap: 'None', trad: 'Required' },
    { feature: 'Privacy', bitwap: 'Complete', trad: 'Limited' },
    { feature: 'Range Extension', bitwap: 'Multi‑hop mesh', trad: 'No' },
    { feature: 'Cost', bitwap: 'Free forever', trad: 'Free (ads/data mining)' },
  ]

  return (
    <section className="bg-slate-900 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Why Bitwap Beats Traditional Messaging</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="text-slate-300 text-sm font-semibold">Feature</th>
                <th className="text-slate-300 text-sm font-semibold">Bitwap</th>
                <th className="text-slate-300 text-sm font-semibold">WhatsApp/Telegram</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="">
                  <td className="bg-white/5 text-slate-200 px-4 py-3 rounded-l-xl border border-white/10">{r.feature}</td>
                  <td className="bg-white/5 text-white px-4 py-3 border-t border-b border-white/10">{r.bitwap}</td>
                  <td className="bg-white/5 text-slate-300 px-4 py-3 rounded-r-xl border border-white/10">{r.trad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
