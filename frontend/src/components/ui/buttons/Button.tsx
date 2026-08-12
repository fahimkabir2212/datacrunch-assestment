import { Link } from "react-router";
import type { ReactNode } from "react";

export type ButtonVariant = "brand" | "emphasis" | "inverse" | "outline";

const BASE =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const VARIANTS: Record<ButtonVariant, string> = {
  brand: "bg-brand text-on-brand hover:bg-brand/90",
  emphasis: "bg-surface-emphasis text-ink-inverse hover:bg-surface-emphasis/85",
  inverse: "bg-ink-inverse/15 text-ink-inverse hover:bg-ink-inverse/25",
  outline: "border border-ink-inverse text-ink-inverse hover:bg-ink-inverse/10",
};

interface CommonProps {
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

export type ButtonProps = CommonProps &
  (
    | {
        as?: "button";
        type?: "button" | "submit";
        onClick?: () => void;
        to?: never;
        href?: never;
      }
    | {
        as: "link";
        to: string;
        type?: never;
        href?: never;
        onClick?: never;
      }
    | {
        as: "anchor";
        href: string;
        target?: string;
        rel?: string;
        onClick?: () => void;
        to?: never;
        type?: never;
      }
  );

export default function Button(props: ButtonProps) {
  const { variant = "brand", icon, className = "", children } = props;

  const classes = `${BASE} ${VARIANTS[variant]} ${className}`.trim();

  const content = (
    <>
      {children}
      {icon && (
        <span aria-hidden="true" className="shrink-0">
          {icon}
        </span>
      )}
    </>
  );

  if (props.as === "link") {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  if (props.as === "anchor") {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
