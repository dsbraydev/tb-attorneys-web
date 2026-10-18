import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { InsightPost } from "@/content/insight";

export function InsightCard({ post }: { post: InsightPost }) {
  return (
    <Link
      href={`/insight/${post.slug}`}
      className="group flex w-full flex-col gap-4 overflow-hidden"
    >
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl landscape:h-[300px]">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 991px) 100vw, 50vw"
          className="object-cover object-[50%_10%] transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/[0.32] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="rounded-lg bg-gold px-4 py-3 body-regular text-white transition-colors duration-300 hover:bg-navy">
            Read Story
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 landscape:flex-col landscape:items-start landscape:gap-3">
        <h3 className="font-heading text-2xl leading-[150%] landscape:text-xl phone:leading-[130%]">
          {post.title}
        </h3>
        <div className="flex flex-wrap justify-end gap-2">
          {post.tags.map((tag) => (
            <SectionLabel key={tag}>{tag}</SectionLabel>
          ))}
        </div>
      </div>
    </Link>
  );
}
