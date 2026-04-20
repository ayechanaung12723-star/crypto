"use client";

import { useEffect } from "react";

export default function Chart({ symbol }: { symbol: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      new window.TradingView.widget({
        container_id: "tv_chart",
        symbol: `BINANCE:${symbol.toUpperCase()}USDT`,
        interval: "60",
        theme: "dark",
        style: "1",
        width: "100%",
        height: 400,
      });
    };

    document.getElementById("tv_chart")?.appendChild(script);
  }, [symbol]);

  return <div id="tv_chart" className="w-full rounded-xl overflow-hidden" />;
}