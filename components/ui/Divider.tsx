/** The thin horizontal rule used between sections and inside cards. */
export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-0 w-full border-b border-[rgba(183,179,162,0.8)] ${className}`} />;
}
