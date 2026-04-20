import Navbar from '../components/Navbar';
import PriceTable from '../components/PriceTable';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0e11] text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Today's Cryptocurrency Prices</h1>
          <p className="text-gray-400">The global crypto market cap is <span className="text-green-500">$2.53T</span>, a 0.24% decrease over the last day.</p>
        </div>

        <PriceTable />
      </div>
    </main>
  );
}