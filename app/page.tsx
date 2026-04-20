import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import MarketSection from "../components/sections/MarketSection";
import PriceTable from "../components/PriceTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0e11] text-white">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Market Table Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Live Cryptocurrency Prices
          </h2>
          <p className="text-gray-400 text-sm">
            Top 10 coins by market cap (updated every 60 seconds)
          </p>
        </div>

        <PriceTable />
      </section>

    </main>
  );
}