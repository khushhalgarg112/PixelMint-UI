import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type AlertVariant = "default" | "ghost" | "retro" | "modern" | "bordered";
export type AlertSize = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<AlertSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

const variantClasses: Record<AlertVariant, string> = {
  default: "bg-white text-black border border-gray-200 shadow-md",
  ghost: "bg-white/90 backdrop-blur-md border border-gray-300 text-gray-800",
  retro: "bg-[#fef6e4] border-[3px] border-black text-black shadow-[4px_4px_0_#000]",
  modern:
    "bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-md",
  bordered: "bg-white text-black border-2 border-black shadow-sm",
};

interface AlertProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant?: AlertVariant;
  size?: AlertSize;
  title?: React.ReactNode;
  description?: React.ReactNode;
  closable?: boolean;
  className?: string;
  closeButtonClassName?: string;
}

export const Alert: React.FC<AlertProps> = ({
  open,
  onOpenChange,
  variant = "default",
  size = "md",
  title,
  description,
  closable = true,
  className,
  closeButtonClassName,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "relative rounded-lg p-4 w-full",
            sizeClasses[size],
            variantClasses[variant],
            className
          )}
          role="alert"
          aria-live="assertive"
        >
          {closable && (
            <button
              onClick={() => onOpenChange(false)}
              className={cn(
                "absolute top-3 right-3 p-1 rounded-md hover:bg-black/10 focus:outline-none",
                closeButtonClassName
              )}
              aria-label="Close alert"
            >
              <X size={16} />
            </button>
          )}

          {title && (
            <h4 className="font-semibold text-sm mb-1">{title}</h4>
          )}
          {description && (
            <p className="text-sm leading-snug text-gray-700 dark:text-gray-300">
              {description}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
