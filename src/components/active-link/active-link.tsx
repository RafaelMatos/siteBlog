"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const linkPath = (typeof href === "string" ? href : href.pathname) ?? "";
  const pathName = usePathname();
  const isActive = pathName === linkPath || pathName?.startsWith(`${linkPath}/`);

  return (
    <Link
      href={href}
      className={cn(
        "text-action-sm font-medium transition-colors hover:text-blue-200/80",
        isActive ? "text-blue-200" : "text-gray-100"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
