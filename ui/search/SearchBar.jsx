"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const WAIT_BETWEEN_CHANGES = 300;

export default function Search({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchParams = useSearchParams(); // url
  const router = useRouter(); // metodo para reemplazar

  const handleSearch = useDebouncedCallback((e) => {
    setSearchTerm(e.target.value);
  }, WAIT_BETWEEN_CHANGES);

  const handleClick = () => {
    const term = searchTerm;
    const params = new URLSearchParams(searchParams); // string de lo que busca

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    if (params.toString().length > 0) {
      router.push(`/search/${params.toString()}`);
    }
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={handleSearch}
      />
      <button
        style={{ width: "100px", backgroundColor: "blue" }}
        type="submit"
        onClick={(e) => {
          handleClick(e);
        }}
        id="button-term"
        className="flex h-10 items-center rounded-lg px-4 text-sm font-medium  transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Buscar
      </button>
    </div>
  );
}
