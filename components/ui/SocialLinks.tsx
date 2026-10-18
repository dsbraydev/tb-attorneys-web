import { SocialIcon, type SocialNetwork } from "@/components/ui/icons";
import { site } from "@/content/site";

const socials = Object.entries(site.socials).filter(([, url]) => url) as [SocialNetwork, string][];

/** Round social icon links for every network with a URL in `site.socials`; renders nothing if none. */
export function SocialLinks({ className = "" }: { className?: string }) {
  if (socials.length === 0) return null;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map(([network, url]) => (
        <a
          key={network}
          href={url}
          aria-label={network}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(201,241,161,0.08)] text-grey-50 transition-all duration-300 ease-out hover:bg-[rgba(201,241,161,0.16)] hover:text-white"
        >
          <SocialIcon network={network} />
        </a>
      ))}
    </div>
  );
}
