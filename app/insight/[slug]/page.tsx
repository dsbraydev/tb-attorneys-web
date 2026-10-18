import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/sections/DetailLayout";
import { getInsightPost, insightPosts } from "@/content/insight";

export const dynamicParams = false;

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insight/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    openGraph: { images: [post.image] },
  };
}

export default async function InsightArticlePage({ params }: PageProps<"/insight/[slug]">) {
  const { slug } = await params;
  const post = getInsightPost(slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/insight/${slug}.mdx`);
  const related = insightPosts.filter((other) => other.slug !== slug).slice(0, 2);

  return (
    <DetailLayout title={post.title} tags={post.tags} image={post.heroImage} related={related}>
      <Body />
    </DetailLayout>
  );
}
