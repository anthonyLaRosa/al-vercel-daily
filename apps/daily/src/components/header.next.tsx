import { Button } from "@repo/ui/atoms/button";
import { BodyText } from "@repo/ui/atoms/typography/body-text";
import { SkeletonNavLinks } from "@repo/ui/molecules/skeleton-nav-links";
import { SiteNav } from "@repo/ui/organisms/site-nav";
import Link from "next/link";
import { Suspense } from "react";
import { BreakingNewsBannerNext } from "./breaking-news.next";
import { MobileNavNext } from "./mobile-nav.next";
import { NavLinksNext } from "./nav-links.next";
import { SubscribeButton } from "./subscribe-button.next";

export function HeaderNext() {
  return (
    <SiteNav>
      <SiteNav.Bar className="relative">
        <SiteNav.Logo>
          <Link href="/">
            <BodyText size="lg" weight="bold" className="italic">
              Vercel Daily News
            </BodyText>
          </Link>
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
          <SubscribeButton />
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
                <SubscribeButton />
              </div>
            </MobileNavNext>
          </Suspense>
        </div>
      </SiteNav.Bar>
      <SiteNav.Banner>
        <BreakingNewsBannerNext />
      </SiteNav.Banner>
    </SiteNav>
  );
}
