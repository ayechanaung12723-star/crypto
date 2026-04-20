"use client";

import { useEffect, useState } from "react";

export function useCoins() {
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCoins = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );

      const data = await res.json();

      if (Array.isArray(data)) {
        setCoins(data);
      } else {
        setCoins([]);
      }

      setLoading(false);
    } catch (err) {
      console.error("Coin fetch error:", err);
      setCoins([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return { coins, loading };
}