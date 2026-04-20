import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-[#0b0e11] to-[#11151a]">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-6">
          Learn & Track Crypto <br />
          <span className="text-[#f0b90b]">Like a Pro Exchange</span>
        </h1>

        <p className="text-gray-400 mb-8">
          Real-time market data, trading simulation, and structured learning system.
        </p>

        <div className="flex justify-center gap-4">
          <Button>Start Learning</Button>
          <Button variant="outline">View Market</Button>
        </div>

      </div>

    </section>
  );
}