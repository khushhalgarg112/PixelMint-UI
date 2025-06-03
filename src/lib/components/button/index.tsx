import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "default" | "bordered" | "ghost" | "retro" | "modern";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: React.ReactNode;
    loading?: boolean;
    className?: string;
}

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

const variantStyles: Record<ButtonVariant, string> = {
    default: "bg-background text-foreground hover:bg-muted/20",
    bordered: "border border-border p-2 shadow-sm hover:bg-muted/20",
    ghost: "bg-transparent hover:bg-muted/10",
    retro: "bg-[#f8f4e3] text-[#2a1a1f] border-[3px] border-[#111] shadow-[4px_4px_0px_#111] hover:bg-[#efe9d4]",
    modern: "bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-md hover:brightness-110",
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "default",
    size = "md",
    loading = false,
    icon,
    className,
    ...props
}) => {
    return (
        <button
            disabled={loading}
            className={cn(
                "rounded-xl font-semibold inline-flex items-center justify-center gap-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-all duration-150",
                sizeStyles[size],
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {loading ? (
                <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
            ) : (
                icon
            )}
            {children}
        </button>
    );
}; 