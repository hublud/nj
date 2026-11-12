import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}) => {
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-amber-300 border border-amber-400/50 hover:from-blue-900 hover:to-purple-950 shadow-sm",
    secondary:
      "bg-amber-50 text-amber-900 hover:bg-amber-100 active:bg-amber-200 border border-amber-300",
    outline:
      "border-2 border-blue-950 text-blue-950 hover:bg-amber-50/80 active:bg-amber-100",
    ghost: "text-slate-700 hover:bg-slate-100 active:bg-slate-200",
    gold: "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black hover:from-amber-400 hover:to-yellow-400 border border-amber-300 shadow-sm",
  }[variant];

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-bold rounded-lg",
    md: "px-5 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl",
    lg: "px-6 py-3.5 text-sm sm:text-base font-black uppercase tracking-wider rounded-2xl",
  }[size];

  const baseClasses = `inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};
