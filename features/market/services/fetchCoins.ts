export async function fetchCoins() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch");

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}