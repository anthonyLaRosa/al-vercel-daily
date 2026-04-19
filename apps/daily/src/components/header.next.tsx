import { Button } from "@repo/ui/atoms/button";
import { SiteNav } from "@repo/ui/organisms/site-nav";
import Link from "next/link";
import { BreakingNewsBannerNext } from "./breaking-news.next";
import { NavLinksNext } from "./nav-links.next";
import { SubscribeButton } from "./subscribe-button.next";
import { Suspense } from "react";
import { BodyText } from "@repo/ui/atoms/typography/body-text";

export function HeaderNext() {
  return (
    <SiteNav>
      <SiteNav.Bar>
        <SiteNav.Logo>
          <Link href="/">
            <BodyText size="lg" weight="bold" className="italic">
              The Archivist
            </BodyText>
          </Link>
        </SiteNav.Logo>
        <Suspense fallback={<div>Loading...</div>}>
          <NavLinksNext />
        </Suspense>
        <SiteNav.Actions>
          <Button href="/search" icon="Search" variant={"outline"} />
          <SubscribeButton />
        </SiteNav.Actions>
      </SiteNav.Bar>
      <SiteNav.Banner>
        <BreakingNewsBannerNext />
      </SiteNav.Banner>
    </SiteNav>
  );
}
