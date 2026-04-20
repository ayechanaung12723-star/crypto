"use client";

import { useCoins } from "@/features/market/hooks/useCoins";
import Link from "next/link";

export default function PriceTable() {
  const { coins, loading } = useCoins();

  if (loading) {
    return (
      <p className="text-center py-10 text-white">
        Loading market data...
      </p>
    );
  }

  return (
    <div className="overflow-x-auto bg-[#1e2329] p-6 rounded-xl shadow-lg">
      <table className="w-full text-left text-white">

        {/* HEADER */}
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="pb-4">Name</th>
            <th className="pb-4">Price</th>
            <th className="pb-4">24h Change</th>
            <th className="pb-4">Market Cap</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {coins
            .filter((coin) => coin?.id) // 🔥 FIX: prevent undefined crash
            .map((coin) => (
              <tr
                key={coin.id}
                className="border-b border-gray-800 hover:bg-[#2b3139] transition"
              >

                {/* NAME + IMAGE */}
                <td className="py-4 flex items-center gap-3">

                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-8 h-8"
                  />

                  <div className="flex flex-col">

                    {/* 🔥 SAFE LINK */}
                    <Link
                      href={`/trade/${encodeURIComponent(coin.id)}`}
                      className="font-bold uppercase leading-none hover:text-[#f0b90b] transition"
                    >
                      {coin.symbol || "N/A"}
                    </Link>

                    <span className="text-xs text-gray-400">
                      {coin.name || "Unknown"}
                    </span>

                  </div>
                </td>

                {/* PRICE */}
                <td className="py-4 font-semibold">
                  ${coin.current_price?.toLocaleString() || "0"}
                </td>

                {/* 24H CHANGE */}
                <td
                  className={`py-4 font-medium ${
                    (coin.price_change_percentage_24h ?? 0) >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {(coin.price_change_percentage_24h ?? 0).toFixed(2)}%
                </td>

                {/* MARKET CAP */}
                <td className="py-4 text-gray-400 text-sm">
                  ${coin.market_cap?.toLocaleString() || "0"}
                </td>

              </tr>
            ))}
        </tbody>

      </table>
    </div>
  );
}