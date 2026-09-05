import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
    </div>
  );
};
