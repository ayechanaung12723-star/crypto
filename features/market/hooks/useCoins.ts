"use client";

import { useEffect, useState } from "react";
import { fetchCoins } from "../services/fetchCoins";
import { CryptoCoin } from "@/types/crypto";

export function useCoins() {
  const [coins, setCoins] = useState<CryptoCoin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchCoins();
      setCoins(data);
      setLoading(false);
    };

    load();

    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, []);

  return { coins, loading };
}