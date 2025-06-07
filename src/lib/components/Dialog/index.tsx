// components/ui/dialog.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type DialogVariant =
  | "default"
  | "ghost"
  | "retro"
  | "modern"
  | "bordered";
export type DialogSize = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<DialogSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

const variantClasses: Record<DialogVariant, string> = {
  default: "bg-white text-black border border-gray-200 shadow-xl",
  ghost: "bg-white/90 backdrop-blur-md border border-gray-300",
  retro:
    "bg-[#fef6e4] border-[3px] border-black text-black shadow-[8px_8px_0_#000]",
  modern:
    "bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-800 text-white border border-zinc-700 shadow-2xl",
  bordered: "bg-white text-black border-2 border-black shadow-md",
};

const overlayClasses: Record<DialogVariant, string> = {
  default: "bg-black/50",
  ghost: "bg-black/30 backdrop-blur-sm",
  retro: "bg-[#2a1a1f]/70",
  modern: "bg-black/60 backdrop-blur-md",
  bordered: "bg-black/40",
};

interface DialogRootProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  variant?: DialogVariant;
  size?: DialogSize;
  overlayClassName?: string;
  dialogClassName?: string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export const DialogRoot: React.FC<DialogRootProps> = ({
  open,
  onOpenChange,
  children,
  variant = "default",
  size = "md",
  overlayClassName,
  dialogClassName,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) => {
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape) onOpenChange(false);
    };
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, closeOnEscape]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onOpenChange(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed inset-0 transition-opacity",
              overlayClasses[variant],
              overlayClassName
            )}
          />
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "relative rounded-xl p-6 w-full z-50",
              sizeClasses[size],
              variantClasses[variant],
              dialogClassName
            )}
            role="dialog"
            aria-modal="true"
          >
            {children}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-black/10 focus:outline-none"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const DialogTrigger: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition",
        className
      )}
    >
      {children}
    </button>
  );
};

export const DialogContent: React.FC<{
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, description, children, className }) => (
  <div className={cn("space-y-4", className)}>
    {title && <h2 className="text-lg font-semibold">{title}</h2>}
    {description && <p className="text-gray-500 text-sm">{description}</p>}
    <div>{children}</div>
  </div>
);
