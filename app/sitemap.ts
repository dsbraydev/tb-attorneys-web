import type { MetadataRoute } from "next";
import { insightPosts } from "@/content/insight";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/services",
    "/insight",
    "/pricing",
    "/contact-us",
    "/faq",
    "/privacy-policy",
    ...services.map((service) => `/services/${service.slug}`),
    ...insightPosts.map((post) => `/insight/${post.slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, site.url).toString() }));
}
