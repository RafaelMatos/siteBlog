"use client";
import { Search } from "@/components/search";

import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useSearchParams } from "next/navigation";

export type BlogListProps = {
  posts: Post[];
};

export function BlogList({ posts }: BlogListProps) {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const pageTitle = query
    ? `Resultados de busca para '${query}'`
    : "Dicas e estratégias para impulsionar seu negócio";

  const postList = query
    ? posts.filter((post) => post.title.toLowerCase()?.includes(query.toLowerCase()))
    : posts;

  const hasPosts = postList.length > 0;
  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <header className="pb-14">
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* Tag */}
            <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag text-cyan-100 md:text-left">
              BLOG
            </span>
            {/* Titulo */}
            <h1 className="text-balance text-start text-heading-lg text-gray-100 md:text-left md:text-heading-xl">
              {pageTitle}
            </h1>
          </div>
          {/* Search */}
          <Search />
        </div>
      </header>

      {/* Listagem de post */}
      {hasPosts ? (
        <PostGridCard>
          {postList.map((post) => {
            const { _id, title, date, description, slug, image } = post;
            return (
              <PostCard
                key={_id}
                title={title}
                date={new Date(date).toLocaleDateString("pt-BR")}
                description={description}
                slug={slug}
                image={image.trimEnd()}
                author={post.author}
              />
            );
          })}
        </PostGridCard>
      ) : (
        <div className="container p-8">
          <div className="flex flex-col items-center justify-center gap-8 rounded-md border-2 border-dashed border-gray-300 p-8 md:p-12">
            <Inbox className="h-12 w-12 text-cyan-100" />
            <p className="text-center text-gray-200">Nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  );
}
