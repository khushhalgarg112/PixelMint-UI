import * as React from "react";
import { cn } from "@/lib/utils";

export type InputVariant = "default" | "bordered" | "ghost" | "retro" | "modern";
export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: InputVariant;
    size?: InputSize;
    label?: string;
    error?: string;
    className?: string;
}

const sizeStyles: Record<InputSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
};

const variantStyles: Record<InputVariant, string> = {
    default: "bg-background text-foreground border border-input focus:border-primary focus:ring-1 focus:ring-primary",
    bordered: "bg-background text-foreground border-2 border-border focus:border-primary focus:ring-1 focus:ring-primary shadow-sm",
    ghost: "bg-transparent border-b border-border focus:border-primary focus:ring-0 rounded-none",
    retro: "bg-[#f8f4e3] text-[#2a1a1f] border-[3px] border-[#111] shadow-[4px_4px_0px_#111] focus:shadow-[2px_2px_0px_#111] focus:translate-x-[1px] focus:translate-y-[1px]",
    modern: "bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-md focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant = "default", size = "md", label, error, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-medium text-foreground">
                        {label}
                    </label>
                )}
                <input
                    className={cn(
                        "w-full rounded-xl font-medium outline-none transition-all duration-150",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "placeholder:text-muted-foreground",
                        sizeStyles[size],
                        variantStyles[variant],
                        error && "border-destructive focus:border-destructive focus:ring-destructive",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-destructive">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input"; 