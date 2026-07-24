export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white flex flex-col font-sans">
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-700/30 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-700/30 blur-[120px] pointer-events-none" />

        <div className="z-10 flex flex-col items-center text-center max-w-4xl space-y-8 mt-12 md:mt-0">
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide text-purple-300 mb-4 inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Deployed effortlessly on Hostinger
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 pb-2">
            Next.js & Hostinger
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
            Experience the blazing fast performance of Next.js combined with the robust, seamless hosting of Hostinger.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://www.hostinger.com/tutorials/how-to-deploy-nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Deploy Your App
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Read the Docs
            </a>
          </div>
        </div>

        {/* Feature grid */}
        <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full">
          {[
            { title: "Lightning Fast", desc: "Edge caching and global CDN delivery right out of the box." },
            { title: "Developer First", desc: "Built with TypeScript, Tailwind, and cutting edge React features." },
            { title: "Scale to Infinity", desc: "From side projects to enterprise apps, Hostinger scales with you." }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="w-full py-6 text-center text-sm text-zinc-500 border-t border-white/10 relative z-10">
        Created for demonstration purposes.
      </footer>
    </div>
  );
}
