import { BodyText } from "@repo/ui/atoms/typography/body-text";
import { SkeletonFooterSocial } from "@repo/ui/molecules/skeleton-footer-social";
import { SiteFooter } from "@repo/ui/organisms/site-footer";
import { Suspense } from "react";
import { FooterSocialNext } from "./footer-social-next";

export const FooterNext = () => {
  return (
    <SiteFooter>
      <SiteFooter.Inner>
        <SiteFooter.Brand>
          <BodyText color="muted" className="text-inverse-on-surface/60">
            Premium editorial journalism.
          </BodyText>
        </SiteFooter.Brand>
        <SiteFooter.Bottom>
          <BodyText className="text-xs text-inverse-on-surface/40">
            © 2026 The Archivist
          </BodyText>
          <SiteFooter.Social>
            <Suspense fallback={<SkeletonFooterSocial />}>
              <FooterSocialNext />
            </Suspense>
          </SiteFooter.Social>
        </SiteFooter.Bottom>
      </SiteFooter.Inner>
    </SiteFooter>
  );
};
