import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[360px] md:min-h-[420px] lg:min-h-[480px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="backdrop-blur-sm bg-slate-900/40 rounded-2xl p-6 md:p-10 border border-white/10 pointer-events-none">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">AI E‑Book Generator</h1>
          <p className="text-slate-200 text-base md:text-lg">Create a fully designed, multi‑page e‑book with AI‑generated cover, illustrations, themed pages and a downloadable PDF — end‑to‑end with one click.</p>
        </div>
      </div>
    </section>
  );
}
