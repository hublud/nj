import React from "react";
import Link from "next/link";

interface BadgeProps {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "gold" | "outline" | "danger";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  href,
  variant = "primary",
  size = "sm",
  className = "",
}) => {
  const variantStyles = {
    primary: "bg-blue-950 text-amber-300 border border-amber-400/50 hover:bg-blue-900",
    secondary: "bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100",
    accent: "bg-purple-700 text-white hover:bg-purple-800",
    gold: "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black hover:from-amber-400 hover:to-yellow-400 shadow-xs",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
    danger: "bg-rose-600 text-white hover:bg-rose-700",
  }[variant];

  const sizeStyles = {
    sm: "text-[10px] sm:text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider rounded-md",
    md: "text-xs sm:text-sm px-3 py-1 font-bold rounded-lg",
  }[size];

  const baseClasses = `inline-flex items-center justify-center transition-colors duration-200 ${variantStyles} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {label}
      </Link>
    );
  }

  return <span className={baseClasses}>{label}</span>;
};
