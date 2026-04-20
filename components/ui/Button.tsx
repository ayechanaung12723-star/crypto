type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary" }: Props) {
  const base = "px-6 py-3 rounded-lg font-semibold transition";

  const styles =
    variant === "primary"
      ? "bg-[#f0b90b] text-black hover:bg-[#e2ac0a]"
      : "border border-gray-600 hover:bg-[#1e2329]";

  return <button className={`${base} ${styles}`}>{children}</button>;
}