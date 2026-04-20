"use client";

import { useEffect } from "react";

const symbolMap: Record<string, string> = {
  bitcoin: "BTCUSDT",
  ethereum: "ETHUSDT",
  ripple: "XRPUSDT",
};

export default function Chart({ symbol }: { symbol: string }) {
  useEffect(() => {
    const container = document.getElementById("tv_chart");

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      new window.TradingView.widget({
        container_id: "tv_chart",
        symbol: `BINANCE:${symbolMap[symbol] || "BTCUSDT"}`,
        interval: "60",
        theme: "dark",
        style: "1",
        width: "100%",
        height: 450,
      });
    };

    document.body.appendChild(script);
  }, [symbol]);

  return (
    <div
      id="tv_chart"
      className="w-full rounded-xl overflow-hidden bg-black"
    />
  );
}