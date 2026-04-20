"use client";
import { useEffect, useState } from 'react';
// သင့်ရဲ့ folder structure အတိုင်း path ကို ပြင်ဆင်ထားပါတယ်
import { CryptoCoin } from '../types/crypto';

export default function PriceTable() {
  const [coins, setCoins] = useState<CryptoCoin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const data = await res.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchPrices();
    
    // ဈေးနှုန်းတွေကို ၁ မိနစ်တစ်ခါ update လုပ်ချင်ရင် ဒါကို သုံးနိုင်ပါတယ်
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-center py-10 text-white">Loading market data...</p>;

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
            <tr key={coin.id} className="border-b border-gray-800 hover:bg-[#2b3139] transition">
              <td className="py-4 flex items-center gap-3">
                {/* Image အရွယ်အစားကို Tailwind နဲ့ ထိန်းထားပါတယ် */}
                <div className="w-8 h-8 relative flex-shrink-0">
                   <img src={coin.image} alt={coin.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold uppercase leading-none">{coin.symbol}</span>
                  <span className="text-gray-400 text-xs">{coin.name}</span>
                </div>
              </td>
              <td className="py-4 font-semibold">
                ${coin.current_price ? coin.current_price.toLocaleString() : "0.00"}
              </td>
              <td className={`py-4 font-medium ${coin.price_change_percentage_24h && coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {/* ဤနေရာတွင် null စစ်ဆေးမှု ထည့်ထားသောကြောင့် error မတက်တော့ပါ */}
                {coin.price_change_percentage_24h ? (coin.price_change_percentage_24h > 0 ? '+' : '') + coin.price_change_percentage_24h.toFixed(2) : "0.00"}%
              </td>
              <td className="py-4 text-gray-400 text-sm">
                ${coin.market_cap ? coin.market_cap.toLocaleString() : "0"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}