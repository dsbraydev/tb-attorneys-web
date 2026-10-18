import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRightIcon, ChevronIcon } from "@/components/ui/icons";

type Variant = "primary" | "outline";

const base =
  "group/button inline-flex min-w-[180px] shrink-0 items-center justify-center gap-2 rounded-[3px] px-6 py-3.5 text-center capitalize transition-all duration-[350ms] tablet:py-4 landscape:px-4 landscape:py-3";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white",
  outline: "border border-navy bg-transparent text-grey-100",
};

// Webflow's button: a chevron that slides in from the left and a label that rolls up on hover.
function ButtonContent({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="flex h-4 w-4 overflow-hidden" aria-hidden>
        <span className="flex shrink-0 gap-1 transition-transform duration-300 ease-out -translate-x-5 group-hover/button:translate-x-0">
          <span className="flex h-4 w-4 items-center justify-center">
            <ChevronIcon />
          </span>
          <span className="flex h-4 w-4 items-center justify-center">
            <ChevronIcon />
          </span>
        </span>
      </span>
      <span className="flex h-6 flex-col gap-1 overflow-hidden leading-6 tracking-[-0.3px]">
        <span className="transition-transform duration-300 ease-out group-hover/button:-translate-y-7">
          {children}
        </span>
        <span
          className="transition-transform duration-300 ease-out group-hover/button:-translate-y-7"
          aria-hidden
        >
          {children}
        </span>
      </span>
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      <ButtonContent>{children}</ButtonContent>
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button
      className={`${base} ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 text-ink transition-all duration-[250ms] ease-in hover:gap-2.5 tablet:px-4 phone:justify-center ${className}`}
    >
      <span>{children}</span>
      <ArrowRightIcon className="h-4 w-4" />
    </Link>
  );
}
