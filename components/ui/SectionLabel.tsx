import type { ReactNode } from "react";

export function SectionLabel({
  children,
  icon,
  className = "",
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 self-start rounded-3xl border border-[rgba(18,18,18,0.4)] px-4 py-2 ${className}`}
    >
      {icon && <span className="flex h-4 w-4 shrink-0 items-center justify-center">{icon}</span>}
      <span className="label-small">{children}</span>
    </div>
  );
}
