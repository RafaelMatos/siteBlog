import {
  CallToAction,
  CustomerStorySection,
  FeatureSection,
  HeroSecttion,
  SuppportSection,
} from "@/templates/landing-page/sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSecttion />
      <FeatureSection />
      <SuppportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  );
};
