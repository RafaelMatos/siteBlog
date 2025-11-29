import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";
import { CallToAction } from "@/templates/landing-page/sections";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter" });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} dark relative flex min-h-screen flex-col bg-gray-700 font-inter`}
    >
      <Header />
      <main className="mb-12 mt-10 flex flex-1 flex-col">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  );
};
