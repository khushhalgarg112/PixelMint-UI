import * as React from "react";
import clsx from "clsx";

type ButtonVariant =
    | "default"
    | "outline"
    | "ghost"
    | "destructive"
    | "link"
    | "gradient"
    | "neumorphic";

type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: React.ReactNode;
    className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
    icon: "p-2 w-10 h-10 flex items-center justify-center",
};

const variantClasses: Record<ButtonVariant, string> = {
    default: "bg-[#6366f1] text-white hover:bg-[#6366f1]/90",
    outline: "border border-[#6366f1] text-[#6366f1] bg-transparent hover:bg-[#6366f1]/10",
    ghost: "bg-transparent hover:bg-[#6366f1]/10 text-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/30",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500/50",
    link: "underline text-[#6366f1] hover:text-[#6366f1]/80 bg-transparent",
    gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90",
    neumorphic: "bg-white text-gray-800 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] hover:shadow-inner",
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "default",
    size = "md",
    disabled = false,
    loading = false,
    icon,
    className,
    ...props
}) => {
    return (
        <button
            disabled={disabled || loading}
            className={clsx(
                "rounded-xl font-medium transition-all duration-150 flex items-center gap-2 focus:outline-none",
                sizeClasses[size],
                variantClasses[variant],
                (disabled || loading) && "opacity-50 cursor-not-allowed",
                loading && "cursor-wait",
                className
            )}
            {...props}
        >
            {loading ? (
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
                icon
            )}
            {children}
        </button>
    );
};
