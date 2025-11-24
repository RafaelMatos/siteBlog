import { Avatar } from "@/components/avatar";
import Image from "next/image";
import Link from "next/link";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
};

export const PostCard = ({ slug, title, description, image, date, author }: PostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl overflow-hidden rounded-xl border-[1px] border-gray-400 bg-gray-600 transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="overflow-hidden rounded-md p-2">
        {/* Image Container */}
        <div className="relative">
          {/* Date Container */}
          <div className="absolute right-0 top-0 rounded-bl-xl bg-gray-600 px-3 py-1 backdrop-blur-3xl">
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>
          <Image
            src={image}
            alt={title}
            width={288}
            height={144}
            className="h-40 w-full rounded-md object-cover object-center"
          />
        </div>

        {/* Post Info */}
        <div className="mt-4 space-y-4 px-2">
          <h2 className="line-clamp-3 text-heading-sm text-gray-100">{title}</h2>
          <p className="line-clamp-3 text-body-sm text-gray-300">{description}</p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <Avatar.Container>
              <Avatar.Image src={author?.avatar} alt={author.name} size="xs" />

              <Avatar.Title>{author.name}</Avatar.Title>
            </Avatar.Container>
          </div>
        </div>
      </div>
    </Link>
  );
};
