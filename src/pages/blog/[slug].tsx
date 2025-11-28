import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();

  const slug = router.query.slug as string;
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug.toLowerCase())!;

  const publishDate = new Date(post?.date).toLocaleDateString("pt-BR");
  const postUrl = `http://localhost:3000/blog/${slug}`;

  const { shareButtons } = useShare({
    url: postUrl,
    title: post.title,
    text: post.description,
  });

  return (
    <main className="mt-16 text-gray-100">
      <div className="container space-y-12 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-action-sm text-blue-200">{post?.title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
          <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image src={post?.image ?? ""} alt={post?.title ?? ""} fill />
            </figure>

            <header className="mt-8 p-4 pb-0 md:mt-12 md:p-6 lg:p-12">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar.trimEnd()}
                  alt={post?.author.name}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em <time dateTime={post.date}>{publishDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prove-invert mt-6 max-w-none px-4 md:px-6 lg:px-12">
              <Markdown content={post.body.raw} />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700 p-4 md:p-6">
              <h2 className="mb-4 text-heading-xs text-gray-100">Compartilhar</h2>

              <div className="space-y-3">
                {shareButtons.map((provider) => {
                  return (
                    <Button
                      key={provider.provider}
                      variant="outline"
                      onClick={() => provider.action()}
                      className="w-full justify-start gap-2"
                    >
                      {provider.icon}
                      {provider.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
