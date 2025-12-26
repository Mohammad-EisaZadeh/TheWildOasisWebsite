"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="mx-auto flex border border-primary-500 sm:m-0">
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter={"all"}
      >
        All cabins
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter={"small"}
      >
        2&mdash;3 guests
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter={"medium"}
      >
        4&mdash;7 guests
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter={"large"}
      >
        8&mdash;10 guests
      </Button>
    </div>
  );
}
function Button({ children, activeFilter, handleFilter, filter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-4 py-2 hover:bg-primary-700 ${activeFilter === filter ? "bg-primary-700" : null}`}
    >
      {children}
    </button>
  );
}

export default Filter;
