"use client";

import {
  type LabelValue,
  SearchBar,
  SearchBarButton,
  SearchBarInput,
  SearchBarSelect,
} from "@repo/ui/molecules/search-bar";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { Subject, debounceTime } from "rxjs";

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
  const [isPending, startTransition] = useTransition();
  const [queryValue, setQueryValue] = useState<string>(query || "");
  const [categoryValue, setCategoryValue] = useState(category || "all");
  const [searchSubject] = useState<Subject<void>>(new Subject<void>());

  const handleSearch = () => {
    const url = new URLSearchParams();
    if (queryValue) {
      url.set("query", queryValue);
    }
    if (categoryValue && categoryValue !== "all") {
      url.set("category", categoryValue);
    }
    startTransition(() => {
      router.push(`/search?${url.toString()}`);
    });
  };
  const debouncedSearch = useRef<(() => void) | undefined>(undefined);
  debouncedSearch.current = handleSearch;

  useEffect(() => {
    const subscription = searchSubject.pipe(debounceTime(500)).subscribe(() => {
      debouncedSearch.current?.();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [searchSubject]);

  useEffect(() => {
    setQueryValue(query || "");
    setCategoryValue(category || "all");
  }, []);

  return (
    <SearchBar
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <SearchBarInput
        value={queryValue}
        onChange={(e) => {
          setQueryValue(e.target.value);
          searchSubject.next();
        }}
        name="query"
      />
      <SearchBarSelect
        value={categoryValue}
        onValueChange={(value) => setCategoryValue(value)}
        options={options}
      />
      <SearchBarButton disabled={isPending} onClick={handleSearch}>
        {isPending ? "Searching..." : "Search"}
      </SearchBarButton>
    </SearchBar>
  );
}
