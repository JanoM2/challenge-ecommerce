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
    <div className="relative flex flex-1 flex-shrink-0 rounded-md border border-gray-300 shadow-md">
      <input
        style={{ border: "1px solid gray" }}
        className="peer block w-full rounded-md mt-2 py-3 pl-10 text-lg  placeholder-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={handleSearch}
      />
      <button
        className="flex h-full items-center justify-center bg-blue-500 text-white rounded-md px-6 text-lg font-medium transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="submit"
        onClick={(e) => {
          handleClick(e);
        }}
        id="button-term"
      >
        Buscar
      </button>
    </div>
  );
}
