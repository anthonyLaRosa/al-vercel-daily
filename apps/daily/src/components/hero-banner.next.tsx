import { GlassPanel } from "@repo/ui/atoms/glass-panel";
import { BodyText } from "@repo/ui/atoms/typography/body-text";
import { Headline } from "@repo/ui/atoms/typography/headline";
import { HeroPlate } from "@repo/ui/molecules/hero-plate";
import { HeroSection } from "@repo/ui/organisms/hero-section";

export function HeroBannerNext() {
  return (
    <HeroSection>
      <HeroSection.Overlay>
        <GlassPanel
          variant="hero"
          className="h-full flex flex-col gap-4 justify-center p-6"
        >
          <Headline
            as="h1"
            italic
            className="text-primary text-[2.25rem] leading-[1.1] tracking-tight md:text-[2.5rem] xl:text-[3.5rem] xl:leading-[1.08]"
          >
            News and Insights for modern web developers
          </Headline>
          <BodyText size="lg" color="muted">
            Changelogs, engineering deep dives, customer stories, and community
            updates — all in one place.
          </BodyText>
        </GlassPanel>
      </HeroSection.Overlay>
      <HeroSection.Plate>
        <HeroPlate
          imageProps={{
            src: "/images/heroBanner.png",
            alt: "Hero",
            fill: true,
            style: { objectFit: "cover", objectPosition: "82%" },
            sizes: "(max-width: 767px) 100vw, (max-width: 1279px) 55vw, 900px",
          }}
          className="aspect-[4/3] rounded-gallery"
        />
      </HeroSection.Plate>
    </HeroSection>
  );
}
