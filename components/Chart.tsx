"use client";

import { useEffect } from "react";

const symbolMap: Record<string, string> = {
  bitcoin: "BTCUSDT",
  ethereum: "ETHUSDT",
  solana: "SOLUSDT",
  ripple: "XRPUSDT",
};

export default function Chart({ symbol }: { symbol: string }) {
  useEffect(() => {
    const container = document.getElementById("tv_chart");

    if (!container) return;

    container.innerHTML = "";

    const loadChart = () => {
      // @ts-ignore
      if (!window.TradingView) return;

      // @ts-ignore
      new window.TradingView.widget({
        container_id: "tv_chart",
        symbol: `BINANCE:${symbolMap[symbol] || "BTCUSDT"}`,
        interval: "60",
        theme: "dark",
        style: "1",
        autosize: true,
      });
    };

    // script check (prevent duplicate load)
    if (!window.TradingView) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;

      script.onload = () => {
        setTimeout(loadChart, 500);
      };

      document.head.appendChild(script);
    } else {
      loadChart();
    }
  }, [symbol]);

  return (
    <div
      id="tv_chart"
      style={{ height: "450px", width: "100%" }}
      className="rounded-xl overflow-hidden bg-black"
    />
  );
}