import { NavLinks } from "@repo/ui/molecules/nav-links";
import { SiteNav } from "@repo/ui/organisms/site-nav";
import { getCategories } from "@/services/server-side/get-categories";

export async function NavLinksNext() {
  const categories = await getCategories();

  const navItems = categories?.data
    ? categories.data
        .filter((cat) => cat.articleCount > 0)
        .map((cat) => ({
          label: cat.name,
          value: cat.slug,
        }))
    : [];

  return (
    <SiteNav.Nav>
      <NavLinks items={navItems} />
    </SiteNav.Nav>
  );
}
