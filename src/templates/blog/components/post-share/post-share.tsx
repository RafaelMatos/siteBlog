"use client";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

type PostShareProps = {
  url: string;
  title: string;
  description: string;
};

export const PostShare = ({ url, title, description }: PostShareProps) => {
  const { shareButtons } = useShare({
    url: url,
    title: title,
    text: description,
  });

  return (
    <aside className="space-y-6">
      <div className="rounded-lg">
        <h2 className="mb-4 hidden text-heading-xs text-gray-100 md:block">Compartilhar</h2>

        <div className="flex justify-between gap-2 md:flex-col">
          {shareButtons.map((provider) => {
            return (
              <Button
                key={provider.provider}
                variant="outline"
                onClick={() => provider.action()}
                className="w-fit justify-start gap-2 md:w-full"
              >
                {provider.icon}
                <span className="hidden md:block">{provider.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
