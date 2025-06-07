import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/lib/components";

export type CardVariant = "default" | "bordered" | "ghost" | "retro" | "modern";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  imageSrc?: string;
  title?: string;
  description?: string;
  buttons?: { label: string; onClick: () => void }[];
  clickable?: boolean;
  onClick?: () => void;
}

const cardVariantClasses: Record<CardVariant, string> = {
  default: "bg-white text-black border border-gray-200 shadow-sm",
  bordered: "bg-white text-black border-2 border-gray-300 shadow",
  ghost: "bg-white/80 text-black border border-gray-300 backdrop-blur-sm",
  retro:
    "bg-[#fef6e4] text-black border-[3px] border-black shadow-[6px_6px_0_#000]",
  modern:
    "bg-gradient-to-br from-zinc-800 to-zinc-900 text-white border border-zinc-700 shadow-xl",
};

const buttonVariantClasses: Record<CardVariant, string> = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  bordered:
    "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  ghost:
    "bg-white/60 border border-gray-400 text-black hover:bg-white hover:shadow",
  retro:
    "bg-yellow-400 border-[2px] border-black text-black shadow-[2px_2px_0_#000] hover:bg-yellow-300",
  modern: "bg-zinc-700 text-white hover:bg-zinc-600 border border-zinc-600",
};

export const Card: React.FC<CardProps> = ({
  variant = "default",
  imageSrc,
  title,
  description,
  buttons = [],
  clickable = false,
  onClick,
  className,
  ...props
}) => {
  const cardClassNames = cn(
    "rounded-xl p-6 transition cursor-pointer space-y-4",
    cardVariantClasses[variant],
    clickable && "hover:scale-[1.01]",
    className
  );

  const handleCardClick = () => {
    if (clickable && onClick) onClick();
  };

  return (
    <div onClick={handleCardClick} className={cardClassNames} {...props}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title || "Card image"}
          className="rounded-lg w-full h-48 object-cover"
        />
      )}
      {title && <h3 className="text-xl font-bold tracking-tight">{title}</h3>}
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      {buttons.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4">
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              variant="custom"
              onClick={(e) => {
                e.stopPropagation();
                btn.onClick();
              }}
              className={cn(
                buttonVariantClasses[variant],
                "px-4 py-2 rounded-md font-medium"
              )}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
