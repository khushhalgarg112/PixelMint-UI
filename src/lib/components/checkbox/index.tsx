import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export type CheckboxVariant = "default" | "bordered" | "ghost" | "retro" | "modern";
export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    variant?: CheckboxVariant;
    size?: CheckboxSize;
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
}

const variantStyles: Record<CheckboxVariant, string> = {
    default: "bg-background text-foreground border border-border shadow-md",
    bordered: "bg-background text-foreground border-2 border-border shadow-md",
    ghost: "bg-background/95 text-foreground backdrop-blur-sm border border-border/50",
    retro: "bg-[#f8f4e3] text-[#2a1a1f] border-[3px] border-[#111] shadow-[4px_4px_0px_#111]",
    modern: "bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-md",
};

const sizeStyles: Record<CheckboxSize, string> = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
};

interface CheckboxComponent extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>> { }

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox({
    className,
    variant = "default",
    size = "md",
    label,
    error,
    helperText,
    fullWidth = false,
    children,
    ...props
}, ref) {
    return (
        <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
            {label && (
                <label
                    className={cn(
                        "text-sm font-medium",
                        variant === "modern" ? "text-white" : "text-gray-700"
                    )}
                >
                    {label}
                </label>
            )}
            <div className="flex items-center space-x-2">
                <CheckboxPrimitive.Root
                    ref={ref}
                    className={cn(
                        "peer shrink-0 rounded-sm",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        variant === "default" && "border border-gray-300 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500",
                        variant === "bordered" && "border-2 border-gray-300 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500",
                        variant === "ghost" && "border border-gray-300/50 data-[state=checked]:border-blue-500/50 data-[state=checked]:bg-blue-500/50",
                        variant === "retro" && "border-[3px] border-[#111] data-[state=checked]:border-[#111] data-[state=checked]:bg-[#f8f4e3]",
                        variant === "modern" && "border border-zinc-700 data-[state=checked]:border-zinc-500 data-[state=checked]:bg-zinc-500",
                        sizeStyles[size],
                        className
                    )}
                    {...props}
                >
                    <CheckboxPrimitive.Indicator
                        className={cn(
                            "flex items-center justify-center",
                            variant === "default" && "text-white",
                            variant === "bordered" && "text-white",
                            variant === "ghost" && "text-white/50",
                            variant === "retro" && "text-[#2a1a1f]",
                            variant === "modern" && "text-white"
                        )}
                    >
                        <Check className={cn(
                            size === "sm" && "h-3 w-3",
                            size === "md" && "h-4 w-4",
                            size === "lg" && "h-5 w-5"
                        )} />
                    </CheckboxPrimitive.Indicator>
                </CheckboxPrimitive.Root>
                {children && (
                    <label
                        className={cn(
                            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                            variant === "modern" ? "text-white" : "text-gray-700"
                        )}
                    >
                        {children}
                    </label>
                )}
            </div>
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
}) as CheckboxComponent;

Checkbox.displayName = "Checkbox";

export { Checkbox }; 