import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import MarketHighlights from "../components/sections/MarketHighlights";
import MarketSection from "../components/sections/MarketSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0e11] text-white">
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* MARKET HIGHLIGHTS */}
      <MarketHighlights />

      {/* FULL MARKET */}
      <MarketSection />
    </main>
  );
}