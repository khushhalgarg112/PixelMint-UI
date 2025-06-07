import * as React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export type PopoverVariant = "default" | "bordered" | "ghost" | "retro" | "modern";
export type PopoverPosition = "top" | "right" | "bottom" | "left";

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  position?: PopoverPosition;
  variant?: PopoverVariant;
}

const variantClasses: Record<PopoverVariant, string> = {
  default: "bg-white text-black border border-gray-300 shadow-md",
  bordered: "bg-white text-black border-2 border-gray-400 shadow",
  ghost: "bg-white/70 backdrop-blur text-black border border-gray-300",
  retro: "bg-[#fef6e4] text-black border-[3px] border-black shadow-[6px_6px_0_#000]",
  modern: "bg-gradient-to-br from-zinc-800 to-zinc-900 text-white border border-zinc-700 shadow-xl",
};

const positionClasses: Record<PopoverPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
};

export const Popover: React.FC<PopoverProps> = ({
  open,
  onOpenChange,
  trigger,
  children,
  position = "bottom",
  variant = "default",
  className,
  ...props
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isOpen = open ?? internalOpen;

  const handleToggle = () => {
    if (onOpenChange) onOpenChange(!isOpen);
    else setInternalOpen(!isOpen);
  };

  // Only pass allowed props to motion.div
  const { style, id, tabIndex, role, ...restProps } = props;

  return (
    <div className="relative inline-block text-left">
      <div onClick={handleToggle} className="cursor-pointer">
        {trigger}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 min-w-[180px] rounded-lg p-4 text-sm",
              variantClasses[variant],
              positionClasses[position],
              className
            )}
            style={style}
            id={id}
            tabIndex={tabIndex}
            role={role}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};