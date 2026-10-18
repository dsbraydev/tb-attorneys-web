import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-[var(--space-hero-top)] pb-[var(--space-120)]">
      <div className="container-main flex flex-col items-center gap-8 text-center">
        <h1 className="heading-2">Page not found</h1>
        <p className="body-regular text-ink-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
