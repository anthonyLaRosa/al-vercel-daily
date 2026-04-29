import { Button } from "@repo/ui/atoms/button";
import { TransitionLink } from "@repo/ui/atoms/transition-link";
import { BodyText } from "@repo/ui/atoms/typography/body-text";
import { SkeletonNavLinks } from "@repo/ui/molecules/skeleton-nav-links";
import { SkeletonSubscribeButton } from "@repo/ui/molecules/skeleton-subscribe-button";
import { SiteNav } from "@repo/ui/organisms/site-nav";
import { Suspense } from "react";
import { MobileNavNext } from "./mobile-nav.next";
import { NavLinksNext } from "./nav-links.next";
import { SubscribeButton } from "./paywall/subscribe-button.next";
import { SkeletonBreakingNewsBanner } from "@repo/ui/molecules/skeleton-breaking-news-banner";
import { BreakingNewsNext } from "./breaking-news/breaking-news.next";

export function HeaderNext() {
  return (
    <SiteNav>
      <SiteNav.Bar className="relative">
        <SiteNav.Logo>
          <TransitionLink href="/">
            <BodyText size="lg" weight="bold" className="italic">
              Vercel Daily News
            </BodyText>
          </TransitionLink>
        </SiteNav.Logo>

        {/* Desktop nav */}
        <SiteNav.Nav className="hidden md:block">
          <Suspense fallback={<SkeletonNavLinks />}>
            <NavLinksNext />
          </Suspense>
        </SiteNav.Nav>

        {/* Desktop actions */}
        <SiteNav.Actions className="hidden md:flex">
          <Button href="/search" icon="Search" variant={"outline"} />
          <Suspense fallback={<SkeletonSubscribeButton />}>
            <SubscribeButton />
          </Suspense>
        </SiteNav.Actions>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button href="/search" icon="Search" variant={"ghost"} />
          <Suspense
            fallback={
              <Button
                icon="Menu"
                variant="ghost"
                aria-label="Toggle menu"
                disabled
              />
            }
          >
            <MobileNavNext>
              <NavLinksNext orientation="vertical" />
              <div className="mt-4 border-outline-variant/20 border-t pt-4">
                <Suspense fallback={<SkeletonSubscribeButton />}>
                  <SubscribeButton />
                </Suspense>
              </div>
            </MobileNavNext>
          </Suspense>
        </div>
      </SiteNav.Bar>
      <SiteNav.Banner>
        <Suspense fallback={<SkeletonBreakingNewsBanner />}>
          <BreakingNewsNext />
        </Suspense>
      </SiteNav.Banner>
    </SiteNav>
  );
}
