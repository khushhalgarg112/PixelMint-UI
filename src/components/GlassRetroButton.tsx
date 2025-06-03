import * as React from "react";
import clsx from "clsx";

type Variant = "glass" | "retro" | "modern" | "outline" | "neon";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    icon?: React.ReactNode;
    loading?: boolean;
    className?: string;
}

const sizeStyles: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

const variantStyles: Record<Variant, string> = {
    glass: `
    backdrop-blur-md bg-white/10 border border-white/20
    shadow-xl text-white hover:bg-white/20 transition-all duration-200
  `,
    retro: `
    bg-[#f8f4e3] text-[#2a1a1f] border-[3px] border-[#111]
    shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px]
    transition-all duration-150
  `,
    modern: `
    bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white
    border border-zinc-700 shadow-md hover:brightness-110
    transition-all duration-150
  `,
    outline: `
  border border-primary text-primary bg-transparent hover:bg-primary/10
  transition-all duration-150
`,
    neon: `
    bg-black text-cyan-400 border border-cyan-400
    shadow-[0_0_10px_cyan] hover:shadow-[0_0_15px_cyan]
    transition-all duration-200
  `,
};

export const GlassRetroButton: React.FC<ButtonProps> = ({
    children,
    variant = "glass",
    size = "md",
    loading = false,
    icon,
    className,
    ...props
}) => {
    return (
        <button
            disabled={loading}
            className={clsx(
                "rounded-xl font-semibold inline-flex items-center justify-center gap-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                sizeStyles[size],
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {loading ? (
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
                icon
            )}
            {children}
        </button>
    );
};
