export default function Footer() {
  return (
    <footer id="download" className="bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-slate-300">
          <div>
            <h3 className="text-white font-semibold mb-3">Download</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="https://play.google.com/store/apps/details?id=com.bitwap.app">Google Play (coming soon)</a></li>
              <li><a className="hover:text-white" href="#">APK (soon)</a></li>
              <li><a className="hover:text-white" href="mailto:team@bitwap.org?subject=Bitwap%20iOS%20Waitlist">iOS Waitlist</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Project</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="https://github.com/bitwap">GitHub</a></li>
              <li><a className="hover:text-white" href="#">Contact & Support</a></li>
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Follow</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="https://twitter.com">Twitter / X</a></li>
              <li><a className="hover:text-white" href="https://t.me">Telegram</a></li>
              <li><a className="hover:text-white" href="https://discord.gg">Discord</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">About</h3>
            <p className="text-sm">Bitwap is a decentralized, peer‑to‑peer messenger that works anywhere — no servers, complete privacy, and community‑powered connectivity.</p>
            <a href="#" className="inline-block mt-4 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold">Download Bitwap</a>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Bitwap. All rights reserved.</div>
      </div>
    </footer>
  )
}
