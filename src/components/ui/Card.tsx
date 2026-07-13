import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg border border-zinc-200 p-5 shadow-sm">
      {title && (
        <h3 className="text-sm font-medium text-zinc-500 mb-3">{title}</h3>
      )}
      {children}
    </div>
  );
}