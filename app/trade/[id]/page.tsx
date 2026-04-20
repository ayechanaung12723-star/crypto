import Navbar from "@/components/Navbar";

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

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="flex items-center gap-4 mb-6">
          <img src={coin.image.large} className="w-12 h-12" />
          <h1 className="text-3xl font-bold">{coin.name}</h1>
        </div>

        <p className="text-gray-400 mb-4">
          Rank #{coin.market_cap_rank}
        </p>

        <div className="bg-[#1e2329] p-6 rounded-xl">
          <p className="text-xl font-bold">
            ${coin.market_data.current_price.usd}
          </p>

          <p className="text-gray-400 mt-2">
            Market Cap: ${coin.market_data.market_cap.usd}
          </p>
        </div>

      </div>
    </main>
  );
}