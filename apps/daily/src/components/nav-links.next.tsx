import { NavLinks } from "@repo/ui/molecules/nav-links";
import { SiteNav } from "@repo/ui/organisms/site-nav";

export function NavLinksNext() {
  const navItems = [
    { label: "World", href: "/world" },
    { label: "Politics", href: "/politics" },
    { label: "Culture", href: "/culture" },
    { label: "Opinion", href: "/opinion" },
    { label: "Science", href: "/science" },
  ];
  return (
    <SiteNav.Nav>
      <NavLinks items={navItems} />
    </SiteNav.Nav>
  );
}
