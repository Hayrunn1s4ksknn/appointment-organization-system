interface BadgeProps {
  text: string;
  color?: "green" | "yellow" | "red" | "gray";
}

export default function Badge({ text, color = "gray" }: BadgeProps) {
  const colorStyles = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
    gray: "bg-zinc-100 text-zinc-700",
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${colorStyles[color]}`}
    >
      {text}
    </span>
  );
}