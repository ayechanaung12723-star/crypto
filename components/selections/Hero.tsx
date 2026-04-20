export default function Hero() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-[#0b0e11] to-[#11151a]">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Learn Crypto Trading <br />
          <span className="text-[#f0b90b]">Like a Pro</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Real-time market data, trading simulation, and step-by-step lessons — all in one place.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-[#f0b90b] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#e2ac0a] transition">
            Start Learning
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-[#1e2329] transition">
            View Markets
          </button>
        </div>

      </div>
    </section>
  );
}