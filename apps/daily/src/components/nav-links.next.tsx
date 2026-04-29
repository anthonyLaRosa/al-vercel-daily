import { NavLinks } from "@repo/ui/molecules/nav-links";
import { getCategories } from "@/services/server-side/get-categories";
import { cacheTag, cacheLife } from "next/cache";

export async function NavLinksNext({
  orientation = "horizontal",
}: {
  orientation?: "horizontal" | "vertical";
}) {
  "use cache";
  cacheTag("nav-links");
  cacheLife("hours");
  const categories = await getCategories();

  const navItems = categories?.data
    ? categories.data
        .sort((a, b) => b.articleCount - a.articleCount)
        .slice(0, 3)
        .map((cat) => ({
          label: cat.name,
          value: cat.slug,
        }))
    : [];

  return <NavLinks items={navItems} orientation={orientation} />;
}
