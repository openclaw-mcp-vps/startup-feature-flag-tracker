export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Engineering Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Letting Feature Flags{" "}
          <span className="text-[#58a6ff]">Rot Your Codebase</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically scan your GitHub repos, detect stale feature flags, and get prioritized cleanup reports with business impact analysis — before tech debt compounds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Cleaning Flags — $25/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No credit card required to try.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">GitHub Sync</div>
            <p className="text-sm text-[#8b949e]">Connect repos in seconds. Scans run automatically on every push.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Stale Detection</div>
            <p className="text-sm text-[#8b949e]">Flags unused for 30+ days are surfaced with full usage history.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Impact Reports</div>
            <p className="text-sm text-[#8b949e]">Understand business risk before removing any flag from production.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited repositories</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automated daily scans</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Stale flag detection &amp; alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Business impact reports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Slack &amp; email notifications</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Priority support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which feature flag systems are supported?</h3>
            <p className="text-sm text-[#8b949e]">We detect flags from LaunchDarkly, Unleash, Flagsmith, custom env-var patterns, and inline boolean flags in JavaScript, TypeScript, Python, Go, and Ruby.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the business impact analysis work?</h3>
            <p className="text-sm text-[#8b949e]">We correlate flag age, code churn around the flag, and deployment frequency to estimate removal risk and effort, giving your team a prioritized cleanup queue.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my source code stored on your servers?</h3>
            <p className="text-sm text-[#8b949e]">No. We use the GitHub API to read only the metadata and flag references we need. Raw source code is never persisted beyond the scan window.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Feature Flag Tracker. All rights reserved.
      </footer>
    </main>
  );
}
