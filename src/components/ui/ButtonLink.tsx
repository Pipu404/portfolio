type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline";
};

const variants = {
  primary: "bg-foreground text-background hover:opacity-85",
  outline: "border border-border-strong text-foreground hover:bg-surface-2",
};

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return (
    <a
      {...props}
      className={`group inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`}
    />
  );
}
