import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

export type TooltipVariant = "default" | "bordered" | "ghost" | "retro" | "modern";
export type TooltipSide = "top" | "right" | "bottom" | "left";

export interface TooltipProps {
    variant?: TooltipVariant;
    content: React.ReactNode;
    children: React.ReactNode;
    side?: TooltipSide;
    className?: string;
    delayDuration?: number;
}

const variantStyles: Record<TooltipVariant, string> = {
    default: "bg-background text-foreground border border-border shadow-md",
    bordered: "bg-background text-foreground border-2 border-border shadow-md",
    ghost: "bg-background/95 text-foreground backdrop-blur-sm border border-border/50",
    retro: "bg-[#f8f4e3] text-[#2a1a1f] border-[3px] border-[#111] shadow-[4px_4px_0px_#111]",
    modern: "bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-md",
};

const Tooltip = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    TooltipProps
>(({ children, content, variant = "default", side = "top", className, delayDuration = 0, ...props }, ref) => {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root delayDuration={delayDuration}>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        ref={ref}
                        side={side}
                        sideOffset={5}
                        className={cn(
                            "z-50 overflow-hidden rounded-xl px-3 py-1.5 text-sm font-medium",
                            "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                            variantStyles[variant],
                            className
                        )}
                        {...props}
                    >
                        {content}
                        <TooltipPrimitive.Arrow
                            className={cn(
                                "fill-current",
                                variant === "retro" ? "fill-[#f8f4e3]" :
                                    variant === "modern" ? "fill-zinc-900" :
                                        "fill-background"
                            )}
                        />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
});

Tooltip.displayName = "Tooltip";

export { Tooltip }; 