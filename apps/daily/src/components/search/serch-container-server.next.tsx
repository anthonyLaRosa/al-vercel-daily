import { getCategories } from "@/services/server-side/get-categories";
import { SearchContainerNext } from "./search-container.next";

export async function SearchContainerServerNext({
  category,
  query,
}: {
  category?: string;
  query?: string;
}) {
  const categories = await getCategories();

  const options = categories?.data
    ? categories.data.map((cat) => ({
        label: cat.name,
        value: cat.slug,
      }))
    : [];
  return (
    <SearchContainerNext category={category} query={query} options={options} />
  );
}
