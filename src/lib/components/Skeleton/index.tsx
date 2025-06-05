import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type SkeletonVariant = "default" | "bordered" | "ghost" | "retro" | "modern";
export type SkeletonSize = "sm" | "md" | "lg" | "xl";
export type SkeletonShape = "rectangle" | "circle" | "rounded" | "pill";

export interface SkeletonProps {
    variant?: SkeletonVariant;
    size?: SkeletonSize;
    shape?: SkeletonShape;
    width?: string | number;
    height?: string | number;
    className?: string;
    animate?: boolean;
    duration?: number;
    delay?: number;
}

export interface SkeletonGroupProps {
    variant?: SkeletonVariant;
    children: React.ReactNode;
    className?: string;
    stagger?: boolean;
    staggerDelay?: number;
}

export interface SkeletonLineProps extends Omit<SkeletonProps, 'shape'> {
    lines?: number;
    spacing?: string;
}

export interface SkeletonCardProps extends Omit<SkeletonProps, 'shape'> {
    showAvatar?: boolean;
    showTitle?: boolean;
    showSubtitle?: boolean;
    showContent?: boolean;
    contentLines?: number;
}

const sizeStyles: Record<SkeletonSize, { height: string; width: string }> = {
    sm: { height: "h-3", width: "w-16" },
    md: { height: "h-4", width: "w-24" },
    lg: { height: "h-5", width: "w-32" },
    xl: { height: "h-6", width: "w-40" },
};

const shapeStyles: Record<SkeletonShape, string> = {
    rectangle: "rounded-none",
    circle: "rounded-full aspect-square",
    rounded: "rounded-lg",
    pill: "rounded-full",
};

const variantStyles: Record<SkeletonVariant, string> = {
    default: "bg-muted animate-pulse",
    bordered: "bg-muted border border-border animate-pulse shadow-sm",
    ghost: "bg-muted/50 animate-pulse backdrop-blur-sm",
    retro: "bg-[#e8e4d3] border-2 border-[#2a1a1f] shadow-[2px_2px_0px_#2a1a1f]",
    modern: "bg-gradient-to-r from-zinc-800 to-zinc-700 animate-pulse shadow-md",
};

const retroAnimationVariants = {
    initial: { 
        boxShadow: "2px 2px 0px #2a1a1f",
        backgroundColor: "#e8e4d3"
    },
    animate: { 
        boxShadow: ["2px 2px 0px #2a1a1f", "4px 4px 0px #2a1a1f", "2px 2px 0px #2a1a1f"],
        backgroundColor: ["#e8e4d3", "#f0ece1", "#e8e4d3"]
    }
};

const modernAnimationVariants = {
    initial: { 
        background: "linear-gradient(90deg, #27272a 0%, #18181b 50%, #27272a 100%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "200% 0"
    },
    animate: { 
        backgroundPosition: ["-200% 0", "200% 0"],
    }
};

export const Skeleton: React.FC<SkeletonProps> = ({
    variant = "default",
    size = "md",
    shape = "rounded",
    width,
    height,
    className = "",
    animate = true,
    duration = 2,
    delay = 0,
}) => {
    const sizeClass = sizeStyles[size];
    const finalWidth = width ? (typeof width === 'number' ? `${width}px` : width) : sizeClass.width;
    const finalHeight = height ? (typeof height === 'number' ? `${height}px` : height) : sizeClass.height;

    const baseClasses = cn(
        "inline-block",
        !width && sizeClass.width,
        !height && sizeClass.height,
        shapeStyles[shape],
        variant !== "retro" && variant !== "modern" && variantStyles[variant],
        className
    );

    if (variant === "retro" && animate) {
        return (
            <motion.div
                className={cn(
                    baseClasses,
                    "bg-[#e8e4d3] border-2 border-[#2a1a1f]"
                )}
                style={{ width: finalWidth, height: finalHeight }}
                initial="initial"
                animate="animate"
                variants={retroAnimationVariants}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut"
                }}
            />
        );
    }

    if (variant === "modern" && animate) {
        return (
            <motion.div
                className={cn(
                    baseClasses,
                    "bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 shadow-md"
                )}
                style={{ 
                    width: finalWidth, 
                    height: finalHeight,
                    backgroundSize: "200% 100%"
                }}
                animate={{
                    backgroundPosition: ["-200% 0", "200% 0"]
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: "linear"
                }}
            />
        );
    }

    return (
        <div
            className={baseClasses}
            style={{ width: finalWidth, height: finalHeight }}
        />
    );
};

export const SkeletonGroup: React.FC<SkeletonGroupProps> = ({
    variant = "default",
    children,
    className = "",
    stagger = false,
    staggerDelay = 0.1,
}) => {
    const childrenArray = React.Children.toArray(children);

    if (!stagger) {
        return (
            <div className={cn("space-y-2", className)}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type === Skeleton) {
                        return React.cloneElement(child as React.ReactElement<SkeletonProps>, {
                            variant: child?.props?.variant || variant,
                        });
                    }
                    return child;
                })}
            </div>
        );
    }

    return (
        <div className={cn("space-y-2", className)}>
            {childrenArray.map((child, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: index * staggerDelay,
                    }}
                >
                    {React.isValidElement(child) && child.type === Skeleton
                        ? React.cloneElement(child as React.ReactElement<SkeletonProps>, {
                            variant: child?.props?.variant || variant,
                            delay: index * staggerDelay,
                        })
                        : child}
                </motion.div>
            ))}
        </div>
    );
};

export const SkeletonLines: React.FC<SkeletonLineProps> = ({
    lines = 3,
    spacing = "space-y-2",
    variant = "default",
    size = "md",
    className = "",
    ...props
}) => {
    const lineWidths = ["w-full", "w-4/5", "w-3/5"];
    
    return (
        <div className={cn(spacing, className)}>
            {Array.from({ length: lines }).map((_, index) => (
                <Skeleton
                    key={index}
                    variant={variant}
                    size={size}
                    width={lineWidths[index % lineWidths.length]}
                    delay={index * 0.1}
                    {...props}
                />
            ))}
        </div>
    );
};

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
    variant = "default",
    size = "md",
    showAvatar = true,
    showTitle = true,
    showSubtitle = true,
    showContent = true,
    contentLines = 3,
    className = "",
    ...props
}) => {
    return (
        <div className={cn(
            "p-4 space-y-4",
            variant === "bordered" && "border border-border rounded-xl shadow-sm",
            variant === "retro" && "bg-[#f8f4e3] border-2 border-[#2a1a1f] shadow-[4px_4px_0px_#2a1a1f] rounded-xl",
            variant === "modern" && "bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl shadow-lg",
            variant === "ghost" && "bg-muted/5 rounded-xl",
            className
        )}>
            {/* Header with Avatar and Title */}
            {(showAvatar || showTitle || showSubtitle) && (
                <div className="flex items-start space-x-3">
                    {showAvatar && (
                        <Skeleton
                            variant={variant}
                            shape="circle"
                            width="40px"
                            height="40px"
                            {...props}
                        />
                    )}
                    <div className="flex-1 space-y-2">
                        {showTitle && (
                            <Skeleton
                                variant={variant}
                                size="lg"
                                width="60%"
                                {...props}
                            />
                        )}
                        {showSubtitle && (
                            <Skeleton
                                variant={variant}
                                size="sm"
                                width="40%"
                                delay={0.1}
                                {...props}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* Content Lines */}
            {showContent && (
                <SkeletonLines
                    variant={variant}
                    size={size}
                    lines={contentLines}
                    {...props}
                />
            )}
        </div>
    );
};

export const SkeletonTable: React.FC<{
    variant?: SkeletonVariant;
    rows?: number;
    columns?: number;
    showHeader?: boolean;
    className?: string;
}> = ({
    variant = "default",
    rows = 5,
    columns = 4,
    showHeader = true,
    className = "",
}) => {
    return (
        <div className={cn("space-y-3", className)}>
            {showHeader && (
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                    {Array.from({ length: columns }).map((_, index) => (
                        <Skeleton
                            key={`header-${index}`}
                            variant={variant}
                            size="md"
                            width="80%"
                            delay={index * 0.05}
                        />
                    ))}
                </div>
            )}
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div
                    key={`row-${rowIndex}`}
                    className="grid gap-4"
                    style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
                >
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <Skeleton
                            key={`cell-${rowIndex}-${colIndex}`}
                            variant={variant}
                            size="sm"
                            width={colIndex === 0 ? "90%" : "70%"}
                            delay={(rowIndex * columns + colIndex) * 0.02}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

// Example usage component
export const SkeletonExample: React.FC = () => {
    const [variant, setVariant] = React.useState<SkeletonVariant>("default");
    const [showExample, setShowExample] = React.useState(true);

    return (
        <div className="space-y-8 p-8">
            <div className="flex flex-wrap gap-2 mb-6">
                {["default", "bordered", "ghost", "retro", "modern"].map((v) => (
                    <button
                        key={v}
                        onClick={() => setVariant(v as SkeletonVariant)}
                        className={cn(
                            "px-3 py-1 rounded-lg text-sm transition-colors",
                            variant === v
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                        )}
                    >
                        {v}
                    </button>
                ))}
            </div>

            <button
                onClick={() => setShowExample(!showExample)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
            >
                {showExample ? "Hide" : "Show"} Skeletons
            </button>

            <AnimatePresence>
                {showExample && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-8"
                    >
                        {/* Basic Skeletons */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Basic Shapes</h3>
                            <div className="flex items-center space-x-4">
                                <Skeleton variant={variant} shape="rectangle" />
                                <Skeleton variant={variant} shape="rounded" />
                                <Skeleton variant={variant} shape="pill" />
                                <Skeleton variant={variant} shape="circle" width="40px" height="40px" />
                            </div>
                        </div>

                        {/* Skeleton Card */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Card Skeleton</h3>
                            <SkeletonCard variant={variant} />
                        </div>

                        {/* Skeleton Lines */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Text Lines</h3>
                            <SkeletonLines variant={variant} lines={4} />
                        </div>

                        {/* Skeleton Table */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Table Skeleton</h3>
                            <SkeletonTable variant={variant} rows={3} columns={3} />
                        </div>

                        {/* Staggered Group */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Staggered Animation</h3>
                            <SkeletonGroup variant={variant} stagger={true}>
                                <Skeleton size="lg" />
                                <Skeleton size="md" />
                                <Skeleton size="sm" />
                                <Skeleton size="md" width="80%" />
                            </SkeletonGroup>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};