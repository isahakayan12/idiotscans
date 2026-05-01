export default function Page() {
  const cards = [
    ["Solo Leveling", "Ch 187"],
    ["Nano Machine", "Ch 162"],
    ["Omniscient Reader", "Ch 203"],
    ["Mount Hua Sect", "Ch 95"]
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-black">
            <span>idiot</span>
            <span className="text-violet-500">scans</span>
          </h1>

          <nav className="hidden md:flex gap-5 text-zinc-300">
            <span>Home</span>
            <span>Latest</span>
            <span>Trending</span>
            <span>Bookmarks</span>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto p-6">
        <div className="rounded-3xl p-10 bg-gradient-to-r from-zinc-950 via-violet-950 to-zinc-950">
          <h2 className="text-6xl font-black">IDIOTSCANS</h2>
          <p className="text-zinc-300 mt-3">
            Premium manhwa updates platform.
          </p>

          <button className="mt-6 bg-violet-600 px-5 py-3 rounded-2xl">
            Explore
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <h3 className="text-2xl font-bold mb-4">Latest Updates</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <div key={i} className="bg-zinc-900 rounded-2xl p-5">
              <div className="h-40 bg-zinc-800 rounded-xl mb-4"></div>
              <div>{c[0]}</div>
              <div className="text-zinc-400">{c[1]}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800 p-6 text-center text-zinc-400">
        © 2026 idiotscans
      </footer>
    </main>
  );
}
