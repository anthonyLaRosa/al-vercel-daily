"use client";

import {
  type LabelValue,
  SearchBar,
  SearchBarButton,
  SearchBarInput,
  SearchBarSelect,
} from "@repo/ui/molecules/search-bar";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTransitionStore } from "@repo/ui/stores/transition-store";
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
  const status = useTransitionStore((s) => s.status);
  const startAppTransition = useTransitionStore((s) => s.startAppTransition);
  const [queryValue, setQueryValue] = useState<string>(query || "");
  const [categoryValue, setCategoryValue] = useState(category || "all");
  const [searchSubject] = useState<Subject<string>>(new Subject<string>());

  const handleSearch = () => {
    const url = new URLSearchParams();
    if (queryValue) {
      url.set("query", queryValue);
    }
    if (categoryValue && categoryValue !== "all") {
      url.set("category", categoryValue);
    }
    startAppTransition?.(() => {
      router.push(`/search?${url.toString()}`);
    }, "search");
  };
  const debouncedSearch = useRef<(() => void) | undefined>(undefined);
  debouncedSearch.current = handleSearch;

  useEffect(() => {
    const subscription = searchSubject
      .pipe(debounceTime(500))
      .subscribe((value) => {
        if (value && value.length > 3) {
          debouncedSearch.current?.();
        }
      });
    return () => {
      subscription.unsubscribe();
    };
  }, [searchSubject]);

  useEffect(() => {
    setQueryValue(query || "");
    setCategoryValue(category || "all");
  }, [category, query]);

  return (
    <SearchBar
      className="flex-col md:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <SearchBarInput
        value={queryValue}
        onChange={(e) => {
          setQueryValue(e.target.value);
          searchSubject.next(e.target.value);
        }}
        name="query"
      />
      <div className="flex gap-3 md:contents">
        <div className="flex flex-1 md:contents">
          <SearchBarSelect
            className="w-full md:w-auto"
            value={categoryValue}
            onValueChange={(value) => setCategoryValue(value)}
            options={options}
          />
        </div>
        <SearchBarButton
          className="flex-1 md:flex-none"
          disabled={status.id === "search" && status.isPending}
          onClick={handleSearch}
        >
          {status.id === "search" && status.isPending
            ? "Searching..."
            : "Search"}
        </SearchBarButton>
      </div>
    </SearchBar>
  );
}
