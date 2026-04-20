"use client";
import Navbar from "@/components/Navbar";
import Chart from "@/components/Chart";

async function getCoin(id: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function CoinPage({
  params,
}: {
  params: { id: string };
}) {
  const coin = await getCoin(params.id);

  return (
    <main className="min-h-screen bg-[#0b0e11] text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <img src={coin.image.large} className="w-12 h-12" />
          <div>
            <h1 className="text-3xl font-bold">{coin.name}</h1>
            <p className="text-gray-400">
              Rank #{coin.market_cap_rank}
            </p>
          </div>
        </div>

        {/* PRICE BOX */}
        <div className="bg-[#1e2329] p-6 rounded-xl mb-6">
          <p className="text-3xl font-bold">
            ${coin.market_data.current_price.usd}
          </p>
          <p className="text-gray-400 mt-2">
            Market Cap: ${coin.market_data.market_cap.usd}
          </p>
        </div>

        {/* CHART */}
        <div className="bg-[#1e2329] p-4 rounded-xl mb-6">
          <Chart symbol={coin.id} />
        </div>

        {/* FAKE TRADE PANEL */}
        <div className="grid grid-cols-2 gap-4">

          <button className="bg-green-500 text-black py-3 rounded-lg font-bold hover:bg-green-400">
            BUY
          </button>

          <button className="bg-red-500 text-black py-3 rounded-lg font-bold hover:bg-red-400">
            SELL
          </button>

        </div>

      </div>
    </main>
  );
}