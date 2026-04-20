import PriceTable from "../PriceTable";

export default function MarketSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Market Overview</h2>
        <p className="text-gray-400 text-sm">
          Track top cryptocurrencies in real time
        </p>
      </div>

      <PriceTable />
    </section>
  );
}