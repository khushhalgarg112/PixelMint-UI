import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionVariant = "default" | "bordered" | "ghost" | "retro" | "modern";

export interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
    variant?: AccordionVariant;
    className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    content,
    defaultOpen = false,
    variant = "default",
    className = "",
}) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div
            className={cn(
                "w-full max-w-md min-h-[60px] rounded-2xl bg-background transition-all text-foreground",
                variant === "bordered" && "border border-border p-2 shadow-sm",
                variant === "ghost" && "bg-transparent hover:bg-muted/10",
                variant === "retro" && "bg-[#f8f4e3] text-[#2a1a1f] border-[3px] border-[#111] shadow-[4px_4px_0px_#111]",
                variant === "modern" && "bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-md",
                className
            )}
        >
            <button
                onClick={toggle}
                className={cn(
                    "w-full flex items-center justify-between gap-2 p-4 text-left text-base font-medium rounded-xl transition-all",
                    variant === "retro" ? "hover:bg-[#efe9d4]" :
                        variant === "modern" ? "hover:brightness-110" :
                            "hover:bg-muted/20"
                )}
            >
                <span className="flex-1 min-w-0 truncate">{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className={cn(
                        "h-5 w-5",
                        variant === "retro" ? "text-[#2a1a1f]" :
                            variant === "modern" ? "text-white" :
                                "text-muted-foreground"
                    )} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: "auto", opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={cn(
                            "overflow-hidden px-4 pb-4 text-sm",
                            variant === "retro" ? "text-[#2a1a1f]/80" :
                                variant === "modern" ? "text-white/80" :
                                    "text-muted-foreground"
                        )}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export interface AccordionProps {
    items: AccordionItemProps[];
    variant?: AccordionVariant;
    allowMultipleOpen?: boolean;
    className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
    items,
    variant = "default",
    allowMultipleOpen = false,
    className = "",
}) => {
    const [openIndexes, setOpenIndexes] = React.useState<number[]>(
        items.map((_, index) => (items[index].defaultOpen ? index : -1)).filter(i => i !== -1)
    );

    const toggleItem = (index: number) => {
        if (allowMultipleOpen) {
            setOpenIndexes((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className={cn("space-y-2 px-4 flex flex-col items-center", className)}>
            {items.map((item, index) => (
                <div
                    key={index}
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-center"
                >
                    <AccordionItem
                        {...item}
                        defaultOpen={openIndexes.includes(index)}
                        variant={variant}
                    />
                </div>
            ))}
        </div>
    );
}; 