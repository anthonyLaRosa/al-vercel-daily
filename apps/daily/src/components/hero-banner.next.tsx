import { GlassPanel } from "@repo/ui/atoms/glass-panel";
import { BodyText } from "@repo/ui/atoms/typography/body-text";
import { Headline } from "@repo/ui/atoms/typography/headline";
import { HeroPlate } from "@repo/ui/molecules/hero-plate";
import { HeroSection } from "@repo/ui/organisms/hero-section";

export function HeroBannerNext() {
  return (
    <HeroSection>
      <HeroSection.Plate>
        <HeroPlate
          imageProps={{
            src: "/images/heroBanner.png",
            alt: "Hero",
            fill: true,
          }}
          className="aspect-[30/9] rounded-gallery"
        />
      </HeroSection.Plate>
      <HeroSection.Overlay>
        <GlassPanel className="p-6">
          <Headline
            as="h1"
            size="headline-lg"
            italic
            className="pb-4 text-primary"
          >
            News and Insights for modern web developers
          </Headline>
          <BodyText size="lg" weight="medium">
            Changelogs, engineering deep dives, customer stories, and community
            updates — all in one place.
          </BodyText>
        </GlassPanel>
      </HeroSection.Overlay>
    </HeroSection>
  );
}
