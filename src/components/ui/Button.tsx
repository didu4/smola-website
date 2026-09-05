import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "green" | "destructive";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button = ({
  children,
  variant = "accent",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary hover:bg-[#3D3485] text-primary-foreground",
    secondary: "bg-secondary hover:bg-[#1E2268] text-secondary-foreground",
    accent: "bg-accent hover:bg-[#D94A1A] text-accent-foreground",
    green: "bg-green hover:bg-[#A0B835] text-green-foreground",
    destructive:
      "bg-destructive hover:bg-[#D03A0E] text-destructive-foreground",
  };

  return (
    <button
      type={type}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
