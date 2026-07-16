import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg border border-zinc-200 border-t-2 border-t-[#0a1f3d] p-5 shadow-sm">
      {title && (
        <h3 className="text-sm font-medium text-[#0a1f3d]/70 mb-3">{title}</h3>
      )}
      {children}
    </div>
  );
}