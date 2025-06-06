import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaVariant = "default" | "bordered" | "ghost" | "retro" | "modern";
export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: TextareaVariant;
    size?: TextareaSize;
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
}

const variantStyles: Record<TextareaVariant, string> = {
    default: "bg-background text-foreground border border-border shadow-md",
    bordered: "bg-background text-foreground border-2 border-border shadow-md",
    ghost: "bg-background/95 text-foreground backdrop-blur-sm border border-border/50",
    retro: "bg-[#f8f4e3] text-[#2a1a1f] border-[3px] border-[#111] shadow-[4px_4px_0px_#111]",
    modern: "bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-md",
};

const sizeStyles: Record<TextareaSize, string> = {
    sm: "text-sm px-2 py-1.5 min-h-[60px]",
    md: "text-base px-3 py-2 min-h-[80px]",
    lg: "text-lg px-4 py-3 min-h-[100px]",
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            className,
            variant = "default",
            size = "md",
            label,
            error,
            helperText,
            fullWidth = false,
            disabled,
            ...props
        },
        ref
    ) => {
        return (
            <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
                {label && (
                    <label
                        className={cn(
                            "text-sm font-medium",
                            variant === "modern" ? "text-white" : "text-gray-700",
                            disabled && "text-gray-400"
                        )}
                    >
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={cn(
                        "w-full rounded-md",
                        "placeholder:text-gray-400",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        error && "border-red-500 focus:ring-red-500",
                        variantStyles[variant],
                        sizeStyles[size],
                        className
                    )}
                    disabled={disabled}
                    {...props}
                />
                {(error || helperText) && (
                    <p
                        className={cn(
                            "text-sm",
                            error ? "text-red-500" : variant === "modern" ? "text-gray-300" : "text-gray-500"
                        )}
                    >
                        {error || helperText}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea }; 