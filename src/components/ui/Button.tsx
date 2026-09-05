import "../../styles/components/button.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "accent" | "primary" | "green" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  rounded?: boolean;
}

export const Button = ({
  children,
  variant = "accent",
  className = "",
  onClick,
  type = "button",
  rounded = false,
}: ButtonProps) => {
  const classes = ["button", variant, rounded ? "rounded-30" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
