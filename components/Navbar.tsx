export default function Navbar() {
  return (
    <nav className="bg-[#181a20] px-6 py-4 flex justify-between items-center border-b border-gray-800">
      <div className="flex items-center gap-8">
        <h2 className="text-2xl font-black text-[#f0b90b]">KAC EXCHANGE</h2>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition">Markets</a>
          <a href="#" className="hover:text-white transition">Trade</a>
          <a href="#" className="hover:text-white transition">Futures</a>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-2 text-sm">Log In</button>
        <button className="bg-[#f0b90b] text-black px-4 py-2 rounded-md font-bold text-sm hover:bg-[#e2ac0a]">Register</button>
      </div>
    </nav>
  );
}