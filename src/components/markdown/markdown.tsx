import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
type MarkdownProps = {
  content: string;
};

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md md:text-heading-xl">{children}</h1>
        ),
        h2: ({ children }) => (
          <h1 className="mb-4 mt-8 text-heading-sm md:text-heading-lg">{children}</h1>
        ),
        p: ({ children }) => <p className="mb-6 leading-relaxed text-gray-200">{children}</p>,
        strong: ({ children }) => (
          <strong className="font-extrabold text-blue-100">{children}</strong>
        ),
        a: ({ children, href }) => (
          <a className="font-extrabold text-blue-200 hover:underline" href={href}>
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
