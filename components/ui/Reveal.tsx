import type { ElementType, ReactNode } from "react";

// Fades content in as it scrolls into view, standing in for the Webflow scroll interactions.
// A server component: the single `RevealObserver` in the root layout reveals every `.reveal`
// element, and the hidden state only applies once the inline script has added the `js` class.
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
