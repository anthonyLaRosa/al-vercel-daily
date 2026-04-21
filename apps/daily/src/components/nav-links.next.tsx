import { NavLinks } from "@repo/ui/molecules/nav-links";
import { getCategories } from "@/services/server-side/get-categories";

export async function NavLinksNext({
  orientation = "horizontal",
}: {
  orientation?: "horizontal" | "vertical";
}) {
  const categories = await getCategories();

  const navItems = categories?.data
    ? categories.data
        .filter((cat) => cat.articleCount > 0)
        .map((cat) => ({
          label: cat.name,
          value: cat.slug,
        }))
    : [];

  return <NavLinks items={navItems} orientation={orientation} />;
}
