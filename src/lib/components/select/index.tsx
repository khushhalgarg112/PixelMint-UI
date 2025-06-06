import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

export type SelectVariant = "default" | "bordered" | "ghost" | "retro" | "modern";
export type SelectSize = "sm" | "md" | "lg";

export interface SelectProps extends Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, 'className'> {
    variant?: SelectVariant;
    size?: SelectSize;
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    className?: string;
}

const variantStyles: Record<SelectVariant, string> = {
    default: "bg-background text-foreground border border-border shadow-md",
    bordered: "bg-background text-foreground border-2 border-border shadow-md",
    ghost: "bg-background/95 text-foreground backdrop-blur-sm border border-border/50",
    retro: "bg-[#f8f4e3] text-[#2a1a1f] border-[3px] border-[#111] shadow-[4px_4px_0px_#111]",
    modern: "bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-md",
};

const sizeStyles: Record<SelectSize, string> = {
    sm: "text-sm h-8 px-2",
    md: "text-base h-10 px-3",
    lg: "text-lg h-12 px-4",
};

interface SelectComponent extends React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLButtonElement>> {
    Item: typeof SelectItem;
    Group: typeof SelectGroup;
    Label: typeof SelectLabel;
    Separator: typeof SelectSeparator;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(function Select({
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
            <SelectPrimitive.Root {...props}>
                <SelectPrimitive.Trigger
                    ref={ref}
                    className={cn(
                        "flex items-center justify-between rounded-md",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        error && "border-red-500 focus:ring-red-500",
                        variantStyles[variant],
                        sizeStyles[size],
                        className
                    )}
                >
                    <SelectPrimitive.Value placeholder="Select an option" />
                    <SelectPrimitive.Icon>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>
                <SelectPrimitive.Portal>
                    <SelectPrimitive.Content
                        className={cn(
                            "relative z-50 min-w-[8rem] overflow-hidden rounded-md",
                            "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
                            variantStyles[variant]
                        )}
                        position="popper"
                    >
                        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center py-1">
                            <ChevronUp className="h-4 w-4" />
                        </SelectPrimitive.ScrollUpButton>
                        <SelectPrimitive.Viewport className="p-1">
                            <SelectPrimitive.Group>
                                {children}
                            </SelectPrimitive.Group>
                        </SelectPrimitive.Viewport>
                        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center py-1">
                            <ChevronDown className="h-4 w-4" />
                        </SelectPrimitive.ScrollDownButton>
                    </SelectPrimitive.Content>
                </SelectPrimitive.Portal>
            </SelectPrimitive.Root>
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
}) as SelectComponent;

Select.displayName = "Select";

const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
        variant?: SelectVariant;
    }
>(({ className, variant = "default", children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none",
            "focus:bg-accent focus:text-accent-foreground",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            variant === "modern" ? "text-white hover:bg-zinc-700" : "text-gray-700 hover:bg-gray-100",
            className
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));

SelectItem.displayName = "SelectItem";

const SelectGroup = SelectPrimitive.Group;
const SelectLabel = SelectPrimitive.Label;
const SelectSeparator = SelectPrimitive.Separator;

// Attach subcomponents to Select
Select.Item = SelectItem;
Select.Group = SelectGroup;
Select.Label = SelectLabel;
Select.Separator = SelectSeparator;

export {
    Select,
    SelectItem,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
}; 