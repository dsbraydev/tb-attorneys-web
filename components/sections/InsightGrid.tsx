"use client";

import { useState } from "react";
import { InsightCard } from "@/components/sections/InsightCard";
import type { InsightPost } from "@/content/insight";

export function InsightGrid({ posts, categories }: { posts: InsightPost[]; categories: string[] }) {
  const [category, setCategory] = useState<string | null>(null);
  const visible = category ? posts.filter((post) => post.tags.includes(category)) : posts;

  const filters: { label: string; value: string | null }[] = [
    { label: "All", value: null },
    ...categories.map((value) => ({ label: value, value })),
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter stories">
        {filters.map((filter) => {
          const selected = filter.value === category;
          return (
            <button
              key={filter.label}
              type="button"
              aria-pressed={selected}
              onClick={() => setCategory(filter.value)}
              className={`rounded px-5 py-3 body-regular uppercase transition-all duration-300 ${
                selected
                  ? "border border-oliv bg-navy text-white"
                  : "border border-grey-400 hover:bg-[rgba(220,255,184,0.32)]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 tablet:grid-cols-1">
        {visible.map((post) => (
          <InsightCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
