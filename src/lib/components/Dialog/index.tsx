import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type DialogVariant =
  | "default"
  | "bordered"
  | "ghost"
  | "retro"
  | "modern";
export type DialogSize = "sm" | "md" | "lg" | "xl";

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  variant?: DialogVariant;
  size?: DialogSize;
  className?: string;
  overlayClassName?: string;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export interface DialogContentProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const sizeStyles: Record<DialogSize, string> = {
  sm: "max-w-sm w-full",
  md: "max-w-md w-full",
  lg: "max-w-lg w-full",
  xl: "max-w-2xl w-full",
};

const variantStyles: Record<DialogVariant, string> = {
  default: "bg-white text-gray-900 border border-gray-200 shadow-xl",
  bordered: "bg-white text-gray-900 border-2 border-gray-300 shadow-2xl",
  ghost:
    "bg-white/95 backdrop-blur-md text-gray-900 border border-gray-200/50 shadow-2xl",
  retro:
    "bg-[#f8f4e3] text-[#2a1a1f] border-[4px] border-[#111] shadow-[8px_8px_0px_#111]",
  modern:
    "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white border border-zinc-700 shadow-2xl backdrop-blur-sm",
};

const overlayVariants: Record<DialogVariant, string> = {
  default: "bg-black/70",
  bordered: "bg-black/75",
  ghost: "bg-black/40 backdrop-blur-sm",
  retro: "bg-[#2a1a1f]/80",
  modern: "bg-black/70 backdrop-blur-sm",
};

export const DialogContent: React.FC<DialogContentProps> = ({
  title,
  description,
  children,
  footer,
  className = "",
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      {(title || description) && (
        <div className="space-y-2">
          {title && (
            <h2 className="text-xl font-semibold leading-none tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}
      <div className="text-sm">{children}</div>
      {footer && (
        <div className="flex justify-end space-x-2 pt-4 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  children,
  variant = "default",
  size = "md",
  className = "",
  overlayClassName = "",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) => {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, closeOnEscape, onOpenChange]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onOpenChange(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed inset-0",
              overlayVariants[variant],
              overlayClassName
            )}
            onClick={handleOverlayClick}
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: variant === "retro" ? -20 : 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: variant === "retro" ? -20 : 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              ...(variant === "retro" && {
                type: "spring",
                stiffness: 300,
                damping: 30,
              }),
            }}
            className={cn(
              "relative rounded-2xl p-6 mx-auto",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              sizeStyles[size],
              variantStyles[variant],
              variant === "retro" && "transform-gpu",
              variant === "modern" && "ring-1 ring-white/10",
              className
            )}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            {showCloseButton && (
              <button
                onClick={() => onOpenChange(false)}
                className={cn(
                  "absolute top-4 right-4 p-1 rounded-lg transition-all duration-150",
                  "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  variant === "retro" &&
                    "hover:bg-[#efe9d4] focus:ring-[#2a1a1f]",
                  variant === "modern" &&
                    "hover:bg-white/10 focus:ring-white/50",
                  variant === "ghost" && "hover:bg-gray-100/50"
                )}
                aria-label="Close dialog"
              >
                <X
                  className={cn(
                    "h-4 w-4",
                    variant === "retro"
                      ? "text-[#2a1a1f]"
                      : variant === "modern"
                      ? "text-white/70"
                      : "text-gray-500"
                  )}
                />
              </button>
            )}

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Trigger component for easy usage
export interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
  onClick?: () => void;
}

export const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  asChild = false,
  className = "",
  onClick,
}) => {
  if (asChild && React.isValidElement(children)) {
    const childProps: Record<string, any> = {
      ...(children.props || {}),
      ...(onClick ? { onClick } : {}),
    };
    if ("className" in (children.props || {})) {
      childProps.className = cn(className, children.props.className);
    }
    return React.cloneElement(children, childProps);
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium",
        "bg-blue-600 text-white hover:bg-blue-700 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        className
      )}
    >
      {children}
    </button>
  );
};

// Example usage component
export const DialogExample: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [variant, setVariant] = React.useState<DialogVariant>("default");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      {/* Background content to show the overlay effect */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Dialog Component Demo
        </h1>
        <p className="text-gray-600 mb-6">
          This is background content that should be properly obscured when the
          dialog is open. The overlay should prevent this content from
          interfering with the dialog.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 mb-6">
          {["default", "bordered", "ghost", "retro", "modern"].map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v as DialogVariant)}
              className={cn(
                "px-3 py-1 rounded-lg text-sm transition-colors",
                variant === v
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              )}
            >
              {v}
            </button>
          ))}
        </div>

        <DialogTrigger onClick={() => setIsOpen(true)}>
          Open {variant} Dialog
        </DialogTrigger>

        {/* More background content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Card {i}</h3>
              <p className="text-gray-600 text-sm">
                This is some sample content that should be properly hidden
                behind the dialog overlay. It helps demonstrate that the overlay
                is working correctly.
              </p>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        variant={variant}
        size="md"
      >
        <DialogContent
          title="Confirm Action"
          description="This action cannot be undone. Are you sure you want to continue?"
          footer={
            <div className="flex space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                  variant === "retro"
                    ? "bg-[#2a1a1f] text-[#f8f4e3] border-2 border-[#111] shadow-[2px_2px_0px_#111] hover:shadow-[1px_1px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px]"
                    : variant === "modern"
                    ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-white border border-zinc-600 shadow-md hover:from-zinc-600 hover:to-zinc-500"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                Confirm
              </button>
            </div>
          }
        >
          <p>
            This is the main content of the dialog. You can put any content
            here, including forms, text, images, or other components. Notice how
            the background is now properly obscured and doesn't interfere with
            the dialog content.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};
