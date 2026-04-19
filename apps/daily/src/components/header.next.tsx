import { Button } from "@repo/ui/atoms/button";
import { SiteNav } from "@repo/ui/organisms/site-nav";
import Link from "next/link";
import { BreakingNewsBannerNext } from "./breaking-news.next";
import { NavLinksNext } from "./nav-links.next";
import { SubscribeButton } from "./subscribe-button.next";

export function HeaderNext() {
  return (
    <SiteNav>
      <SiteNav.Bar>
        <SiteNav.Logo>
          <Link href="/">The Archivist</Link>
        </SiteNav.Logo>
        <SiteNav.Nav>
          <NavLinksNext />
        </SiteNav.Nav>
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
