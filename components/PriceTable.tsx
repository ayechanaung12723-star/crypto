"use client";

import { useCoins } from "@/features/market/hooks/useCoins";

export default function PriceTable() {
  const { coins, loading } = useCoins();

  if (loading)
    return <p className="text-center py-10 text-white">Loading market data...</p>;

  return (
    <div className="overflow-x-auto bg-[#1e2329] p-6 rounded-xl shadow-lg">
      <table className="w-full text-left text-white">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="pb-4">Name</th>
            <th className="pb-4">Price</th>
            <th className="pb-4">24h Change</th>
            <th className="pb-4">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin.id}
              className="border-b border-gray-800 hover:bg-[#2b3139] transition"
            >
              <td className="py-4 flex items-center gap-3">
                <img src={coin.image} className="w-8 h-8" />
                <div>
                  <p className="font-bold uppercase">{coin.symbol}</p>
                  <p className="text-xs text-gray-400">{coin.name}</p>
                </div>
              </td>

              <td className="py-4 font-semibold">
                ${coin.current_price?.toLocaleString()}
              </td>

              <td
                className={`py-4 ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>

              <td className="py-4 text-gray-400 text-sm">
                ${coin.market_cap?.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}