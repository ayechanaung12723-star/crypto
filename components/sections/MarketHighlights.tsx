"use client";

import { useCoins } from "@/features/market/hooks/useCoins";

export default function MarketHighlights() {
  const { coins } = useCoins();

  const topCoins = coins.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      
      <h2 className="text-2xl font-bold mb-6">
        🔥 Top Market Movers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topCoins.map((coin) => (
          <div
            key={coin.id}
            className="bg-[#1e2329] p-6 rounded-xl hover:bg-[#2b3139] transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={coin.image} className="w-8 h-8" />
              <div>
                <p className="font-bold uppercase">{coin.symbol}</p>
                <p className="text-gray-400 text-xs">{coin.name}</p>
              </div>
            </div>

            <p className="text-2xl font-bold">
              ${coin.current_price?.toLocaleString()}
            </p>

            <p
              className={`mt-2 ${
                coin.price_change_percentage_24h > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}