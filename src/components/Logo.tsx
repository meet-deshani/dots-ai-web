import type { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  imgClassName?: string;
  showText?: boolean;
};

const Logo = ({
  imgClassName = "h-10 w-auto",
  showText = true,
  className = "",
  ...props
}: LogoProps) => (
  <div className={`flex items-center gap-2 ${className}`} {...props}>
    <img
      src="/logo.png"
      alt="ZeroOne DOTS.ai logo"
      className={`object-contain ${imgClassName}`}
      loading="lazy"
    />
    {showText && (
      <div className="leading-tight text-left">
        <span className="font-heading font-semibold text-base leading-tight block">
          ZeroOne DOTS.ai
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block">
          Outcome-first AI Agents
        </span>
      </div>
    )}
  </div>
);

export default Logo;
