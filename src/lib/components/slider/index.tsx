import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export type SliderVariant = "default" | "bordered" | "ghost" | "retro" | "modern";
export type SliderSize = "sm" | "md" | "lg";

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    variant?: SliderVariant;
    size?: SliderSize;
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    showValue?: boolean;
    min?: number;
    max?: number;
    step?: number;
}

const variantStyles: Record<SliderVariant, string> = {
    default: "bg-background text-foreground border border-border shadow-md",
    bordered: "bg-background text-foreground border-2 border-border shadow-md",
    ghost: "bg-background/95 text-foreground backdrop-blur-sm border border-border/50",
    retro: "bg-[#f8f4e3] text-[#2a1a1f] border-[3px] border-[#111] shadow-[4px_4px_0px_#111]",
    modern: "bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-md",
};

const sizeStyles: Record<SliderSize, string> = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
};

const thumbSizeStyles: Record<SliderSize, string> = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
};

interface SliderComponent extends React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>> { }

const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(function Slider({
    className,
    variant = "default",
    size = "md",
    label,
    error,
    helperText,
    fullWidth = false,
    showValue = false,
    min = 0,
    max = 100,
    step = 1,
    ...props
}, ref) {
    const [value, setValue] = React.useState<number[]>([min]);

    return (
        <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
            <div className="flex items-center justify-between">
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
                {showValue && (
                    <span
                        className={cn(
                            "text-sm font-medium",
                            variant === "modern" ? "text-white" : "text-gray-700"
                        )}
                    >
                        {value[0]}
                    </span>
                )}
            </div>
            <SliderPrimitive.Root
                ref={ref}
                className={cn(
                    "relative flex w-full touch-none select-none items-center",
                    sizeStyles[size],
                    className
                )}
                min={min}
                max={max}
                step={step}
                value={value}
                onValueChange={setValue}
                {...props}
            >
                <SliderPrimitive.Track
                    className={cn(
                        "relative grow rounded-full",
                        variant === "default" && "bg-gray-200 h-2",
                        variant === "bordered" && "bg-gray-200 h-2.5 border border-gray-300",
                        variant === "ghost" && "bg-gray-200/50 h-2",
                        variant === "retro" && "bg-[#f8f4e3] h-3 border-[3px] border-[#111]",
                        variant === "modern" && "bg-zinc-700 h-2.5"
                    )}
                >
                    <SliderPrimitive.Range
                        className={cn(
                            "absolute h-full rounded-full",
                            variant === "default" && "bg-blue-500",
                            variant === "bordered" && "bg-blue-500",
                            variant === "ghost" && "bg-blue-500/50",
                            variant === "retro" && "bg-[#2a1a1f]",
                            variant === "modern" && "bg-zinc-500"
                        )}
                    />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb
                    className={cn(
                        "block rounded-full ring-offset-background transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                        "disabled:pointer-events-none disabled:opacity-50",
                        variant === "default" && "border-2 border-blue-500 bg-white hover:bg-gray-50",
                        variant === "bordered" && "border-2 border-blue-500 bg-white hover:bg-gray-50",
                        variant === "ghost" && "border-2 border-blue-500/50 bg-white/50 hover:bg-white/70",
                        variant === "retro" && "border-[3px] border-[#111] bg-[#f8f4e3] hover:bg-[#f8f4e3]/90",
                        variant === "modern" && "border-2 border-zinc-500 bg-zinc-900 hover:bg-zinc-800",
                        thumbSizeStyles[size]
                    )}
                />
            </SliderPrimitive.Root>
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
}) as SliderComponent;

Slider.displayName = "Slider";

export { Slider }; 