"use client";

import {
  type LabelValue,
  SearchBar,
  SearchBarButton,
  SearchBarInput,
  SearchBarSelect,
} from "@repo/ui/molecules/search-bar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchContainerNext({
  category,
  query,
  options,
}: {
  category?: string;
  query?: string;
  options: LabelValue[];
}) {
  const router = useRouter();
  const [queryValue, setQueryValue] = useState<string>(query || "");
  const [categoryValue, setCategoryValue] = useState(category || "all");

  return (
    <SearchBar>
      <SearchBarInput
        value={queryValue}
        onChange={(e) => setQueryValue(e.target.value)}
        name="query"
      />

      <SearchBarSelect
        value={categoryValue}
        onValueChange={(value) => {
          setCategoryValue(value);
        }}
        options={options}
      />
      <SearchBarButton
        onClick={() =>
          router.push(`/search?query=${queryValue}&category=${categoryValue}`)
        }
      />
    </SearchBar>
  );
}
