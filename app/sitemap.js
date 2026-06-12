import { BLOGS } from "@/data/blogs";
import { SITE } from "@/data/site";

export default function sitemap() {
  const posts = BLOGS.map((post) => ({
    url: `${SITE.baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE.baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts,
  ];
}
