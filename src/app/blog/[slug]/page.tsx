import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type BlogPostPage = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPage) {
  const { slug } = await params;

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }
  return <PostPage post={post} />;
}
