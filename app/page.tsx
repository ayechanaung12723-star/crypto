import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import PriceTable from "../components/PriceTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0e11] text-white">
      <Navbar />
      <Hero />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <PriceTable />
      </div>
    </main>
  );
}