import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/sections/DetailLayout";
import { insightPosts } from "@/content/insight";
import { getService, services } from "@/content/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { default: Body } = await import(`@/content/services/${slug}.mdx`);

  return (
    <DetailLayout title={service.title} image={service.image} related={insightPosts.slice(0, 2)}>
      <p className="body-large text-ink">{service.summary}</p>
      <Body />
    </DetailLayout>
  );
}
